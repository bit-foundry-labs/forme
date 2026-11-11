import { readFileSync } from 'node:fs';

const categories = new Set(['information-architecture', 'hierarchy', 'typography', 'composition', 'color', 'interaction', 'accessibility', 'responsiveness', 'originality']);
const severities = new Set(['critical', 'major', 'minor']);
const own = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const nonempty = v => typeof v === 'string' && v.trim().length > 0;
const keysMatch = (o, required) => Object.keys(o).every(k => required.includes(k)) && required.every(k => own(o, k));

export function validateReview(review) {
  const errors = [];
  if (!review || typeof review !== 'object' || Array.isArray(review)) return ['review must be an object'];
  if (!keysMatch(review, ['product', 'inputs', 'findings', 'verification'])) errors.push('review fields must be exactly product, inputs, findings, verification');
  if (!nonempty(review.product)) errors.push('product must be nonempty');
  for (const key of ['inputs', 'verification']) {
    if (!Array.isArray(review[key]) || !review[key].every(v => typeof v === 'string')) errors.push(`${key} must be an array of strings`);
  }
  if (!Array.isArray(review.findings)) errors.push('findings must be an array');
  else review.findings.forEach((f, i) => {
    const prefix = `findings[${i}]`;
    if (!f || typeof f !== 'object' || Array.isArray(f)) { errors.push(`${prefix} must be an object`); return; }
    const fields = ['severity', 'category', 'observation', 'rationale', 'recommendation', 'uncertain'];
    if (!keysMatch(f, fields)) errors.push(`${prefix} has missing or unknown fields`);
    if (!severities.has(f.severity)) errors.push(`${prefix}.severity invalid`);
    if (!categories.has(f.category)) errors.push(`${prefix}.category invalid`);
    for (const field of ['observation', 'rationale', 'recommendation']) if (!nonempty(f[field])) errors.push(`${prefix}.${field} must be nonempty`);
    if (typeof f.uncertain !== 'boolean') errors.push(`${prefix}.uncertain must be boolean`);
  });
  return errors;
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  try {
    const review = JSON.parse(readFileSync(process.argv[2], 'utf8'));
    const errors = validateReview(review);
    if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
    else console.log('Forme review valid');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
