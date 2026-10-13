# FAS³A lab website

Forensics, Auditing, and Security of Software, Systems, and Agents (FAS³A) lab, School of Computing, University of Georgia.

Astro static site deployed to GitHub Pages via GitHub Actions: https://fasa-lab.github.io/lab-web/

## Develop
```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Rename the lab
Edit `site.config.json` (single source for name/description/language).

## Deployment
- Repository: `FASA-lab/lab-web`; Settings → Pages → Source: **GitHub Actions**.
- Every push to `main` builds and deploys; the workflow derives `SITE_URL`/`BASE_PATH` from the owner/repo name, so a rename or transfer needs no code change.
- For a custom domain or an `<org>.github.io` repo, drop `BASE_PATH` in `.github/workflows/deploy.yml` and add `public/CNAME`.

Keep internal links relative to `import.meta.env.BASE_URL`; never hardcode the repo name.

## Assets and licensing
- School of Computing logo (`public/brand/soc-logo-horizontal.png`, from computing.uga.edu), UGA logo (`public/brand/uga-logo-horizontal.png`) and favicon (`public/brand/favicon.ico`, from www.uga.edu) used with the site owner's approval (confirm formal UGA approval before public launch); source: https://brand.uga.edu/wp-content/uploads/UGA_logo_ExtremeHoriz_FC_MARCM.png. Do not recolor, distort, or add effects.
- `public/people/uga-arch.jpg`: "The Arch, UGA" by JJonahJackalope, CC BY-SA 4.0 (credited on the People page).
