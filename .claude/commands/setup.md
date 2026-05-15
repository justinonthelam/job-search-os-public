# Setup Skill

Onboard a new user by helping them replace the Alex Chen mock data with their own profile.

## What this skill does

When a new user runs /setup, walk them through replacing `me.md` with their own profile, one section at a time. This is conversational — not a form. Don't dump all questions at once. Listen to their answers, write each section to me.md before moving to the next, and adjust your questions based on what they tell you.

---

## Opening

Start with this brief explanation (3-4 sentences max):

"This system works by keeping your raw context — who you are, what you want, what you've done — in a set of files that Claude reads before doing any work. Everything else (analysis, resumes, interview prep, tracker updates) is derived from those files. The repo ships with a complete mock profile for Alex Chen so you can see how it works immediately. /setup helps you replace that with your own information."

Then: "I'll go through me.md section by section. You answer, I write. The whole thing should take 10-15 minutes. Ready?"

Wait for confirmation before starting.

---

## Section-by-section flow

Work through these sections in order. After each one, write the content to me.md before asking the next question. Don't ask multiple sections at once.

### 1. Who You Are

Ask: "Start with who you are professionally — a few sentences about your background and what you're best at. Don't overthink it."

After they answer, draft a 2-3 sentence "Who I Am" paragraph and write it to me.md. Confirm it with them before moving on.

### 2. Contact

Ask: "Email, phone, and location? I'll use these for the contact section."

Write the contact section. Don't make it complicated.

### 3. Job Search Parameters

Ask: "What roles are you targeting? What are your comp expectations — what did you make at your last role, and what are your floors for cash and total comp? Are you looking for a specific geography or is remote an option?"

Follow up naturally if they give partial answers. Write a clear parameters section with target roles, focus, comp (last comp + floors), location, and start date.

### 4. What You're Optimizing For

Ask: "What matters most to you in your next role? Don't give me a LinkedIn answer — what do you actually care about? What would make you take one offer over another?"

Listen carefully. Derive a priority-ordered list from what they tell you. Show them the list before writing it and ask if the ranking feels right. Write it to me.md.

### 5. Deal-Breakers

Ask: "What are your hard no's — things that would make you immediately disqualify a company or role, no matter how good the rest of the opportunity looks?"

Write a clean deal-breakers section. Include role constraints (title, scope) if they mention them.

### 6. Career Timeline

Ask: "Walk me through your career in order — company, role, and what you did there. Keep it brief for now, we'll go deeper on each role separately."

Build a career timeline table from their answer. Confirm dates and order.

### 7. Departure Context

Ask: "How did you leave your last role — laid off, left voluntarily, or something else? What's your honest read on why you left?"

Write a departure context section. Frame it in a way that's honest but interview-ready.

### 8. Work History — Key Stories

Ask: "Let's go deeper on your most recent role. What were you working on, and what are you proudest of? Give me the real story, not the resume version."

After they answer: write a work history section for that role with strategic context, work streams, and key numbers. Then ask: "Want to do the same for your previous role, or move on to the next section?"

Continue for each role they want to cover. Don't rush this — the depth here is what makes the analysis, resume, and interview prep outputs good.

### 8. Core Competencies

Ask: "If you had to name 3-4 things you're genuinely better at than most PMs, what would they be?"

Write a concise core competencies section.

### 9. Personal Background

Ask: "Quick personal background — where did you go to school, and what do you do outside work?"

Keep this brief. 2-3 sentences.

---

## After me.md is done

Say: "me.md is done. One more thing — do you want to add a reference doc for your most recent role? Reference docs are the detailed source material that Claude reads before writing a resume or interview prep. The more detail you give, the better the outputs."

If yes: "Tell me about your most recent role in detail — what was the product, what was the problem you were solving, what specifically did you ship, and what were the numbers. Go long — this is raw material, not a resume."

Write the reference doc to `references/[company-slug]-reference.md` as they talk.

---

## Closing

After me.md (and optionally the reference doc) are done:

"You're set up. Here's what you can do now:

- **/analyze-job** — Paste a job description and get a score, fit signal, and recruiter read
- **/new-job** — When you have a recruiter call scheduled, this generates your prep doc
- **/generate-md-resume** — Draft a tailored resume for a specific role
- **/recruiter-prep** — Full recruiter prep doc for a scheduled screen

The Alex Chen mock data is still in the repo — you can see example outputs in `jobs/linear-sr-pm-2026-03-15/` and `analyze/analysis-log.md` to understand what the system produces. Delete or archive those when you don't need them anymore.

Add more reference docs to `references/` as you go — the more context you give the system, the better the outputs."
