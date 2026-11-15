# rodrigovillalba.com

Sitio personal en Astro 5 con el concepto de estación de trabajo de Swan (LOST). El diseño está en `DESIGN.md` y el producto en `PRODUCT.md`.

## Mobile first

Todo cambio visual se diseña primero para mobile y después se amplía a pantallas grandes.

- Los estilos base son los de mobile. Desktop se agrega con `@media (min-width: …)`, no se quita con `max-width`.
- Un cambio de layout, espaciado, tipografía o color no está terminado hasta verlo a 390 px de ancho, sin scroll horizontal ni elementos tapados.
- Los controles táctiles miden al menos 44 px de alto, y todo lo importante se alcanza con un toque, sin hover.
- Si algo no cabe en mobile, se simplifica o se oculta con criterio, como los enlaces de GitHub y LinkedIn en el teclado de la home. No se encoge hasta volverlo ilegible.
- Verificar en el navegador a 390 px y a desktop antes de dar un cambio por hecho.

El CSS actual de `src/styles/global.css` todavía usa `max-width: 800px` para mobile. Al tocar una sección, migrarla a mobile first.

## Comandos

- `npm run dev`: servidor local en `http://localhost:4321`.
- `npm run build`: genera `dist/`. Debe pasar antes de cada commit.
- `sh scripts/build-cv.sh`: regenera los PDF del CV desde `../resume`.

## Convenciones

- Commits atómicos, en español, sin firma de Claude.
- Respetar `prefers-reduced-motion` en cualquier animación nueva.
