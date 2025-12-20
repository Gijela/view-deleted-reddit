# Cloudflare Pages 部署指南

本项目使用 Next.js 静态导出 + Cloudflare Pages Functions 部署到 Cloudflare Pages。

## 前置要求

1. Wrangler CLI 已作为开发依赖安装在项目中

2. 登录 Cloudflare:
```bash
pnpm wrangler login
```

## 部署步骤

### 方法 1: 使用 pnpm 脚本 (推荐)

```bash
# 构建并部署到 Cloudflare Pages
pnpm pages:deploy
```

### 方法 2: 手动部署

```bash
# 1. 构建项目
pnpm build

# 2. 部署到 Cloudflare Pages
pnpm wrangler pages deploy out
```

## 本地预览

在部署前,你可以在本地预览 Cloudflare Pages 版本:

```bash
# 构建项目
pnpm build

# 本地预览
pnpm preview
```

## 配置说明

### next.config.mjs
- `output: 'export'`: 静态导出模式
- `images.unoptimized: true`: Cloudflare Pages 不支持 Next.js 图片优化

### wrangler.toml
- `name`: 项目名称 (view-deleted-reddit)
- `compatibility_date`: Cloudflare Workers 兼容日期
- `pages_build_output_dir`: 构建输出目录 (out)

### functions/ 目录
- `functions/api/lookup.ts`: Cloudflare Pages Function 处理 API 请求
- 自动部署为 Cloudflare Workers,无需额外配置

### 技术栈
- **Next.js 16 静态导出**: 生成静态 HTML/CSS/JS
- **Cloudflare Pages Functions**: 处理动态 API 请求
- **Wrangler**: Cloudflare 官方 CLI 工具

## 环境变量

如果你的项目需要环境变量,可以通过以下方式设置:

### 方法 1: 在 wrangler.toml 中设置
```toml
[env.production.vars]
NODE_ENV = "production"
YOUR_API_KEY = "your-value"
```

### 方法 2: 通过 Cloudflare Dashboard 设置
1. 登录 Cloudflare Dashboard
2. 进入 Pages 项目
3. 进入 Settings > Environment variables
4. 添加环境变量

### 方法 3: 通过 wrangler CLI 设置
```bash
wrangler pages secret put YOUR_SECRET_NAME
```

## 自定义域名

部署后,你可以在 Cloudflare Dashboard 中为项目添加自定义域名:

1. 进入 Pages 项目
2. 进入 Custom domains
3. 添加你的域名

## 持续部署

### 通过 GitHub 集成 (推荐)

1. 登录 Cloudflare Dashboard
2. 进入 Pages
3. 连接你的 GitHub 仓库
4. 配置构建设置:
   - **构建命令**: `pnpm install && pnpm build`
   - **构建输出目录**: `out`
   - **Node 版本**: `20`

每次推送到主分支时,Cloudflare 会自动构建和部署。

## 故障排查

### 构建失败
- 确保所有依赖都已安装: `pnpm install`
- 检查 Node.js 版本是否为 20.x
- 查看构建日志中的错误信息

### 运行时错误
- 检查 Cloudflare Dashboard 中的日志
- 确保所有 API 路由都兼容 Edge Runtime
- 某些 Node.js API 在 Cloudflare Workers 中不可用

### 图片不显示
- 确保 `next.config.mjs` 中设置了 `images.unoptimized: true`
- 使用标准的 `<img>` 标签或配置了 unoptimized 的 `<Image>` 组件

## 项目结构

```
view-deleted-reddit/
├── src/
│   ├── app/              # Next.js 应用页面
│   ├── components/       # React 组件
│   └── sections/         # 页面区块组件
├── functions/
│   └── api/
│       └── lookup.ts     # Cloudflare Pages Function (API 端点)
├── out/                  # 构建输出 (静态文件)
└── wrangler.toml         # Cloudflare 配置
```

## 更多信息

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [Next.js 静态导出](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js on Cloudflare Pages 指南](https://developers.cloudflare.com/pages/framework-guides/nextjs/)

