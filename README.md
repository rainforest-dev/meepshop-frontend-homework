# Frontend 面試考題 - 即時聊天室

https://github.com/user-attachments/assets/0b2080db-e958-4f79-91a9-fe8301a3c5b0

![demo-rwd](https://github.com/user-attachments/assets/2cd04670-1a2a-429c-b967-5a41ab4e023d)

## Development Workflow

### Prerequisites

- Ensure you have Node.js and npm installed.
- Install dependencies by running `npm install`.

### Running the Project

1. Pull the `.env.local` file from Vercel by running the following command:

```bash
npx vercel env pull
```

Ensure you have the Vercel CLI installed and authenticated.

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Code Standards

- Follow the ESLint and Prettier configurations provided in the project.
- Run `npm run lint` to check for linting issues.

### Deployment

- Ensure all tests pass and the code is lint-free.
- Push changes to the main branch; the deployment pipeline will handle the rest.

## Project Structure

### Overview

The project follows a modular structure to ensure scalability and maintainability.

```
/
├── public/                # Static assets (images, fonts, etc.)
├── src/                   # Source code
│   ├── app/               # Next.js app directory
│   │   ├── api/           # API routes
│   │   ├── conversations/ # Conversation-related pages
│   │   ├── components/    # Page-specific components
│   │   └── ...            # Other app-specific directories
│   ├── assets/            # Static assets like JSON data
│   ├── components/        # Reusable UI components
│   ├── store/             # Redux store and slices
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── .github/               # GitHub-specific configurations
├── .devcontainer/         # Dev container configuration
├── .env.local             # Environment variables
├── package.json           # Project metadata and dependencies
├── README.md              # Project overview and setup instructions
└── tsconfig.json          # TypeScript configuration
```

### Key Directories

- **`app/`**: Contains Next.js app directory, including API routes and pages.
- **`assets/`**: Static assets like JSON data.
- **`components/`**: Reusable React components.
- **`store/`**: Redux store, slices, and services.
- **`types/`**: TypeScript interfaces and type definitions.
- **`utils/`**: Helper functions for common tasks.

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
