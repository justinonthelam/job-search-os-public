# Job Search OS

An AI-native job search system built on Claude Code. I built this to run my own search — it's open source because it works.

I was tired of manually maintaining a job search pipeline. Tracking applications in a spreadsheet, rewriting the same resume bullets for each company, scrambling to prepare for recruiter screens — all of that is work that shouldn't require human attention.

---

## What it does

### Highly tailored resumes that actually convert

Reads deep documentation of your career and writes the sharpest argument that you're the right person for this specific role. Not keyword stuffing — a reasoned draft that leads with the right story, reordered for what this JD actually cares about.

In my search, tailored resumes from this system produced a **5x higher recruiter callback rate** on cold applications compared to my general resume.

---

### Mass job analysis — score, prioritize, and apply in parallel

Paste a batch of job postings. The system researches each company live, scores fit on two dimensions, ranks the list, and drafts tailored resumes for any you want to apply to — all in parallel.

---

### Recruiter prep in minutes, not an hour

Run `/new-job` when a call is scheduled. Get a full prep doc: company brief, "why this role" answer, stories to lead with, questions to ask, comp to probe.

---

## How it works

The core idea: you maintain the raw context (who you are, what you've done, what you care about), and Claude produces everything else. Job analysis, tailored resumes, recruiter prep docs, interview prep, tracker updates — all derived from source files you own and keep honest.

This is not a tool that applies to jobs for you. It's a system that makes the decisions and craft faster and better — you still decide where to apply, you still do the interviews. Claude handles the work that used to eat up the hour before and after.

The system lives in a handful of source files:

- **`me.md`** — Your priorities, constraints, career history, compensation expectations. The most important file in the system. Keep it honest and current.
- **`references/`** — Deep documentation for each role in your career. Strategic context, what you built, the numbers. This is what Claude reads before writing a resume bullet.
- **`TRACKER.md`** — Pipeline tracker. Claude maintains this; you don't touch it.

The repo ships with a complete mock profile for **Alex Chen** — a fictional Senior PM with Notion and Intercom experience. You can run any skill immediately to see how the system works, then run `/setup` when you're ready to make it your own.

---

## Skill details

### Tailored resumes

Generic resumes fail. Recruiters screen for candidates who look like they were made for the specific role, and the only way to do that is to tailor every bullet to what that company actually cares about.

This system reads the job description, reads deep documentation of your career (the real stories — mechanisms, numbers, decisions), and writes the sharpest possible argument that you're the right person for that specific job. Not a find-and-replace of keywords. A reasoned draft that leads with the right story for this role, reorders bullets to match the JD's priorities, and cuts anything that doesn't pull its weight.

---

### Job analysis

When you're evaluating 20 job postings at once, the bottleneck isn't reading JDs. It's the research: is this company worth your time? Does your background actually match what they're hiring for, or just superficially? Will a recruiter doing a 10-second scan even see the fit?

Paste a batch of job postings. The system:
1. Researches each company live (funding, trajectory, recent news, product direction)
2. Scores the role on two dimensions: actual fit to your background, and how a recruiter will read your candidacy
3. Ranks the full list so you know where to focus
4. For any job you want to apply to — creates the tailored resume automatically, in parallel

The entire batch runs at once. You get a ranked table, full analysis per job, and resumes ready to review — without manually researching a single company.

---

### Recruiter prep

Before every recruiter screen, you need: a sharp company brief, an honest answer to "why this role" that will hold up under follow-up, specific stories from your background to lead with, and the right questions to ask. Building that from scratch takes an hour of research and prep.

When a recruiter call is scheduled, run `/new-job`. The system does live web research on the company, reads your career history and the job description, and produces a prep doc with:
- **Company brief** — what they do, recent trajectory, health signals, anything a PM candidate should know
- **Why this job** — the honest internal answer, plus a polished interviewable version ready to say out loud
- **How to position yourself** — which specific stories from your background to lead with, tailored to what this role actually needs
- **Questions to ask** — derived from your priorities and what the role suggests, not a generic bank
- **Comp and logistics to probe**

Ready in minutes. Walking into the call prepared instead of winging it.

---

## Available skills

| Skill | What it does |
|-------|-------------|
| `/setup` | Onboard by replacing Alex Chen's mock profile with your own, one section at a time |
| `/analyze-job` | Score a job: fit signal, recruiter read, company quality, flags. Batch mode analyzes many jobs in parallel. |
| `/new-job` | When a recruiter call is scheduled — generates the full recruiter prep doc |
| `/generate-md-resume` | Draft a tailored resume for a specific role, pulling from your references |
| `/generate-pdf-resume` | Render an approved resume draft to PDF |
| `/recruiter-prep` | Recruiter prep doc: company brief, positioning, questions to ask, comp to probe |

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
git clone https://github.com/justinonthelam/job-search-os-public
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

## On keeping `me.md` honest

The quality of every output is limited by the quality of the source files. A `me.md` that understates your real priorities will produce recruiter prep that doesn't reflect what you actually care about. A `references/` folder that only has the polished version of your work will produce resumes that miss the specific mechanisms that make a story credible.

Keep `me.md` honest. Write the real reason you left your last job, not the interview version. Write what you actually want, not what sounds good. Claude will translate the honesty into appropriate interview framing — it doesn't need you to pre-sanitize.
