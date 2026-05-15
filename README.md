# Job Search OS

An AI-native job search system built on Claude Code. I built this to run my own search — it's open source because it works.

---

## What it does

### Highly tailored resumes that actually convert

Generic resumes fail. Recruiters screen for candidates who look like they were made for the specific role, and the only way to do that is to tailor every bullet to what that company actually cares about.

This system reads the job description, reads deep documentation of your career (the real stories — mechanisms, numbers, decisions), and writes the sharpest possible argument that you're the right person for that specific job. Not a find-and-replace of keywords. A reasoned draft that leads with the right story for this role, reorders bullets to match the JD's priorities, and cuts anything that doesn't pull its weight.

In my search, tailored resumes from this system produced a **5x higher recruiter callback rate** on cold applications compared to my general resume.

---

### Mass job analysis — score, prioritize, and apply in parallel

When you're evaluating 20 job postings at once, the bottleneck isn't reading JDs. It's the research: is this company worth your time? Does your background actually match what they're hiring for, or just superficially? Will a recruiter doing a 10-second scan even see the fit?

Paste a batch of job postings. The system:
1. Researches each company live (funding, trajectory, recent news, product direction)
2. Scores the role on two dimensions: actual fit to your background, and how a recruiter will read your candidacy
3. Ranks the full list so you know where to focus
4. For any job you want to apply to — creates the tailored resume automatically, in parallel

The entire batch runs at once. You get a ranked table, full analysis per job, and resumes ready to review — without manually researching a single company.

---

### Recruiter prep in minutes, not an hour

Before every recruiter screen, you need: a sharp company brief, a honest answer to "why this role" that will hold up under follow-up, specific stories from your background to lead with, and the right questions to ask. Building that from scratch takes an hour of research and prep.

When a recruiter call is scheduled, run `/new-job`. The system does live web research on the company, reads your career history and the job description, and produces a prep doc with:
- **Company brief** — what they do, recent trajectory, health signals, anything a PM candidate should know
- **Why this job** — the honest internal answer, plus a polished interviewable version ready to say out loud
- **How to position yourself** — which specific stories from your background to lead with, tailored to what this role actually needs
- **Questions to ask** — derived from your priorities and what the role suggests, not a generic bank
- **Comp and logistics to probe**

Ready in minutes. Walking into the call prepared instead of winging it.

---

## How it works

You maintain three source files. Claude produces everything else.

- **`me.md`** — Your priorities, constraints, career history, compensation expectations. The most important file. Keep it honest — Claude will translate honesty into appropriate interview framing.
- **`references/`** — Deep documentation for each role: what you built, why it mattered, the numbers, the mechanisms. This is what Claude reads before writing a resume bullet.
- **`TRACKER.md`** — Pipeline tracker. Claude maintains this; you don't touch it.

Job analysis, tailored resumes, recruiter prep docs, interview prep, tracker updates — all derived from your source files.

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

## Getting started

**Prerequisites:** [Claude Code](https://claude.ai/code), an Anthropic API key, Node.js, and LibreOffice (for PDF rendering).

```bash
git clone https://github.com/justinonthelam/job-search-os-public
cd job-search-os-public
cd resume-builder && npm install && cd ..
```

The repo ships with a complete mock profile for **Alex Chen** — a fictional Senior PM with Notion and Intercom experience. You can run any skill immediately to see how the system works, then run `/setup` when you're ready to make it your own.

To see a complete example, look at `jobs/linear-sr-pm-2026-03-15/`: a saved JD, a tailored resume draft, a full recruiter prep doc, and a job file with AI analysis, interview prep, and post-call notes.

---

## Directory structure

```
/
├── CLAUDE.md               # System instructions
├── TRACKER.md              # Pipeline tracker (Claude maintains)
├── me.md                   # Your profile, priorities, and career history
├── jobs/                   # One subfolder per opportunity
│   └── [slug]/
│       ├── jd.md           # Saved job description
│       ├── resume.md       # Tailored resume draft
│       ├── recruiter-prep.md
│       └── [slug].md       # Full job file (after recruiter screen)
├── companies/
│   └── target-list.md      # Target company list with brand/tier grades
├── references/             # Deep role documentation — source material for resumes
│   └── resume-master.md    # General-purpose resume, used as prose benchmark
├── interview-prep/         # Shared prep resources
├── resume-builder/
│   ├── resume-template.md  # Blank template for resume drafts
│   └── build.js            # Renderer — .md to .docx to PDF
├── analyze/
│   ├── analysis-log.md     # Running log of all analyzed jobs
│   └── inbox/              # Permanent JD archive for batch analysis
└── .claude/commands/       # Skill definitions (invokable as slash commands)
```
