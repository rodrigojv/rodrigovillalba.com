# Plan: sitio personal en Astro

Sitio estático en Astro 5. Los posts siguen siendo Markdown con frontmatter. El diseño pasa a una terminal de fósforo verde, inspirada en la PC de los números de LOST (estación El Cisne) y en [samwitwer.com](https://samwitwer.com/). El build es un `dist/` de HTML, CSS y assets: se publica en Cloudflare Workers con assets estáticos, y el mismo artefacto se puede subir a Netlify u otro host estático sin cambiar el código.

`rodrigovillalba.com` ya no es de Rodrigo. Hay que comprar un dominio nuevo. En este documento el dominio definitivo se llama `<dominio>` hasta elegirlo.

## Decisiones

| Tema | Decisión |
| --- | --- |
| Framework | Astro 5, `output: 'static'`. Sin adapter de servidor. |
| Contenido | Content Collections en `src/content/blog/`. Un `.md` por post. |
| UI | HTML + CSS propio. Se retira Chakra, Emotion, Framer Motion y React como runtime de las páginas. |
| URLs | Se conservan `/`, `/about`, `/blog` y `/post/<slug>`. |
| CV | PDF público en `/cv/rodrigo-villalba.pdf`, enlazado desde About y desde el comando `cv` de la terminal. |
| Hosting | Cloudflare Workers + static assets. Netlify queda como respaldo, con el mismo `dist/`. |
| Dominio | Comprar uno nuevo en Cloudflare Registrar. `rodrigovillalba.com` está registrado por un tercero hasta el 2027-08-05 y no se puede transferir. |

Workers no regala el dominio. Resuelve el hosting a $0 para este sitio: el HTML, el CSS, las imágenes y el PDF se sirven como assets estáticos, sin función de servidor y sin cuota de ancho de banda. El subdominio `*.workers.dev` existe si hace falta una URL temporal antes de apuntar el dominio.

## Estado actual

Next.js 10 con export estático (`netlify.toml`: `npm run build && npm run export`, carpeta `out`). React 16 y Chakra UI 1.

Páginas:

- `/` — terminal gris, IBM Plex Mono, links a About, Blog y GitHub.
- `/about` — bio en prosa.
- `/blog` — lista por fecha, tiempo de lectura, tags, y una sección aparte de guest posts.
- `/post/[slug]` — Markdown renderizado con `react-markdown`, bloques de código con Prism, SEO con `next-seo` (Open Graph + `Article` JSON-LD).
- `/cumpleanos.html` — página suelta en `public/`, fuera del layout del blog. Se conserva tal cual.

Diez posts en `posts/`, frontmatter real:

- `title`, `author`, `tags`, `date` (ISO), `summary` (opcional).
- `image` en Atomic Habits y Striking Thoughts. Las imágenes están en `public/posts/images/`.
- `guest_post_url` solo en `sodep.md`. En el blog no abre un post local: sale a `blog.sodep.com.py`.
- `thinking-in-react-composition.md` trae fences `jsx`. El resto es prosa.

SEO ya publicado que hay que no perder:

- Canonical y título por página.
- Meta de Google Search Console en `_document.js`: `eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw`.
- Favicons en `public/favicon_io/` y `public/favicon.ico`. `BlogSeo` los declara con una ruta `/static/...` que no existe: el sitio nuevo apunta a `/favicon_io/...`.

Links externos que siguen: GitHub `rodrigojv`, Twitter `rodrigoj_el`, LinkedIn del footer.

## Hosting y dominio

### Por qué Workers y no Netlify como destino principal

El sitio no tiene API, auth ni renders bajo demanda. Astro emite archivos. Cloudflare Workers con [static assets](https://developers.cloudflare.com/workers/static-assets/) sirve esa carpeta en el edge:

- Plan gratis suficiente para un blog personal. Las peticiones a assets estáticos no consumen la cuota de invocaciones del Worker.
- Sin cobro por ancho de banda.
- Dominio propio en el Worker, HTTPS incluido.
- El PDF del CV es un archivo más. No hace falta R2 ni un Worker que lo streamee.

Netlify sigue siendo válido como plan B: el mismo `dist/` se publica cambiando el comando de build. No se escribe código distinto por host. El dominio viejo ya no apunta a ese sitio.

No hace falta el adapter `@astrojs/cloudflare`. Ese adapter es para SSR. Un sitio estático se despliega con Wrangler apuntando a `dist/`.

### Cómo se despliega

Build local o en CI:

```bash
npm run build          # astro build → dist/
npx wrangler deploy    # sube dist/ como assets
```

`wrangler.jsonc` mínimo:

```jsonc
{
  "name": "rodrigovillalba",
  "compatibility_date": "2026-11-01",
  "assets": {
    "directory": "./dist",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "404-page"
  }
}
```

Preview antes de tocar DNS: `npx wrangler deploy` y revisar el `*.workers.dev`. El dominio de producción se agrega como custom domain del Worker cuando el preview esté bien.

Headers a configurar en el asset binding (o en `public/_headers` si se usa el formato que Wrangler respeta):

- `Cache-Control` largo para `/_astro/*` (Astro ya les pone hash).
- `Content-Type: application/pdf` para el CV. El navegador lo abre inline. Un link con `download` ofrece guardarlo.
- `X-Content-Type-Options: nosniff`, y una política de referrer simple.

### `rodrigovillalba.com` ya tiene dueño

Consulta RDAP del 2026-11-15. El dominio se registró de nuevo el 2026-08-05 (no es una renovación del registro original del blog). Datos públicos:

| Campo | Valor |
| --- | --- |
| Titular, admin y técnico | fan yang |
| Lugar | Weinan, Shaanxi, China |
| Correo | alefa999@kouming.com |
| Teléfono | +86 130-44507167 |
| Registrador | TuringSign Inc., opera como Cosmotown (IANA 1509) |
| Alta | 2026-08-05 |
| Vencimiento | 2027-08-05 |
| Último cambio | 2026-10-22 |
| Estado | `client delete`, `client renew`, `client transfer` y `client update` prohibited |
| DNS | `dion.ns.cloudflare.com`, `gina.ns.cloudflare.com` |

Esos cuatro `client * prohibited` los pone el registrador: el dominio no se transfiere, no se borra y no se puede comprar como si estuviera libre. Como mínimo sigue ocupado hasta el 2027-08-05, y el titular puede renovarlo.

Hoy resuelve a IPs de Cloudflare y responde 200 con una página en chino de “sitio en mantenimiento”. El `<title>` es una cadena de palabras de video pirata. No queda nada del blog.

No entra en este plan intentar recomprarlo ni escribirle al titular. Si en 2027 aparece libre, se puede registrar aparte. Hasta entonces el sitio vive en un dominio nuevo. El SEO viejo (Search Console, canonicals, enlaces externos al `.com`) no se hereda: la meta de verificación que está en `_document.js` correspondía a esa propiedad y en el sitio nuevo se reemplaza por la del dominio nuevo.

### Dominio nuevo, barato

Workers no incluye un nombre. El hosting sale $0; el dominio es el único costo anual.

Comprarlo en **Cloudflare Registrar**, precio de costo, el mismo al renovar, privacidad WHOIS incluida. Un `.com` ronda USD 10–11 al año. Un `.dev` suele estar en un rango parecido (USD 12). El dominio queda en DNS de Cloudflare, que es lo que el Worker necesita.

Evitar la promo de primer año en Porkbun o Namecheap (a veces USD 1–8) si la renovación publicada pasa de ~USD 15. Al segundo año sale más cara que Cloudflare.

Candidatos a mirar, en este orden, y comprar el primero que esté libre:

1. `rodrigovillalba.dev`
2. `rodrigovillalba.com` solo si algún día vuelve a estar libre (hoy no lo está)
3. `rvillalba.com` o `rodrigo.dev`
4. Un `.com` corto con el apellido si los anteriores están tomados

Antes de pagar, confirmar en el registrador el precio de **renovación**, no solo el del primer año. Anotar el nombre elegido en la tabla de decisiones y reemplazar `<dominio>` en `astro.config.mjs` (`site`), canonicals, sitemap y RSS.

El `*.workers.dev` del Worker sirve para ver el sitio antes de comprar. No es la URL pública.

Pasos, cuando el preview en `*.workers.dev` ya está bien:

1. Crear la cuenta de Cloudflare y registrar `<dominio>` ahí.
2. Asociar ese dominio como custom domain del Worker. El certificado lo emite Cloudflare.
3. Si más adelante hay correo (`hola@`, `contacto@`), son registros MX hacia otro proveedor. Workers no recibe mail.
4. Dar de alta la propiedad nueva en Google Search Console y poner su meta de verificación en el layout. La meta vieja se borra.

## CV en PDF

Un solo archivo canónico:

```text
public/cv/rodrigo-villalba.pdf   →   https://<dominio>/cv/rodrigo-villalba.pdf
```

`public/` se copia a la raíz de `dist/`. No entra en la content collection.

En el sitio:

- About: bloque “Curriculum” con “Ver PDF” (abre en el navegador) y “Descargar”.
- Home, como comando de la terminal: `> cv` imprime la línea y el link.
- El nombre del archivo lleva el nombre propio, para que al descargarlo no quede como `cv.pdf` genérico.

El PDF es público. No va al repo nada que no deba estar en internet (dirección privada, documento de identidad, teléfono que no quieras publicar). El archivo se reemplaza subiendo la versión nueva al mismo path; la URL no cambia.

No se genera el PDF desde Markdown en esta migración. Si más adelante el CV vive en `src/content/cv.md`, se puede añadir una página `/cv` en HTML y dejar el PDF como export. Eso queda fuera de este corte.

## Contenido que se conserva

Mover `posts/*.md` → `src/content/blog/*.md` sin reescribir el cuerpo. El schema de la collection valida lo que hoy está en el frontmatter y rechaza un post mal formado en el build:

```ts
// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default("Rodrigo Villalba"),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    image: z.string().optional(),
    guest_post_url: z.string().url().optional(),
  }),
});

export const collections = { blog };
```

Reglas de render:

- Orden: `date` descendente, igual que `pages/blog.js`.
- Tiempo de lectura: calcularlo al armar la lista (palabras / 200), sin el paquete `reading-time` si no hace falta.
- Guest post: si hay `guest_post_url`, la card apunta afuera y no genera `/post/sodep`. El archivo puede quedarse en la collection para no perder el registro.
- Código: fences con Shiki (`jsx`, `js`, `ts`, `bash`). Tema oscuro acorde al fósforo, con contraste real, no verde sobre verde.
- Imágenes de posts: se quedan en `public/posts/images/`, con las mismas rutas.
- `public/cumpleanos.html` se copia igual. No entra al layout de la terminal.

Páginas Astro:

```text
src/pages/index.astro
src/pages/about.astro
src/pages/blog/index.astro
src/pages/post/[slug].astro
src/pages/404.astro
src/pages/rss.xml.ts
```

`[slug].astro` usa `getStaticPaths()` sobre la collection. Slug = nombre del archivo, así los paths se conservan (`/post/giving-up-social-media`). El host cambia, porque el `.com` anterior ya no es nuestro.

SEO en el layout, sin `next-seo`:

- `<title>`, description, canonical.
- Open Graph `article` con `publishedTime` y la imagen del post cuando exista.
- JSON-LD `BlogPosting`.
- `sitemap` con `@astrojs/sitemap` y `site: https://<dominio>` en `astro.config.mjs`.
- RSS en `/rss.xml`.
- Meta de Search Console del dominio nuevo, en el layout base. La del `.com` viejo no se reutiliza.
- `lang="es"` en páginas en español y `lang="en"` en el resto. Hoy el `<html>` no declara idioma; los posts están en inglés y About también, salvo `sodep` (tag `spanish`) y `cumpleanos.html`.

## Diseño

La home ya es una terminal (bisel gris, IBM Plex Mono, cursor parpadeante, texto con glow). El rediseño extiende esa idea a todo el sitio y la acerca a la PC de los números: prompt, boot, números, fósforo. La lectura de un post tiene que seguir siendo cómoda. La terminal es el marco; el artículo no es un volcado de 40 columnas.

### Prompt de diseño

Usar este prompt al implementar layout, CSS y la home. No hace falta pegarlo en el sitio.

```text
Diseñá la interfaz de un sitio personal de un desarrollador como la
computadora de la estación El Cisne en LOST: la PC donde se ingresan
los números 4 8 15 16 23 42. Referencia de tono: samwitwer.com
(terminal a pantalla, fósforo, se siente un sistema y no una plantilla).

Modernizala. No es un skeuomorfismo de plástico beige ni un clon del
sitio de referencia. Es un sistema de diseño actual con lenguaje de
terminal de los 80.

Pantalla
- Fondo #070a08. Texto principal #b6f5c2 (fósforo verde apagado, no
  neón puro). Acento #e7ff6a solo para el prompt, el cursor y los
  números. Alerta #ff5a36 para estados de fallo, usada con cuentagotas.
- Tipografía: "IBM Plex Mono" para chrome, prompt y metadatos.
  "Newsreader" o "Source Serif 4" para el cuerpo de los posts, 19–21px,
  medida ~68ch, line-height 1.6. El artículo se lee como texto, la
  carcasa se lee como máquina.
- Viñeta suave en los bordes del viewport y scanlines al 6% de
  opacidad, detrás del contenido, con pointer-events: none. Sin
  parpadeo constante. Un flicker de opacidad solo en la secuencia de
  boot, una vez por sesión.
- Cursor de bloque █ al final del prompt, animación de opacidad 1.1s.

Estructura
- La home es una sesión ya iniciada, no un menú de marketing.
  Líneas de boot cortas (4–6), después un prompt interactivo:
  comandos about, blog, cv, github, help. Escribir o hacer click en
  el comando hace lo mismo. help lista los comandos.
- Una fila fija, arriba a la derecha, con los números
  4  8  15  16  23  42 en tracking amplio, color acento, tamaño pequeño.
  Son una marca, no un timer funcional ni un easter egg de alarma.
- About, Blog y el post usan la misma carcasa: barra superior con el
  nombre como prompt (rodrigo@swan:~), la fila de números, y el
  contenido debajo. El footer son tres comandos: github, twitter,
  linkedin.
- Blog: cada post es una línea de log.
  2021-06-15  00:19  trying-to-get-back-on-track
  Título en serif debajo de la línea, summary en fósforo atenuado,
  tags como tokens [wellbeing]. Guest posts marcados como EXT.
- Post: título en serif, meta en mono ("PUBLISHED 2021-02-17 · 6 MIN
  · books"), cuerpo en serif, código en mono sobre #0c120e con borde
  1px #1c3a24. Blockquote con barra acento a la izquierda.
- Links: subrayado de 1px en acento, sin glow en el párrafo.
- Focus visible: outline 2px acento, offset 2px. Todo comando es
  botón o enlace real, operable por teclado.
- Responsive: debajo de 700px la fila de números pasa a una sola
  línea que puede hacer scroll horizontal, el prompt no se parte en
  varias líneas, y el cuerpo baja a 18px. Sin bezel ilustrado que
  robe ancho.

No hacer
- Countdown de 108 minutos, sirena, ni “system failure”.
- Verde fluorescente sobre negro puro en párrafos largos.
- Más de una animación en loop (solo el cursor).
- ASCII art grande, marcos de caja en cada sección, ni sonido.
```

### Comportamiento de la home

Una isla mínima (`src/components/Terminal.astro` + un `<script>` sin framework):

- Historial de líneas ya impresas.
- Input de texto. Comandos: `help`, `about`, `blog`, `cv`, `github`, `clear`.
- `about`, `blog` y `cv` navegan. `github` abre el perfil en otra pestaña. `clear` borra el historial de la sesión.
- Click en una línea-comando equivalente equivale a ejecutarlo.
- Comando desconocido: `command not found` y la sugerencia `help`.
- En viewport táctil el input recibe foco al tocar la pantalla, no al cargar, para no abrir el teclado solo.

About y Blog no repiten la sesión de comandos. Comparten carcasa y tipografía.

## Estructura destino

```text
astro.config.mjs
wrangler.jsonc
public/
  cumpleanos.html
  cv/rodrigo-villalba.pdf
  favicon.ico
  favicon.svg
src/
  content.config.ts
  content/blog/*.md
  layouts/Base.astro
  layouts/Post.astro
  components/Terminal.astro
  components/SiteFrame.astro
  components/PostList.astro
  pages/index.astro
  pages/about.astro
  pages/blog/index.astro
  pages/post/[slug].astro
  pages/404.astro
  pages/rss.xml.ts
  styles/global.css
```

Se eliminan, cuando el sitio nuevo reemplaza al viejo: `pages/`, `components/`, `posts/`, `utils/`, `next.config.js`, dependencias de Next, Chakra, Emotion, `next-seo`, `next-mdx-remote`, `react-markdown`, Prism y `gray-matter`. Astro parsea el frontmatter solo.

`package.json` queda en scripts `dev`, `build`, `preview`. Node actual en `.nvmrc` (20 o 22).

## Fases

### 1. Esqueleto

- Crear el proyecto Astro en este repo, reemplazando el toolchain de Next. No hay tráfico que justifique convivir con dos apps.
- `site` en la config, layout base vacío con la meta de Search Console, 404, y `npm run dev` sirviendo `/`.
- Dejar `cumpleanos.html` accesible en la misma ruta.

### 2. Contenido

- Mover los diez Markdown y definir el schema.
- Implementar `/blog` y `/post/[slug]` con el orden, los tags, el tiempo de lectura y el caso guest post.
- Shiki para los fences `jsx`.
- RSS y sitemap.

### 3. Carcasa y páginas

- `global.css` con los tokens del prompt (color, tipo, scanlines, focus).
- `SiteFrame` en About, Blog y Post.
- About con el texto actual, más el bloque del CV. Actualizar datos que quedaron viejos (Sodep, Twitter) solo si Rodrigo pasa el texto nuevo; si no, se migra literal.
- Home con la terminal y los seis comandos.
- Colocar `public/cv/rodrigo-villalba.pdf`.

### 4. Verificar

- Recorrer `/`, `/about`, `/blog`, un post con código (`thinking-in-react-composition`), un post con imagen, el guest post, `/cv/rodrigo-villalba.pdf`, `/cumpleanos.html` y una URL inexistente.
- Probar los comandos con teclado y con click, en ancho de escritorio y en ~390px.
- Confirmar que cada slug viejo responde 200.
- `npm run build` sin errores de schema.

### 5. Deploy

- `wrangler deploy` al `*.workers.dev` y repetir el recorrido ahí.
- Comprar `<dominio>` en Cloudflare Registrar y anotarlo en este plan.
- Añadirlo como custom domain del Worker.
- Crear la propiedad de Search Console de ese dominio y poner la meta nueva.
- El rollback es el deploy previo del Worker, no el proyecto Next.

### 6. Dominio

- Confirmar precio de renovación antes de pagar.
- No intentar transferir `rodrigovillalba.com`: está a nombre de fan yang, en Cosmotown, bloqueado hasta por lo menos el 2027-08-05.
- Guardar el comprobante y la fecha de vencimiento del dominio nuevo.

## Hecho cuando

- Los diez posts se leen en `/post/<slug>` con el mismo texto.
- `/blog` separa posts propios y guest posts.
- About, el PDF y `cumpleanos.html` responden.
- La home acepta `help`, `about`, `blog`, `cv`, `github` y `clear`.
- Hay sitemap, RSS, canonical, Open Graph y la meta de Search Console.
- `https://<dominio>` sale del Worker de Cloudflare, con el dominio comprado en Cloudflare Registrar.
- El PDF abre en `/cv/rodrigo-villalba.pdf`.
- Un `astro build` seguido de subir `dist/` a Netlify también funciona, sin cambios de código.

## Fuera de este corte

- Comentarios, newsletter, analytics y el botón de share que el layout viejo dejaba como TODO.
- Página HTML del CV generada desde Markdown.
- Reescribir los posts o traducirlos.
- Timer de 108 minutos o cualquier mecánica de “system failure”.
