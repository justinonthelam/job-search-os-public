# Job Search OS — Claude Context

## Core Principle

Raw context in, derived outputs out. You maintain source files (`me.md`, job files, `references/`). Claude produces everything else: analysis, interview prep, tier assessments, tracker updates, company research.

Never ask you to maintain derived state.

**Raw inputs you own:**
- `me.md` — your priorities, constraints, career history
- `references/` — detailed project and initiative documentation
- Job descriptions — pasted into job files
- Post-interview notes — written freely into job files

**Derived outputs Claude produces:**
- Fit analysis
- Interview prep
- Company research
- Brand/tier assessments
- Tracker updates
- Target company list updates

## Directory Structure

```
/
├── TRACKER.md               # Pipeline tracker — all applications and their status
├── jobs/                    # One subfolder per job opportunity
│   └── [slug]/              # e.g. notion-pm-enterprise-2026-04-08/
│       ├── jd.md            # Job description (saved when resume is drafted)
│       ├── resume.md         # Resume draft (when created)
│       ├── recruiter-prep.md # Recruiter prep doc (when call is scheduled)
│       └── [slug].md        # Full job file (only if past recruiter screen)
├── companies/               # Target companies list (Claude maintains)
├── references/              # Your project/initiative documentation
│   └── resume-master.md     # General-purpose resume; quality benchmark for tailored drafts
├── interview-prep/          # Shared interview preparation resources
├── resume-builder/          # Resume drafting and rendering toolchain
│   ├── resume-template.md   # Blank structural template (no content) for resume drafts
│   └── build.js             # Renderer — converts content object to .docx, then PDF
├── .claude/commands/        # Claude skill docs (also invocable as slash commands)
│   ├── generate-md-resume.md   # Skill: how Claude reasons and writes a resume draft
│   ├── generate-pdf-resume.md  # Skill: how Claude converts an approved draft to PDF
│   └── recruiter-prep.md       # Skill: how Claude reasons and writes a recruiter prep doc
├── analyze/                 # Batch job analysis staging area (Claude maintains)
│   ├── inbox/               # Saved job postings, permanent JD archive — never deleted
│   └── analysis-log.md      # Single running log of all batch analyses, newest first
├── offers/                  # Active offer comparisons
├── me.md                    # Your priorities, constraints, preferences
└── CLAUDE.md                # This file
```

## Core Workflows

### Adding a New Job

When you apply to a role, add it to `TRACKER.md` only — no job file or folder needed yet.

Use `/new-job` when a recruiter call is scheduled. Claude will generate a recruiter prep doc (`recruiter-prep.md`) in the job folder. If the folder already exists from the resume drafting step, Claude reads `jd.md` and `resume.md` from it. If not (inbound role), Claude asks for the JD and URL, saves `jd.md`, then generates the prep doc.

A full job file (AI analysis, Why This Job, interview prep) is only created if you advance past the recruiter screen.

File naming: `jobs/[company]-[role]-[YYYY-MM-DD]/[company]-[role]-[YYYY-MM-DD].md`

Each job lives in its own subfolder. The job file and any derived outputs (resume.md, rendered PDF) all go inside that folder.

### Recruiter Prep

Tell Claude: *"I have a recruiter call scheduled for [Company]"* or just use `/new-job`.

Claude reads `.claude/commands/recruiter-prep.md`, then reads `jd.md`, `resume.md` (if it exists), `me.md`, and `references/`, does live web research on the company, and produces `recruiter-prep.md` in the job folder. The doc covers: company brief, why this job (honest + interviewable), how to position yourself, questions to ask, and comp/logistics to probe.

### Analyzing a Job

Paste a job description (and optionally a URL) and use `/analyze-job`.

**Single job:** Claude reads `me.md`, `references/`, and `companies/target-list.md`, does live web research, and returns an inline verdict. No file created. Output: score out of 10, fit signal, recruiter read, flags. You drive next steps.

**Batch (multiple jobs):** Paste all jobs in one message, each block separated by `---`, URL on the first line of each block. Claude saves each job to `analyze/inbox/` (permanent JD archive), spins up parallel subagents, and prepends a new batch section to `analyze/analysis-log.md`. The ranked table (score, company, role, original URL, verdict) is surfaced inline. Inbox files are never deleted — if you decide to apply later, Claude moves the inbox file into the job folder as `jd.md` and drafts a resume.

To apply to analyzed jobs: say "apply to all X/10+" or "apply to [Company]". Claude filters the log, confirms the list, then runs resume drafting in parallel — moving each inbox file into its job folder in the process.

### Preparing for an Interview

Tell Claude: *"prep me for my [Company] interview"* or *"I have a [stage] interview tomorrow"*

Claude will read the job file, do live web research on the company, read your `references/` and `me.md`, and produce:
- Company context relevant to *your* interests (not a generic overview)
- Talking points that map your experience to their actual requirements
- Questions to ask — derived from what matters to you and what the role suggests, not a static bank
- Red flags to probe based on your priorities
- How to close

The output lives in the job file. It improves as Claude's reasoning improves.

### After an Interview

Dump your raw thoughts into the Notes section of the job file. Don't structure it. Claude can read unstructured notes and reason about patterns, next steps, and what to adjust.

If you want pattern analysis across multiple interviews, just ask: *"look at my recent interview notes and tell me what patterns you see."*

### Updating Status

Tell Claude: *"update this to interviewing"* or *"I got rejected, mark it and update the tracker."*

Claude updates the frontmatter and the tracker. You don't touch either.

Status values: `sourced` → `applied` → `screening` → `interviewing` → `offer` → `accepted` / `rejected` / `archived`

### Updating the Target Company List

Tell Claude: *"search for AI-first PM roles and update the target list"* or *"refresh the company list."*

Claude uses web search, cross-references your priorities in `me.md`, and updates `companies/target-list.md`. The tier assessment is Claude's reasoned judgement — based on AI investment, product trajectory, prestige, and fit against your stated values — not a hardcoded label.

### Drafting a Resume

1. **Draft:** Ask Claude to draft a resume. Claude creates the job folder if it doesn't exist, saves the job description as `jd.md`, reads `.claude/commands/generate-md-resume.md`, pulls from `references/`, writes `resume.md` to the job folder, and summarizes the reasoning.

2. **Review:** Read the draft and make any edits directly. Iterate with Claude as needed.

3. **Render:** When the draft looks good, tell Claude to render it. Claude reads `.claude/commands/generate-pdf-resume.md`, parses the draft into the `build.js` content schema, runs the build, converts the `.docx` to PDF, and saves it to the job folder.

Output: a PDF in the job subfolder. The `.docx` is deleted after conversion.

**Files Claude manages:** `resume-builder/build.js` (content object is replaced each render), the output PDF

### Comparing Offers

Create `offers/comparison-[date].md` and ask Claude to analyze trade-offs against your priorities in `me.md`.

## Job File Template

```markdown
---
company: [Company Name]
role: [Role Title]
url: [Job Posting URL]
date_added: YYYY-MM-DD
status: sourced
source: linkedin | recruiter | referral | company_site | other
location: [City/Remote/Hybrid]
---

## Job Description

## Why This Job

**Honest internal answer:**

**What to say in the interview:**

**What makes this credible for you:**

## AI Analysis

## Interview Prep

## Notes
```

## Tips

- Keep `me.md` honest and current — it's the most important file in this system
- Write post-interview notes freely; don't structure them for Claude
- Add new project references to `references/` whenever you do significant work worth capturing
- Commit after major milestones so git history reflects your search timeline
