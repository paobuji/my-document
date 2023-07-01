# 错误
- The process '/usr/bin/git' failed with exit code 128
- There was an error initializing the repository: The process '/usr/bin/git' failed with exit code 129 ❌
```bash
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  # workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
# permissions:
#   contents: read
#   pages: write
#   id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
# concurrency:
#   group: "pages"
#   cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    # environment:
    #   name: github-pages
    #   url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm install vuepress@next -D
      - name: Build
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with: 
          ssh-key: ${{ secrets.SSH }} # GitHub token，用于访问仓库和部署
          branch: gh-pages # 部署到 gh-pages 分支
          clean: true # 清空 gh-pages 分支上的旧文件
          folder: docs/.vuepress/dist # 部署 dist 文件夹
          # dir: docs/.vuepress/dist # 指定要部署的目录
      

```