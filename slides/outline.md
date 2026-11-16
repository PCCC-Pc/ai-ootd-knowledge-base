# AI OOTD HTML Teaching Slides — Outline Draft

- Status: Draft for user approval; HTML has not been generated.
- Audience: General learners who want to understand clothing coordination and improve everyday outfits.
- Language: Traditional Chinese (Taiwan wording); retain English technical terms where appropriate.
- Teaching approach: Example-driven and application-oriented, with limited decorative imagery.
- Planned length: 12 slides (within the course workflow's 8–15 slide check).
- Knowledge boundary: Use the current Wiki and its evidence cards as the knowledge source. Distinguish research-supported statements from illustrative styling examples and proposed product features.

## Teaching objectives
By the end, learners should be able to:
1. Identify the main factors involved in choosing an outfit.
2. Understand how colour, silhouette, style and occasion influence coordination.
3. Use a simple process to assemble an outfit from existing clothes.
4. Explain how an AI OOTD system could combine user preferences, wardrobe and context.

## Slide-by-slide outline

| Slide | Title | Teaching purpose and key content | Wiki / evidence | Visual / interaction idea |
|---:|---|---|---|---|
| 1 | AI OOTD：讓每天穿搭更有方向 | Introduce the learning topic and the practical problem: choosing an outfit involves more than selecting a single garment. Preview the learning route. | Wiki index; 03, 06, 08 | Cover with a simple outfit-planning visual; no unsupported claims |
| 2 | 一套穿搭，究竟要考慮什麼？ | Introduce the factors used throughout the deck: personal preference, clothing items, colour, fit, style, occasion and context. Make clear this is the deck's organizing framework, not a validated universal formula. | 03, 05, 06, 08 | Outfit factor map |
| 3 | 先認識自己的色彩偏好 | Explain colour attributes and clothing-colour preference at an introductory level. Distinguish tested clothing-colour preference studies from commercial four-season personal-colour systems; do not claim the latter is scientifically validated by S03. | 01; S03 | Two small colour-combination examples with scope note |
| 4 | 穿搭配色：相近與對比如何平衡？ | Explain clothing colour harmony and coordination. Present S09's moderate-coordination result as a finding from controlled palettes; present S02 as a computational clothing-colour harmony study with its limitations. | 04, 05; S02, S09 | Compare similar, contrasting and moderately coordinated palettes |
| 5 | 身形與服裝版型：先看合身與比例 | Introduce body attributes and fit as possible styling/recommendation considerations. Separate body-shape style recommendation (S04) from size/fit classification (S05). Avoid rigid rules such as "one body type must wear X". | 02; S04, S05 | Garment silhouette / fit schematic; examples labelled illustrative |
| 6 | 找到自己的穿搭風格 | Explain style as a combination of garment attributes and personal preference. Use the AI recommender survey to explain compatibility and user/item/context features; Korean/Japanese/minimal/casual/formal examples are illustrative style labels, not research findings from S07. | 03; S07 | Style keyword board, minimal imagery |
| 7 | 從單品組合成完整 Outfit | Teach a practical sequence: choose a main item, coordinate top and bottom, consider outerwear/layers, then shoes and accessories. Clearly label the sequence as a beginner-friendly working method, not a direct experimental result from S09. | 05; S02, S09 | Step-by-step outfit assembly |
| 8 | 不同場合，穿搭條件也不同 | Compare class/work/date/travel/formal situations by activity, dress expectations and comfort. Explain scene-aware recommendation using S01 only at abstract level and S06 context-aware recommendation research. Do not claim calendar or weather integration is proven by these studies. | 06; S01, S06 | Occasion comparison grid |
| 9 | 衣櫃管理：用現有衣服創造更多組合 | Introduce wardrobe inventory, outfit reuse and capsule wardrobe as practical planning concepts. Use S07 survey and S08 abstract-level wardrobe app study; do not overinterpret S08 embedding metrics as satisfaction. | 07; S07, S08 | Sample wardrobe inventory and outfit matrix |
| 10 | AI OOTD 如何產生推薦？ | Explain a conceptual pipeline: user preference/profile + wardrobe items + occasion/context → candidate outfits → compatibility/ranking → explain recommendation. Mark as a proposed product architecture informed by literature, not an implemented system. | 08; S01, S02, S04, S06, S07, S08 | Simple process diagram |
| 11 | Calendar Memory：從每日行程到 Outfit 規劃 | Explain the proposed future Calendar Memory feature: with explicit permission, extract only necessary activity/time/location context; combine with wardrobe and weather if available; keep private calendar data out of public GitHub. Clearly label as future design, not current functionality. | 08; project requirements and privacy rules in AGENTS.md | Example day plan → outfit suggestion, using fictional generic events |
| 12 | 把穿搭變成可持續的日常習慣 | Summarize a repeatable beginner workflow: check activity/context, select suitable garments, coordinate colour and fit, choose accessories, review comfort. Close with what AI OOTD may help with and what still requires personal judgement. | 01–08 | One-page checklist / recap |

## Source and claim rules for slide drafting
- Every research-derived claim must cite its source ID and APA reference in the slide notes or visible source footer.
- S01 is abstract-level only. Do not report unverified dataset details, metrics or limitations.
- S03 does not validate four-season personal-colour systems.
- S04 does not justify prescriptive body-shape rules.
- S05 concerns clothing size/fit and a specific classification context.
- S08 abstract metrics are not user satisfaction or real-world styling quality.
- S09's result is from controlled colour palettes; do not present it as a universal formula.
- Practical styling examples must be labelled as illustrative examples rather than research findings.
- Calendar Memory, weather integration, wardrobe image recognition and daily push are proposed features, not implemented capabilities.

## HTML design direction
- Clean, editorial, easy to read; neutral background with a restrained accent palette.
- Prioritize readable typography and concise content over decorative images.
- Use a consistent slide header, progress indicator and previous/next navigation.
- Responsive layout for desktop and mobile.
- Use simple diagrams and comparison layouts where they improve understanding.
- Provide keyboard navigation and accessible labels.
- Do not generate HTML until the user approves this outline.

## Readiness gate before HTML generation
1. Confirm the 12-slide outline and order.
2. Check every slide claim against the cited Wiki/evidence card.
3. Mark each content block as evidence-supported, illustrative example or proposed future feature.
4. Confirm no slide contains unsupported facts or overstated capabilities.
5. Then draft slide-by-slide text and run an independent fidelity/coverage review.
