# CR-WEB-1.1 - SOTE Command Portal Launch Candidate Update

## Document Control

| Field | Value |
|---|---|
| Document ID | CR-WEB-1.1 |
| Document Title | SOTE Command Portal Launch Candidate Update |
| Project | CCAC Student-Operated Technology Ecosystem |
| Repository | ProfRinsem/sote-command-portal |
| Site URL | https://profrinsem.github.io/sote-command-portal/ |
| Target Work Window | Week of June 29, 2026 |
| Owner | Michael Rinsem |
| Status | Open |

## Purpose

Prepare the SOTE Command Portal as a launch candidate for outside testing while preserving the full multi-page portal structure, approved media set, and public-safe visitor experience.

This change request exists to stop ad hoc site edits and move the next round of website work into a controlled, reviewable workflow.

## Current State

The GitHub Pages project site is published from the `ProfRinsem/sote-command-portal` repository. The correct public test URL is:

```text
https://profrinsem.github.io/sote-command-portal/
```

The site must remain a multi-page portal. The launch candidate should not collapse into a single-page summary. The homepage should act as an entry point into the full portal.

## Guiding Rules

1. Preserve the full portal content structure.
2. Preserve approved media references already committed to the repo.
3. Do not replace approved media with generated placeholder art.
4. Remove visitor-facing build numbers, version labels, package references, media audit language, and site-build process language.
5. Keep internal safety language where appropriate: no student private data, no production credentials, no sensitive infrastructure details.
6. Make every update directly through GitHub so version history is preserved.

## Scope of Work

### 1. Restore and verify multi-page navigation

Confirm the homepage links to the full visitor-facing portal:

- Home
- Start Here
- Tour Mode
- Tour Guide Kit
- Environment Map
- Zones
- Characters
- Mission Board
- Badges
- Student Technology Corps
- Codex
- Projects
- Get Involved

### 2. Clean visitor-facing language

Remove or revise language that exposes site-building process details, including:

- build numbers
- package names
- GitHub deployment instructions
- media audit language
- internal recovery wording
- references to restored/rebuilt packages
- cache-busting/version query labels in visible text

### 3. Validate approved media usage

Confirm that the following approved media categories load correctly:

- SOTE Command Portal header/logo
- SOTE paw badge icon
- character portraits
- character one-sheets where used
- facility and zone visuals
- Technology Cadet mission pass
- mission-board icons
- Student Technology Corps pathway graphic

### 4. Rebuild missing tour media plan

Identify whether the previously approved realistic Tour Mode stop cards are present in the repository. If they are missing, document them as a separate media recovery task instead of replacing them with placeholders.

Tour Mode should eventually include:

1. Start Tour
2. Stop 1 - CEIT 325 Classroom
3. Stop 2 - Mission Control
4. Stop 3 - Rocket's Forge
5. Stop 4 - Western Pennsylvania Cyber Defense Command
6. Stop 5 - Patch Bay Alpha
7. Stop 6 - Rocket's Engineering Bay
8. Mission Complete / Join the Corps

### 5. Public safety review

Confirm no public page exposes:

- passwords
- internal-only IP addresses
- student private information
- production credentials
- sensitive infrastructure details
- unreviewed screenshots or rack labels

### 6. External testing readiness

Prepare the site so outside testers can review:

- whether the SOTE story is understandable
- whether navigation makes sense
- whether visuals match the approved identity
- whether pages load correctly
- whether any language is confusing, too internal, or too technical

## Acceptance Criteria

This change is complete when:

- The homepage remains a multi-page portal entry point.
- Every primary navigation link resolves correctly.
- Visitor-facing pages no longer display build numbers or site-build process language.
- Approved media assets load on the homepage and key section pages.
- The site can be shared using `https://profrinsem.github.io/sote-command-portal/`.
- A brief external tester checklist is available on or linked from the site.
- Open follow-up work is documented as tickets instead of handled through uncontrolled rebuilds.

## Out of Scope

The following are not part of this change request:

- moving the site to a CCAC-owned GitHub organization
- creating a `profrinsem.github.io` user site
- adding production analytics
- adding student login or private dashboards
- publishing sensitive operational documentation
- replacing the current approved media set with newly generated media

## Next Actions

1. Review the current live site from the public URL.
2. Check all main navigation links.
3. Clean visible build/process language from each visitor-facing page.
4. Confirm approved media paths and missing media gaps.
5. Add a tester feedback checklist.
6. Create follow-up tickets for any missing media or content defects.
7. Mark the launch candidate ready for limited outside review.
