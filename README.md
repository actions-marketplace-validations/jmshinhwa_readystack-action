# ReadyStack Compliance Lint — GitHub Action

One action, **137 linters**. Each one checks a specific regulation, deadline or breaking change (EU CRA, DORA, NIS2, WCAG 2.2, PCI DSS, Node/Python EOL, removed APIs) against the files in your repo and fails the job when an error-level finding exists.

```yaml
- uses: jmshinhwa/readystack-action@v1
  with:
    tool: cron-schedule-lint      # any name from the table below
    path: .
    # ext: .py
    # report: json
    # license: ${{ secrets.READYSTACK_LICENSE }}
```

Single-file checks are free forever. Folder sweeps (`--dir`, what this action runs) are free for 7 days per machine, then need a licence key ($29 once per tool, or a team key for every tool) — https://getreadystack.com/pricing?ref=gh-action

Every tool also runs locally (`npx @readystack/<tool> <file>`) and as an MCP server (`--mcp`) for Claude Code, Cursor and Windsurf.

## Tools

| tool | what it checks |
|---|---|
| `accessibility-statement-lint` | Checks the accessibility statement you already published against the EU model statement and its two dates |
| `actions-deprecation-lint-2026` | Node 20 is removed from GitHub-hosted runners on 2026-09-23 and ubuntu-22.04 deprecation opens 2026-09-17. Thi |
| `age-gate-lint` | 8 rules for Ofcom's highly effective age assurance duty, in force since 25 July 2025, where the penalty ceilin |
| `ai-act-article-50-audit` | Finds the AI call sites, generation code and system prompts that trigger EU AI Act Article 50 disclosure dutie |
| `ai-companion-safety-lint` | Reads your companion chatbot's system prompt against California SB 243, New York GBL Article 47, Illinois HB 1 |
| `ai-disclosure-lint-sb942` | Finds the generative-AI code that drops the disclosures California SB 942 has required since August 2, 2026. |
| `ai-model-license-lint` | Reads the open-weight model IDs in your code and names the licence clause that binds you - 22 rules, 17 findin |
| `ai-model-retirement-lint` | Finds the LLM model IDs pinned in your code that vendors have already switched off, or have dated to switch of |
| `angular-removed-api-lint` | 32 checks for Angular APIs that were removed or deprecated, plus the support window on your version pin. The b |
| `auditor-ibs-cbs-nfe` | A rejeição por falta de IBS/CBS foi suspensa em 31/07/2026: sua NF-e é autorizada mesmo errada. Este auditor l |
| `autohotkey-toml-devicetree-snippets` | A DeviceTree overlay with status = "enabled" boots the node disabled and a TOML integer with a leading zero st |
| `autorenew-signup-lint` | Sixteen statutory checks on the signup page AB 2863 rewrote, in your editor and in the browser |
| `base-image-eol-lint` | Marks every base image in your Dockerfiles, compose files and CI workflows whose security patches have already |
| `bem-class-extractor-html` | 16 BEM naming rules read the HTML file you have open and 22 markup and SCSS skeletons write the stylesheet she |
| `bnpl-disclosure-lint-ccd2` | 22 rules that read your checkout template the way a CCD2 supervisor will from 20 November 2026. |
| `bulk-sender-lint` | 21 dated checks over SPF, DKIM, DMARC, RFC 8058 one-click unsubscribe and TLS, in VS Code and in the browser |
| `canal-de-denuncias-lint-es` | Revisa la política de tu canal interno de denuncias, artículo por artículo |
| `cargo-publish-gate` | Names every crates.io publish blocker in a Cargo.toml before the upload burns a version number. |
| `cloud-cost-landmine-lint` | Names every line in the file you have open that starts a recurring cloud charge, with the published us-east-1  |
| `cloud-manifest-audit-kit` | For platform engineers on AKS: 28 rules naming every removed apiVersion, literal credential and :latest tag in |
| `cms-0057-api-gate` | 14 rules read a FHIR CapabilityStatement against CMS-0057-F. A 2021 payer statement returned 6 blocking gaps - |
| `config-dsl-lint-snippet-pack` | Your config files are never compiled — nothing fails until deploy. 36 snippets and 28 lint rules for 9 of them |
| `connection-string-secret-audit` | 26 rules and 32 safe-replacement snippets for hardcoded connection strings, keys and kubeconfigs across 8 VS C |
| `consent-audit-eu` | Finds the analytics, pixels, fonts and embeds that fire before your cookie banner is answered - in the source, |
| `consent-proof-record-lint` | Reads the consent record your code stored and names every proof field GDPR Article 7(1) needs and your log is  |
| `coppa-notice-lint-2026` | 18 clauses of the amended COPPA Rule, checked against the notice in your repo |
| `coverage-gate-lint` | Finds the coverage gates in your repo that can never fail a build |
| `cra-24-72-14-reporting-lint` | Reads your SECURITY.md against the EU Cyber Resilience Act reporting clock that started on 11 September 2026 — |
| `cra-annex-ii-docs-lint` | 19 rules over the user documentation that ships with your product: support-period end date, vulnerability repo |
| `cra-readiness-audit` | Flags the lines in your repo that break the EU Cyber Resilience Act - default passwords, disabled TLS checks,  |
| `cran-policy-submission-lint` | Catch the CRAN Repository Policy violations before the volunteer team does |
| `cron-schedule-lint` | Names every schedule line in the file you have open that fires at the wrong hour, twice, or never at all - and |
| `currency-minor-unit-lint` | Finds the money lines that send the wrong amount to a payment API: the x100 that charges 100x in JPY, the toFi |
| `data-act-switching-lint` | Reads your cloud contract text and names every clause Chapter VI no longer allows, with the article number and |
| `denchoho-sakuinbo-lint-jp` | 索引簿CSVを検索要件3項目とファイル名規則の13ルールで行ごとに検査 |
| `devicetree-config-language-pack` | status = "ok" compiles clean and the node never appears. 23 rules over 7 config languages, on the file you hav |
| `dora-ict-contract-clause-lint` | Twenty-two checks over the ICT vendor contracts in your repository - every missing Article 30 clause named, wi |
| `dora-register-lint` | 24 checks on the register CSV before it reaches the supervisor — LEI check digits, ISO dates and codes, refere |
| `dotnet-eol-support-gate` | Dates every target framework in a .csproj against Microsoft's end-of-support day and against the support perio |
| `dsa-terms-lint` | Reads your terms-of-service markdown and names every DSA duty it is missing, by article number. |
| `eaa-form-lint-wcag22` | Names every WCAG 2.2 AA form failure on its line, with the criterion and the fix |
| `einvoice-mandate-lint` | Lints UBL and CII invoice XML against EN 16931 and the national e-invoicing mandates that are live in 2026 |
| `email-footer-law-lint` | Fourteen checks on an HTML email footer: CAN-SPAM postal address and 10-business-day opt-out, CASL's 60-day wi |
| `en16931-einvoice-lint` | Checks an invoice payload or field mapping against EN 16931 and the national CIUS of the country it detects —  |
| `en18031-psti-lint` | Line-by-line check of shipped device defaults against RED Art. 3(3)(d)(e)(f), EN 18031-1/-2/-3 and UK PSTI Sch |
| `en301549-lint` | Flags the EN 301 549 clause each line breaks, and separates what is in force today from what arrives with V4.1 |
| `epub-a11y-metadata-lint` | 18 rules over the accessibility metadata in your .opf: 12 findings in the sample file, 9 of them errors, 6 of  |
| `erb-escape-audit` | 15 rules that find every line in a Rails .erb view where output escaping was switched off or was the wrong esc |
| `eu-data-residency-lint` | Every cloud region in your infrastructure code, mapped to a country and the transfer basis it needs. |
| `eu-health-claim-lint` | Finds unauthorised nutrition and health claims in your product-page HTML and Markdown and names the article th |
| `facturae-verifactu-lint` | 18 reglas sobre tu XML Facturae antes de que FACe lo devuelva |
| `fedramp-oscal-ssp-lint` | 16 checks on a system-security-plan JSON, in your editor, before a validator returns the package |
| `firebase-deploy-leak-audit` | Reads firebase.json and names the files your next firebase deploy would publish to the open web |
| `firestore-rules-guard` | Audits firestore.rules and storage.rules for public access, expired test-mode dates and missing owner checks — |
| `firmware-release-gate` | Finds the build-config lines that ship an ESP-IDF or Zephyr device with secure boot off, a debug port open, un |
| `france-einvoice-reception-lint` | 12 checks for the French mandatory mentions a PDP rejects, on Factur-X, UBL and CII invoices |
| `freelance-act-order-lint-jp` | 発注書1通を21ルールで検査し、支払サイトの日数まで計算する |
| `gdpr-privacy-notice-lint` | 16 rules read your privacy.md the way Articles 13 and 14 read it |
| `gnu-global-cpp-vscode-config-pack` | 21 rules that read the values in a shared .vscode folder, plus 45 snippets. VS Code loads a wrong value withou |
| `gpsr-listing-lint` | Audits a product feed row by row against Article 19 of the EU General Product Safety Regulation |
| `green-claim-lint-empco` | Reads your HTML and Markdown product copy and flags the environmental claims Directive (EU) 2024/825 turns int |
| `hardcoded-credential-audit` | Open any config file and see every hardcoded credential — and every setting that quietly undoes your encryptio |
| `hex-image-audit` | Recomputes every record checksum in a .hex or .s19 firmware image and names the bad records, the overlaps, the |
| `hmrc-fraud-prevention-header-lint` | Finds the Gov-Client and Gov-Vendor header mistakes HMRC rejects, in your editor, offline, before you send the |
| `hospital-mrf-lint` | 15 offline rules read your standard charges JSON the way 45 CFR Part 180 and the CMS template do - the dirty s |
| `impressum-lint-de` | 17 Regeln mit Stichtag für Impressum, Footer und Shop-Templates im Repository |
| `ingress-nginx-retirement-lint` | Names the Gateway API field that replaces each retired ingress-nginx annotation — or tells you there isn't one |
| `jct-transition-lint-2026` | 2026年9月30日で80%控除が終わります。10月1日からは50%ではなく70%です（令和8年度税制改正）。請求・仕入コードに残った 0.8 と 0.5、明細ごとの端数処理、T+13桁でない登録番号を、行番号と修正案つ |
| `jdk25-upgrade-blocker-lint` | Finds the Java lines the new LTS removed — 18 rules; 23 findings in one 64-line fixture |
| `jest-snapshot-pii-audit` | 15 rules that find the real customer data your .snap files committed |
| `k8s-removed-api-lint` | 15 checks for the apiVersions kubectl no longer serves, on the manifest open in your editor |
| `kassenbeleg-tse-lint` | 15 Regeln prüfen eine Belegvorlage gegen § 6 KassenSichV und § 146a AO; in der mitgelieferten Beispielvorlage  |
| `ksef-fa3-invoice-lint` | Finds the lines KSeF will reject in a Polish structured invoice XML, before you send it |
| `latex-submission-lint` | Seventeen rules on your .tex file: the statements the editorial office looks for, and the source that breaks t |
| `license-flip-audit` | Finds the dependencies whose licence changed under you - Terraform 1.6+ BUSL, Redis 7.4+ SSPL, Bitnami's Augus |
| `lit-binding-xss-audit` | Finds the lit-html binding positions auto-escaping does not cover, before the component ships |
| `livewire-client-surface-audit` | Marks every line of a Livewire or Blade file that the visitor's browser can call, rewrite or read |
| `livewire3-upgrade-blocker-lint` | The Livewire 2 lines that die quietly in Livewire 3 — named, with the v3 replacement beside each |
| `log-pii-telemetry-lint` | 22 rules that name the lines where a Node or TypeScript service writes personal data into logs, crash reports  |
| `manuscript-disclosure-lint` | 16 rules that catch the statements a journal desk-rejects you for — in your .tex or .md, before you submit |
| `maui-ios-submission-gate` | Reads a .NET MAUI app's iOS Info.plist and Entitlements.plist and names every App Store Review 5.1.1(i) purpos |
| `maven-central-publish-gate` | Read a pom.xml the way the Central Portal reads it, before you burn a release tag |
| `mcp-2026-migration-lint` | The 2026-07-28 MCP revision removed the initialize handshake, sessions, ping and 4 more RPCs. 27 rules find th |
| `mcp-config-audit` | Audit one mcp.json for what an agent config gives away — inline API keys, unpinned npx launches, plaintext rem |
| `mcp-config-guard` | Reads .mcp.json / .vscode/mcp.json / claude_desktop_config.json while you edit it and marks the lines that han |
| `model-card-lint-gpai` | Lints a Hugging Face model card against the Hub metadata spec and the EU AI Act general-purpose AI documentati |
| `mv3-manifest-preflight` | 25 rules over manifest.json: every line Manifest V3 or the Chrome Web Store upload refuses, with the fix besid |
| `nis2-incident-runbook-lint` | Reads your incident-response runbook and says which of the three Article 23 clocks it gets wrong |
| `notebook-share-gate` | 18 rules that read saved .ipynb outputs — 23 findings in the 6-cell sample notebook, 0 in the cleared one |
| `npm-trusted-publish-lint` | Finds the credential in your release workflow that expires before your next release |
| `openapi-security-contract-lint` | Finds the lines in an OpenAPI file that publish an endpoint with no authentication, an API key in the query st |
| `optout-signal-lint` | Finds the ad and analytics code that keeps firing after a visitor’s browser has already sent Global Privacy Co |
| `otel-collector-drift-lint` | Finds the removed components and renamed attributes in an OpenTelemetry Collector config before the upgrade do |
| `outlook-email-html-lint` | Classic Outlook renders with the Word engine, the new Outlook with WebView2. Lint one email file against both  |
| `payroll-deduction-code-audit` | Twelve rules over the deduction-code map, before the January 31 W-2 filing date |
| `payroll-rate-expiry-lint` | The day your rate table stopped being correct, with the line number |
| `pci-payment-page-script-audit` | PCI DSS 4.0.1 requirements 6.4.3 and 11.6.1 have been mandatory since 2025-03-31, and the PCI SSC revised FAQ  |
| `personal-data-map-dsar-audit` | Reads a migration, Prisma schema, Django model or TypeORM entity and marks every column a subject access reque |
| `pg-migration-lock-lint` | Names every statement in a Rails, Django or raw SQL migration that takes a table-blocking Postgres lock, and p |
| `play-release-blocker-lint` | Finds the lines that make Google Play reject your release - target API below 36, Billing Library below 8, 4 KB |
| `pld-liability-window-lint` | 12 rules read your CHANGELOG.md the way Directive (EU) 2024/2853 will read it from 2026-12-09: undated release |
| `pqc-deprecation-lint` | Dates every quantum-vulnerable algorithm in your code against the NIST IR 8547 clock: deprecated after 2030-12 |
| `privacy-manifest-lint` | Checks PrivacyInfo.xcprivacy and your C#, Dart, JS, Swift and Kotlin source for Apple required-reason APIs, an |
| `proto-wire-break-check` | Names the .proto edits that keep compiling and quietly change what old gRPC readers see |
| `pyproject-release-gate` | 19 date-aware checks on the [project] metadata that decides whether your next release uploads |
| `pytest-deprecation-lint` | Marks the lines in your test suite that current pytest no longer runs — and the config keys it silently ignore |
| `rechnung-pflichtangaben-lint-de` | Prüft PHP-Rechnungstemplates von WooCommerce- und WordPress-Shops gegen alle zehn Pflichtangaben des § 14 Abs. |
| `red-doc-en18031-lint` | Checks an EU declaration of conformity for radio equipment against Delegated Regulation (EU) 2022/30 and the E |
| `renpy-release-gate` | Find the .rpy lines that compile clean and only break inside a player's save |
| `robots-txt-ai-crawler-audit` | Checks robots.txt line by line and says what each AI crawler token actually controls - training, AI-search cit |
| `runtime-eol-deploy-block-audit` | Finds the end-of-life runtimes an AI assistant still writes for you — node:20, python3.9, ubuntu-22.04, nodejs |
| `saft-pt-atcud-lint` | 14 verificações ao XML SAF-T (PT) antes da entrega à AT: versão 1.04_01, ATCUD, dados do QR code, hash, NIF, t |
| `security-headers-csp-lint` | Reads security headers and CSP line by line in your config file and names the lines that silently do nothing:  |
| `security-txt-cra-lint` | 13 rules that decide whether a vulnerability report ever reaches you |
| `sepa-pain001-reject-lint` | Find the lines your bank will refuse before you send the batch |
| `sfdx-retirement-lint` | Finds retired API versions and removed sfdx force:* commands in your DX repo before a deploy or a CI run fails |
| `soup-list-lint` | Reads your SOUP register the way an auditor does: 16 rules over clauses 8.1.2, 5.3.3, 5.3.4, 4.3 and 7.1.3. |
| `spdx-license-field-lint` | Reads the licence field in the open manifest and names every deprecated SPDX id, invalid string, PEP 639 lefto |
| `spf-dmarc-record-lint` | 19 offline checks on the SPF, DMARC and DKIM records in your branch — including the DMARC rewrite of May 2026 |
| `sql-card-data-lint` | Names every column, index, view and seed row in a .sql migration that stores card data, with its PCI DSS Requi |
| `stale-standard-citation-lint` | Finds the standards and laws your reStructuredText or Markdown docs still cite after they died, and the date e |
| `stema-kisei-lint` | 記事1本を12ルールで検査し、広告表記の欠落と不明瞭表示を行番号で出す VS Code 拡張 |
| `svg-asset-compliance-lint` | 14 rules over the SVG files your design tool exported, before they become a legal object |
| `swift6-concurrency-lint` | 11 rules that name the .swift lines Swift 6 language mode rejects — 13 findings, 6 build-blocking, on the 47-l |
| `tailwind-v4-upgrade-blocker-lint` | 19 rules that find the Tailwind v3 syntax Tailwind v4 removed or silently redefined, in the file you have open |
| `tax-year-constant-drift-lint` | Finds the tax years, statutory limits, filing thresholds, rates and deadlines hardcoded in payroll and invoici |
| `tdm-reservation-lint` | Finds the robots.txt lines that reserve nothing — retired crawler tokens, shadowed groups, rules above the fir |
| `terraform-provider-pin-lint` | Finds the .tf lines a clean terraform init is still free to move |
| `tfstate-secret-leak-lint` | Names the attributes, outputs and backends that copy a cleartext secret into terraform.tfstate |
| `tls-cert-lifetime-lint` | Finds the 12 settings that break when public TLS certificates fall to 100 days on 2027-03-15: openssl -days, T |
| `uscore-profile-gap-lint` | Finds the FHIR R4 resources still pinned to US Core 3.1.1 or 5.0.1, and the USCDI v3 Patient elements they nev |
| `view-in-browser-leak-audit` | 24 rules read the .html file you are about to open in the browser and flag every line that behaves differently |
| `vsix-publish-lint` | Find the package.json lines that stop vsce before you run the release build |
| `wcag21-aa-legal-baseline-audit` | Audits HTML, JSX, Vue, Twig, Blade, ERB and Razor markup against the 24 WCAG 2.1 Level AA checks that 28 CFR 3 |
| `wcag22-css-lint` | Reads your stylesheet and names the success criterion each rule breaks, including the three WCAG 2.2 added tha |
| `wordpress-privacy-lint` | Finds the 12 author-side privacy duties your plugin PHP breaks, with the article and the fix on every line. |
| `wp-plugin-review-gate` | The readme.txt and plugin-header lines that send a wordpress.org submission back, found before you submit |

Docs and free web versions: https://getreadystack.com/?ref=gh-action · Support: https://getreadystack.com/support
