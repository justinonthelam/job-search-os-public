# Behavioral Interview Prep — Alex Chen

This doc is a STAR story bank. It exists so I have well-rehearsed, specific answers to behavioral questions before I walk into an interview. Stories are from actual work — not polished to sound better than reality. The goal is to have these so internalized that the telling feels natural, not recited.

---

## Story Bank

### Story 1: Identify a problem / change direction

**The short version:** At Intercom, I rejected an inherited roadmap after running experiments that proved it wouldn't move the conversion metric. Then I went back upstream, ran customer research, and found the real problem: the account owner who made the purchase decision never appeared in the trial experience.

**Full STAR:**

*Situation:* I joined as PM II on the SMB Growth team at Intercom in 2019. The conversion rate from free trial to paid was 18% and had been flat for 6 months. I inherited a roadmap of onboarding improvements — better tooltips, faster time-to-value, improved empty states — that the previous PM had built.

*Task:* My job was to move trial-to-paid conversion. The inherited roadmap was the plan to do that.

*Action:* I ran 3 experiments from the inherited roadmap over my first 6 weeks. None of them moved conversion meaningfully — they moved end-user engagement metrics, but not conversion. That was the signal. If onboarding improvements aren't moving conversion, the problem isn't onboarding.

I rejected the roadmap and went upstream. Pulled session recordings from churned trial accounts — specifically the ones that went quiet in the last 3 days of the trial. The pattern: end users were actively engaged, but no one had touched billing or account settings. Then I ran 30 customer interviews with accounts that had churned without converting. 26 of 30 said some version of "we loved the product but I couldn't get my manager to look at it in time."

That was it. The person who signed up for the trial (support agent, team lead) was not the person who could authorize the purchase (their manager, the IT admin). The product was designed entirely around end users. The account owner — the person who had to push the button on the upgrade — had never seen the product.

I called this the missing account owner persona. Then I built around it: a dedicated surface for the account owner to understand and manage the trial, with a one-click upgrade flow.

*Result:* Trial-to-paid conversion went from 18% to 34% — 280K+ seats, $18M+ in ARR.

**What makes this land:** The rejection of the inherited roadmap is the moment that demonstrates judgment. Anyone can run experiments. The craft is knowing when the experiments are telling you that the whole frame is wrong.

---

### Story 2: Cross-functional influence

**The short version:** At Notion, I needed engineering investment for the workspace governance rebuild — a project with high technical complexity and no visible user-facing feature — and had to make the case against competing roadmap priorities.

**Full STAR:**

*Situation:* The workspace governance redesign at Notion required rebuilding significant parts of the permissions model — the kind of infrastructure work that engineering teams find risky (because breaking it has blast radius) and that product teams deprioritize (because it's not visible). I had 6 months of customer research showing this was the biggest enterprise activation blocker, but the roadmap was full of higher-visibility work.

*Task:* Get engineering commitment for 2 sprints of core infrastructure work that would produce no visible change for end users.

*Action:* I reframed the ask. The business case I made wasn't "this will be better for users" — it was "our enterprise contract renewal rate is 8 points lower than our SMB renewal rate, and the governance gap is the primary driver." I pulled the renewal data, matched it to the customer segment that had raised governance issues in support tickets and NPS surveys, and showed the correlation directly.

Then I got the engineering lead and the CTO to talk to two enterprise customers directly — not through me, not through notes I had taken. I set up 45-minute calls and got them on Zoom together. When you hear a $200K ACV customer say "I can't expand the contract until you have better audit logs," it lands differently than when a PM says "customers care about audit logs."

*Result:* Got the engineering commitment. The work shipped in Q3. Time-to-activation dropped 40%, enterprise NPS went up 12 points.

**What makes this land:** The direct customer conversation with engineering. PMs who use data to make the case without bringing the humans along are less effective than PMs who bring both.

---

### Story 3: Data-driven decision

**The short version:** At Intercom, I used a 2-week Wizard-of-Oz prototype across 40K accounts to validate the account owner hypothesis before asking engineering to build the full product.

**Full STAR:**

*Situation:* I had a hypothesis — the account owner was the missing persona, and building them a dedicated management surface would move conversion. The hypothesis came from customer research. But customer research tells you what people say; it doesn't tell you if building the thing will actually change their behavior.

*Task:* Validate the hypothesis with behavioral data before committing to a 6-week engineering build.

*Action:* Built a 2-week prototype — partly manual, partly stitched together from existing Intercom admin surfaces — and exposed it to 40K trial accounts. The intervention was a new email sequence targeting the account owner (pulled from billing contacts or LinkedIn when available) with a link to the new surface. The surface itself was mostly real but had some manually curated data behind the scenes for accounts where the data didn't exist yet.

Set up A/B measurement: accounts that received the email and link vs. accounts that didn't. Ran it for 14 days — the length of the trial.

*Result:* Conversion in the prototype cohort moved from 18% to 28%. That 10-point lift was more than we'd moved in 6 months of onboarding optimization. Took those results to leadership, got approval for engineering investment on the full build. Full build moved conversion to 34%.

**What makes this land:** The Wizard-of-Oz framing. The insight was good, but the discipline was in validating it cheaply before betting on it. That's the PM craft that's easy to skip and important to demonstrate.

---

### Story 4: 0-to-1 build

**The short version:** I built FreelanceOS from zero to 800+ paying customers and $180K ARR with a 3-person team, from an idea in my final year of university to a working business in 11 weeks.

**Full STAR:**

*Situation:* Finishing my engineering degree at Waterloo in 2017. I was freelancing on the side — design work, some development — and using a mess of tools to manage contracts and invoices. It was painful enough that I looked for a solution and found nothing that felt right. So I asked a few other freelancers and they had the same problem.

*Task:* Build a product that solves the problem well enough that people pay for it.

*Action:* Built a landing page and a waiting list, posted on Product Hunt and r/freelance, got 600 signups before we had a product. That validated demand. Then spent 11 weeks building the core: contract templates with e-signature, automated invoice generation, payment reminders, client portal. We didn't build everything — we built the smallest thing that removed the core friction (the chase-the-invoice loop) and tested that it worked.

Used the waiting list to get beta users who would give feedback. The first version of the client portal came from a churned beta user who said "I still have to email the invoice separately — why doesn't it just go to my client?" We hadn't thought about the client-side experience at all.

Launched with 80 paying customers on day one. Grew to 800+ through content SEO (long-tail freelance queries) and a referral loop we built into the product — every client-facing document had a FreelanceOS branded footer. No paid acquisition.

*Result:* $180K ARR, 800+ paying freelancers, 18 months. Wound down to join Intercom — not a failure, a decision.

**What makes this land:** The churned beta user insight. The instinct to talk to people who left rather than only people who stayed. That's the 0-to-1 discipline that produces product insight rather than just product output.

---

### Story 5: Failed or hard moment

**The short version:** At Notion, I shipped the first version of the workspace unification feature and it had a critical bug that affected live enterprise accounts during the migration window. I had to own it in front of customers.

**Full STAR:**

*Situation:* Workspace unification was the most technically complex thing I shipped at Notion — cross-workspace content migration, permissions reconciliation, multi-user account consolidation. We tested it extensively in staging. We did a limited pilot with 3 beta customers who reported no issues.

*Task:* Manage the situation when a critical bug appeared in production.

*Action:* We started the broader rollout and 4 hours in, we got a support ticket from a $300K ACV customer: two users' content had been reassigned to the wrong account during the migration. The data wasn't lost, but the permissions were wrong, and their IT admin had noticed during the migration window.

I called the customer directly. Didn't wait for support escalation, didn't prepare a statement first. I told them what had happened, that it was our fault, that we were pausing the rollout until we understood the scope, and that I would personally give them an update in 2 hours.

We paused the rollout. Audited all migrations that had run. Found 2 affected accounts out of ~40 that had started migration. Fixed the bug (a race condition in the permissions reconciliation — the bug only manifested when two accounts had an overlapping user with different permission levels in each workspace). Remediated both affected accounts manually. Re-ran the migration for the affected users.

*Result:* Both affected customers stayed. The customer I called personally told their CSM that the communication was better than any other enterprise software vendor they'd worked with. We resumed the rollout with a fix and no further issues.

**What makes this land:** The direct call to the customer. The instinct when something goes wrong is to let support handle it or to craft a careful statement. The instinct that's actually right is to talk to the person who was affected, be honest about what happened, and give them a timeline. That's the PM moment — not the bug, but what you did when it happened.

---

### Story 6: User insight that changed the product

**The short version:** At Notion, I ran customer research expecting to find that enterprise customers wanted better editing features. What I found instead was that the biggest activation blocker wasn't the product at all — it was the governance layer that IT needed before they'd allow the deployment.

**Full STAR:**

*Situation:* I was new to the Notion enterprise PM role (first 30 days). The common assumption on the team was that enterprise customers churn because the Notion product is too flexible — not enough structure for large organizations. The proposed solution was to add more templates, more predefined workflows, more structure.

*Task:* Validate or disprove the assumption before building against it.

*Action:* Ran 30+ hours of customer research with IT admins and operations leads at mid-market enterprise accounts. I explicitly did not ask what features they wanted — I asked them to walk me through the deployment process from the day they signed the contract to the day Notion was in active use across their team.

What I heard: the product wasn't the problem. The governance layer was. IT admins couldn't deploy Notion to 200 users because they couldn't answer basic security review questions: who owns what content, can external sharing be controlled, what happens when an employee leaves. The Notion product was good. The enterprise readiness was not.

The research reframed the problem entirely. The work wasn't to add more structure to the product for end users. The work was to build the admin and governance layer that IT needed before they'd trust the deployment.

*Result:* Led directly to the workspace governance redesign — the project that reduced time-to-activation by 40% and increased enterprise NPS by 12 points. If I'd validated the original assumption (more templates, more structure), I'd have been building the wrong thing.

**What makes this land:** The reframe. The insight wasn't a clever new feature — it was "you're solving the wrong problem." That's the most valuable thing a PM can do in the first 30 days of a role, and it requires the discipline to question the existing frame rather than just execute against it.

---

## Common Questions Mapped to Stories

| Question | Best Story |
|----------|------------|
| "Tell me about a time you disagreed with the direction of a product and changed it." | Story 1 (Intercom roadmap rejection) |
| "Tell me about a time you had to convince stakeholders to do something difficult." | Story 2 (Notion engineering commitment) |
| "Tell me about a time you used data to make a difficult decision." | Story 3 (Intercom A/B prototype) |
| "Tell me about a product you built from scratch." | Story 4 (FreelanceOS 0-to-1) |
| "Tell me about a failure or something that didn't go as planned." | Story 5 (Workspace unification bug) |
| "Tell me about a time user research changed your direction." | Story 6 (Notion governance reframe) |
| "Tell me about a time you influenced without authority." | Story 2 (Notion cross-functional) |
| "Tell me about a time you had to prioritize ruthlessly." | Story 1 (Rejecting roadmap, Intercom) |
| "Tell me about a time you shipped something ambitious." | Story 4 (FreelanceOS) or Story 5 (Workspace unification) |
| "Tell me about the biggest product decision you've ever made." | Story 1 or Story 6 |

---

## How to Open and Close Behavioral Sections

**Opening:** Don't apologize for context. Lead directly with the situation, in 1-2 sentences. "At Intercom, I owned SMB trial conversion. I inherited a roadmap and one of the first things I did was reject it." Let the story breathe.

**During:** Don't compress the thinking. The most common mistake is skipping from situation to result and leaving out the action that demonstrates judgment. The "action" section should take the most time — what did you actually do, and why?

**Closing:** Don't over-explain the lesson. State the result, then one sentence on what you took from it. "Conversion went from 18% to 34%. The thing I took from it is that the most important PM skill is knowing when the whole frame is wrong — not just optimizing within it."

**On follow-up questions:** If they push on a decision you made, don't get defensive. "That's a fair challenge. Here's what I was thinking at the time, and here's what I'd do differently if I had it to do again." You don't have to defend every decision as perfect. You have to demonstrate that you thought carefully.
