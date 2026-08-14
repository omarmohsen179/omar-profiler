# Application Answer Sheet — Omar Mohsen

Everything a European job form asks, answered once. Keep this open in a tab and copy across. Confirmed decisions from 10 Aug 2026.

---

## The standard fields

| Field | Answer |
|---|---|
| First name | Omar |
| Last name | Mohsen |
| Email | **contact@omarmohsen.dev** |
| Phone | +20 109 598 6507 *(country code Egypt +20, number 1095986507)* |
| Location | Cairo, Egypt |
| LinkedIn | https://linkedin.com/in/omar-mohsen-50a64a21a |
| GitHub | https://github.com/omarmohsen179 |
| Portfolio | https://omarmohsen.dev |
| Blog | https://medium.com/@mohsenomar350 |
| Years of experience | 6 |
| Current/most recent role | Full-Stack Developer, Flightright (Berlin, remote), 03/2025 – 07/2026 |
| Highest education | BSc Informatics & Computer Science (major: Artificial Intelligence), The British University in Egypt, 2018–2022 |
| Salary expectation | **EUR 85,000 gross per year (negotiable)** |
| Earliest start date | **2026-09-01** — or "Immediately; start date subject to visa processing" where free text |
| Notice period | None — available immediately |
| Gender / I identify as | **Male** |
| Willing to relocate | **Yes** |
| Willing to work from the office | **Yes** |
| Do you require visa sponsorship | **Yes** — see the country lines below |
| Languages | English (fluent, professional working proficiency); Arabic (native) |
| Referred by / how did you hear | "Found the role on your careers site while researching [city] engineering teams that hire internationally." |
| Data-processing consent | Tick it |

### Salary in other currencies
Denmark: **DKK 640,000** · Poland/other: quote the EUR figure. For Spain, €85,000 is above local market for mid-level — **quote €55,000–60,000 there** and note it must clear €41,356 for the HQP permit.

---

## The visa answer, by country

Never write "I need sponsorship" on its own. Name the route — it reads as competence rather than a problem.

**🇩🇪 Germany.** *"I qualify for the EU Blue Card. Software development is a shortage occupation (ISCO 2512), which sets the threshold at €45,934, and I hold a BSc in Informatics & Computer Science. Germany's Accelerated Skilled Worker Procedure can bring processing down to 4–6 weeks when the employer initiates it."*

**🇳🇱 Netherlands.** *"I qualify for the Highly Skilled Migrant scheme; the salary threshold that applies to me is €4,357 gross per month. I understand [company] is on the IND register of recognised sponsors."*

**🇩🇰 Denmark.** *"This role maps to 'Software Backend Developer' on the Positive List for People with a Higher Education, which is a work permit route with no fixed salary threshold — only customary Danish standards. My BSc satisfies the education requirement. Processing is roughly one month, faster if you are SIRI Fast-track certified."*

**🇪🇸 Spain.** *"I qualify for the Highly Qualified Professional permit under the Startup Law, processed by UGE-CE in about 20 business days with no labour market test — considerably lighter on the employer than a standard work authorisation."*

**Dropdown version** (when it's a yes/no and there's no free text): pick the honest option — *"No, I would require a visa/work permit"* — then put the Blue Card / kennismigrant sentence in the cover letter or the "anything else" box. Never leave it blank and never fudge it; it gets verified.

---

## The essay questions

### "Why this company / why this role?"
Open with Berlin. *"I've spent the last eighteen months building production software for Flightright in Berlin, and before that backend security work for XSonardive, also Berlin — so European teams and delivery standards are already familiar rather than aspirational."* Then one concrete thing from their job description you have actually done. Then the visa line.

### "How do you keep learning?" *(ready to paste)*
> Mostly by building things and reading source rather than following tutorials. My last two roles pushed me into unfamiliar territory — Camunda BPM for workflow orchestration at Flightright, and Kafka-based asynchronous transaction processing inside a regulated banking platform at Bank Albilad — and in both cases the fastest way in was the framework's own documentation and source code. I follow the Spring blog and release notes to track what's changing in the ecosystem, and Baeldung for the practical side. I write up what I learn on Medium (medium.com/@mohsenomar350), which is the part that actually forces understanding, because explaining something exposes the bits you only half-know. Right now I'm deliberately closing a gap: my container experience is Docker rather than production Kubernetes, so that's what I'm working through. I also use AI-assisted tooling daily as part of how I write and review code.

### "Greatest strength / what are you best at?" *(ready to paste)*
> Integration work — the parts of a system where two things that were not designed for each other have to talk reliably. Most of my six years has been exactly this: Spring Boot services to core banking platforms at Bank Albilad, Camunda workflows to partner APIs at Flightright, Kafka pipelines into a mass-transit backend at Flairstech. It is unglamorous and it is where most production incidents actually come from, so I have learned to be careful about contracts, idempotency and what happens when the other side is down.

### ⚠️ "Tell us about a time a decision you made caused a problem" — **YOU MUST WRITE THIS ONE**
I deliberately left this blank rather than invent it. If I make something up, you will be asked to expand on it in an interview and you will not know your own story.

Write four sentences: **what you decided → what broke → what you did → what you'd change.** A schema migration, a library choice you walked back, a caching decision that went stale, a deploy that took something down. It does not need to be dramatic — interviewers are testing whether you can own a mistake without either minimising it or collapsing. Send me a rough version and I'll shape it into something you can reuse everywhere.

---

## Questions to ask *them* — before you invest in interview rounds

> *"Before we go further — is this role open to a candidate relocating from outside the EU, and has [company] sponsored a work permit before? I qualify for [route] and I'm happy to talk through how it works, but I'd rather know early if it's a blocker."*

For Denmark, add: *"Are you SIRI Fast-track certified?"* — a yes means one-month processing.
For the Netherlands: *"Are you on the IND recognised sponsor register?"* — if no, they legally cannot hire you as a highly skilled migrant, whatever they'd like to do.

That one question saves you the C Teleport outcome: three interview rounds ending in *"we don't relocate candidates currently based outside the country."*

---

## Two gaps, stated honestly

**Kubernetes and Terraform.** 2026 European backend postings treat these as baseline, not bonus. You have Docker, Jenkins and AWS — most of the way. Don't claim K8s until it's true; instead say you're working through it, which is what the learning answer above does. A CKAD or one deployed project is the cheapest single upgrade to your callback rate.

**Kotlin.** Half the German and Danish postings say "Java/Kotlin" or "any JVM language". Your Java transfers and they know it, but reviewers pattern-match on the literal word. Say once, out loud: *"comfortable picking up Kotlin — same JVM ecosystem I work in daily."*
