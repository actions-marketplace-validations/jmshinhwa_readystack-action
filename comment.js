// comment.js - posts the summary as ONE pull-request comment and updates it on the next push (no duplicates). s158 2026-09-23.
// Needs: permissions: pull-requests: write (or issues: write) on the workflow, and inputs.comment: true.
'use strict';
const fs = require('fs');
const [, , mdFile, slug] = process.argv;
const { GH_TOKEN, RS_REPO, RS_PR, GITHUB_API_URL } = process.env;
const api = (GITHUB_API_URL || 'https://api.github.com') + '/repos/' + RS_REPO + '/issues/' + RS_PR + '/comments';
const H = { authorization: 'Bearer ' + GH_TOKEN, accept: 'application/vnd.github+json', 'content-type': 'application/json', 'user-agent': 'readystack-action' };
(async () => {
  if (!GH_TOKEN || !RS_REPO || !RS_PR) { console.log('readystack: no PR context - comment skipped'); return; }
  const body = fs.readFileSync(mdFile, 'utf8'), mark = '<!-- readystack:' + slug + ' -->';
  const list = await fetch(api + '?per_page=100', { headers: H });
  if (!list.ok) { console.log('readystack: cannot read PR comments (' + list.status + ') - add permissions: pull-requests: write'); return; }
  const old = (await list.json()).find((c) => String(c.body || '').includes(mark));
  const res = old ? await fetch(api.replace(/\/issues\/\d+\/comments$/, '/issues/comments/' + old.id), { method: 'PATCH', headers: H, body: JSON.stringify({ body }) })
                  : await fetch(api, { method: 'POST', headers: H, body: JSON.stringify({ body }) });
  console.log('readystack: PR comment ' + (old ? 'updated' : 'posted') + ' (' + res.status + ')');
})().catch((e) => console.log('readystack: comment failed - ' + e.message));
