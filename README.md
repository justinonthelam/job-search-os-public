# Job Search OS

An AI-native job search system built on Claude Code. Raw context in, derived outputs out.

---

## What this is

I built this because I was tired of manually maintaining a job search pipeline. Tracking applications in a spreadsheet, rewriting the same resume bullets for each company, scrambling to prepare for recruiter screens — all of that is work that shouldn't require human attention.

The core idea: you maintain the raw context (who you are, what you've done, what you care about), and Claude produces everything else. Job analysis, tailored resumes, recruiter prep docs, interview prep, tracker updates — all derived from source files you own and keep honest.

This is not a tool that applies to jobs for you. It's a system that makes the decisions and craft faster and better — you still decide where to apply, you still do the interviews. Claude just handles the work that used to eat up the 20 minutes before and after.

---

## How it works

The system lives in a handful of source files:

- **`me.md`** — Your priorities, constraints, career history, compensation expectations. The most important file in the system. Keep it honest and current.
- **`references/`** — Deep documentation for each role in your career. Strategic context, what you built, the numbers. This is what Claude reads before writing a resume bullet.
- **`TRACKER.md`** — Pipeline tracker. Claude maintains this; you don't touch it.

Everything else is derived. When you ask Claude to draft a resume, it reads the JD, reads your references, and writes the sharpest possible argument that you're the right person for that specific job. When you ask Claude to prep you for a recruiter screen, it does live web research on the company and produces a prep doc calibrated to your priorities.

The repo ships with a complete mock profile for **Alex Chen** — a fictional Senior PM with Notion and Intercom experience. You can run any skill immediately to see how the system works, then run `/setup` when you're ready to make it your own.

---

## Available skills

| Skill | What it does |
|-------|-------------|
| `/setup` | Onboard by replacing Alex Chen's profile with your own, one section at a time |
| `/analyze-job` | Paste a JD and get a score, fit signal, recruiter read, and flags. Batch mode available for multiple jobs. |
| `/new-job` | When a recruiter call is scheduled — generates the recruiter prep doc for the job folder |
| `/generate-md-resume` | Draft a tailored resume for a specific role, pulling from your references |
| `/generate-pdf-resume` | Render an approved resume draft to PDF via the `build.js` renderer |
| `/recruiter-prep` | Full recruiter prep doc: company brief, positioning, questions to ask, comp to probe |

---

## Prerequisites

- **Claude Code** — [claude.ai/code](https://claude.ai/code)
- **Anthropic API key** — for running Claude Code
- **Node.js** — for resume rendering (`resume-builder/build.js`)
- **LibreOffice** — for PDF conversion (the renderer produces `.docx` first, then converts)

Install the `docx` dependency for the renderer:

```bash
cd resume-builder && npm install docx
```

---

## Getting started

```bash
git clone https://github.com/[your-username]/job-search-os-public
cd job-search-os-public
cd resume-builder && npm install && cd ..
```

The repo ships with a complete mock profile for Alex Chen. You can run any skill immediately to see how the system works, then run `/setup` when you're ready to make it your own.

To see an example of a complete job folder, look at `jobs/linear-sr-pm-2026-03-15/` — it has a saved JD, a tailored resume draft, a recruiter prep doc, and a full job file with interview prep and notes.

---

## Directory structure

```
/
├── CLAUDE.md               # System instructions — how Claude operates
├── TRACKER.md              # Pipeline tracker (Claude maintains)
├── me.md                   # Your profile, priorities, and career history
├── jobs/                   # One subfolder per opportunity
│   └── [slug]/
│       ├── jd.md           # Saved job description
│       ├── resume.md       # Tailored resume draft
│       ├── recruiter-prep.md
│       └── [slug].md       # Full job file (after recruiter screen)
├── companies/
│   └── target-list.md      # Target company list with tier/brand grades
├── references/             # Deep role documentation — source material for resumes
│   └── resume-master.md    # General-purpose resume, used as prose benchmark
├── interview-prep/
│   └── behavioral-prep.md  # STAR story bank
├── resume-builder/
│   ├── resume-template.md  # Blank template for resume drafts
│   └── build.js            # Renderer — .md to .docx to PDF
├── analyze/
│   ├── analysis-log.md     # Running log of all analyzed jobs
│   └── inbox/              # Permanent JD archive for batch analysis
└── .claude/commands/       # Skill definitions (invokable as slash commands)
```

---

## Key workflows

### Analyze a job

Paste a job description (with a URL) and run `/analyze-job`. You get a score, fit signal, recruiter read, and flags. For multiple jobs at once, separate them with `---` — Claude saves them to `analyze/inbox/`, analyzes in parallel, and updates the running log.

### Draft a resume

Tell Claude "draft a resume for [Company]" or run `/generate-md-resume`. Claude reads the JD, reads all your `references/` files, and writes the sharpest possible tailored resume. Review the draft, iterate if needed, then run `/generate-pdf-resume` to render it.

### Prep for a recruiter call

When a recruiter call is scheduled, run `/new-job`. Claude generates a recruiter prep doc: company brief (from live web research), why this job (honest + interviewable), how to position yourself, questions to ask, comp to probe.

---

## On keeping `me.md` honest

The quality of every output is limited by the quality of the source files. A `me.md` that understates your real priorities will produce recruiter prep that doesn't reflect what you actually care about. A `references/` folder that only has the polished version of your work will produce resumes that miss the specific mechanisms that make a story credible.

Keep `me.md` honest. Write the real reason you left your last job, not the interview version. Write what you actually want, not what sounds good. Claude will translate the honesty into appropriate interview framing — it doesn't need you to pre-sanitize.
