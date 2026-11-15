# rodrigovillalba

Sitio personal estático en Astro 5. Los posts son Markdown en `src/content/blog/`.

```bash
npm run dev      # desarrollo
npm run build    # genera dist/
npx wrangler deploy   # publica dist/ en Cloudflare Workers
```

El CV se sirve desde `public/cv/rodrigo-villalba.pdf`. Mientras el archivo no exista, no se enlaza.
