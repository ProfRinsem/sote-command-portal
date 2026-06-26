# SOTE Command Portal v0.9 Approved Media Baseline

This package rebuilds the SOTE Command Portal from the recovered Drive backup and binds the correct approved media set into the website.

## What is included

- Full v0.8 site structure with individual pages retained
- Recovered approved branding graphics
- Approved character portraits and character one-sheets
- Approved hero, zones overview, Mission Control, Rocket's Forge, Cyber Defense Command, and facility tour map visuals
- Approved Technology Cadet: First Signal mission-pass artwork
- Approved mission-board icons
- Approved Student Technology Corps pathway graphic
- Complete approved media library preserved under `assets/approved-media/`
- Facility reference photos preserved under `assets/reference-photos/`
- Site-friendly aliases under `assets/img/`

## Deployment

For GitHub Pages, place the contents of this folder in the root of `ProfRinsem/sote-command-portal` and publish from `main` / `/root`.

## Control rule

Do not replace files in `assets/approved-media/` with generated stand-ins. New media should be added through the manifest and then intentionally referenced by the site.
