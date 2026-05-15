# Notion — Enterprise Reference

**Role:** Senior Product Manager, Enterprise
**Tenure:** January 2022 – April 2025
**Location:** San Francisco, CA

---

## Role Overview

I owned the enterprise collaboration product at Notion — the set of features that made it possible for large organizations to deploy, govern, and scale Notion across hundreds or thousands of users. This wasn't the "product" product (the editor, the database, the blocks) — it was the infrastructure layer that enterprise customers needed to actually run Notion as a managed tool.

My customers were two different people: the IT admin or operations lead responsible for the Notion deployment, and the end user (knowledge worker, engineer, designer) who just wanted to get their work done. The tension between those two personas is the core challenge of enterprise PM work.

---

## Strategic Context

Notion's business is fundamentally PLG — people adopt it for free in small teams, and eventually the adoption becomes big enough that IT has to pay attention. That transition from unmanaged to managed is the enterprise deal. But Notion was designed for individuals and small teams. The settings model, the permissions architecture, the content hierarchy — all of it was built for "here's my workspace, here's my pages." Scaling that to an organization with 500 users, real compliance requirements, and an IT admin who needs to explain to their CISO how AI features are controlled — that required rebuilding a lot of the underlying model without breaking what made Notion good.

The other strategic tension: Notion's existing enterprise customers were often stuck in a weird middle state — they'd bought enterprise contracts but the governance features weren't mature enough for IT to fully trust the deployment. Activation was low, NPS was softer in enterprise than in SMB, and IT admins were managing things manually that should have been automated. That was the problem I walked into.

---

## Work Streams

### Workspace Governance Redesign

**The problem:** Enterprise customers were churning or stuck in free tiers because their IT admins couldn't get sufficient control over the environment. An organization with 200 users using Notion had no way to centrally audit external sharing, manage user lifecycle (joiners/movers/leavers), or enforce content governance. Admins were doing this in spreadsheets.

**What I built:** Rebuilt the workspace settings model — permission inheritance (so settings applied at workspace level cascaded to spaces and pages), admin audit logs for all content operations, external sharing controls with domain allow/block lists, member lifecycle management (automated deprovisioning tied to identity providers), and guest management with expiration policies.

**How I got there:** Started with 30+ hours of direct customer research with IT admins at mid-market customers ($50K-$200K ACV). The common thread: they could see that Notion was valuable to their teams, but they couldn't get it through the security review because the controls weren't there. The problem wasn't product quality — it was enterprise readiness.

**Outcome:** Time-to-activation (from signed contract to fully deployed and in active use) dropped 40% in the year following launch. Enterprise NPS increased 12 points. Became a core part of the enterprise sales motion — sales started referencing specific capabilities instead of generic "enterprise tier" promises.

---

### Admin-Controlled AI Feature Rollout Framework

**The problem:** When Notion started rolling out AI features, the default was global-on. That's fine for a startup team. It's a compliance problem for a Fortune 500 company whose IT policy requires that AI-generated content be reviewed before it can be used in customer-facing materials, or whose legal team has concerns about data being sent to external models.

**What I built:** An admin-controlled AI feature gating framework — a settings layer that let IT admins control which teams could use which AI features, with what data types, and with what logging. This wasn't just a settings panel. It required: (1) a new permissions model for AI features specifically, separate from the existing content permissions; (2) admin-facing audit logs showing which AI features were used by whom and when; (3) a way to communicate AI usage back to admins in language their security team could parse; (4) rollout tooling so admins could enable AI features for a pilot group before rolling out org-wide.

**How I got there:** Three customer interviews in the first week after the AI features went live surfaced the compliance problem. Two enterprise customers had turned AI off entirely because they had no controls. That was the forcing function. I had 6 weeks to ship something useful.

**Outcome:** 60% of enterprise accounts had adopted the framework within 3 months of launch. Reduced enterprise AI opt-out rate from ~40% to ~12%. Became part of the standard enterprise security review checklist — "does Notion have admin AI controls" became a yes.

---

### PLG-to-Enterprise Conversion Motion

**The problem:** Notion had hundreds of self-serve organizations — teams of 20-50 people using Notion at the team level, not on enterprise contracts — that had been using the product for 12-24 months without ever converting to enterprise. The potential revenue was real. The conversion path wasn't.

**What I built:** An upgrade path that started from product signals (team size, seat count, feature usage patterns) and moved through in-product touchpoints to a procurement conversation. Specifically: (1) triggers based on team size and usage that surfaced enterprise trial offers to workspace admins; (2) a 30-day enterprise trial experience that gave admins access to enterprise governance features so they could evaluate before committing; (3) in-product pathways that moved admin users toward the procurement conversation (sales-assisted for large teams, self-serve for teams under 50 seats).

**How I got there:** Analyzed the cohort of self-serve organizations that had been on the product for 12+ months and never converted. Interviewed 20 workspace admins in that cohort. The pattern: they knew enterprise existed, they could see they needed the features, but there was no natural moment that prompted the conversation. The product didn't ask them to consider enterprise until they hit a hard limit (seat cap, etc.), and by then it was a forced conversation rather than a chosen one.

**Outcome:** 15% of targeted self-serve organizations converted to enterprise contracts in the first year. This became a repeatable motion that the enterprise sales team used as the "land and expand" playbook.

---

### Workspace Unification

**The problem:** Many large Notion customers had ended up with multiple workspaces — one per department, sometimes dozens — because the product had never had a clean way to merge or federate them. Users had different logins, IT admins had different billing relationships, and content was siloed across workspaces with no good path to consolidation. This wasn't a small problem: the 10-20% of enterprise customers with multi-workspace deployments had significantly lower NPS and higher churn risk.

**What I built:** Workspace unification — the ability for an enterprise customer to consolidate multiple workspaces into a single governed environment. This was the most technically complex thing I shipped at Notion: it required new APIs for cross-workspace content migration, a permissions reconciliation model, an admin UX for managing the consolidation process (mapping users, content, and permissions from multiple sources to one destination), and a rollout that could handle workspaces with hundreds of users without data loss.

**How I got there:** Pulled support ticket data for the previous 18 months — multi-workspace issues were the #1 enterprise support category. Then did targeted research with 8 customers who had active multi-workspace problems. The unification request had been in the backlog for 18 months and had never been prioritized because the technical complexity was high. I made the case by quantifying the churn risk and the revenue impact: the multi-workspace cohort churned at 2.3x the rate of single-workspace enterprise customers.

**Outcome:** The most-requested enterprise feature at time of launch. 80% of targeted multi-workspace customers had initiated consolidation within 6 months. Churn rate in that cohort dropped significantly in the following year.

---

## Key Numbers

- Time-to-activation reduced 40% (governance redesign)
- Enterprise NPS +12 points
- 60% enterprise AI framework adoption within 3 months
- Enterprise AI opt-out rate reduced from ~40% to ~12%
- 15% PLG-to-enterprise conversion rate (first year of motion)
- Workspace unification was the most-requested enterprise feature at launch

---

## How to Frame in Interviews

**For enterprise roles:** Lead with the governance redesign because it shows the diagnostic work (30+ hours of admin research), the systems thinking (permissions model rebuild), and the outcome (activation + NPS). Then go to the AI framework story because it's forward-looking and shows I understand enterprise AI compliance at a mechanism level, not just conceptually.

**For AI-first roles:** Lead with the AI framework story — not because it's my biggest win, but because it demonstrates that I understand how AI gets deployed in enterprise environments. Then connect to the governance work as the foundation that made the AI work possible.

**For 0-to-1 or growth roles:** The PLG-to-enterprise conversion motion is the most relevant story. It shows market insight (the uncaptured self-serve cohort), a clear hypothesis, and a measurable outcome.

**What to avoid:** Don't frame the Notion work as "I built features." The work was about finding the real activation blocker (not a product quality problem — an enterprise readiness problem) and systematically removing it. That framing is more compelling than any individual feature.
