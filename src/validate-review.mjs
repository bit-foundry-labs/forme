import { readFileSync } from 'node:fs';

export function validateReview(data) {
  const errors = [];
  if (!data || typeof data !== 'object' || Array.isArray(data)) return ['Review must be an object'];
  const root = ['project','summary','findings','verification'];
  for (const key of Object.keys(data)) if (!root.includes(key)) errors.push(`Unknown field: ${key}`);
  for (const key of ['project','summary','verification']) if (typeof data[key] !== 'string' || !data[key].trim()) errors.push(`Invalid ${key}`);
  if (!Array.isArray(data.findings)) errors.push('findings must be an array');
  else data.findings.forEach((finding, i) => {
    if (!finding || typeof finding !== 'object' || Array.isArray(finding)) { errors.push(`Invalid finding ${i}`); return; }
    const fields = ['severity','observation','impact','recommendation'];
    for (const key of Object.keys(finding)) if (!fields.includes(key)) errors.push(`Unknown finding field: ${key}`);
    if (!['info','minor','major','critical'].includes(finding.severity)) errors.push(`Invalid severity in finding ${i}`);
    for (const key of fields.slice(1)) if (typeof finding[key] !== 'string' || !finding[key].trim()) errors.push(`Invalid ${key} in finding ${i}`);
  });
  return errors;
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  try {
    const data = JSON.parse(readFileSync(process.argv[2] ?? '', 'utf8'));
    const errors = validateReview(data);
    if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
    else console.log('Forme review valid');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
