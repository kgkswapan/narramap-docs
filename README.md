# Welcome Project User Documentation

This project was exported from NarraMap DocHub as an Astro Starlight site.

## Commands
- `npm install`
- `npm run dev`
- `npm run build`
- `./preview-local.sh`

Default theme: Starlight Rapide

## Local preview with Docker
- From WSL or Linux, run `./preview-local.sh`.
- Optional: override the preview port with `PORT=4321 ./preview-local.sh`.
- Optional: override the Node image with `DOCS_NODE_IMAGE=node:22-slim ./preview-local.sh`.

## GitHub Pages
- This export includes `.github/workflows/deploy-pages.yml` for GitHub Pages Actions deployment.
- Recommended setup: publish DocHub into a separate public docs repo.
- In GitHub Pages settings, choose `GitHub Actions` as the source.
- Pushes to the configured publish branch automatically rebuild and deploy the site.
