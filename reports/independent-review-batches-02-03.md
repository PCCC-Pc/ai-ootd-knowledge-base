# Independent Review — Batches 02 and 03 (S03–S08)

- Date: 2026-11-16
- Scope: metadata, abstracts / publisher full text where available, evidence cards and Wiki claim boundaries.
- This is an independent source-to-card review, not a claim that every paper's full text has been read.

## S03 — Perrett & Sprengelmeyer (2021)
**Checked against:** SAGE article page and PDF.
- Confirmed title, authors, 2021 publication, journal, volume/issue, pages and DOI.
- Abstract reports 12 White women's faces (six fair, six tanned); observer samples N=96 and N=75 across two experiments; observers selected simulated clothing colours.
- Abstract reports preferences for red and blue hues, with cool blue favoured for fair skin and warm orange/red for tanned skin in the tested stimuli.
- Important scope: authors explicitly note that stylist personal categories based on skin, hair and eye colour are not scientifically defined and advice is inconsistent. This paper does not validate four-season colour systems.
**Result:** Pass with narrow scope. Wiki must preserve sample and stimulus boundaries.

## S04 — Hidayati et al. (2018)
**Checked against:** National Taiwan University institutional repository record.
- Confirmed authors, ACM Multimedia 2018 proceeding, date, title and DOI.
- Abstract supports a framework learning compatibility between clothing styles and body shapes from social big data.
- It names body-shape examples but does not make universal prescriptions that each shape must wear a specific garment.
**Result:** Pass at abstract level; detailed model and experiment claims remain pending full-text review.

## S05 — Fu et al. (2023)
**Checked against:** PubMed record.
- Confirmed authors: Bailu Fu, Rong Zheng, Qing Chen and Yefu Zhang; *Ergonomics*, 66(2), 167–181; DOI 10.1080/00140139.2022.2069867.
- PubMed abstract states the approach uses four body types specified in a Chinese standard, subdivides each major type into 81 types, and refines clothing-size recommendation criteria using pressure distribution analysis in virtual fitting simulation.
- This is a clothing size/fit recommendation study, not an aesthetic body-shape styling guide.
**Result:** Pass at abstract level; preserve the standard-specific context.

## S06 — Abugabah et al. (2020)
**Checked against:** MDPI publisher full-text page.
- Confirmed authors, publication date 26 May 2020, *Symmetry*, 12(6), Article 873 and DOI 10.3390/sym12060873.
- Publisher text describes a model combining user preference from historical interactions, visual features and item compatibility; it includes scene-based outfit tasks and tests on Amazon and Epinions datasets.
- The paper's context-aware model is not equivalent to reading a user's personal calendar or providing live weather-aware daily suggestions.
**Result:** Pass for research background on context-aware outfit recommendation; do not overstate as calendar or weather integration.

## S07 — Shirkhani et al. (2023)
**Checked against:** Springer publisher full text.
- Confirmed survey article, authors, publication date 5 July 2023, volume 4, article 514 and DOI 10.1007/s42979-023-01932-9.
- The survey identifies fashion compatibility as distinct from generic item similarity and classifies tasks including item retrieval, complementary-item recommendation, whole-outfit recommendation and capsule-wardrobe recommendation.
- It discusses user, clothing and context information, including weather and occasion as possible contextual attributes.
- This is a literature survey, not a controlled trial of the proposed AI OOTD product.
**Result:** Pass; appropriate as a broad overview source.

## S08 — Le et al. (2026)
**Checked against:** Elsevier / ScienceDirect publisher record and abstract.
- Confirmed authors, *Procedia Computer Science*, volume 289, pages 1104–1113 and DOI 10.1016/j.procs.2026.08.330.
- Abstract describes a personal wardrobe management application with item/outfit management and recommendations from existing wardrobe items under a specified purpose.
- Abstract reports MSE 0.000062 and cosine similarity 0.984107 between predicted and target outfit embeddings.
- These are model-level embedding metrics; they are not user satisfaction or styling-quality scores. Full-text experimental details and limitations remain pending.
**Result:** Pass at abstract level; retain metric interpretation boundary.

## Cross-source and Wiki checks
| Check | Result |
|---|---|
| S03–S08 metadata and DOI / publisher records | Pass at recorded review depth |
| Evidence card exists for every source | Pass |
| Wiki references evidence cards | Pass for current linked topics |
| Personal colour claims distinguish clothing-colour preference from seasonal colour systems | Pass |
| Body-shape size/fit research is not presented as aesthetic rules | Pass |
| Context-aware recommendation is not equated with calendar integration | Pass |
| S08 embedding metrics are not presented as user satisfaction | Pass |
| Full-text review for S04, S05, S08 | Pending |
| Full 8-topic Wiki coverage | Pending |
| HTML teaching slides and rendering | Pending |

## Workflow reflection
- The most important check to move earlier is matching every numeric result to the exact task and metric definition in the original source.
- S05 required explicit separation of size/fit classification from styling advice.
- S08 required explicit separation of embedding similarity from user-perceived recommendation quality.
- Context-related studies should be mapped to the exact context they test; the word "context" alone does not prove calendar or weather support.
- Future source ingestion should capture study population, input variables, evaluation task, metrics and limitations before drafting Wiki prose.

## Conclusion
The project now has eight source records and evidence cards. Several are abstract-level only; that status is visible in the source registry and cards. Eight records meet the lower end of the planned source range, but knowledge coverage and HTML production remain incomplete.
