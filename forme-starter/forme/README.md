# Forme

An open-source design-coaching skill for coding agents, by Bit Foundry Labs.

Forme critiques interfaces using evidence, context, and explicit tradeoffs. It does not prescribe a house style.

## Quick start

Give your coding agent `skills/forme/SKILL.md` as its design-review instructions. Supply the user goal, screenshots (when available), and relevant UI code. Ask it to return a review matching `review.schema.json`.

Validate a JSON review locally:

```bash
node src/validate-review.mjs examples/review.json
node --test
```

No dependencies, accounts, network calls, or paid API required for validation.

## Scope

v0.1 provides a portable agent skill, a JSON contract, and a deterministic validator. Automated screenshot inspection and browser integration are future work, not implemented features.

## Principles

- Critique decisions in the context of users and tasks.
- Distinguish observations from interpretations.
- Preserve useful conventions; reject repetitive patterns only when they undermine the product.
- Treat accessibility and interaction clarity as constraints, not optional decoration.
- Never invent screenshot evidence, measurements, or user research.

## License

MIT. See LICENSE.
