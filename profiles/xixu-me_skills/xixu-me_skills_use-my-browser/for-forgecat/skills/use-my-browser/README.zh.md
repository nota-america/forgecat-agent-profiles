# `use-my-browser` skill

**_[English](README.md)_**

`use-my-browser` 是一个策略优先的 skill，适用于那些需要从用户当前的实时浏览器会话中获取证据，而不是仅依赖静态检索的智能体。当浏览器本身就是证据来源时，就该使用它：例如已登录的控制台、localhost 应用、动态或懒加载页面、基于渲染结果的 UX 审查，或当前处于活动状态的 DevTools 上下文，比如已选中的请求或元素。

它受到 [`web-access`](https://github.com/eze-is/web-access) 的启发，是面向 Chrome DevTools MCP 时代的一次专门化重构。它被设计成用于实时调试的浏览器会话策略层，而不是一个通用浏览默认方案，也不是普通静态检索的替代品。

## 何时使用该 skill

当答案依赖于实时浏览器状态时，就应使用该 skill，例如：

- 页面已经在用户当前的浏览器会话中完成认证
- 渲染后的 UI 本身就是证据，例如首屏布局、可见确认信息或懒加载内容
- 工作流依赖浏览器内交互，例如上传、拖拽、悬停状态或富文本输入
- 用户已经在 DevTools 中打开了有价值的上下文，例如已选中的请求或元素
- 目标是 localhost 应用，或其他比起猜测 URL、更适合直接信任浏览器状态的页面

如果稳定的 URL 加上直接检索已经足以回答问题，就优先走静态路径。该 skill 有意不作为普通网页抓取任务的默认方案。

## 示例提示词

按意图分组时，这些示例最容易理解。

### 已登录的浏览器操作

- “将该视频发到 YouTube，最后一次点击留给我。”
- “检查该已登录的控制台，不要让我再登录一次。”

### 网站检查与 UX 评审

- “访问 Chrome Developers 首页，评审它的 UX 和视觉设计。”
- “比较这些公开来源，给出引用，只有在静态路径失败时才使用浏览器。”
- “打开该定价页面，告诉我用户在首屏真正会看到什么。”

### 本地应用与 localhost 调试

- “打开我的 localhost 应用，复现损坏的上传流程，并告诉我为什么它会悄无声息地失败。”
- “检查该本地控制台，确认发布后保存的状态是否真的可见。”

### 社交网站与动态页面研究

- “去 X.com 找这家公司的账号，看看它最近发了什么。”
- “从该懒加载页面里提取真实的图片或视频源地址。”
- “检查该无限滚动页面，提取它在渲染后真正显示出来的链接。”

### DevTools 上下文接力

- “我已经在 DevTools 里选中了失败的请求。解释一下它为什么返回 403。”
- “我已经在 Elements 面板里点到了出问题的元素。找出为什么布局不对。”

### 并行对比类工作

- “同时研究这五个项目的网站，并给出一份对比总结。”
- “比较这三个产品页面，告诉我它们的引导流程有什么不同。”

## 为什么会有该 skill

该 skill 的核心想法来自更新后的 Chrome DevTools MCP 工作流，详见[让你的编码智能体使用 Chrome DevTools MCP 调试你的浏览器会话](https://developer.chrome.com/blog/chrome-devtools-mcp-debug-your-browser-session)：

- 编码智能体可以复用你正在使用的浏览器会话，而不是强迫你再登录一次
- 编码智能体可以接管一个已经激活的调试上下文，例如 Network 中选中的请求或 Elements 中选中的元素
- 手动调试和 AI 辅助调试如今可以彼此衔接，而不必分处两个浏览器会话

这改变了浏览器 skill 的工作重点。

更宽泛的浏览器工具箱型 skills，往往围绕“传输”来构建：search、fetch、`curl`、CDP，再加上一些站点特定技巧，全都打包在一起。那当然有用，但实时会话调试的重心不同。一旦智能体能附着到你正在使用的浏览器，难点就不再只是“我该怎么到达该页面？”而会变成：

- 智能体应该在什么时候停留在静态路径上，什么时候接管实时浏览器？
- 它该如何从当前页面或已选中的 DevTools 上下文继续，而不是从头重放整个流程？
- 它该如何在执行任何变更前，证明浏览器能力真的可用？
- 它该如何从过期页面状态、重新渲染、模糊的保存结果和失效的操作目标中恢复？
- 它该如何保留可复用的站点知识，同时又不将这些知识变成过时迷信？

`use-my-browser` 正是为回答这些问题而存在。

## 能力

该 skill 围绕一个前提来组织：当编码智能体能连接到用户当前的浏览器会话后，哪些情况会真正变得重要。

### 目标优先路由

- 将任务分类为 `static-capable` 或 `browser-required`
- 让静态任务走成本最低、但仍足以产出正确证据的路径
- 一旦任务真的依赖实时浏览器状态，就阻止它被悄悄降级

### 实时会话中的浏览器操作

- 在用户当前的浏览器会话就是事实来源时复用它
- 将渲染后的 UI、可见确认状态、登录状态、懒加载内容以及仅浏览器可见的结构都视为一等证据
- 当任务确实发生在浏览器里时，优先使用 MCP 原生浏览器操作，而不是临时拼凑大量脚本

### 渲染结果检查与 UX 评审

- 支持审查页面实际可见的内容，而不是只看静态 HTML 或提取出来的文本所暗示的内容
- 适用于 UX 检查、首屏评审、布局确认，以及其他“渲染结果本身就是证据”的任务
- 只有在可见体验比静态提取更重要时，才升级到浏览器路径

### DevTools 接力

- 当用户已经打开相关页面、元素或请求时，直接从当前调试上下文起步
- 支持从已选中的 Elements 和 Network 请求继续
- 避免在浏览器已经包含关键线索时，还去重放整套复现流程

### 控制面安全性

- 为保存、发布、上传和设置类流程加入更严格的确认纪律
- 将只读检查与会改动状态的操作分开
- 在宣称状态变更成功之前，要求同时具备可见证据和结构性证据
- 如果用户希望将最后一次点击或发布动作保留为手动操作，也支持在最终高风险变更前停下

### 深层 DOM 与媒体检查

- 处理 Shadow DOM、iframe、折叠内容、懒加载内容以及仅在渲染后可见的证据
- 只有在快照不足时，才使用 DOM 级检查
- 区分“提取真实媒体源地址”和“检查渲染后的媒体状态”

### 从选择器到 MCP 的桥接

- 将已知选择器桥接成 MCP 原生 `uid` 目标
- 即使 a11y 树没有直接暴露目标，也能帮助保留真实的浏览器交互
- 改进上传和操作目标定位，而不必重建自定义执行器

### 恢复与歧义处理

- 面对失效的 `uid`、意外导航、模糊结果和交互失败时，使用一套明确的恢复循环
- 只有在这些证据确实能改变下一步行动时，才升级到控制台或网络检查
- 当能力状态或页面归属变得不明确时，能够干净地停下

### 可复用的站点知识

- 将经过验证的站点特定操作事实存储在 `references/site-patterns/` 下
- 将站点知识视为操作证据，而不是道听途说
- 当某条站点模式不再有效时，明确支持降级或删除旧结论

### 并行浏览器归属

- 支持多页面、多智能体的并行工作，同时避免页面冲突
- 定义“一页一主”的归属纪律
- 让清理和页面归属变成显式行为，而不是隐含假设

## 安装

使用 [`skills` CLI](https://github.com/vercel-labs/skills) 安装该 skill：

```bash
bunx skills add xixu-me/skills -s use-my-browser
```

如果没有 Bun，可以使用 npm：

```bash
npx skills add xixu-me/skills -s use-my-browser
```

## 前置条件

> [!IMPORTANT]
> 在开始前，请确保 Chrome 已经在运行。否则，智能体可能无法附着到你当前的浏览器会话，而会退回到一个独立的隔离浏览器会话。

关于 [Chrome DevTools MCP README](https://github.com/ChromeDevTools/chrome-devtools-mcp?tab=readme-ov-file#automatically-connecting-to-a-running-chrome-instance) 中描述的自动实时会话流程：

1. 在 Chrome（`>=144`）中，打开 `chrome://inspect/#remote-debugging` 并启用 remote debugging。
2. 保持 Chrome 处于运行状态。
3. 使用 `--autoConnect` 配置 Chrome DevTools MCP。

![展示如何在 Chrome 中启用 remote debugging 的截图](https://developer.chrome.com/static/blog/chrome-devtools-mcp-debug-your-browser-session/image/chrome-remote-debugging.png)

下面的默认示例使用 Bun。如果你更偏好 npm，后面也给出了对应的 `npx` 版本。

```bash
bunx chrome-devtools-mcp@latest --autoConnect
```

```bash
npx chrome-devtools-mcp@latest --autoConnect
```

如果你想退出 Chrome DevTools MCP 使用统计，可以在任一命令或下面的配置示例中加上 `--no-usage-statistics`。

如果 MCP 服务器运行在沙箱中，或者运行在与浏览器不同的机器上，请使用像 `--browserUrl=http://127.0.0.1:9222` 这样的手动连接方式，而不是 `--autoConnect`。这种手动方式要求 Chrome 以 remote debugging port 启动；平台相关的启动命令请参阅 [Chrome DevTools MCP README](https://github.com/ChromeDevTools/chrome-devtools-mcp?tab=readme-ov-file#manual-connection-using-port-forwarding)。

很多智能体运行时会使用如下 JSON 风格的 MCP 配置：

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "bunx",
      "args": ["chrome-devtools-mcp@latest", "--autoConnect"]
    }
  }
}
```

对于 Codex，MCP 配置可以像这样：

```toml
[mcp_servers.chrome-devtools]
command = "bunx"
args = ["chrome-devtools-mcp@latest", "--autoConnect"]
```

> [!TIP]
> 在 Chrome DevTools MCP 调试会话进行期间，Chrome 先请求权限、然后在会话激活时显示“Chrome 当前正由自动化测试软件控制”横幅，都是正常现象。

## 策略层

这套策略刻意保持简单：

1. 判断任务属于 `static-capable` 还是 `browser-required`。
2. 使用成本最低、但仍能产出用户真正需要之证据的路径。
3. 如果任务属于 `browser-required`，就坚持走浏览器路径，而不是悄悄降级。
4. 如果用户已经有一个实时调试上下文，就先从那个上下文继续，而不是尝试全新复现。
5. 在结束前，判断这次执行是否产生了可复用的站点知识，或者推翻了某个旧假设。

这也是它与更宽泛的网络 skills 之间最主要的区别。

在实践中，这意味着：

- `localhost`、本地控制台、上传、拖拽流程，以及保存/发布确认，通常属于 `browser-required`
- 带有稳定 URL 且提取目标很小的公开页面，通常应保持在静态路径上
- 如果用户希望保留最后一步为手动动作，高风险控制面工作可以在最终变更前停下

## 它是如何工作的

该 skill 由一个入口文件和一组聚焦的参考文档组成：

- [`SKILL.md`](./SKILL.md)：入口、范围、任务分类、硬性规则，以及参考文件加载指南
- [`references/task-routing.md`](./references/task-routing.md)：静态检索与实时浏览器路由
- [`references/browser-playbook.md`](./references/browser-playbook.md)：默认的实时浏览器操作循环
- [`references/browser-capability-matrix.md`](./references/browser-capability-matrix.md)：通过真实浏览器工具调用来证明浏览器能力
- [`references/debug-handoff.md`](./references/debug-handoff.md)：从用户当前激活的 DevTools 上下文继续
- [`references/control-plane-workflows.md`](./references/control-plane-workflows.md)：更安全的保存、发布、上传和更新流程
- [`references/anti-automation-friction.md`](./references/anti-automation-friction.md)：软 404、认证墙、看似成功但实际上无效的交互，以及反自动化阻力
- [`references/deep-dom.md`](./references/deep-dom.md)：iframe、Shadow DOM、折叠内容与懒加载证据
- [`references/media-inspection.md`](./references/media-inspection.md)：真实媒体源地址提取与渲染后媒体检查
- [`references/parallel-browser-ownership.md`](./references/parallel-browser-ownership.md)：多页面与多智能体的浏览器归属
- [`references/selector-bridge.md`](./references/selector-bridge.md)：将选择器知识转换成 MCP 原生操作目标
- [`references/browser-recovery.md`](./references/browser-recovery.md)：从失效目标、重新渲染和模糊 UI 状态中恢复
- [站点模式维护规则](./references/site-patterns/README.md)：维护域名特定操作知识的规则

这些参考文档有意只保持一层深度。入口文件负责决定下一步该加载哪一份文档，这样整个协议才能保持可理解、可组合。

## 实现细节

该 skill 并没有实现自定义浏览器代理。它记录的是一种面向支持 MCP 的智能体的浏览器会话操作模型。

关键实现选择包括：

- **能力优先，而不是工具优先。** 该 skill 通过真实的浏览器工具调用来证明实时浏览器能力，而不是靠 shell 猜测或默认某种集成细节。
- **优先复用会话，而不是重新自动化。** 该 skill 假设用户当前的浏览器会话往往是最有价值的工件，尤其是在已登录页面和 DevTools 调查中。
- **偏向 MCP 原生操作。** 默认操作循环优先使用快照和 MCP 原生动作，然后才会考虑大范围 DOM 脚本。
- **聚焦式升级。** `evaluate_script`、控制台检查和网络检查都属于升级工具，而不是默认操作模式。
- **归属纪律。** 任务创建的页面会被保守地跟踪和清理；属于用户的页面则不会被碰。
- **经验回路。** 站点特定知识只有在经过验证且可复用时才会被存储；一旦失效，也可以被降级。

这让它在一个重要方面比自定义浏览器自动化栈 skill 更现代：它是为 Chrome DevTools MCP 正在推动的“实时会话调试”模式而构建的，而不仅仅是为了远程控制某个浏览器标签页。

## 与 `web-access` 的关系

该 skill 公开地受到了 `web-access` 的启发，尤其是它对“按证据路由”、保留站点知识，以及将浏览器工作视为一种严肃操作模式而不是最后手段的强调。

区别在于范围。`web-access` 是更广义的 Web 工具箱；`use-my-browser` 则收窄了使命，专注于如何在 MCP 原生工作流中正确接管用户当前的实时浏览器会话。

这意味着：

- 更少“所有 Web 任务都丢到这里”
- 更多“这就是如何安全、高效地在用户当前浏览器里操作”
- 更少强调自定义浏览器传输层
- 更多强调路由、调试接力、确认纪律、恢复机制和页面归属

请将该 skill 理解为面向实时会话调试范式的一次专门化策略层重构，而不是 `web-access` 的替代品。
