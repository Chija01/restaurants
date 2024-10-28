# 餐廳清單 1.0
此專案提供使用者瀏覽以及搜尋餐廳的資訊

## 功能列表
- 使用者可以在首頁看到所有餐廳與它們的簡單資料：
    + 餐廳照片
    + 餐廳名稱
    + 餐廳分類
    + 餐廳評分
- 使用者可以再點進去看餐廳的詳細資訊：
    + 類別
    + 地址
    + 電話
    + 描述
    + 圖片
- 依照餐廳名稱及餐廳類別搜尋
- 檢視餐廳詳細資訊包含類別、地址、電話、描述及圖片 

## 使用工具
- Visual Studio Code - 開發環境
- Express - 應用程式架構
- Express-Handlebars - 模板引擎

## 環境建置
- Node.js

## 專案安裝流程
1. 打開你的 terminal，Clone 此專案至本機電腦
```
2. git clone https://github.com/Chija01/restaurants.git
```

3. 開啟終端機(Terminal)，進入存放此專案的資料夾
```
cd restaurants
```

4. 安裝套件
```
在 Terminal 輸入 npm i express
在 Terminal 輸入 npm install -g nodemon
在 Terminal 輸入npm install express-handlebars
```

5. 啟動伺服器，執行 app.js 檔案
```
npm run dev
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
```
The Express server is running on http://localhost:3000
```
