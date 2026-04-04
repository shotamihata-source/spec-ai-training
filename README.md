# Spec AI Training

Public training repository for AI onboarding curriculum.

## Purpose

- Keep training materials outside private corporate repositories.
- Let each member clone this repository and progress independently.
- Standardize daily completion with GitHub workflow.

## Scope

- Day4-Day13 curriculum
- Learning resources
- Learning infrastructure and operation rules

## Mandatory Daily Rule (After Git/GitHub lesson)

From Day5 onward, daily completion is defined as:

1. Push outputs to personal repository (`training/day-xx/`)
2. Create PR
3. Confirm GitHub-to-Slack notification
4. Address review comments
5. Merge PR

If not merged, the day is not complete.

## Quiz Gate

- Google Forms auto-graded quizzes are used for comprehension checks.
- Required score is 100%.
- Retake is unlimited within the same day.

## Repository Structure

- `curriculum.md`: Day-by-day plan
- `resources.md`: Reference videos/blogs/official docs
- `learning-infrastructure.md`: execution loop, review loop, quiz loop
- `CONTRIBUTING.md`: contribution and PR rules
- `templates/`: reusable day output, PR body, and daily report templates
- `references/`: template files are tracked; only `references/farleap-context.local.md` is gitignored

## Local Private Context

If a member needs internal business context, use a local file:

- `references/farleap-context.local.md` (gitignored)

Use `references/farleap-context.example.md` as a template.
