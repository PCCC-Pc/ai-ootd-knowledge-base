# AI 穿搭推薦

> 狀態：已整理八項來源的初步研究依據；本專案的推薦功能尚未實作。

## 預計涵蓋
- 使用者條件與偏好表示
- 天氣、季節、場合、活動及每日行程作為推薦條件
- 依現有衣櫃組合 Outfit
- 穿搭照片分析的輸入、限制與回饋方式
- 推薦理由、可解釋性與使用者回饋

## 初步研究依據

### 1. 場景資訊可作為 Outfit Recommendation 的條件（S01）
Ye 等人（2023）提出 SAFRS，分別編碼 scene 與 outfit 資訊，再融合成場景感知的服裝相容性分數。目前僅核對摘要與出版資訊；詳細實驗仍待全文查證。此研究不等同於 Calendar Memory 或每日推播的實作證明。

### 2. 服裝色彩和諧可以透過模型評估與推薦（S02）
Li 等人（2025）提出以服裝影像、色彩特徵及觀察者感知為基礎的色彩和諧評估與推薦模型。此研究可作為色彩搭配模組的研究參考，但不能直接視為已證實可泛化至所有使用者的個人化穿搭系統。

### 3. 身形屬性可作為推薦條件（S04）
Hidayati 等人（2018）提出以使用者身形屬性與服裝風格相容性作為推薦方向。目前以機構典藏摘要及書目資料為依據；詳細資料集、評估指標與模型限制仍待全文查證。

### 4. Context-aware Outfit Recommendation（S06）
Abugabah 等人（2020）的研究主題為 context-aware outfit recommendation，與將場合及活動情境納入 Outfit 推薦的方向相關。具體情境變數、模型與評估結果仍待全文檢視。

### 5. AI Fashion Recommender Systems 的研究分類（S07）
Shirkhani 等人（2023）的 survey 指出，Fashion Recommender Systems 的核心挑戰之一是服裝之間的 compatibility，而非僅比較商品相似度。文章整理 item retrieval、complementary item recommendation、whole outfit recommendation 與 capsule wardrobe recommendation 等任務，也討論 user、clothing 與 context 資訊。

這篇 survey 可作為本專案推薦架構的整體背景，但不能當成我們的 AI OOTD 已完成實測的證據。

### 6. 從現有衣櫃產生 Outfit 候選（S08）
Le 等人（2026）提出個人衣櫃管理應用，根據使用者已有衣物及指定目的產生 Outfit 候選。摘要提及 item embeddings、attention aggregation、MLP prediction 與 ranking retrieval。全文細節仍待補；摘要中的模型指標不等於使用者滿意度。

## 未來模組：Calendar Memory

- 在使用者明確授權後才讀取行程。
- 僅處理推薦所需的最少資訊，例如活動類型、時間及必要的地點資訊。
- 不將私人行程或個資寫入公開 Repository。
- 提供撤回授權及刪除資料的方式。
- 將行事曆資料與天氣、穿搭偏好及衣櫃資料整合前，必須先確認各資料來源的可用性與準確度。

## 目前尚未實作的功能
- Calendar Memory 串接
- 天氣 API 串接
- Daily Outfit Push
- 衣櫃辨識及照片分析

## 證據卡
- [S01：Scene-aware Fashion Recommender System](../cards/S01.md)
- [S02：Clothing Colour Harmony Model](../cards/S02.md)
- [S04：Body Shape Style Recommendation](../cards/S04.md)
- [S06：Context-Aware Outfit Recommendation](../cards/S06.md)
- [S07：AI Fashion Recommender Systems Survey](../cards/S07.md)
- [S08：Personalized Wardrobe Management Application](../cards/S08.md)

## 參考文獻（APA 7th）

Abugabah, A., Cheng, X., & Wang, J. (2020). Learning context-aware outfit recommendation. *Symmetry, 12*(6), Article 873. https://doi.org/10.3390/sym12060873

Le, T.-N., Nguyen Huu, V. L., & Tran, A. C. (2026). A personalized wardrobe management application with attention-based outfit recommendation. *Procedia Computer Science, 289*, 1104–1113. https://doi.org/10.1016/j.procs.2026.08.330

Li, H.-C., Wang, L.-K., Chang, Y.-K., & Huang, K.-Y. (2025). Establishing colour harmony evaluation and recommendation model for clothing colour matching based on machine learning and deep learning. *Fashion and Textiles, 12*, Article 27. https://doi.org/10.1186/s40691-025-00433-y

Shirkhani, S., Mokayed, H., Saini, R., Alqahtani, M. A. M., & Chai, H. Y. (2023). Study of AI-driven fashion recommender systems. *SN Computer Science, 4*, Article 514. https://doi.org/10.1007/s42979-023-01932-9

Ye, T., Hu, L., Zhang, Q., Lai, Z. Y., Naseem, U., & Liu, D. D. (2023). Show me the best outfit for a certain scene: A scene-aware fashion recommender system. In *Proceedings of the ACM Web Conference 2023* (pp. 1172–1180). Association for Computing Machinery. https://doi.org/10.1145/3543507.3583435
