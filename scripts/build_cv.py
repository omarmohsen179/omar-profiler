# -*- coding: utf-8 -*-
"""Regenerate Omar Mohsen's CV PDF from scripts/cv_content.py.

    python3 scripts/build_cv.py

Writes Omar_Mohsen_CV_EU.pdf plus the two copies under public/.
Layout mirrors the original document: A4, 40pt margins, Helvetica
(metric-compatible with the Liberation Sans of the previous build),
navy #12294a section headings over hairline rules.
"""
import os, re, sys, shutil
import fitz

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import cv_content as C

# Nimbus Sans (PyMuPDF's "helv") shares Helvetica/Arial/Liberation Sans metrics, so
# the page matches the original build. It is driven through TextWriter rather than
# page text insertion: embedded TTFs mangle the ToUnicode map (hyphen -> U+00AD,
# space -> U+00A0), which silently corrupts CV text for ATS and recruiter parsers.
FR, FB, FI = "helv", "hebo", "heit"
_FONTS = {a: fitz.Font(a) for a in (FR, FB, FI)}
PAGE = fitz.paper_rect("a4")
ML, MR, MT, MB = 40.0, 40.0, 40.0, 42.0
COLW = PAGE.width - ML - MR
BOTTOM = PAGE.height - MB

def hx(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) / 255 for i in (0, 2, 4))

INK, MUTED, DIM = hx("1a1a1a"), hx("444444"), hx("555555")
NAVY, BOXINK, LINK = hx("12294a"), hx("183a63"), hx("1a4d8f")
RULE, BOXBG = hx("bbbbbb"), hx("f2f6fb")

URIS = {
    "contact@omarmohsen.dev": "mailto:contact@omarmohsen.dev",
    "omarmohsen.dev": "https://omarmohsen.dev",
    "linkedin.com/in/omar-mohsen-50a64a21a": "https://www.linkedin.com/in/omar-mohsen-50a64a21a",
    "github.com/omarmohsen179": "https://github.com/omarmohsen179",
    "medium.com/@mohsenomar350": "https://medium.com/@mohsenomar350",
    "khalidelewa.com": "https://khalidelewa.com",
    "riyadhpack.com": "https://riyadhpack.com",
}
LINKY = set(URIS)


def runs(s):
    """'a **b** c' -> [('a ',0), ('b',1), (' c',0)]"""
    return [(p, i % 2 == 1) for i, p in enumerate(s.split("**")) if p]


def toks(s):
    out = []
    for text, bold in runs(s):
        for w in re.split(r"(\s+)", text):
            if w:
                out.append([w, bold])
    return out


def tw(t, bold, size, font=None):
    return _FONTS[font or (FB if bold else FR)].text_length(t, fontsize=size)


def wrap(tokens, width, size):
    lines, cur, used = [], [], 0.0
    for t, bold in tokens:
        w = tw(t, bold, size)
        if not t.strip():
            if cur:
                cur.append((t, bold, w)); used += w
            continue
        if cur and used + w > width:
            while cur and not cur[-1][0].strip():
                used -= cur[-1][2]; cur.pop()
            lines.append(cur); cur, used = [], 0.0
        cur.append((t, bold, w)); used += w
    if cur:
        while cur and not cur[-1][0].strip():
            cur.pop()
        lines.append(cur)
    return lines


class Doc:
    def __init__(self):
        self.doc = fitz.open()
        self.page = None
        self.ops = []
        self.y = 0.0
        self.new_page()

    def new_page(self):
        self.flush()
        self.page = self.doc.new_page(width=PAGE.width, height=PAGE.height)
        self.ops = []
        self.y = MT

    def flush(self):
        """A TextWriter colours all its text at once, so emits are batched into
        runs of a single colour and written in emission order — that keeps the
        content stream in reading order, which is what ATS parsers consume."""
        run, run_color = None, None
        for point, text, alias, size, color in getattr(self, "ops", []):
            if run is None or color != run_color:
                if run is not None:
                    run.write_text(self.page, color=run_color)
                run, run_color = fitz.TextWriter(PAGE), color
            run.append(point, text, font=_FONTS[alias], fontsize=size)
        if run is not None:
            run.write_text(self.page, color=run_color)
        self.ops = []

    def emit(self, point, text, alias, size, color):
        if text:
            self.ops.append((point, text, alias, size, color))

    def need(self, h):
        if self.y + h > BOTTOM:
            self.new_page()

    def line(self, parts, x, size, color, leading):
        """parts: [(text, bold, width)] — one wrapped line."""
        self.need(leading)
        base = self.y + size * 0.82
        for t, bold, w in parts:
            c = LINK if t.strip(" .,·—") in LINKY else color
            self.emit((x, base), t, FB if bold else FR, size, c)
            x += w
        self.y += leading

    def para(self, s, size=9.4, color=INK, x=ML, width=None, leading=None, gap=0.0):
        width = width or (COLW - (x - ML))
        leading = leading or size * 1.32
        for ln in wrap(toks(s), width, size):
            self.line(ln, x, size, color, leading)
        self.y += gap

    def heading(self, title, keep=30.0):
        # reserve the rule plus the first lines of the section so a heading
        # never strands itself at the foot of a page
        self.need(30 + keep)
        self.y += 9
        self.emit((ML, self.y + 7.7), title, FB, 9.4, NAVY)
        self.y += 12.5
        self.page.draw_line(fitz.Point(ML, self.y), fitz.Point(ML + COLW, self.y),
                            color=RULE, width=0.7)
        self.y += 5.5

    def bullet(self, s, size=9.4, indent=11.0):
        lines = wrap(toks(s), COLW - indent, size)
        self.need(size * 1.32 * min(len(lines), 2))
        self.page.draw_rect(fitz.Rect(ML + 1.5, self.y + 3.4, ML + 4.5, self.y + 6.4),
                            color=INK, fill=INK)
        for ln in lines:
            self.line(ln, ML + indent, size, INK, size * 1.32)
        self.y += 1.2

    def skillrow(self, label, value):
        lab_w = 66.0
        lines = wrap(toks(value), COLW - lab_w, 8.9)
        self.need(8.9 * 1.34 * min(len(lines), 2))
        self.emit((ML, self.y + 7.3), label, FB, 8.9, NAVY)
        for ln in lines:
            self.line(ln, ML + lab_w, 8.9, INK, 8.9 * 1.34)
        self.y += 1.6

    def jobhead(self, company, where, dates, role):
        self.need(34)
        base = self.y + 8.0
        x = ML
        self.emit((x, base), company, FB, 9.7, INK)
        x += tw(company, True, 9.7)
        loc = " — " + where
        self.emit((x, base), loc, FR, 9.7, MUTED)
        dw = tw(dates, False, 8.5)
        self.emit((ML + COLW - dw, base), dates, FR, 8.5, DIM)
        self.y += 11.6
        self.emit((ML, self.y + 7.4), role, FI, 9.0, hx("333333"))
        self.y += 12.0

    def box(self, s, size=8.7):
        pad = 7.0
        lines = wrap(toks(s), COLW - 2 * pad - 4, size)
        h = len(lines) * (size * 1.34) + 2 * pad
        self.need(h)
        r = fitz.Rect(ML, self.y, ML + COLW, self.y + h)
        self.page.draw_rect(r, color=BOXBG, fill=BOXBG)
        self.page.draw_rect(fitz.Rect(ML, self.y, ML + 1.6, self.y + h), color=LINK, fill=LINK)
        self.y += pad
        for ln in lines:
            self.line(ln, ML + pad + 4, size, BOXINK, size * 1.34)
        self.y = r.y1

    def links(self):
        # longest phrase first, and skip any hit that lands inside one already
        # claimed — otherwise "omarmohsen.dev" re-links the tail of the email
        for page in self.doc:
            claimed = []
            for text, uri in sorted(URIS.items(), key=lambda kv: -len(kv[0])):
                for rect in page.search_for(text):
                    area = lambda r: max(0.0, r.x1 - r.x0) * max(0.0, r.y1 - r.y0)
                    if any(area(rect & c) > 0.5 * area(rect) for c in claimed):
                        continue
                    claimed.append(rect)
                    page.insert_link({"kind": fitz.LINK_URI, "from": rect, "uri": uri})


def build(out):
    d = Doc()

    # ---- header -------------------------------------------------------
    d.emit((ML, d.y + 15.2), C.NAME, FB, 19, INK)
    d.y += 22.5
    d.para(C.TAGLINE, size=9.6, color=hx("333333"), leading=12.4)
    d.y += 2.5
    for cl in C.CONTACT:
        d.para(cl, size=8.6, color=MUTED, leading=11.4)
    d.y += 7
    d.box(C.RELOCATION)

    # ---- body ---------------------------------------------------------
    d.heading("PROFILE")
    d.para(C.PROFILE)

    d.heading("TECHNICAL SKILLS")
    for label, value in C.SKILLS:
        d.skillrow(label, value)

    d.heading("EXPERIENCE")
    for i, j in enumerate(C.JOBS):
        if i:
            d.y += 6
        d.jobhead(j["company"], j["where"], j["dates"], j["role"])
        for b in j["bullets"]:
            d.bullet(b)

    d.heading("SELECTED PROJECTS")
    for p in C.PROJECTS:
        d.bullet(p)

    d.heading("EDUCATION")
    d.need(30)
    base = d.y + 7.6
    d.emit((ML, base), C.EDUCATION["degree"], FB, 9.4, INK)
    dw = tw(C.EDUCATION["dates"], False, 8.5)
    d.emit((ML + COLW - dw, base), C.EDUCATION["dates"], FR, 8.5, DIM)
    d.y += 12.0
    d.para(C.EDUCATION["detail"], size=9.0, color=MUTED)

    d.heading("CERTIFICATES & LANGUAGES")
    for label, value in C.FOOTER:
        d.skillrow(label, value)

    d.flush()
    d.links()
    d.doc.set_metadata({"title": "Omar Mohsen — Senior Backend / Full-Stack Engineer",
                        "author": "Omar Mohsen", "subject": "Curriculum Vitae",
                        "keywords": "Java 17, Spring Boot, Microservices, Camunda BPM, Kafka, TDD, Linux"})
    d.doc.save(out, garbage=4, deflate=True)
    os.chmod(out, 0o644)  # 600 makes Apache return 403, which browsers save as an HTML error page
    return d.doc.page_count


if __name__ == "__main__":
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    main = os.path.join(root, "Omar_Mohsen_CV_EU.pdf")
    n = build(main)
    for dest in ("public/omar-mohsen-cv-eu.pdf", "public/omar-mohsen-cv.pdf"):
        target = os.path.join(root, dest)
        shutil.copyfile(main, target)
        os.chmod(target, 0o644)
    print("wrote %s (%d pages) + public/ copies" % (os.path.relpath(main, root), n))
