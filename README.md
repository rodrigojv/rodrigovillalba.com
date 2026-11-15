# rodrigovillalba

Sitio personal estático en Astro 5. Los posts son Markdown en `src/content/blog/`.

```bash
npm run dev      # desarrollo
npm run build    # genera dist/
npx wrangler deploy   # publica dist/ en Cloudflare Workers
```

Los CV (EN y ES) salen de `../resume`: `scripts/build-cv.sh` los regenera en `public/cv/` (requiere pandoc y Chrome).

## Créditos

Clic de teclado: `public/sounds/key.mp3`, "Single Key Press" de DRAGON-STUDIO en Pixabay, bajo la Pixabay Content License. Pitido del cursor: `public/sounds/cursor-beep.mp3`, recortado de `public/sounds/beep.mp3`. Los demás sonidos de la home se sintetizan con Web Audio.
