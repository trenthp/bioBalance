---
name: optimantra-integration
description: Bio Balance uses OptiMantra for scheduling + patient portal; site CTAs link out to it instead of a custom form
metadata:
  type: project
---

Bio Balance uses **OptiMantra** (EHR) for appointment scheduling and the patient portal. There is intentionally **no custom booking form** — collecting health info in a plain form was rejected. All "book/schedule" CTAs link out to the OptiMantra scheduling page (new tab), and "Patient Portal" links go to the OptiMantra login.

The two URLs live in `src/data/settings.json` as `scheduleUrl` and `portalUrl`, and are editable in TinaCMS `/admin` (Site Settings) — change them there, not in code.

Wired up 2026-06-14 across Header, Footer, BookingForm (now a CTA section, kept `id="book"`), homepage, about, and all service pages. The old fake `initBookingForm` JS and unused `Hero.astro` were removed in the same pass.

See [[supplement-store-plan]].
