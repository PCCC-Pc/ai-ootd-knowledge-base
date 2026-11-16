# AI OOTD Knowledge Base

以可追溯研究來源整理個人化穿搭知識，並提供 HTML Wiki 與 12 頁 Lookbook 教學簡報。

## 目前可直接使用
- **HTML Wiki：** [開啟穿搭研究所](https://pccc-pc.github.io/ai-ootd-knowledge-base/wiki/index.html)
- **HTML 教學簡報：** [開啟 AI OOTD Lookbook](https://pccc-pc.github.io/ai-ootd-knowledge-base/slides/index.html)

## 專案內容
- `AGENTS.md`：AI 專案總規則、來源、隱私及工作流程原則。
- `raw/`：原始來源資料與書目資訊。
- `cards/`：S01–S09 來源證據卡。
- `wiki/`：八大穿搭知識主題 Markdown，以及提供搜尋、收藏與閱讀切換的 HTML Wiki。
- `workflow/`：Graph、Loop 與檢查流程。
- `slides/`：12 頁 HTML 教學簡報、逐頁草稿與大綱。
- `reports/`：來源查證、Wiki 覆蓋率、簡報內容忠實度及更新紀錄。
- `assets/`：專案視覺素材。
- `.agents/workflows/`：可重複執行的工作流程規格。

## 視覺方向
採用 **Korean/Japanese Lookbook × Fashion Editorial**：暖米白、深橄欖綠、乾燥玫瑰與中性色調；穿搭照片作視覺示例，研究主張仍以 Wiki 和 Evidence Cards 為依據。照片來源及攝影者請見各 HTML 頁面的 Photo Credits。

## Wiki 互動
八大主題索引、搜尋、收藏（儲存在目前瀏覽器的 localStorage）、深色／淺色閱讀模式、證據狀態提示、Evidence Card 連結、DOI／原始來源及原始 Markdown 連結。

## 簡報操作
12 頁、側邊頁碼導覽、上一頁／下一頁、進度條、滑鼠滾輪、鍵盤方向鍵／PageUp／PageDown、觸控滑動及行動裝置響應式版面。

## 研究與內容邊界
- 重要主張需能追溯到 `cards/` 的來源證據卡。
- 證據不足、摘要層級或仍待全文查證的內容會保留標示。
- S03 不代表四季個人色彩系統已被研究驗證。
- S04 身形推薦與 S05 服裝尺寸／合身度研究不可混為一談。
- Calendar Memory、即時天氣、Daily Outfit Push、衣櫃辨識與照片分析仍是未來構想，尚未實作。
- Wiki 的 HTML 閱讀介面是現有 Markdown 的導覽與摘要層；逐篇原始內容仍保留在 `wiki/*.md`。

## 驗證狀態
程式碼結構、12 頁數量、八主題資料、HTML／JavaScript 語法及本地檔案存在性由 GitHub Actions 靜態檢查。靜態檢查不等同真實瀏覽器互動與多裝置渲染驗收；未實際執行的測試會標記為待檢查。

## 隱私與著作權
請勿提交 API Keys、Access Tokens、私人行程或其他敏感資料。公開 Repository 不存放未獲授權散布的完整論文或其他受著作權保護內容。