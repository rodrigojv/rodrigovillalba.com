# Rodrigo Villalba

**Senior Full Stack Developer** · TypeScript · React · Node.js · Java/Spring

Asunción, Paraguay (UTC-3) · Open to remote part-time contracts · rodris.jvo@gmail.com · [LinkedIn](https://www.linkedin.com/in/rojv/) · [GitHub](https://github.com/rodrigojv)

## Summary

I'm a Senior Full Stack Developer who has been designing and building software for over 16 years. I enjoy taking a fuzzy idea and turning it into a product people find easy to use, and I like helping teams ship with confidence by keeping the code simple, tested and easy to change.

### How I can help

- **As a developer.** You need someone who can own a feature from the database to the UI and ship it, or join your team as a hands-on contributor from day one.
- **As an architect.** You're starting a new product and want a solid foundation, or your current one has become slow to change and needs a cleaner structure.
- **As a UX-minded engineer.** You want screens that make sense to your users, with the flow designed before the first line of code.
- **As an AI-assisted builder.** You want to move faster with coding agents without losing control of the code. I work spec-first with tools like Claude Code and Cursor, and I let tests, not the agent, decide what ships.
- **As a mentor.** You want to raise your team's level through code reviews, pairing and good engineering practices.

## Experience

### Senior Full Stack Developer · Sodep S.A.

_Software factory · Asunción, Paraguay · May 2010 - Present_

I work on client products as a developer, lead or architect, depending on the engagement. Selected projects, newest first:

**Corporate banking web app, Interfisa Banco (Nov 2024 - Mar 2026)**

- Full re-engineering of the bank's corporate banking channel. Every business operation the bank offers to companies is now available on the web.
- Contributed to the UX of the web app, working with the design team on user flows and on how each banking operation is presented.
- Top contributor to the web app, built with the Next.js App Router, server-side sessions in httpOnly cookies, React Query, Zustand and form validation with React Hook Form and Zod. Receipts are generated as PDF in the browser.
- Contributed to the Spring Boot 3 middleware that exposes one REST API over the bank's internal REST and SOAP services, with JWT security, Resilience4j circuit breakers and Flyway migrations.
- The team delivered in sprints split by business flow, and a bank counterpart approved each flow before the next one started.
- _Stack:_ Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Zustand, Java 17, Spring Boot 3, PostgreSQL, Jenkins, Docker

**Inventory platform, PARESA / Ko Andina (Apr 2024 - Oct 2024)**

- Designed the UI and UX of the whole inventory management web app, from the user flows to every screen, based on how the logistics team works during each count.
- Top contributor to the web platform and the serverless backend that replaced the logistics team's inventory system. The old system could no longer receive updates and failed the company's security requirements.
- Built the backend as AWS Lambda functions with the Serverless Framework, Drizzle ORM over Aurora Serverless PostgreSQL and Step Functions for long-running jobs. PDF reports render in Lambda with headless Chromium.
- Shared one permission model, written with CASL, between backend and frontend. Users sign in through Cognito with their Microsoft accounts.
- Kept the backend in layers (handlers, use cases, repositories), with unit tests on in-memory repositories, end-to-end tests against PGlite, Playwright tests on the web app and a SonarCloud quality gate.
- _Stack:_ TypeScript, React, Vite, shadcn/ui, TanStack Query, AWS Lambda, Serverless Framework, SST, Step Functions, Aurora Serverless, Cognito, Drizzle ORM, Vitest, Playwright

**Corporate banking re-engineering, Banco Basa (Oct 2023 - Mar 2024)**

- Modernized the platform business clients use to bank online and simplified its user experience. Modules went to production one at a time, as soon as each was ready.
- Contributed to the UX of the new web app, proposing improvements to user flows and screens to make corporate operations simpler.
- Top contributor to the Next.js web app, with data tables in TanStack Table, charts in Recharts and authentication with NextAuth.
- Contributed to the Spring Boot 3 backend, part of a Spring Cloud setup with Eureka service discovery and centralized config, JWT security, and tests with Testcontainers and ArchUnit.
- _Stack:_ Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Java 17, Spring Boot 3, Spring Cloud, PostgreSQL, Docker

**madeBos, HR platform (2022 - 2023)**

- Built the web app of a human resources platform for professional growth.
- Worked across the GraphQL API, MongoDB and the AWS deployment.
- _Stack:_ TypeScript, React, Next.js, Tailwind CSS, GraphQL, MongoDB, AWS

**ERP system, Lincoln SOFT (2016 - 2020)**

- Designed the UI and UX of the internal web application, from the user flows to every screen.
- Started the web application from scratch and chose its stack, then helped the backend team set up its Spring Boot services.
- Maintained the source repositories, ran peer reviews and owned the deployment of web resources to Tomcat.
- _Stack:_ React, Java, Spring Boot, PostgreSQL, Tomcat

**Poverty Stoplight, Fundación Paraguaya (2017 - 2018)**

- Led the architecture of a web self-assessment that families use to measure their level of poverty and plan how to overcome it. The tool is used across Paraguay and South America.
- Designed a dynamic form engine in React backed by a Java/Spring Boot API.
- Set up CI/CD and quality checks on AWS Elastic Beanstalk with Jenkins, Travis, SonarQube and Codacy, and trained the client's developers.
- _Stack:_ Java, Spring Boot, PostgreSQL, React, Backbone/Marionette, AWS

**Zimple e-wallet, Bancard (2015 - 2018)**

- Defined the web architecture of a digital wallet product for one of Paraguay's largest payment processors.
- Acted as senior developer on the team and mentored junior developers on the hardest tasks.
- _Stack:_ Java, Spring Boot, Thymeleaf, PostgreSQL, jQuery, Bootstrap

**Earlier projects (2010 - 2017)**

- **Aquí Pago, Pronet.** Rebuilt features of a national bill-payment network with Java and Angular.
- **Captura.** Software architect of a product where admins design forms in a drag-and-drop web editor and field workers fill them in the field, even without a connection.
- **DataScan.** Led to production a document management system that banks use to index, store and search PDF documents under strict performance and security requirements.

### Founder and Developer · Laboratory management system for Laboratorio Sixto Villalba

_Independent project · Remote · Sep 2025 - Jan 2026_

- Designed and built, solo, the system a clinical laboratory used to register patients, assign analyses, capture results and deliver reports.
- Built a results capture screen with calculated fields that evaluate formulas in real time, including fields that depend on other calculated fields, and reference ranges per analysis.
- Generated printable A4 result reports and work orders as PDF, plus an accounting export in Excel and PDF.
- Added role-based access control on routes, with the roles stored in PostgreSQL.
- Deployed on Railway with PostgreSQL, with documented backup, restore and disaster recovery procedures.
- Ran the project with an agentic AI workflow. I wrote the specs and plans, Claude Code and Cursor wrote most of the code, and Vitest unit tests plus Playwright end-to-end tests in GitHub Actions checked every change.
- _Stack:_ TanStack Start, TanStack Router and Query, React 19, TypeScript, Drizzle ORM, PostgreSQL, Better Auth, Tailwind CSS, shadcn/ui, Zod, Railway

### Developer and Architect · Asociación de Emprendedores de Paraguay (ASEPY)

_Freelance, part-time · Remote · Feb 2021 - Present_

- Designed and built the public membership sign-up form that prospective members use to join the association.
- Built a back office where administrators track applicants and members through a data grid with advanced search and inline editing.
- Organized the projects in a Turborepo monorepo, deployed on Vercel, with data and authentication on AWS (Cognito, Lambda).
- _Stack:_ TypeScript, Next.js, React, Chakra UI, Turborepo, AWS Lambda, AWS Cognito, Vercel

### University Lecturer · Universidad Católica "Nuestra Señora de la Asunción"

_Asunción, Paraguay · 2009 - 2015_

- Taught JavaScript and web development in the Web Development postgraduate specialization (2013 - 2014).
- Taught Introduction to Programming in C (2010 - 2015) and was teaching assistant in Complementary Computer Science (2009).

## Technical skills

- **Frontend:** TypeScript, JavaScript, React, Next.js, TanStack Start, Tailwind CSS, shadcn/ui, Headless UI
- **UI/UX design:** user flows, screen design and usability for business apps, self-taught on the job by designing the products I build
- **Backend:** Node.js, Java, Kotlin, Spring Boot, Spring Cloud, Hibernate/JPA, REST APIs
- **Data:** PostgreSQL, MySQL, MongoDB, Redis, Drizzle ORM, Liquibase, Flyway
- **Cloud and DevOps:** AWS (Lambda, Step Functions, Aurora Serverless, Cognito, S3), Serverless Framework, SST, Vercel, Railway, Firebase, Docker, Jenkins, GitHub Actions
- **Testing and quality:** Vitest, Jest, JUnit, Playwright, SonarQube, peer code review
- **AI-assisted development:** Claude Code, Cursor, spec-driven agentic workflows, test-first verification of AI-written code

## Education

**Computer Engineering degree** · Universidad Católica "Nuestra Señora de la Asunción", Paraguay · 2007

## Courses

- Agentic Jumpstart · Web Dev Cody
- query.gg, the official React Query course · ui.dev and TanStack
- The Joy of React (React and Next.js) · Josh W. Comeau
- Java series: Clean Code and Refactoring, Design Patterns, Functional Programming in Java, Clean Architecture and Testing · Victor Rentea
- CSS for JavaScript Developers · Josh W. Comeau · 2022
- Advanced React and GraphQL · Wes Bos · 2021
- Kotlin for Java Developers · JetBrains (Coursera) · 2021
- Complete Intro to React v4 and Intermediate React · Frontend Masters · 2018

## Languages

- Spanish: native
- English: fluent
