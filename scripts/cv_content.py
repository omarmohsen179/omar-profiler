# -*- coding: utf-8 -*-
"""CV content. Edit here, then run: python3 scripts/build_cv.py
Inline **bold** is supported in paragraph, skill and bullet text."""

NAME = "Omar Mohsen"
TAGLINE = "Senior Backend / Full-Stack Engineer — Java 8/17/21 · Spring Boot · Microservices · Camunda BPM"
CONTACT = [
    "contact@omarmohsen.dev  ·  +20 109 598 6507  ·  Cairo, Egypt  ·  omarmohsen.dev",
    "linkedin.com/in/omar-mohsen-50a64a21a  ·  github.com/omarmohsen179  ·  medium.com/@mohsenomar350",
]
LINKS = ["contact@omarmohsen.dev", "omarmohsen.dev", "linkedin.com/in/omar-mohsen-50a64a21a",
         "github.com/omarmohsen179", "medium.com/@mohsenomar350"]

RELOCATION = (
    "**Relocation:** Actively seeking relocation across the EU and Asia. For EU roles: as a software developer (ISCO 2512, "
    "a recognised shortage occupation across the EU) I meet the qualifying criteria for the EU Blue Card, "
    "including the reduced salary threshold that applies to ICT specialists. I have already delivered production "
    "work remotely for employers in multiple regions and am comfortable covering my own travel and interview "
    "logistics."
)

PROFILE = (
    "Software engineer with 6 years' experience building backend systems in **Java (8, 17, 21) and Spring Boot**, with a "
    "focus on microservices, event-driven architecture and enterprise system integration. I have shipped "
    "production software in regulated environments — digital banking at Bank Albilad, legal-tech claim processing "
    "at Flightright, cyber-security tooling at XSonardive — where correctness, auditability and secure integration "
    "matter more than speed alone. I work **test-first with JUnit and Mockito**, and run, deploy and debug my "
    "services on **Linux**. I work comfortably across the stack, pairing Spring Boot services with **React and "
    "Next.js** front-ends, and I am equally at home extending an existing platform as building one from scratch. "
    "Happy to pick up Kotlin, which shares the JVM ecosystem I already work in daily."
)

SKILLS = [
    ("Languages", "**Java 8 / 17 / 21**, C#, Python, TypeScript / JavaScript, SQL"),
    ("Backend", "Spring Boot, Spring Data, Spring Security, Spring Cloud, Spring MVC · REST APIs & microservices · "
                "**HTTP connection pooling** & client tuning (pooled connection managers, keep-alive, timeouts) · "
                "ASP.NET Core, ASP.NET MVC, Entity Framework · Flask, FastAPI · Hibernate"),
    ("Messaging", "Apache Kafka, RabbitMQ, event-driven architecture, asynchronous transaction processing"),
    ("Workflow", "**Camunda BPM / BPMN 2.0** — process modelling, workflow orchestration, service tasks, Spring Boot "
                 "integration"),
    ("Reporting", "JasperReports / Jaspersoft Studio — templated PDF & document generation from Java services"),
    ("Integration", "Keycloak, OAuth2, OIDC, SSO · third-party REST & SOAP integration"),
    ("Frontend", "React.js, Next.js, React Native (Expo), Angular"),
    ("Databases", "PostgreSQL, MySQL, SQL Server, MongoDB"),
    ("DevOps", "**Linux / Unix** (shell, deployment, log analysis) · Docker, Jenkins, AWS, CI/CD pipelines, "
               "Git (GitHub, GitLab, Bitbucket)"),
    ("Testing", "**TDD (test-driven development)** · JUnit, Mockito, Spring Boot Test, unit & integration testing"),
    ("Practices", "Agile / Scrum · BPMN process modelling · code review · cross-functional collaboration"),
]

JOBS = [
    dict(company="Bank Albilad", where="Riyadh, Saudi Arabia (remote)", dates="07/2026 – Present",
         role="Full-Stack Developer — Digital Banking", bullets=[
        "Rejoined the digital banking team, building **Spring Boot** microservices and React.js modules that "
        "integrate core banking with external enterprise services.",
    ]),
    dict(company="Flightright", where="Berlin, Germany (remote)", dates="03/2025 – 07/2026",
         role="Full-Stack Developer", bullets=[
        "Built and maintained customer-facing legal-tech and claim-management applications on Next.js and Spring "
        "Boot, serving claimants across multiple European jurisdictions.",
        "Designed and implemented REST APIs and microservices in **Java 17 and Spring Boot 3**, improving system "
        "reliability, maintainability and integration with internal and third-party services.",
        "Automated claim-processing business workflows using Camunda BPM, replacing manual operational steps with "
        "modelled, auditable processes.",
        "Integrated Spring Boot services with Camunda workflows and external partner APIs to deliver end-to-end "
        "process execution.",
        "Ran services on **Linux** in Docker containers across environments, handling deployment, log analysis and "
        "shell-level debugging.",
        "Implemented responsive Next.js interfaces, improving application performance, SEO and user experience.",
        "Worked in an Agile cross-functional team with product managers, designers and QA engineers.",
    ]),
    dict(company="Bank Albilad", where="Riyadh, Saudi Arabia (remote)", dates="07/2024 – 03/2025",
         role="Full-Stack Developer — Digital Banking", bullets=[
        "Developed microservices-based backend systems in Spring Boot connecting core banking web applications to "
        "external enterprise services.",
        "Implemented Kafka-based messaging for asynchronous transaction processing, improving system reliability "
        "by 20%.",
        "Tuned **pooled HTTP clients** for outbound enterprise integrations — max connections per route, "
        "keep-alive and connect/read timeouts — keeping third-party core-banking calls stable under load.",
        "Secured banking API integrations using Spring Security and OAuth2 / Keycloak, ensuring trusted "
        "communication between Spring Boot backends and React front-ends.",
        "Customised full-stack banking modules — Spring Boot REST APIs and React.js dashboards — against evolving "
        "security, business and scalability requirements.",
        "Worked **test-first (TDD)** with JUnit and Mockito across Spring Boot components and React layouts, "
        "reaching 95% test coverage and measurably improving production stability.",
    ]),
    dict(company="Flairstech (Cubic)", where="Townsville, Australia (remote)", dates="08/2022 – 04/2024",
         role="Backend Developer — Mass Transportation Systems", bullets=[
        "Built and supported the backend of an enterprise mass-transportation system on Spring Boot and Kafka, "
        "improving real-time data-processing efficiency by 20%.",
        "Delivered multiple applications across both monolithic and microservice architectures using Spring Boot, "
        "Java and Hibernate.",
        "Practised **TDD**, writing JUnit, Mockito and Spring Boot Test suites ahead of implementation.",
    ]),
    dict(company="XSonardive", where="Berlin, Germany (remote)", dates="09/2023 – 12/2023",
         role="Senior Backend Developer — Cyber Security (concurrent contract alongside Flairstech)", bullets=[
        "Hardened a cyber-security backend platform using Spring Boot and Spring Security, mitigating identified "
        "vulnerabilities by 30%.",
        "Built interactive React.js analytics dashboards wired directly to the underlying Spring Boot REST APIs, "
        "giving analysts direct visibility of platform telemetry.",
    ]),
    dict(company="MedadSoft", where="Cairo, Egypt", dates="03/2021 – 08/2022",
         role="Full-Stack Developer", bullets=[
        "Supported 10+ web applications and built full-stack products from scratch on Java Spring Boot and "
        "React.js, across e-commerce, accounting and ERP domains.",
        "Developed e-commerce, accounting and ERP solutions using Spring Boot MVC for complex workflows and "
        "React.js for admin operations, replacing manual back-office processes.",
        "Implemented secure digital-banking API integrations with Spring Boot, OAuth2 and Keycloak.",
    ]),
    dict(company="AlRand Company", where="Cairo, Egypt", dates="09/2020 – 01/2021",
         role="Full-Stack Developer", bullets=[
        "Built a complete internal accounting system on a Spring Boot backend with custom React.js reporting, "
        "reducing human processing errors by 50%.",
    ]),
    dict(company="Nandbox Software Solutions", where="Cairo, Egypt", dates="05/2020 – 09/2020",
         role="Software Developer", bullets=[
        "Developed high-concurrency Java/Spring Boot backend infrastructure for a mobile chat application, "
        "cutting client data-retrieval time by 40%.",
        "Built an Android body- and face-camera application using OpenCV, achieving 90% image-processing accuracy.",
    ]),
]

PROJECTS = [
    "**Nadwa: Conversation Games** (iOS, React Native / Expo) — social conversation game for 2–12 players joining "
    "by code or link, 17+ curated decks, bilingual EN/AR. App Store",
    "**Return Me Back** (iOS, React Native / Expo) — goal-focus companion with configurable nudges, background "
    "focus timers, quiet hours and long-range history. App Store",
    "**Khaled Elewa Legal Consultation Platform** — case-status and session tracking with client data storage and "
    "an admin dashboard. khalidelewa.com",
    "**Riyadhpack Factory Website** — product showcase for a Saudi packaging factory with specifications, "
    "interactive 3D models, an admin panel and a contact form. riyadhpack.com",
    "**Ostora Production Management System** — production-line, inventory and design management with reporting "
    "and charting; cut production delays by 15%.",
    "**Internal Accounting & ERP Platforms** — accounting, invoicing and stock modules on Spring Boot with React "
    "reporting front-ends, delivered for multiple SME clients.",
    "**Almedad** — e-commerce platform with admin dashboard, built on .NET Core and Angular.",
    "**COVID-19 CT-Scan Detection** — deep-learning model classifying COVID-19 from CT imaging at 98% accuracy "
    "(BSc AI major).",
]

EDUCATION = dict(
    degree="BSc Informatics & Computer Science — major in Artificial Intelligence",
    dates="2018 – 2022",
    detail="London South Bank University, United Kingdom & The British University in Egypt — dual award "
           "(UK degree conferred by LSBU)",
)

FOOTER = [
    ("Certificates", "AWS Cloud Practitioner Essentials · Software Development Life Cycle (SDLC)"),
    ("Languages", "English — fluent (professional working proficiency) · Arabic — native"),
]
