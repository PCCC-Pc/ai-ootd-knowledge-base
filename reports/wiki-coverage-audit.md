# Wiki Coverage and Citation Consistency Audit

- Date: 2026-11-16
- Repository: https://github.com/PCCC-Pc/ai-ootd-knowledge-base
- Scope: eight Wiki topic pages, nine evidence cards, source registry and AGENTS.md.
- Method: reopened the current GitHub files and checked file presence, source IDs, evidence-card links, APA section presence and DOI presence.

## Coverage matrix

| Wiki topic | Evidence currently linked | Coverage assessment |
|---|---|---|
| 01 Personal colour analysis | S03 | Partial: skin-tone clothing-colour preference; no direct evidence validating seasonal personal-colour systems |
| 02 Body shape | S04, S05 | Partial: style recommendation and size/fit research; limited full-text detail and population scope |
| 03 Fashion style | S07 | Partial: recommender-system survey; practical style taxonomy/examples still needed |
| 04 Colour matching | S02 | Partial: computational clothing-colour harmony; needs additional practical coordination evidence |
| 05 Outfit matching | S02, S09 | Initial evidence present: ML/DL harmony modelling and controlled colour-coordination ratings; full garment/fit/accessory cases still needed |
| 06 Occasion outfits | S01 | Partial: scene-aware recommendation, abstract-level only; real-life occasion dress norms and weather need more sources |
| 07 Wardrobe management | S07, S08 | Partial: survey and wardrobe recommendation application; S08 abstract-level and capsule-wardrobe practical methods need more support |
| 08 AI OOTD | S01, S02, S04, S06, S07, S08 | Research overview present; calendar memory, weather API and daily push remain proposed, not implemented |

## Structural and citation checks

| Check | Result |
|---|---|
| Eight Wiki topic files exist | Pass |
| Nine evidence-card files exist | Pass |
| Each evidence card contains APA 7th section | Pass |
| Each evidence card contains DOI URL | Pass |
| Topic pages contain APA 7th section | Pass |
| Topic pages link to relevant evidence cards | Pass for currently cited sources |
| Wiki index links all eight topics | Pass |
| Wiki index links all nine evidence cards | Pass after this audit update |
| Source registry contains S09 | Pass |
| Claims distinguish abstract-level sources from full-text review | Pass where stated in source cards |
| All nine sources have undergone complete full-text review | Not passed / not claimed |
| HTML slide content and browser rendering | Pending |

## Citation and scope issues to retain

1. S01 is abstract-level only; do not add detailed dataset, metrics or limitations without full-text access.
2. S03 studies preferences for selected clothing colours and skin-tone stimuli; it does not validate four-season personal-colour systems.
3. S04 is abstract-level; do not convert body-shape compatibility research into prescriptive rules.
4. S05 is clothing size/fit research tied to a specified body-type standard, not aesthetic styling guidance.
5. S06 supports context-aware outfit recommendation, not personal calendar integration.
6. S08 is abstract-level; embedding similarity and MSE are not user satisfaction metrics.
7. S09 uses controlled colour palettes and ratings; its result is not a universal rule for every person or context.

## Highest-priority knowledge gaps before slide generation

- Practical outfit construction: silhouette, proportions, layering, garment fit, shoes and accessories.
- Occasion outfit guidance: dress codes, activity requirements, comfort, season and weather.
- Wardrobe management: wardrobe inventory, capsule wardrobe planning, outfit reuse and decision support.
- Beginner-facing examples: worked examples that clearly distinguish evidence-backed principles from illustrative styling choices.
- Personal colour: explain limits and avoid presenting seasonal analysis as universally validated.

## Workflow adjustment

The original plan was to complete eight topic pages and then build slides. The audit shows that topic-file existence is not the same as sufficient evidence coverage. Therefore the next graph gate should be a content-readiness review: mark each slide candidate as (a) evidence-supported, (b) illustrative example, or (c) insufficient evidence. Only categories (a) and clearly labelled (b) may enter the slide outline; category (c) returns to source collection.

## Conclusion

The eight Wiki topic files and nine evidence cards are structurally present and linked. This is a preliminary knowledge-base audit, not a claim that every topic is complete or every source has been fully reviewed. The Wiki is ready for a teaching-outline draft with explicit evidence boundaries, but not yet for final HTML generation.
