# 衣櫃管理

> 狀態：已建立初步研究依據；完整實務教學與更多來源仍待補。

## 預計涵蓋
- 基本單品與膠囊衣櫥
- 現有衣物盤點與分類
- 單品重複搭配及穿著紀錄
- 減少不必要購買的衣櫃規劃

## 初步研究依據

### 衣櫃資料與 Outfit Recommendation（S07）

Shirkhani 等人（2023）的 survey 將 capsule wardrobe recommendation 列為時尚推薦研究中的任務類型之一，也回顧使用者衣櫃資料及整套 Outfit 推薦相關研究。這支持將「使用者現有衣物」視為未來 AI OOTD 的候選資料來源。

### 個人衣櫃管理應用（S08）

Le 等人（2026）提出個人衣櫃管理應用，整合單品管理、Outfit 管理、建議及推薦功能。摘要描述其推薦模組使用 item embeddings、attention-based aggregation、MLP prediction 及 ranking-based retrieval，根據使用者既有衣櫃與指定目的產生 Outfit 候選。

摘要報告的 MSE 與 cosine similarity 是模型 embedding 預測的評估數值，不能直接解讀為使用者滿意度或真實穿搭效果。由於目前尚未完成全文檢視，詳細實驗設計及限制仍待補。

## 證據卡
- [S07：AI-Driven Fashion Recommender Systems Survey](../cards/S07.md)
- [S08：Personalized Wardrobe Management Application](../cards/S08.md)

## 參考文獻（APA 7th）

Le, T.-N., Nguyen Huu, V. L., & Tran, A. C. (2026). A personalized wardrobe management application with attention-based outfit recommendation. *Procedia Computer Science, 289*, 1104–1113. https://doi.org/10.1016/j.procs.2026.08.330

Shirkhani, S., Mokayed, H., Saini, R., Alqahtani, M. A. M., & Chai, H. Y. (2023). Study of AI-driven fashion recommender systems. *SN Computer Science, 4*, Article 514. https://doi.org/10.1007/s42979-023-01932-9
