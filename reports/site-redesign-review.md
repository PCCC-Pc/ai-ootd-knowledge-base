# AI OOTD｜Wiki 與 HTML 簡報改版紀錄

- 日期：2026-11-16
- Repository：PCCC-Pc/ai-ootd-knowledge-base
- 視覺方向：B＋A，Korean/Japanese Lookbook × Fashion Editorial
- 目的：補上可直接瀏覽的 HTML Wiki，並改善既有 12 頁 HTML 簡報的視覺與閱讀層次。

## 一、Wiki HTML

新增 `wiki/index.html`，保留原本八篇 Markdown 作為知識維護來源，新增一個瀏覽介面。

### 功能
- 八大知識主題側邊索引及主題卡片。
- 關鍵字搜尋。
- 收藏功能（儲存在使用者目前瀏覽器 localStorage）。
- 深色／淺色閱讀模式。
- 顯示主題內容狀態、目前研究依據及證據界線。
- Evidence Card、DOI／原始來源及 Markdown 原始檔連結。
- 可展開閱讀完整原始 Markdown 文章。

### 全文一致性
HTML 內嵌八篇 Markdown 原文，並由靜態驗證程式逐篇比對 Repository 原檔。2026-11-16 的 GitHub Actions 驗證確認八篇文章皆完全一致。

### 內容邊界
HTML 首屏及主題摘要會整理既有內容，研究證據及限制以原有 Markdown 和 Evidence Cards 為準。尚待補證據或全文查證的狀態不會改成已完成。

## 二、HTML 教學簡報視覺更新

更新 `slides/index.html`，保留原本 12 頁內容順序、研究引用與研究限制，重新整理視覺呈現。

- 封面加入 Lookbook 主視覺。
- 內頁加入穿搭照片側欄、編輯式標題、留白及暖中性色。
- 卡片、色票、流程圖、表格與步驟區塊採一致的雜誌排版。
- 側邊頁碼標籤、上一頁／下一頁、進度條、滑鼠滾輪、鍵盤及觸控翻頁保留。
- 圖片只作造型視覺示例，不作研究證據。
- Photo Credits 列於簡報下方。

## 三、圖片來源

採用 Pexels 標示 Free to use 的穿搭照片作為 Lookbook 視覺素材：
- cottonbro studio, *A Woman Wearing Beige Trench Coat*: https://www.pexels.com/photo/a-woman-wearing-beige-trench-coat-7760024/
- Spencer Lee, *Woman Wearing a Beige Coat Walking on a Street*: https://www.pexels.com/photo/woman-wearing-a-beige-coat-walking-on-a-street-18512526/
- J-Scott Photography, *Beautiful Woman Wearing Fashion Clothing in Studio Shot*: https://www.pexels.com/photo/beautiful-woman-wearing-fashion-clothing-in-studio-shot-12324552/
- Ayşegül Delice, *Modern Fashion Shoot with Beige Outfit and Chic Style*: https://www.pexels.com/photo/modern-fashion-shoot-with-beige-outfit-and-chic-style-30415590/

圖片僅為穿搭示例，不代表特定顏色或服裝適合所有人。

## 四、GitHub Actions 靜態驗證結果

2026-11-16：
- 八大 Wiki 主題資料：通過。
- 八篇原始 Markdown 內嵌及逐篇一致性比對：8／8 通過。
- 引用的 Evidence Cards 存在：通過。
- 簡報頁數與頁碼導覽：12／12 通過。
- Wiki／簡報內嵌 JavaScript 語法：通過。
- HTML ID 唯一性：通過。
- HTML 圖片替代文字 alt：通過。
- 搜尋、收藏、閱讀模式事件及簡報滾輪／鍵盤／觸控事件存在：通過。

GitHub Actions run：
https://github.com/PCCC-Pc/ai-ootd-knowledge-base/actions/runs/43866470478

GitHub Pages deployment run：
https://github.com/PCCC-Pc/ai-ootd-knowledge-base/actions/runs/43866471313

## 五、仍待人工驗收

- 尚未以實際 Brave／Chrome 視窗逐頁檢查桌面與手機的圖片載入、文字溢出及版面斷點。
- 搜尋、收藏、深淺色、滾輪、鍵盤與觸控翻頁雖有程式碼並通過靜態檢查，仍需使用者實際操作驗收。
- 外部圖片依賴 Pexels CDN；若網路環境無法連線，照片可能無法載入，但文字與導覽仍在 HTML 中。
- GitHub Pages 的建置與部署已成功；本紀錄不將部署成功等同於完成瀏覽器視覺驗收。

## 六、結論

本次已補足原 Repository 缺少 HTML Wiki 的問題，並將既有簡報更新為 Lookbook × Fashion Editorial 視覺。原有八篇 Markdown、九張 Evidence Cards、研究引用與證據限制均保留；靜態檢查及 Pages 部署成功，實際瀏覽器驗收仍保留為待完成項目。
