---
name: forme
version: 0.1.0
description: Evidence-based UI/UX design coach for coding agents
---

# Forme: interface design review

Use this skill when asked to design, review, or improve a user interface.

## Inputs

Ask for missing inputs only when essential. Use available: product purpose, primary user task, platform, screenshots, relevant code, design references, and constraints. State which were unavailable.

## Procedure

1. **Understand**: Identify the user, their principal task, the context of use, and constraints. Do not invent research.
2. **Observe**: Record concrete UI evidence, such as duplicated card layouts, hierarchy conflicts, unclear affordances, missing labels, or inconsistent spacing. Quote filenames or screenshot regions when provided.
3. **Evaluate** across: information architecture, visual hierarchy, typography, composition, color, interaction, accessibility, responsiveness, and originality. Avoid style judgments without a reason tied to user outcomes.
4. **Propose**: Give the smallest high-impact changes first. Explain tradeoffs and preserve functional conventions. If code is requested, implement focused changes and test them.
5. **Verify**: Specify how to check keyboard access, focus visibility, contrast, responsive behavior, and task completion. Never claim a test was run unless it was.

## Anti-boilerplate heuristic

Watch for interchangeable hero copy, identical three-card feature grids, excessive rounded cards, gradients used without purpose, and decorative metrics. These are *signals*, not automatic defects. Explain why a particular pattern fails the interface's intended function before recommending a change.

## Accessibility

Target WCAG 2.2 AA where applicable. Avoid relying on color alone; ensure semantic controls, keyboard operability, visible focus, meaningful labels, and appropriate contrast. If exact contrast was not measured, say so.

## Response contract

Return JSON following `review.schema.json` when machine-readable output is requested. Otherwise present: context, evidenced findings ranked by severity, concrete recommendations, and verification steps. Use severity `critical`, `major`, or `minor`. Every finding needs an observation and rationale; mark uncertain judgments explicitly.

## Boundaries

Do not fabricate screenshots, user tests, WCAG compliance, competitor research, or browser results. Do not copy a reference site's protected branding or assets. Do not force Forme's own aesthetic on the user's product.
