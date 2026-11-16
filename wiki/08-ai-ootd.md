# AI 穿搭推薦

> 狀態：已整理兩項初步研究依據；本專案的推薦功能尚未實作。

## 預計涵蓋
- 使用者條件與偏好表示
- 天氣、季節、場合、活動及每日行程作為推薦條件
- 依現有衣櫃組合 Outfit
- 穿搭照片分析的輸入、限制與回饋方式
- 推薦理由、可解釋性與使用者回饋

## 初步研究依據

### 1. 場景資訊可作為 Outfit Recommendation 的條件（S01）

Ye 等人（2023）提出的 SAFRS 將 scene 與 outfit 資訊分開編碼，再融合成場景感知的服裝相容性分數。此研究可支持在 AI OOTD 推薦邏輯中納入「場合或活動情境」的設計方向。

目前僅核對研究摘要與出版資訊；詳細實驗與限制仍待全文查證。此研究不等同於 Calendar Memory 或每日推播的實作證明。

### 2. 服裝色彩和諧可以透過模型評估與推薦（S02）

Li 等人（2025）提出以服裝影像、色彩特徵及觀察者感知為基礎的色彩和諧評估與推薦模型。研究使用規則式模型、SVM、CNN 與 GAN 等方法，探討服裝配色評估及顏色建議。

此研究可作為未來 Outfit Recommendation 中「色彩搭配」模組的研究參考，但研究本身的樣本、服裝組合與實驗情境有限，不能直接視為已證實可泛化至所有使用者的個人化穿搭系統。

## 未來模組：Calendar Memory

- 在使用者明確授權後才讀取行程。
- 僅處理推薦所需的最少資訊，例如活動類型、時間及必要的地點資訊。
- 不將私人行程或個資寫入公開 Repository。
- 提供撤回授權及刪除資料的方式。
- 將行事曆資料與天氣、穿搭偏好及衣櫃資料整合前，必須先確認各資料來源的可用性與準確度。

## 目前尚未被來源證實或本專案尚未完成的功能

- Calendar Memory 串接尚未實作。
- 天氣 API 串接尚未實作。
- Daily Outfit Push 尚未實作。
- 衣櫃辨識及照片分析尚未實作。

## 證據卡
- [S01：Scene-aware Fashion Recommender System](../cards/S01.md)
- [S02：服裝色彩和諧評估與推薦模型](../cards/S02.md)

## 參考文獻（APA 7th）

Li, H.-C., Wang, L.-K., Chang, Y.-K., & Huang, K.-Y. (2025). Establishing colour harmony evaluation and recommendation model for clothing colour matching based on machine learning and deep learning. *Fashion and Textiles, 12*, Article 27. https://doi.org/10.1186/s40691-025-00433-y

Ye, T., Hu, L., Zhang, Q., Lai, Z. Y., Naseem, U., & Liu, D. D. (2023). Show me the best outfit for a certain scene: A scene-aware fashion recommender system. In *Proceedings of the ACM Web Conference 2023* (pp. 1172–1180). Association for Computing Machinery. https://doi.org/10.1145/3543507.3583435


### 3. Body shape and style attributes can be recommendation signals (S04)

Hidayati 等人（2018）提出以使用者身形屬性與服裝風格相容性作為推薦方向。此研究可作為未來個人化推薦考慮身形條件的技術參考，但目前摘要層級資料不足以支持具體版型規則。

### 4. Outfit context is an established recommendation research topic (S06)

Abugabah 等人（2020）的研究主題為 context-aware outfit recommendation，與本專案希望將場合與活動情境納入 Outfit 推薦的方向相關。此批次僅確認出版者索引的書目與摘要資訊；具體情境變數、模型與評估結果尚待全文檢視。
