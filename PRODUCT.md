# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Dos audiencias por igual: reclutadores y colegas que llegan a saber quién es Rodrigo, ver su CV y su trabajo; y lectores que llegan a un post del blog. Ambos deben orientarse rápido y leer cómodo.

## Product Purpose
Sitio personal y blog de Rodrigo Villalba, desarrollador de software de Paraguay (React, Node, JavaScript). Presenta quién es, enlaza su CV, GitHub, Twitter y LinkedIn, y aloja diez posts en inglés sobre desarrollo, productividad y bienestar. Éxito: que el visitante encuentre lo que busca en segundos y que un post se lea sin fricción.

## Positioning
Sitio de una sola persona con voz propia (humor en tercera persona, posts personales), no un portafolio de plantilla.

## Operating Context
Sitio estático Astro 5, publicado en Cloudflare Workers. Contenido en Markdown con frontmatter. Home con preguntas y respuestas que son links, tomada del diseño antiguo: "Who is Rodrigo Villalba and what does he do anyways?" → About, "Has he written any blog posts?" → Blog, "What about Open Source?" → GitHub. Sin comandos ni input.

## Capabilities and Constraints
URLs `/`, `/about`, `/blog`, `/post/<slug>`; `public/cumpleanos.html` queda fuera del layout. Dominio definitivo aún sin decidir. El PDF del CV todavía no existe y no se enlaza hasta subirlo. Cambios de layout deben ser mobile friendly.

## Brand Commitments
Referencia a LOST: la PC de la estación Swan (Apple II Plus beige, monitor, tecla EXECUTE, números 4 8 15 16 23 42) como fondo del sitio, con estilo propio y sin copiar samwitwer.com. El verde fósforo sobre negro a pantalla completa y la columna centrada se consideran genéricos: el fósforo vive solo dentro de la pantalla del monitor.

## Evidence on Hand
Diez posts reales en `src/content/blog/`, dos imágenes en `public/posts/images/`, favicons en `public/favicon_io/`. No hay testimonios ni proyectos documentados.

## Product Principles
- La lectura de un post manda sobre la ambientación.
- Las respuestas de la home son links reales, sin interacción oculta.
- El tema es un guiño, no un disfraz.
