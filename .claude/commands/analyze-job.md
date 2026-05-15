# Analyze Job Skill

Tell the user whether a job is worth applying to, rated on both fit and perceived credibility.

This skill handles two modes:
- **Single job:** Paste a URL and JD inline. Returns an inline verdict, no file created.
- **Batch mode:** Paste multiple jobs in one message. Claude saves each to `analyze/inbox/`, spins up parallel subagents to analyze them, then appends results to the single running log at `analyze/analysis-log.md`.

---

## Single Job Mode

### Inputs

Paste a job description (and optionally a URL) directly into the conversation.

### How to reason

Read `me.md`, all files in `references/`, and `companies/target-list.md`. Do live web research on the company: funding, trajectory, product direction, recent news.

Ask two distinct questions:

1. **Fit** — Does this role match the user's background, skills, and priorities? What kind of PM would thrive here, and is the user that person?
2. **Their read** — How will a recruiter doing a first pass and a hiring manager reviewing finalists actually perceive this profile? Does the background pattern-match to the implicit candidate profile this role is written for?

The score should reflect both. A role can be a strong personal fit but still score low if the profile is unlikely to clear the recruiter screen. A role can have gaps but still score high if the background is an unusually strong match for what they're looking for.

Reason about the company as if it weren't on the target list, then check if it is. Use the existing list as calibration for brand and tier. The full tier and grade scales are defined in `companies/target-list.md` — read them before assessing. Flag any tier that warrants caution based on those definitions.

No scoring rubric. No formula. Reason from the full context and commit to a score.

### Required outputs

Default response is the TLDR only. Do not produce the detailed sections unless explicitly asked.

**TLDR (always output this)**
First line: score and one-sentence verdict, bolded. Then each distinct thought as its own bullet — fit signal, recruiter read, company quality, any flags. Enough to make the apply/skip decision. No headers, no paragraph blocks.

**Detailed sections (only on request)**
If asked for more, produce whichever sections are relevant:
- **Fit** — grounded in `references/`, specific to this role
- **Gaps** — honest; call out anything disqualifying
- **Their read** — how recruiters and the HM will likely perceive this candidacy
- **Brand and Tier** — reasoned assessment with grade and tier
- **Trajectory** — is this company worth joining right now

Use as much or as little space as each one warrants. Don't pad weak sections.

---

## Batch Mode

### Detecting batch mode

Batch mode activates when multiple jobs are provided in one message. The format is:

```
URL
[job description text]

---

URL
[job description text]

---
...
```

URL is the first line of each block. Everything after it until the next `---` separator is the job description. If no URL is present, use `—` as the URL.

### Step 1: Save inbox files

Before analyzing anything, save each job to `analyze/inbox/` as a markdown file. Derive a slug from the company name and role title in the JD. File format:

```
analyze/inbox/[company-slug]-[role-slug].md
```

File contents:
```markdown
---
url: [URL]
date_added: YYYY-MM-DD
---

[full job description text]
```

Confirm how many jobs were parsed and saved before proceeding.

### Step 2: Spawn parallel subagents

Spin up one subagent per job simultaneously. Do not wait for one to finish before starting the next.

Each subagent receives:
- The full job description text
- The URL
- Instructions to read `me.md`, all files in `references/`, and `companies/target-list.md`
- Instructions to do live web research on the company
- The same analysis rubric as single-job mode (fit, their read, score, flags)
- Instructions to return a structured result (see format below)

Subagents return text only — they do not write files.

### Step 3: Collect and update the analysis log

Once all subagents complete, the orchestrator:

1. Ranks new jobs by score (highest first)
2. Updates `analyze/analysis-log.md` — inserts new rows into the single running table and appends new job detail sections at the bottom of the details list

If the file does not exist yet, create it with the header first.

### Analysis log format

The file has one running table at the top (all jobs ever analyzed, sorted by score descending) and a flat list of job detail sections below it. There are no per-batch sections — everything feeds into the same table and the same list.

```markdown
# Job Analysis Log

---

## All Jobs

| Score | Company | Role | Verdict | Date | URL |
|-------|---------|------|---------|------|-----|
| 8/10 | Acme | Senior PM | Strong fit, credible candidacy | 2026-05-14 | [Link](https://...) |
| 5/10 | Beta Co | PM | Decent fit, brand too weak | 2026-05-14 | [Link](https://...) |

---

## Job Details

### Acme — Senior PM
**Score: 8/10 | 2026-05-14**

[TLDR bullets]

---

### Beta Co — PM
**Score: 5/10 | 2026-05-14**

[TLDR bullets]

---
```

When adding new jobs: insert new rows into the table (maintaining score-descending sort), then append new detail sections at the end of the Job Details list.

The URL in the rankings table links to the original online job posting — not the local inbox file. This is the permanent reference in case you decide to apply later after the bar lowers.

### Step 4: Surface the summary inline

After updating the log, paste the rankings table inline in the conversation so it's immediately visible. Tell the user the full analysis is at `analyze/analysis-log.md`.

---

## Applying to analyzed jobs

When you say something like "apply to all 6/10+, create resumes" or "let's apply to [Company]":

1. Filter `analyze/analysis-log.md` for jobs at or above the stated threshold (or the named company)
2. Show the list: "These N jobs qualify: X, Y, Z — proceeding with resumes for all"
3. Wait for confirmation
4. For each qualifying job, in parallel:
   - Create the job folder: `jobs/[company-slug]-[role-slug]-[date_added]/`
   - Move the inbox file from `analyze/inbox/[slug].md` to `jobs/[folder]/jd.md`
   - Run the resume drafting workflow (read `.claude/commands/generate-md-resume.md`, pull from `references/`, write `resume.md`)

If the inbox file has already been moved (e.g. applied previously), skip the move and proceed with whatever JD file exists in the job folder.

---

## Inbox file lifecycle

- **Created:** when a batch is submitted for analysis
- **Stays in inbox:** after analysis, regardless of score — it's the permanent JD archive
- **Moved to job folder:** when you decide to apply (moved, not copied)
- **Never deleted:** inbox files are kept even for skipped jobs so the full JD can be found later if the bar lowers

---

## Integrity rules

- Never fabricate company facts — use web research and flag uncertainty if sources are thin
- Never fabricate the user's experience — every fit claim must be backed by `references/`
- The score comes first and is unambiguous — no hedged conclusions

## Formatting rules

- No em dashes
- No LLM clichés or filler phrasing
