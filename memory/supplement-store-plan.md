---
name: supplement-store-plan
description: Open plan to add a supplements online store to the Bio Balance site; deferred for a later discussion
metadata:
  type: project
---

Bio Balance wants an online store for supplements (and possibly other products). Hard requirement: **adding/removing products must be as easy as possible for a non-technical person**. Deferred as of 2026-06-14 — to revisit in a later discussion.

**Decision still open:** platform and product mix. Pivotal question: will they sell anything beyond standard catalog supplements (private-label/branded bottles, bundles, program fees, merch)?

Options discussed:
- **Practitioner dispensary (Fullscript / Wellevate)** — recommended IF only standard catalog supplements. Dispensary handles inventory, shipping, sales tax; add/remove product = a toggle in their dashboard. Site only needs a "Shop Supplements" button. Lowest effort; common for clinics like this. Limit: only their catalog, their branding, no custom/private-label or non-supplement items.
- **Snipcart + a Tina "Products" collection** — recommended IF they want their own/branded products. Staff manage products in the same `/admin` they already use. ~$20/mo or ~2% of sales. They own fulfillment + tax. Subscriptions are more work to hand-roll.
- **Shopify** (embedded buy buttons or `shop.` subdomain) — fallback; best dedicated commerce admin but a separate system from Tina, ~$39+/mo.

Factors to weigh before committing: **auto-refill subscriptions** (big for supplements; Fullscript/Shopify native, Snipcart harder), **multi-state sales tax** WA/ID/UT (managed platforms handle it), and **no health claims** on product pages (compliance, any platform).

Stack context: site is Astro 5 static + TinaCMS + Vercel. See [[optimantra-integration]].
