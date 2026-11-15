# Rodrigo Villalba

**Desarrollador Full Stack Senior** · TypeScript · React · Node.js · Java/Spring

Asunción, Paraguay (UTC-3) · Disponible para contratos remotos part-time · rodris.jvo@gmail.com · [LinkedIn](https://www.linkedin.com/in/rojv/) · [GitHub](https://github.com/rodrigojv)

## Perfil

Soy desarrollador full stack senior y hace más de 16 años que diseño y construyo software. Me gusta tomar una idea todavía difusa y convertirla en un producto fácil de usar, y ayudar a los equipos a entregar con confianza, con código simple, testeado y fácil de cambiar.

### Cómo puedo ayudar

- **Como desarrollador.** Necesitás a alguien que se haga cargo de una funcionalidad desde la base de datos hasta la pantalla y la ponga en producción, o que se sume a tu equipo y aporte desde el primer día.
- **Como arquitecto.** Estás arrancando un producto nuevo y querés una buena base, o el que tenés se volvió difícil de cambiar y necesita una estructura más limpia.
- **Como ingeniero con foco en UX.** Querés pantallas que tus usuarios entiendan, con el flujo diseñado antes de escribir la primera línea de código.
- **Como desarrollador asistido por IA.** Querés avanzar más rápido con agentes de código sin perder el control del código. Trabajo a partir de especificaciones con herramientas como Claude Code y Cursor, y lo que se publica lo deciden los tests, no el agente.
- **Como mentor.** Querés subir el nivel de tu equipo con revisiones de código, pair programming y buenas prácticas de ingeniería.

## Experiencia

### Desarrollador Full Stack Senior · Sodep S.A.

_Fábrica de software · Asunción, Paraguay · Mayo 2010 - Actualidad_

Trabajo en productos de clientes como desarrollador, líder técnico o arquitecto, según el proyecto. Proyectos destacados, del más reciente al más antiguo:

**Banca empresa web, Interfisa Banco (Nov 2024 - Mar 2026)**

- Reingeniería completa del canal de banca empresa del banco. Todas las operaciones que el banco ofrece a empresas están ahora disponibles en la web.
- Aporté a la UX de la aplicación web junto al equipo de diseño, en los flujos de usuario y en cómo se presenta cada operación bancaria.
- Principal contribuidor de la aplicación web, hecha con el App Router de Next.js, sesiones del lado del servidor en cookies httpOnly, React Query, Zustand y validación de formularios con React Hook Form y Zod. Los comprobantes se generan en PDF en el navegador.
- Contribuí al middleware en Spring Boot 3 que expone una sola API REST sobre los servicios internos REST y SOAP del banco, con seguridad JWT, circuit breakers con Resilience4j y migraciones con Flyway.
- El equipo entregó en sprints divididos por flujo de negocio, y una contraparte del banco aprobaba cada flujo antes de pasar al siguiente.
- _Stack:_ Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Zustand, Java 17, Spring Boot 3, PostgreSQL, Jenkins, Docker

**Plataforma de inventarios, PARESA / Ko Andina (Abr 2024 - Oct 2024)**

- Diseñé la UI y la UX de toda la aplicación web de gestión de inventarios, desde los flujos de usuario hasta cada pantalla, a partir de cómo trabaja el equipo de logística en cada conteo.
- Principal contribuidor de la plataforma web y del backend serverless que reemplazaron el sistema de inventarios del equipo de logística. El sistema anterior ya no podía recibir actualizaciones y no cumplía los requisitos de seguridad de la empresa.
- Construí el backend como funciones AWS Lambda con Serverless Framework, Drizzle ORM sobre Aurora Serverless PostgreSQL y Step Functions para los procesos largos. Los reportes PDF se generan dentro de Lambda con Chromium headless.
- El modelo de permisos se escribe una sola vez con CASL y lo usan tanto el backend como el frontend. Los usuarios inician sesión en Cognito con su cuenta de Microsoft.
- Organicé el backend en capas (handlers, casos de uso, repositorios), con tests unitarios sobre repositorios en memoria, tests end-to-end contra PGlite, tests con Playwright en la web y un quality gate en SonarCloud.
- _Stack:_ TypeScript, React, Vite, shadcn/ui, TanStack Query, AWS Lambda, Serverless Framework, SST, Step Functions, Aurora Serverless, Cognito, Drizzle ORM, Vitest, Playwright

**Reingeniería de banca empresa, Banco Basa (Oct 2023 - Mar 2024)**

- Modernizamos la plataforma que usan los clientes corporativos para operar en línea y simplificamos su experiencia de uso. Los módulos salían a producción de a uno, apenas cada uno estaba listo.
- Aporté a la UX de la nueva aplicación web con mejoras en los flujos y las pantallas para simplificar las operaciones corporativas.
- Principal contribuidor de la aplicación web en Next.js, con tablas de datos en TanStack Table, gráficos en Recharts y autenticación con NextAuth.
- Contribuí al backend en Spring Boot 3, parte de una arquitectura Spring Cloud con descubrimiento de servicios en Eureka y configuración centralizada, seguridad JWT y tests con Testcontainers y ArchUnit.
- _Stack:_ Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Java 17, Spring Boot 3, Spring Cloud, PostgreSQL, Docker

**madeBos, plataforma de RR. HH. (2022 - 2023)**

- Construí la aplicación web de una plataforma de recursos humanos orientada al crecimiento profesional.
- Trabajé en la API GraphQL, la base MongoDB y el despliegue en AWS.
- _Stack:_ TypeScript, React, Next.js, Tailwind CSS, GraphQL, MongoDB, AWS

**Sistema ERP, Lincoln SOFT (2016 - 2020)**

- Diseñé la UI y la UX de la aplicación web interna, desde los flujos de usuario hasta cada pantalla.
- Arranqué la aplicación web desde cero y elegí su stack. Después ayudé al equipo de backend a poner en marcha sus servicios en Spring Boot.
- Mantuve los repositorios de código, hice las revisiones de código y me encargué del despliegue de los recursos web en Tomcat.
- _Stack:_ React, Java, Spring Boot, PostgreSQL, Tomcat

**Semáforo de Eliminación de Pobreza, Fundación Paraguaya (2017 - 2018)**

- Lideré la arquitectura de una autoevaluación web con la que las familias miden su nivel de pobreza y planifican cómo superarla. La herramienta se usa en Paraguay y en otros países de Sudamérica.
- Diseñé un motor de formularios dinámicos en React sobre una API en Java/Spring Boot.
- Configuré CI/CD y controles de calidad en AWS Elastic Beanstalk con Jenkins, Travis, SonarQube y Codacy, y capacité a los desarrolladores del cliente.
- _Stack:_ Java, Spring Boot, PostgreSQL, React, Backbone/Marionette, AWS

**Billetera electrónica Zimple, Bancard (2015 - 2018)**

- Definí la arquitectura web de una billetera digital para una de las procesadoras de pagos más grandes de Paraguay.
- Fui el desarrollador senior del equipo y acompañé a los desarrolladores junior en las tareas más complejas.
- _Stack:_ Java, Spring Boot, Thymeleaf, PostgreSQL, jQuery, Bootstrap

**Proyectos anteriores (2010 - 2017)**

- **Aquí Pago, Pronet.** Reconstruí funcionalidades de una red nacional de cobranzas con Java y Angular.
- **Captura.** Arquitecto de software de un producto donde los administradores diseñan formularios con un editor web de arrastrar y soltar, y el personal de campo los completa en terreno, incluso sin conexión.
- **DataScan.** Llevé a producción un sistema de gestión documental que los bancos usan para indexar, guardar y buscar documentos PDF, con requisitos estrictos de rendimiento y seguridad.

### Fundador y desarrollador · Sistema de gestión para el Laboratorio Sixto Villalba

_Proyecto independiente · Remoto · Sep 2025 - Ene 2026_

- Diseñé y construí, solo, el sistema que usaba un laboratorio clínico para registrar pacientes, asignar análisis, cargar resultados y entregar informes.
- Hice una pantalla de carga de resultados con campos calculados que evalúan fórmulas en tiempo real, incluso campos que dependen de otros campos calculados, y rangos de referencia por análisis.
- Generé informes de resultados y órdenes de trabajo en PDF para imprimir en A4, y un reporte contable en Excel y PDF.
- Agregué control de acceso por roles en las rutas, con los roles guardados en PostgreSQL.
- Lo desplegué en Railway con PostgreSQL, con procedimientos documentados de backup, restauración y recuperación ante desastres.
- Llevé el proyecto con un flujo de trabajo agéntico con IA. Yo escribía las especificaciones y los planes, Claude Code y Cursor escribían la mayor parte del código, y los tests unitarios con Vitest y end-to-end con Playwright en GitHub Actions validaban cada cambio.
- _Stack:_ TanStack Start, TanStack Router y Query, React 19, TypeScript, Drizzle ORM, PostgreSQL, Better Auth, Tailwind CSS, shadcn/ui, Zod, Railway

### Desarrollador y arquitecto · Asociación de Emprendedores de Paraguay (ASEPY)

_Freelance, part-time · Remoto · Feb 2021 - Actualidad_

- Diseñé y construí el formulario público de inscripción con el que los interesados se asocian.
- Construí un backoffice donde los administradores siguen a postulantes y socios desde una grilla con búsqueda avanzada y edición en línea.
- Organicé los proyectos en un monorepo con Turborepo, desplegado en Vercel, con datos y autenticación en AWS (Cognito, Lambda).
- _Stack:_ TypeScript, Next.js, React, Chakra UI, Turborepo, AWS Lambda, AWS Cognito, Vercel

### Docente universitario · Universidad Católica "Nuestra Señora de la Asunción"

_Asunción, Paraguay · 2009 - 2015_

- Docente de JavaScript y desarrollo web en la Especialización en Desarrollo Web de posgrado (2013 - 2014).
- Docente de Lenguajes de Programación 1 en C (2010 - 2015) y auxiliar de enseñanza en Complementos de Informática (2009).

## Habilidades técnicas

- **Frontend:** TypeScript, JavaScript, React, Next.js, TanStack Start, Tailwind CSS, shadcn/ui, Headless UI
- **Diseño UI/UX:** flujos de usuario, diseño de pantallas y usabilidad para aplicaciones de negocio, aprendido en la práctica diseñando los productos que construyo
- **Backend:** Node.js, Java, Kotlin, Spring Boot, Spring Cloud, Hibernate/JPA, APIs REST
- **Datos:** PostgreSQL, MySQL, MongoDB, Redis, Drizzle ORM, Liquibase, Flyway
- **Cloud y DevOps:** AWS (Lambda, Step Functions, Aurora Serverless, Cognito, S3), Serverless Framework, SST, Vercel, Railway, Firebase, Docker, Jenkins, GitHub Actions
- **Testing y calidad:** Vitest, Jest, JUnit, Playwright, SonarQube, revisión de código entre pares
- **Desarrollo asistido por IA:** Claude Code, Cursor, flujos agénticos guiados por especificaciones, validación con tests del código escrito por IA

## Educación

**Ingeniería en Informática** · Universidad Católica "Nuestra Señora de la Asunción", Paraguay · 2007

## Cursos

- Agentic Jumpstart · Web Dev Cody
- query.gg, el curso oficial de React Query · ui.dev y TanStack
- The Joy of React (React y Next.js) · Josh W. Comeau
- Serie de Java: Clean Code and Refactoring, Design Patterns, Functional Programming in Java, Clean Architecture and Testing · Victor Rentea
- CSS for JavaScript Developers · Josh W. Comeau · 2022
- Advanced React and GraphQL · Wes Bos · 2021
- Kotlin for Java Developers · JetBrains (Coursera) · 2021
- Complete Intro to React v4 e Intermediate React · Frontend Masters · 2018

## Idiomas

- Español: nativo
- Inglés: fluido
