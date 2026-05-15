# Intercom — SMB Growth Reference

**Role:** PM II, SMB Growth
**Tenure:** March 2019 – December 2021
**Location:** San Francisco, CA

---

## Role Overview

I owned trial-to-paid conversion for Intercom's SMB segment. The SMB product is Intercom's customer messaging and support platform — think live chat, bots, email campaigns, and a help center — used by companies with 10-200 employees. My job was to increase the percentage of teams that started a 14-day trial and converted to a paying subscription.

When I joined, conversion was 18%. When I left, it was 34%. That's 280K+ new seats and $18M+ in ARR attributable to the conversion work.

---

## Strategic Context

Intercom's business model in the SMB segment is volume PLG: get companies to sign up for a trial, get them to value quickly, convert them before the trial ends. The unit economics depend on conversion rate and payback period. A 1% improvement in trial-to-paid conversion is meaningful ARR at the scale Intercom was operating.

The standard playbook in this situation is onboarding optimization: reduce friction, shorten time-to-first-value, add better tooltips, improve the empty state experience. I inherited a roadmap full of that work. I ran it for the first 6 weeks. None of it moved the number.

That failure was the forcing function. If onboarding improvements weren't moving conversion, the problem wasn't onboarding.

---

## Work Streams

### The Discovery: Finding the Account Owner Persona

**The question I was trying to answer:** Why are 82% of trials ending without conversion, and where exactly is the drop-off happening?

**What I found:** The drop-off wasn't at the end of the trial. It wasn't "they ran out of time." It was concentrated at specific moments where an account owner action was required — setting up billing, adding team members, configuring the account for their support workflow. Those actions required someone with administrative authority over the account, and that person almost never appeared in the trial experience.

Here's why: the person who signed up for the trial was usually a support agent or team lead — someone who thought Intercom would be useful and wanted to evaluate it. The person who actually owned the subscription was their manager or the company's IT/ops lead. These were often different people. The end user would have a great trial experience and then tell their manager "we should buy this" — and the manager had never seen the product, didn't know how to set it up, and didn't have time to go through the trial themselves.

I called this the "missing account owner persona." The product was designed around end users. Conversion required account owner action. The product never surfaced to account owners at all.

**How I got there:** I pulled session recordings for trial accounts that churned without converting — specifically the accounts that went quiet in the last 3 days of the trial. The pattern: end users were actively engaged, but no one had touched the billing or account settings pages. Then I ran a customer interview series with 30 churned trial accounts. 26 of the 30 said some version of "I loved it but I couldn't get my manager to look at it in time."

Three experiments from the inherited roadmap confirmed the pattern: improving end-user onboarding moved end-user engagement metrics but didn't move conversion. The conversion problem was upstream of the product experience.

---

### The Build: Admin Trial Management Hub

**What I built:** A dedicated surface for the account owner — the person who would make the purchasing decision — to understand and manage the trial without having to use the product themselves.

The surface had three components:

1. **Trial visibility:** A dashboard showing which team members were using Intercom, what they were doing, whether the core use case (customer support, live chat, help center) was being served, and how the account was performing relative to companies in a similar segment who had already converted.

2. **Usage signals:** A simplified view of the metrics the account owner actually cared about — conversations handled, response time improvement, tickets deflected by the bot. Not the end-user metrics (messages sent, sessions started) but the business metrics that would justify the purchase.

3. **One-click upgrade:** A direct upgrade flow from the dashboard, with pricing surfaced inline so the account owner didn't have to leave the surface to get a quote.

The previous conversion flow required: (1) the account owner finding the upgrade button in the main nav, (2) navigating to a separate pricing page, (3) starting a checkout flow that asked for billing info mid-evaluation, (4) adding team members who had already been using the trial, (5) configuring the account settings that the end user hadn't touched. That's 5 steps across 4 surfaces. The new flow collapsed it to one decision in under 60 seconds.

**How I got to the design:** Three design sprints over 6 weeks. The design constraint was that account owners wouldn't spend more than 5 minutes with the surface before deciding — so every element had to answer a specific purchasing question. I validated the information hierarchy with 15 account owner interviews before we built anything.

---

### The Validation: Prototype and A/B Test

**The prototype:** Built a 2-week prototype — essentially a Wizard of Oz version with a lot of manually curated data behind the scenes — and exposed it to 40K trial accounts. The intervention was simple: a new email sequence targeting the account owner (pulled from the company's billing contact or LinkedIn, not the person who signed up) with a link to the new dashboard.

**Result:** Conversion in the prototype cohort moved from 18% to 28% — a 10-point lift. That was more than we'd moved in the previous 6 months of onboarding work.

**The A/B test:** Used the prototype results to get engineering investment for a proper build. A/B tested the full build across 80K accounts. Conversion: 18% to 28% confirmed in the control group, 18% to 34% in the full experience group. Ran for 6 weeks to get statistical significance across the full trial length.

**The full rollout:** Used the A/B results to fund the phased rollout — first to SMB accounts above $500/month potential ACV, then to the full SMB segment. Final conversion rate across all SMB: 34%.

---

## Key Numbers

- Trial-to-paid conversion: 18% to 34%
- New seats added: 280K+
- ARR impact: $18M+
- Prototype cohort lift: 18% to 28% (40K accounts)
- A/B test: confirmed 28% in control, 34% in full experience group (80K accounts)
- Discovery: 82% of trial drop-off concentrated at account owner action points
- Customer interviews to find the insight: 30 churned trial accounts + 15 account owner design interviews

---

## How to Frame in Interviews

**The causal chain is the story.** Don't start at the solution. The insight is only credible if you show the work that got you there:

1. Inherited roadmap full of onboarding improvements
2. Ran the roadmap for 6 weeks — nothing moved
3. Rejected the roadmap
4. Went back upstream — pulled session recordings, ran 30 customer interviews
5. Found that 82% of drop-off happened at account owner action points
6. Named the missing persona: the account owner who never appeared in the trial
7. Built around that insight: admin trial management hub
8. Validated with a prototype (40K accounts, 18% to 28% lift)
9. Used results to fund the full build
10. Full rollout: 18% to 34%, 280K+ seats, $18M+ ARR

**What makes this story land:** It's not a "I optimized a flow and it got better" story. It's an "I rejected the frame I inherited, found the real problem, and built the right thing" story. That's the version that demonstrates judgment, not just execution.

**What to watch out for:** Don't over-claim on the ARR. "$18M+ in ARR" is accurate for the conversion work. The Intercom business had many other revenue drivers. Be clear that this is the ARR attributable to the conversion improvement, not total company ARR.
