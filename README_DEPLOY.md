# 荣帝威士忌内容体系 Demo 部署说明

## Vercel

1. 将项目推送到 GitHub。
2. 打开 Vercel，选择 `Add New Project`，导入该仓库。
3. 保持默认识别为 Vite，确认：
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 点击 `Deploy`。

## Netlify

1. 将项目推送到 GitHub。
2. 打开 Netlify，选择 `Add new site` -> `Import an existing project`。
3. 选择该仓库，确认：
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 点击 `Deploy site`。

也可以在 Netlify 使用手动部署：先运行 `npm run build`，然后将 `dist` 文件夹拖入 Netlify 的 Deploys 页面。
