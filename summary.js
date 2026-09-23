// summary.js - turns a ReadyStack JSON report into the job summary / PR comment markdown. s158 2026-09-23.
'use strict';
const fs = require('fs');
const [, , file, slug] = process.argv;
let r; try { r = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { process.exit(0); }
const rows = []; let n = 0, err = 0;
for (const f of r.files || []) for (const h of f.hits || []) { n++; if (String(h.sev).startsWith('err')) err++; rows.push([f.file, h.line, h.sev, h.msg, h.fix || '']); }
const files = (r.files || []).filter((f) => (f.hits || []).length).length;
const esc = (s) => String(s == null ? '' : s).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').slice(0, 300);
const ref = 'ref=ghaction';
let md = '### ReadyStack · ' + esc(r.tool || slug) + ' - ' + (n ? n + ' finding' + (n === 1 ? '' : 's') + (err ? ' (' + err + ' error' + (err === 1 ? '' : 's') + ')' : '') + ' in ' + files + ' file' + (files === 1 ? '' : 's') : 'no findings') + ' · ' + (r.rules || '?') + ' rules\n\n';
if (n) {
  md += '| file | line | severity | finding | fix |\n|---|---|---|---|---|\n';
  for (const x of rows.slice(0, 50)) md += '| `' + esc(x[0]) + '` | ' + x[1] + ' | ' + esc(x[2]) + ' | ' + esc(x[3]) + ' | ' + esc(x[4]) + ' |\n';
  if (rows.length > 50) md += '\n...and ' + (rows.length - 50) + ' more - add `report: html` to keep the full list as a file.\n';
}
md += '\n<sub>Checked by [ReadyStack ' + esc(r.tool || slug) + '](https://getreadystack.com/tools/' + slug + '?' + ref + ') - deterministic rules with dates and sources. One key for every checker on a team: https://getreadystack.com/teams?' + ref + '</sub>\n<!-- readystack:' + slug + ' -->\n';
process.stdout.write(md);
