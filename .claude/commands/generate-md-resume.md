# Resume Draft Skill

Generate a resume draft for review before rendering.

## The operative principle

A recruiter skimming this resume in 10 seconds should immediately want to interview the candidate for *this specific role*. The hiring manager reading it deeply should too. Every word earns its place against that test — nothing else.

## How to reason

Start from the job posting, not from the candidate's history. Read the JD and ask: what does this role actually need? What kind of PM would excel here?

Then read `me.md` and all files in `references/` — these are raw source material, not derived state. Don't map JD requirements to reference sections mechanically. Don't follow a lookup path. Read freely and let the evidence determine what leads. A story from enterprise work might be the right lead for an AI role. The founder story might be the right lead for an enterprise role. The angle emerges from the evidence — don't commit to it before reading.

The goal is the sharpest possible argument that this is the right person for *this* job — not a comprehensive tour of their history. Every metric and claim must serve that argument. A number that signals rigor but isn't relevant to the role is decoration, not evidence — cut it.

## Resume-master as approved prose

Read `references/resume-master.md` only after reading all other references. It is a prose benchmark and anti-fabrication guard — not a source of evidence. Opening it early anchors you to its selection of bullets before the references have had a chance to surface better ones.

After reading resume-master, go bullet by bullet through your planned draft and ask: does an approved version of this bullet already exist in the master? If yes, copy it exactly as the starting point. The bar to rewrite is high — only diverge when the JD demands framing that genuinely doesn't exist in the master, and only then. Rewriting from scratch introduces errors and loses validated phrasing. Do not copy its structure or bullet count — a role that requires a multi-beat story may need 4 short bullets; a role where one metric does all the work may need 1.

## Writing the profile

3 sentences, each serving a distinct purpose:
- **Sentence 1:** Who they are + years of experience. Do not name specific companies here.
- **Sentence 2:** What they've done at scale — lead with the most relevant concrete metric or outcome, not an abstract description. Mirror the JD's vocabulary.
- **Sentence 3:** The memorable hook — the founder angle, a key credential, or an unexpected outcome.

Never attach a differentiator directly to the years-of-experience claim ("8 years building AI products" implies AI the whole career — scope it separately). Never use generic PM clichés ("passionate about product", "collaborative leader", "moves fast with data").

## Writing bullets

**Structure:** Use cause-effect structure — mechanism + outcome: "Did X by doing Y, resulting in Z." The "by" clause proves PM craft, not luck.

**Verbs:** Every bullet starts with a strong past-tense action verb. Never: "Responsible for", "Worked on", "Helped with", "Supported", "Contributed to".

**Metrics:** Include specific metrics always. Keep them exactly as they appear in source material — never round or vague-ify. "$18M+ ARR" stays "$18M+".

**Specificity:** Name the product, name the mechanism, name the insight. "Identified the account owner as the missing buyer persona" not "diagnosed a UX problem". When approved prose in `references/resume-master.md` already has the right specific framing, copy it exactly — fresh composition loses specificity that validated phrasing preserves.

**Accessible language:** Before using technical or insider terms, ask: would a non-technical recruiter understand this? If not, translate or cut.

**No passive voice, no hedging.** Every bullet implies full ownership and delivery.

**Length:** Max 2 lines per bullet — this is a line-length constraint, not a bullet-count constraint.

**Narrative arcs:** When the reference material tells a causal chain — diagnosis → insight → what was built → validation — preserve it across multiple bullets rather than collapsing into one. Compression loses the proof of craft. A 4-bullet story that shows how you thought is stronger than a 2-bullet summary that only shows what happened.

## Bolding

Bold the phrase a skimming recruiter should notice — typically the key concept or outcome.
- Bold what best matches what the target role cares about (AI roles: bold AI concepts; growth roles: bold conversion/ARR metrics)
- Never bold the action verb alone
- Never bold filler or transitional phrases
- Never bold more than 2 segments per bullet
- If everything is bold, nothing is — use it sparingly

## Ordering and coverage

- Reorder bullets within each role to put the most JD-relevant ones first
- If a bullet is irrelevant to the role and the role already has enough strong bullets, remove it rather than keep filler
- Never repeat the same concept across multiple bullets in the same role

## Integrity rules

- Never fabricate — every bullet must be backed by `references/`
- Keep metrics exactly as they appear in source material
- Never invent projects, skills, or results not in source material — ask if needed

## Formatting rules

- Save the draft to the job folder (e.g. `jobs/[slug]/resume.md`). Reason about the right location from context if no job folder exists.
- Use `resume-builder/resume-template.md` for structure — section labels, role headers, date format, education line
- No em dashes
- No LLM clichés or filler phrasing

## When done

- One short paragraph: the candidate angles you considered, which you chose and why, what tradeoffs you made, and anything in the JD you couldn't cover
- Invite review before rendering
- When approved, render using `/generate-pdf-resume`
