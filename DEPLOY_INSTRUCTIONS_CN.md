# Cloudflare Pages 部署说明 (中文)

## 快速开始

### 1. 登录 Cloudflare

```bash
pnpm wrangler login
```

这会打开浏览器,让你登录 Cloudflare 账户并授权 Wrangler。

### 2. 构建项目

```bash
pnpm build
```

这会生成静态文件到 `out/` 目录。

### 3. 部署到 Cloudflare Pages

```bash
pnpm pages:deploy
```

或者手动执行:

```bash
pnpm wrangler pages deploy out --project-name=view-deleted-reddit
```

### 4. 访问你的网站

部署成功后,Wrangler 会输出你的网站 URL,类似:

```
✨ Success! Uploaded 50 files (5.2 sec)

✨ Deployment complete! Take a peek over at https://view-deleted-reddit-xxx.pages.dev
```

## 项目配置说明

### 构建配置

- **框架**: Next.js 16 (静态导出模式)
- **构建命令**: `pnpm build`
- **输出目录**: `out/`
- **Node 版本**: 20.x

### API 路由

API 路由通过 Cloudflare Pages Functions 实现:

- 文件位置: `functions/api/lookup.ts`
- 访问路径: `https://your-site.pages.dev/api/lookup`
- 运行环境: Cloudflare Workers (Edge Runtime)

### 环境变量 (可选)

如果需要设置环境变量:

```bash
# 通过 Cloudflare Dashboard
1. 登录 Cloudflare Dashboard
2. 进入 Pages > 你的项目
3. Settings > Environment variables
4. 添加变量

# 或通过 wrangler CLI
pnpm wrangler pages secret put YOUR_SECRET_NAME
```

## 常见问题

### Q: 部署失败怎么办?

A: 检查以下几点:
1. 确保已登录: `pnpm wrangler whoami`
2. 确保构建成功: `pnpm build`
3. 检查 `out/` 目录是否存在且有文件
4. 查看完整错误信息

### Q: API 不工作怎么办?

A: 
1. 检查 `functions/api/lookup.ts` 文件是否存在
2. 确保 API 路由兼容 Cloudflare Workers
3. 查看 Cloudflare Dashboard 中的 Functions 日志

### Q: 如何更新部署?

A: 
```bash
pnpm build
pnpm pages:deploy
```

每次部署都会创建一个新的部署版本,可以在 Cloudflare Dashboard 中回滚。

### Q: 如何绑定自定义域名?

A:
1. 登录 Cloudflare Dashboard
2. 进入 Pages > 你的项目
3. Custom domains > Set up a custom domain
4. 按照提示添加你的域名

## 本地开发

### 开发服务器

```bash
pnpm dev
```

访问 http://localhost:3000

### 本地预览 Cloudflare Pages 环境

```bash
pnpm build
pnpm preview
```

这会启动一个本地 Cloudflare Pages 环境,包括 Functions。

## 技术架构

```
┌─────────────────────────────────────┐
│   Cloudflare Pages (Edge Network)  │
├─────────────────────────────────────┤
│                                     │
│  静态文件 (out/)                     │
│  ├── HTML, CSS, JS                  │
│  ├── Images, Fonts                  │
│  └── _next/ (Next.js assets)        │
│                                     │
│  Functions (functions/)             │
│  └── /api/lookup                    │
│      └── Cloudflare Worker          │
│                                     │
└─────────────────────────────────────┘
```

## 性能优化

Cloudflare Pages 自动提供:

- ✅ 全球 CDN (300+ 数据中心)
- ✅ 自动 HTTPS
- ✅ HTTP/2 和 HTTP/3
- ✅ Brotli 压缩
- ✅ 智能缓存
- ✅ DDoS 防护

## 监控和日志

查看部署和运行日志:

1. Cloudflare Dashboard > Pages > 你的项目
2. Deployments: 查看部署历史
3. Functions: 查看 API 调用日志
4. Analytics: 查看访问统计

## 成本

Cloudflare Pages 免费套餐包括:

- ✅ 无限静态请求
- ✅ 无限带宽
- ✅ 500 次构建/月
- ✅ 100,000 Functions 请求/天
- ✅ 自定义域名
- ✅ 自动 SSL 证书

对于大多数项目来说,免费套餐完全够用!

## 下一步

部署成功后,你可以:

1. 🎨 自定义域名
2. 📊 查看分析数据
3. 🔧 配置环境变量
4. 🚀 设置 CI/CD (GitHub Actions)
5. 📝 查看访问日志

祝部署顺利! 🎉

