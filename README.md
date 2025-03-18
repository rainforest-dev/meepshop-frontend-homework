# Frontend 面試考題 - 即時聊天室

## 目標

請開發一個 多人即時聊天室，可以顯示「對話列表」及「聊天室內容」，
以 React 為基礎來完成此作業。

## 需求

- 對話列表

  1. 列出所有與不同用戶的對話
  2. 每筆對話顯示：

     a. 參與者（頭像 + 名稱）

     b. 最後一則訊息

     c. 訊息時間

  3. 點擊某個對話後，進入聊天室畫面

- 聊天室

  1. 顯示完整的聊天記錄
  2. 支援文字、圖片、系統訊息
  3. 訊息包含：

     a. 發送者資訊（頭像 + 名稱）

     b. 訊息內容（文字 / 圖片）

     c. 反應（like、love、laugh）

     d. 訊息時間

  4. 允許輸入訊息並發送（本地模擬，不需後端）

## 技術要求

1. 必須使用 React（Next.js 亦可）
2. 技術選擇自由（Tailwind / Styled Components / Zustand / Redux 都可）
3. 無需後端，請使用 Mock API（提供 JSON 檔案）

## Mock API

請下載並使用以下 JSON 作為 Mock Data

API 結構：
GET
/conversations：取得對話列表
/messages?conversationId={id}：取得指定對話的訊息
POST
/conversations/:id/messages/create : 新增對話

## 評估標準

- 基本完成度：畫面完整，符合需求
- 程式結構：良好的組件拆分與可讀性
- 狀態管理：可使用 useState / useContext / Zustand（非強制）
- UI/UX：設計是否清晰、易用

## 額外加分項目

- 訊息即時更新效果（例如 setTimeout 模擬 WebSocket）
- 訊息反應（like/love/laugh）
- 圖片 Lazy Loading
- 深色模式

## 加分項目 (非強制)

- 後端 DB 設計：若有能力實作出完整的後端功能也可以挑戰看看！
