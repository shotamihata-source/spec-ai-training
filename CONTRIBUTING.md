# Contributing Guide

This repository is the single source of truth for AI training operations.

## Branch Strategy

- Branch name: `training/day-xx-<topic>`
- Keep each PR focused on one day or one operation change.

## Commit Style

- Use conventional style where possible:
  - `docs:` curriculum/resource/process updates
  - `chore:` non-content operational setup
  - `feat:` new training capability
  - `fix:` corrections for broken flow or errors

## PR Requirements

Every daily PR must include:

1. Day objective
2. Output paths
3. Quiz evidence (score 100)
4. Slack notification link
5. Review focus

Use:

- `.github/PULL_REQUEST_TEMPLATE.md`
- `templates/day-pr-body-template.md`

## Day Output Convention

Place outputs under:

- `training/day-xx/`

Recommended minimum files:

- `daily-report.md`
- one or more task outputs (`*.md` or project files)

Use:

- `templates/day-output-template.md`

## Quiz Gate Rule

- Completion requires quiz score 100.
- Same-day retake is unlimited.
- If review is delayed, temporary done status is allowed only when:
  - PR opened
  - Slack notification confirmed
  - Quiz score 100

Final completion is recorded after merge.

## Sensitive Data Rule

- Do not commit internal confidential materials.
- Put local-only business context in:
  - `references/farleap-context.local.md` (gitignored)
