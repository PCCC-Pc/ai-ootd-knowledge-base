# Independent Review — First Ingestion Batch

- Date: 2026-11-16
- Scope: S01, S02 evidence cards and corresponding Wiki excerpts.
- Reviewer basis: independently re-opened original publisher/institutional records and compared them with repository records.

## S01 — Ye et al. (2023)

**Checks**
- Institutional repository confirms title, authors, conference proceeding, pages 1172–1180 and DOI 10.1145/3543507.3583435.
- ACM proceedings contents independently confirms the paper title and authors.
- Repository record marks the published-version PDF as restricted.
- Abstract supports the scene-context relevance and the separate scene/outfit encoders with a scene-aware compatibility score.

**Review result: Pass with scope limitation**
- The current evidence card correctly labels its review depth as abstract-level.
- The Wiki wording is bounded to the abstract and does not claim calendar, weather or push-notification capabilities.
- Do not add dataset, numerical metrics or detailed limitations until full text is available.

## S02 — Li et al. (2025)

**Checks**
- Publisher page confirms title, author list, publication date (12 September 2025), journal *Fashion and Textiles*, volume 12, article 27 and DOI 10.1186/s40691-025-00433-y.
- Publisher page provides open access to the full article and states CC BY 4.0.
- Methods section confirms 9,056 retained two-piece outfit images and 20 observers (10 male, 10 female; mean age 20, SD 0.94) evaluating 500 full-body images. Each observer completed the task twice with a one-week interval.
- Results section confirms average rule-based model metrics: macro accuracy 0.98, precision 0.96, recall 0.96, specificity 0.98, F1 0.96; regression RMSE 0.06, MAE 0.03, R² 0.92.
- The article reports perception-based SVM and custom CNN model metrics in the conclusion; these must be distinguished from the rule-based model metrics.

**Review result: Pass after clarification**
- Updated the S02 evidence card to clarify the repeated observer sessions and separate the reported metrics by task.
- Wiki correctly limits the findings to clothing colour harmony and does not equate the study with four-season personal-colour analysis.
- Keep the limitations about small observer sample, cultural coverage and two-piece clothing combinations visible in downstream content.

## Cross-file checks

| Check | Result |
|---|---|
| Each source has a stable ID and evidence card | Pass |
| APA 7th entries match source metadata | Pass |
| DOI and original record links are present | Pass |
| Wiki claims point to evidence cards | Pass |
| S01 abstract-only boundary is explicit | Pass |
| S02 study scope and limitations are explicit | Pass |
| Unsupported calendar/weather/push claims avoided | Pass |
| Full eight-topic Wiki coverage | Pending |
| HTML slide content/render checks | Pending |

## Issues and workflow adjustment

1. The first pass of S02 card summarized metrics too compactly and did not state that each observer completed two sessions. The independent reviewer compared the evidence card against the publisher's Methods and Results sections.
2. The correction was made in the source evidence card before expanding the Wiki, moving metric-level verification earlier in the workflow.
3. S01 full text remains inaccessible in the institutional repository; the workflow correctly retains a partial-verification label instead of filling in missing details.

## Conclusion

The first two sources are suitable as an initial test batch. S02 has publisher full-text support; S01 is currently suitable only for abstract-level claims. Continue to the next batch only after preserving these evidence boundaries.
