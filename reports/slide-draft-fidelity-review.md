# Slide Draft Content Fidelity Review

- Review target: `slides/draft.md`
- Reference set: `wiki/01-color-theory.md`–`wiki/08-ai-ootd.md`, `cards/S01.md`–`cards/S09.md`
- Review type: second-pass content fidelity and teaching-structure audit.
- Review date: 2026-11-16
- Result: **Pass with minor editorial notes; no factual correction required in this pass.**
- Independence note: this review was performed as a separate audit pass in the current project workflow. It is not yet the course-required independent review conducted in a separate fresh conversation. That checkpoint remains open.

## 1. Slide-by-slide traceability

| Slide | Main claims / teaching content | Evidence mapping | Review result |
|---:|---|---|---|
| 1 | OOTD considers preference, wardrobe and context | Project framing; Wiki 03, 06, 08 | Pass. Framed as project introduction, not research finding. |
| 2 | Seven-factor outfit thinking framework | Wiki 03, 05, 06, 08; S01, S06, S07 background | Pass. Explicitly labelled as a teaching framework, not a validated universal formula. |
| 3 | Clothing colour choices in relation to fair/tanned skin tones | S03 | Pass. Study is described narrowly; four-season personal-colour validity is not claimed. |
| 4 | Colour coordination and clothing-colour modelling | S09, S02 | Pass. S09 result is limited to tested palettes; S02 limitations are retained. |
| 5 | Body-shape style recommendation versus clothing size/fit | S04, S05 | Pass. The two research questions are distinguished; no prescriptive body-shape rules are inferred. |
| 6 | Compatibility and user/clothing/context information in fashion recommenders | S07 | Pass. Survey is not represented as a user trial; style labels are marked as teaching examples. |
| 7 | Five-step outfit assembly process | S02, S09 background | Pass. Process is explicitly a beginner teaching example, not a research-validated procedure. |
| 8 | Scene/context-aware outfit recommendation | S01, S06 | Pass with caution. S01 is abstract-level; S06 is abstract-level. No calendar, weather or push capability is attributed to either study. |
| 9 | Wardrobe inventory and outfit candidate recommendation | S07, S08 | Pass. S08 is described at abstract level; embedding metrics are not interpreted as satisfaction. |
| 10 | Proposed AI OOTD conceptual pipeline | S01, S02, S04, S06, S07, S08 | Pass. Clearly labelled as a project concept, not a deployed or evaluated system. |
| 11 | Proposed Calendar Memory feature and privacy requirements | Project requirements / AGENTS.md; research context S01, S06, S07 | Pass. Future feature is clearly distinguished from existing research and implementation. |
| 12 | Daily outfit checklist and recap | Wiki 01–08 | Pass. Clearly labelled as a teaching summary rather than a validated standard procedure. |

## 2. Source-boundary checks

- **S01:** Only abstract-level technical description is used. No unverified dataset, metric or detailed limitation is added.
- **S02:** Human evaluation and clothing-colour harmony modelling are described at the level supported by the evidence card. Small sample, cultural coverage and two-piece clothing scope are acknowledged.
- **S03:** The two experiments and tested skin-tone/colour preferences are described narrowly. No validation claim is made for commercial four-season systems.
- **S04:** Body-shape/style compatibility is distinguished from universal fashion advice. Abstract-level review depth is disclosed.
- **S05:** Clothing size and fit are not conflated with aesthetic styling. Its classification context is not generalized to all populations.
- **S06:** Only the context-aware recommendation topic is stated; specific context variables, datasets and metrics are not invented.
- **S07:** Survey findings are used as background on compatibility and recommendation task types, not as evidence of the proposed app's performance.
- **S08:** Abstract-level system details are marked as such. MSE and cosine similarity are not treated as user satisfaction or real-world styling quality.
- **S09:** The moderate-coordination result is limited to the tested colour palettes and rating context.

## 3. Teaching and presentation checks

- The sequence moves from basic outfit considerations to individual factors, practical outfit assembly, context, wardrobe data and the proposed AI workflow.
- Each slide has a single stated teaching purpose.
- Each slide includes slide text, speaker explanation and a visual direction.
- The slide count is 12, within the course workflow's 8–15 slide target.
- The deck distinguishes evidence-supported claims, illustrative examples and proposed features.
- The design direction favours readable text, simple diagrams and restrained imagery.

## 4. Minor editorial notes for HTML production

1. Keep APA references in slide notes or compact source footers; do not squeeze full references into the main teaching area.
2. On Slide 4, visually distinguish the three palette examples without ranking them as universally good or bad.
3. On Slide 5, use neutral garment silhouettes and avoid body-shaming or rigid body-type labels.
4. On Slide 8, retain a small note that S01/S06 support context-aware research directions, not calendar/weather integrations.
5. On Slide 10, retain the label **「概念設計，尚未實作」**.
6. On Slide 11, retain **「未來功能構想」** and use fictional, non-identifying calendar events only.
7. On Slide 9, do not show the S08 embedding metrics as a headline KPI.

## 5. Open checks before final delivery

- Conduct the course-required independent AI review in a separate fresh conversation, supplying only the slide draft and source/evidence files.
- After HTML generation, run programmatic checks for 12-slide count, navigation, link validity and required source labels.
- Render the HTML and inspect screenshots at desktop and mobile widths for text overflow, clipping and readability.
- Fix only identified issues, record each check and its result, and rerun the relevant checks.
- Do not claim the deck is complete until the independent review and rendered-layout checks are recorded.

## 6. Overall decision

The current 12-slide draft is sufficiently traceable to the Wiki and evidence cards to proceed to the next workflow checkpoint. No source-level factual correction is required based on the inspected project records. The separate-conversation independent review and HTML render checks remain pending.
