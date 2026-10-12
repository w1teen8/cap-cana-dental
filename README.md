# Cap Cana Dental Clinic

Next.js 16 + Tailwind 4 site built on the Haven Dental template, recoloured to the clinic palette.
Two languages, Spanish (default) and English: 12 pages each, all static.

## Run

```bash
npm run dev      # http://localhost:3000  (redirects to /es)
npm run build
npm start
```

## Languages

Routes live under `src/app/[lang]/`, so every page exists at `/es/...` and `/en/...`.
`/` redirects to `/es` (see `next.config.ts`).

| Path | What |
| --- | --- |
| `src/content/es.ts`, `src/content/en.ts` | All copy, one file per language, same shape |
| `src/content/index.ts` | `getContent()` reads the language from the URL (`next/root-params`) |
| `src/components/site-header.tsx` | Contains the ES / EN switch; it keeps the current page |

To add a language: copy `en.ts`, translate it, register it in `index.ts`
(`locales`, `dictionaries`) and in the `LANGS` list of the header.

## Other code

| Path | What |
| --- | --- |
| `src/app/globals.css` | Design tokens: palette, type scale, breakpoints |
| `src/components/sections.tsx` | Shared sections: hero, treatments grid, offer, team, reviews, CTA |
| `src/components/faq.tsx`, `faq-accordion.tsx` | FAQ section and its accordion |
| `src/components/booking-form.tsx` | Appointment request form |
| `public/img/` | Photographs and the logo files |

## Palette

Set in the `@theme` block of `globals.css`. Nothing else hardcodes a colour.

| Token | Value | Use |
| --- | --- | --- |
| `--color-primary` | `#285A11` | header, buttons, closing band |
| `--color-accent` | `#4F873E` | eyebrows, icons |
| `--color-rule` | `#344638` at 12% | dividers |
| `--color-ink` | `#2C2C2C` | text, footer, offer card |
| `--color-cream`, `--color-mist` | derived | tinted section backgrounds |

## Assets

- `public/img/logo-capcana.png` and `logo-capcana-mark.png`: cut from a 1242x706 JPEG of the clinic
  logo, background removed. Raster only. Replace with the original vector file when available.
- `src/app/icon.png`: favicon, the tooth mark on the logo green.
- `public/img/hero-patient.jpg`: Unsplash photo by Connor Wilkins (Unsplash licence).
- The other photographs come from the template.

## Breakpoints

`md` 810px and `lg` 1200px, as in the template. All breakpoints are declared in the theme on
purpose: overriding only some of them makes Tailwind emit the untouched defaults last, where
they override the larger ones.

## Still placeholder

- Phone, email, address, opening hours, prices, team members, reviews, the About story and its
  figures are template copy. They now sit under the real clinic name, so replace them before launch.
- The booking form validates and shows a confirmation, but does not send anywhere yet.
- No `metadataBase` is set. Add the production URL in `src/app/[lang]/layout.tsx` when it is known.
