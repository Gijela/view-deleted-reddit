好的，我们已经确定了项目最关键的资产——域名。现在，以此为基石，我为你重新整理一份完整、正式、可直接用于指导开发的最终版项目文档。

---
## 产品需求文档 (PRD)

**项目名称**: ViewDeletedReddit
**域名**: `ViewDeletedReddit.com`
**版本**: V1.0 (MVP - 最小可行产品)
**日期**: 2025年7月2日

### 1. 项目目标与愿景 (Purpose & Vision)

**目标**：精准、高效地解决用户在浏览Reddit时，因帖子或评论被删除而无法获取完整信息的核心痛点。

**愿景**：将 `ViewDeletedReddit.com` 打造为在“查看Reddit已删除内容”这一细分领域下，**搜索引擎排名第一、用户体验最佳、最受用户信赖的**权威工具。我们的成功不依赖于任何付费推广，完全由产品自身解决特定搜索需求的能力所驱动。

### 2. 目标用户 (Target Audience)

1.  **“好奇的观察者”**: 在浏览热门讨论时，看到关键的 `[deleted]` 评论，希望了解对话的完整上下文，这是我们最主要的用户。
2.  **“存档研究者”**: 希望查看某个特定用户（如KOL、争议人物）的历史发言，即使部分内容已被其删除。
3.  **“误删者”**: 希望找回自己不小心或因故删除的帖子或评论内容。

### 3. 核心功能需求 (MVP Feature Requirements)

1.  **统一查询入口 (Unified Query Input)**:
    * 网站主页的核心模块，一个极简的输入框。
    * 后端逻辑需能智能判断用户输入的是 **Reddit URL** 还是 **Reddit 用户名**。
2.  **实时聚合引擎 (Real-time Aggregation Engine)**:
    * 项目的后端核心，一个无状态API。
    * 接收前端请求后，实时、并发地向多个公开的第三方档案库（主要是 **Pushshift.io** 和 **The Wayback Machine**）发起查询。
    * 对返回的数据进行清洗、合并、去重和排序，形成统一的数据结构。
3.  **聚合结果展示 (Consolidated Results Display)**:
    * 一个干净、快速、移动端优先的结果页面。
    * 清晰地用特殊样式（如高亮背景、`[已删除]`标签）标记出被恢复的内容。
4.  **数据来源标注 (Source Attribution)**:
    * 在每一条被恢复的内容旁，用小字或图标注明数据来源（例如 `来源: Pushshift`），以增加透明度和可信度。
5.  **前端实时过滤 (Frontend Live Filtering)**:
    * 在结果页提供一个搜索框，允许用户在当前已加载的结果中，通过关键词快速筛选评论。

### 4. SEO获客策略 (SEO Customer Acquisition Strategy)

**核心策略**：**域名即广告，产品即营销**。我们将100%依赖自然搜索流量。

1.  **域名优势最大化**: 我们的域名 `ViewDeletedReddit.com` 本身就是最强的SEO信号。它将作为我们所有营销活动和品牌建设的中心。
2.  **权威页面优化 (On-Page SEO)**: 网站主页将被优化成针对核心关键词的、最权威的“答案页面”。H1标题、元描述、页面内容都将围绕“View Deleted Reddit Posts”这一主题展开。
3.  **内容中心辐射 (Content Hub)**: 创建一个博客或资源中心，发布少量高质量文章，全面覆盖与此主题相关的所有问题。这些文章将作为流量的“捕获网”，最终将用户引导至我们的核心工具。
    * **核心文章**: 《The Ultimate 2025 Guide: How To View Deleted Reddit Posts (Using Our Tool)》
    * **周边文章**: 《Why Do Reddit Posts Get Deleted? The Main Reasons》

### 5. 核心目标关键词 (Core Target Keywords)

* **主要关键词**: `view deleted reddit posts`, `see deleted reddit posts`
* **次要关键词**: `undelete reddit`, `reddit deleted content viewer`
* **长尾关键词**: `how to view deleted reddit posts from a user`, `reddit deleted comment checker`

---

## 技术开发思路文档

### 1. 核心架构思路：零存储，纯聚合 (Zero-Storage, Pure Aggregator)

为了实现最低成本和最简运维，我们坚决执行**不在自己的服务器上存储任何Reddit帖子原文**的策略。我们的后端是一个无状态的实时API，其唯一职责是查询、处理、转发。

### 2. 技术选型 (Technology Stack)

| 模块 | 技术选型 | 选择目的 |
| :--- | :--- | :--- |
| **前端框架** | **Next.js** | 提供顶级的SEO支持（SSR/SSG），保证我们的“SEO命脉”能最大限度地发挥作用。 |
| **UI/CSS** | **Tailwind CSS** | 实现快速、一致、现代化的UI开发，完美支持我们的“体验至上”原则。 |
| **后端API** | **Next.js API Routes** | 与前端共存，零配置，以低成本的Serverless函数形式运行我们的核心聚合器逻辑。 |
| **部署平台** | **Vercel** | 与Next.js是天作之合，提供无缝的开发与部署体验，免费套餐足以支撑项目起步。 |
| **外部数据源** | **Pushshift API, Wayback Machine API** | 这是我们项目的“外部数据库”，是我们所有功能的实现基础。 |

### 3. 阶段性开发计划 (Phased Development Plan)

**总时间预估**: **3周全职冲刺**
**启动日期**: **2025年7月7日**

#### **第一周 (7月7日 - 7月13日): 后端引擎搭建**

* **任务**:
    1.  初始化Next.js项目并配置好Vercel。
    2.  创建 `/api/lookup` 后端API路由。
    3.  编写**核心聚合器逻辑**：实现对Pushshift和Wayback Machine的并发API请求。
    4.  完成对**URL**和**用户名**两种查询模式的支持，并输出统一的、包含“来源”字段的JSON数据。
* **使用工具**: Next.js API Routes, `axios`/`fetch`。
* **目的**: 攻克技术上最核心的挑战，验证数据通路的完全可行性。

#### **第二周 (7月14日 - 7月20日): 前端实现与联调**

* **任务**:
    1.  开发所有UI组件（输入模块、结果展示卡片、加载/错误提示等）。
    2.  将前端与后端API完全对接，实现端到端的查询与展示流程。
    3.  在前端实现“数据来源标注”和“实时过滤”功能。
* **使用工具**: React, Tailwind CSS。
* **目的**: 将后端能力转化为用户可交互、功能完整的产品原型。

#### **第三周 (7月21日 - 7月27日): 体验优化与上线**

* **任务**:
    1.  精修所有UI/UX细节，打磨动画和交互，确保移动端体验完美无瑕。
    2.  进行全面的Bug修复和边缘案例测试。
    3.  撰写并部署首页的最终版SEO文案。
    4.  准备好Product Hunt等平台的发布材料，**在月底前完成上线**。
* **使用工具**: Vercel (用于部署)。
* **目的**: 将一个“能用的原型”打磨成一个“好用的、能打动用户的产品”，并成功推向市场。