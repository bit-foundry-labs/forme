# Forme

**Design intelligence for coding agents.** An open-source, local-first toolkit that helps agents critique interface decisions instead of reproducing generic templates.

## Principles
- Evaluate a design in the context of its audience, task, and constraints.
- Explain observations with evidence; never label a design generic without a specific reason.
- Distinguish measurable accessibility defects from subjective aesthetic judgments.
- Recommend actionable changes, not arbitrary stylistic replacements.
- Preserve user agency, accessibility, and existing functionality.

## Use the agent skill
Read [`skills/forme/SKILL.md`](skills/forme/SKILL.md), then supply the interface brief, code or screenshot, and constraints. The skill defines a repeatable review workflow and structured findings.

## Local validation
Requires Node.js 20+; no runtime dependencies or paid API calls.

```sh
npm test
node src/validate-review.mjs examples/review.json
```

Forme is an early-stage experiment, not an automated originality detector. Visual assessments require context and human review.

MIT licensed. Copyright Bit Foundry Labs.
