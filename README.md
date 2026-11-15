# rodrigovillalba

Sitio personal estático en Astro 5. Los posts son Markdown en `src/content/blog/`.

```bash
npm run dev      # desarrollo
npm run build    # genera dist/
npx wrangler deploy   # publica dist/ en Cloudflare Workers
```

Los CV (EN y ES) salen de `../resume`: `scripts/build-cv.sh` los regenera en `public/cv/` (requiere pandoc y Chrome).
