# Lab website

Astro static site deployed to GitHub Pages via GitHub Actions.

## Develop
```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Rename the lab
Edit `site.config.json` (single source for name/description/language).

## Move to an organization
1. Repo Settings → Transfer ownership to the org.
2. Settings → Pages → Source: **GitHub Actions** (re-check after transfer).
3. Push to `main`; the workflow derives `SITE_URL`/`BASE_PATH` from the new owner/repo name.
4. For a custom domain or an `<org>.github.io` repo, drop `BASE_PATH` in `.github/workflows/deploy.yml` and add `public/CNAME`.

Keep internal links relative to `import.meta.env.BASE_URL`; never hardcode the repo name.

## Assets and licensing
- UGA logo (`public/brand/uga-logo-horizontal.png`) used with the site owner's approval (confirm formal UGA approval before public launch); source: https://brand.uga.edu/wp-content/uploads/UGA_logo_ExtremeHoriz_FC_MARCM.png. Do not recolor, distort, or add effects.
- `public/people/uga-arch.jpg`: "The Arch, UGA" by JJonahJackalope, CC BY-SA 4.0 (credited on the People page).
