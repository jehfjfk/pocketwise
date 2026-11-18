# PocketWise · 口袋理财

**A quieter way to understand your money. / 用更轻盈的方式管理财务。**

PocketWise is an original, zero-dependency personal finance app. It works offline in your browser, stores your data locally, and has no accounts, tracking, API keys, external fonts, CDN assets, or network requests. English and Chinese are built in.

口袋理财是一款原创、零依赖的个人财务应用。所有数据保存在浏览器本地，支持完全离线使用，无需注册、API 密钥或服务器，没有追踪、外部字体、CDN 或网络请求。内置完整中英文界面。

## Quick start / 快速开始

1. Keep `index.html`, `style.css`, and `app.js` together and open **index.html** in a modern browser (Chrome, Edge, Firefox, or Safari).
2. Start with **Accounts → Add account**, then add transactions. The first launch is empty.
3. Alternatively use **Settings → Load demo data** to explore a populated workspace. This replaces existing data after confirmation.
4. Use the top-right controls to switch language or theme. Choose a base currency in Settings.
5. Download JSON backups regularly. You can move them between browsers or devices through Settings → Restore JSON backup.

1. 将 `index.html`、`style.css` 和 `app.js` 放在同一目录，使用现代浏览器直接打开 **index.html**。
2. 首次启动没有预填数据。先在「账户」创建账户，再添加交易。
3. 可在「设置 → 加载演示数据」体验完整示例，确认后会替换现有数据。
4. 右上角可切换语言和主题；设置页可修改基础币种。
5. 请定期下载 JSON 备份，可通过恢复备份在设备或浏览器之间迁移。

No installation, build step, package manager, or server is needed. Browsers differ in how they scope `localStorage` for `file:` URLs. Use the same browser/profile and file location; moving the folder may create a separate store. If your browser restricts local file storage, an optional local static server works too: `python3 -m http.server 8000`, then open `http://localhost:8000`. The app itself still makes no external requests. Private browsing may discard data when closed.

无需安装、编译、包管理器或服务器。不同浏览器对 `file:` 地址的本地存储处理方式不同，建议使用同一浏览器、用户配置和文件路径；移动目录可能导致读取不同的存储区域。若浏览器限制本地文件存储，也可选用 `python3 -m http.server 8000` 后打开 `http://localhost:8000`。应用本身仍不会发出外部请求。隐私浏览模式可能在关闭后清除数据。

## Features / 功能

- **Dashboard:** current net worth, monthly income and expenses, savings rate, six-month net-worth line chart and expense donut chart drawn directly on canvas, recent transactions, and four local insight cards.
- **Accounts:** create, edit, delete cash, bank, credit-card, investment, and loan accounts; opening balance, account currency, automatically derived balances; optional monthly card due day.
- **Transactions:** income, expense, and transfer CRUD; categories, tags, notes, dates; full-text search and type/category/account/month filters. Cross-currency transfers support the actual received amount.
- **Budgets:** monthly category limits with their own currency, spending progress, remaining amounts, and overspending alerts.
- **Subscriptions:** monthly and yearly cycles, pause/resume, next charge and countdown, monthly equivalent and annualized cost.
- **Bill calendar:** month navigation, subscriptions, recurring expense rules, credit-card payment dates, and highlighting for bills due within seven days. Click a bill to edit its source.
- **Savings goals:** editable saved amount, target/date/currency, progress, and the monthly amount needed to reach the goal.
- **Recurring transactions:** weekly, monthly, or yearly income/expense/transfer rules; automatic catch-up when opened and every minute while open; editable and pausable.
- **Multi-currency:** CNY, USD, EUR, JPY, GBP, HKD; user-selected base currency and transparent built-in static rates.
- **Data tools:** CSV import/export, full versioned JSON backup/restore, one-click demo data, confirmed clear-all.
- **Local insights:** unusual spending increases, fastest-growing category by absolute increase, subscription burden, savings-rate commentary. A deterministic offline rule engine; no external AI service.
- **Interface:** English/Chinese, light/dark themes, responsive mobile/desktop layouts, keyboard-accessible forms and navigation, textual canvas summaries for assistive technology.

- **总览：** 当前净资产、月度收支、储蓄率、手绘 Canvas 六个月净资产趋势图和支出环图、最近交易，以及四类本地财务洞察。
- **账户：** 现金、银行、信用卡、投资、贷款账户的增删改；期初余额、独立币种、自动计算余额、可选信用卡还款日。
- **交易：** 收入、支出、转账的增删改；类别、标签、备注、日期；全文搜索及类型、类别、账户、月份筛选；跨币种实际到账金额。
- **预算：** 按月按类别设置限额与币种，进度条、剩余额度、超支提醒。
- **订阅：** 月付/年付、暂停/启用、下次扣款倒计时、月均和全年成本。
- **日历：** 按月查看订阅、周期支出和信用卡还款日，突出显示七天内到期项目；点击账单可编辑来源。
- **储蓄目标：** 已存金额、目标金额、日期、币种、进度，以及自动计算每月所需储蓄。
- **周期交易：** 每周/每月/每年的收入、支出、转账规则；打开应用时及使用期间每分钟自动补记；可编辑和暂停。
- **多币种：** 人民币、美元、欧元、日元、英镑、港币；基础币种可选，固定汇率透明展示。
- **数据工具：** CSV 导入导出、带版本号的 JSON 完整备份恢复、演示数据、确认后清除数据。
- **本地洞察：** 支出异常增长、绝对增幅最大的类别、订阅负担、储蓄率建议。确定性离线规则引擎，不调用 AI 服务。
- **界面：** 中英文、浅色/深色、手机和桌面响应式布局、键盘可操作表单和导航、图表无障碍文字摘要。

## Accounting and scheduling / 计算与周期规则

**Balances.** Opening balance + income − expenses − outgoing transfers + incoming transfers. Credit-card and loan debt should be entered as a negative opening balance. Paying a card or loan is a transfer into that account, not another expense. Net worth includes all account balances converted to the selected base currency. Account deletion is blocked while any transactions or rules reference it. Editing an account's currency reinterprets its stored opening and transaction amounts in the new currency; it does not exchange existing money.

**Dates.** Local calendar dates use `YYYY-MM-DD` (1900–2199). Future transactions are saved and searchable but excluded from current balances, monthly spending, and insights until their dates arrive. The trend uses each prior month-end and today for the current month. Opening balances apply to the full history; there is no opening-balance date. Savings rate is `(income − expenses) / income`; transfers are excluded, and a missing income denominator displays a dash.

**Recurring rules.** Rules catch up from their first due date through today, storing both a next-occurrence index and an occurrence key. Deleting or editing a generated transaction does not reset its rule. Deleting a rule preserves generated transactions. Changing its start date or frequency recalculates the schedule and catches up, skipping dates that still have that rule's occurrence key. A paused rule catches up missed dates when resumed. At most 5,000 new records are generated in one pass; another pass continues the backlog. Nothing runs when the browser is closed. Month-end dates clamp to the last valid day and retain the original anchor: January 31 → February 28/29 → March 31. Yearly February 29 anchors return to February 29 in leap years.

**Subscriptions and bills.** Subscriptions are reminders and cost projections, not automatic ledger entries. Their next charge advances to the first scheduled date on or after today. Use recurring expense rules for automatic recording. If both a subscription and a matching rule exist, the calendar intentionally lists both sources. Card events display current outstanding debt, not a reconciled statement amount; no payment is made automatically. Historical and future calendars show scheduled events, not paid/unpaid tracking.

**Goals and budgets.** Goal savings are entered manually and do not move money. Monthly savings needed is the remaining target divided by `max(1, ceil(days remaining / 30.4375))`; past targets show the shortfall. Budgets count recorded expenses through today in their selected month, converted to the budget's saved currency. One budget per month/category is allowed. Changing base currency only changes consolidated displays, not saved currencies or amounts.

**Insights.** Spending and category comparisons use this month through today versus the same number of days in the prior month (clamped at month-end). A spending increase above 25% triggers the spike insight. Missing prior expenses do not produce an invented comparison. Subscription burden divides the annual cost by 12 and compares that with current monthly income.

**Rates.** Fixed illustrative units per USD: CNY 7.2, USD 1, EUR 0.92, JPY 150, GBP 0.79, HKD 7.82. Conversion is `amount / rates[from] * rates[to]`. These are not live quotes or historical exchange rates. Displays round to currency precision; calculations retain JavaScript number precision. This is a personal planning tool, not an audited accounting system.

**余额与日期：** 余额＝期初余额＋收入－支出－转出＋转入。信用卡/贷款欠款用负数填写；还款记录为转入该账户，避免重复计为支出。账户有关联交易或规则时不能删除。修改账户币种会重新解释已有金额，不会兑换历史金额。日期为本地日期 `YYYY-MM-DD`（1900–2199）。未来交易可查询，但到期前不计入当前余额和统计。趋势图为历史月末及本月今天的余额；期初余额适用于整段历史，没有单独日期。储蓄率＝（收入－支出）÷收入；不含转账，无收入时显示短横线。

**周期规则：** 从首次日期补记到今天，保存下次序号与每期唯一键。删除或编辑生成的交易不会重置规则；删除规则会保留交易。修改首次日期或频率会重新计算并补记，但已有该规则唯一键的日期会跳过。暂停后重新启用会补记暂停期间。每轮最多新增 5,000 条，后续继续。浏览器关闭时不运行。月末日期自动截到当月末，之后恢复原始日期；每年 2 月 29 日在平年按 2 月 28 日，闰年恢复。

**订阅与账单：** 订阅只作提醒和成本预测，不会自动记账；需要自动记账时创建周期规则。订阅与对应规则同时存在时，日历会分别显示。信用卡事件使用当前欠款，不等于已对账的应还金额，也不自动还款。日历展示计划日期，不追踪已付/未付状态。

**目标与预算：** 目标金额手动维护，不影响账户。每月所需储蓄＝剩余目标÷`max(1, ceil(剩余天数 / 30.4375))`，过期目标显示差额。预算计算所选月份截至今天的支出，并转换为预算保存的币种，每月每类别只允许一条。切换基础币种不改动原始记录金额。

**洞察与汇率：** 与上月相同天数比较，支出增加超过 25% 时提示异常。无历史支出时提示数据不足；类别按绝对增额比较。订阅月均成本与本月收入比较。内置汇率为每美元：人民币 7.2、美元 1、欧元 0.92、日元 150、英镑 0.79、港币 7.82。非实时或历史行情，仅用于个人规划。换算公式为 `金额 / 原币汇率 * 目标币汇率`。展示按币种舍入，内部使用 JavaScript 数字精度，不适合作为审计账务。

## CSV format / CSV 数据格式

UTF-8, comma-separated, header required. A UTF-8 BOM, CRLF/LF, quoted commas, multiline quoted notes, and doubled quotes are supported. Export always includes **all** transactions, regardless of filters. Import appends transactions; it never creates accounts or recurring rules. Re-importing the same CSV appends duplicates. Use JSON restore for lossless full-workspace migration and preservation of recurring-generation metadata.

UTF-8 编码、逗号分隔、必须有标题行。支持 BOM、CRLF/LF 换行、引号内逗号与多行备注、双引号转义。导出包含全部交易，不受筛选影响。导入追加交易，不创建账户或周期规则；重复导入会产生重复记录。完整迁移和保留周期生成元数据请用 JSON 备份。

| Column / 列 | Required / 必填 | Format / 格式 |
| --- | --- | --- |
| `date` | Yes / 是 | `YYYY-MM-DD` |
| `type` | Yes / 是 | `income`, `expense`, `transfer` |
| `amount` | Yes / 是 | Positive decimal in the source account currency; no symbol or grouping separators / 原账户币种正数，无货币符号和千位分隔符 |
| `account` | Yes / 是 | Existing account ID or unique exact account name / 已有账户 ID 或唯一完整名称 |
| `to_account` | Transfers / 转账必填 | Different existing account ID/name / 不同的已有账户 ID 或名称 |
| `received_amount` | No / 否 | Positive destination-currency amount; defaults to static conversion / 转入币种正数，默认按内置汇率换算 |
| `category` | No / 否 | Stable category key below; defaults to `other` / 下方类别键，默认 `other` |
| `tags` | No / 否 | Pipe-separated (`home\|food`) or a JSON string array; export uses JSON arrays to preserve literal separators / 竖线分隔或 JSON 字符串数组，导出使用 JSON 数组以保留原标签 |
| `note` | No / 否 | Free text, up to 2,000 characters / 自由文本，最多 2,000 字符 |

Category keys / 类别键：`salary`, `freelance`, `food`, `shopping`, `transport`, `housing`, `utilities`, `health`, `entertainment`, `education`, `travel`, `investment`, `other`.

Example (first create accounts named **Daily Bank** and **USD Savings**) / 示例（请先创建名为 **Daily Bank** 和 **USD Savings** 的账户）：

```csv
date,type,amount,account,to_account,received_amount,category,tags,note
2026-11-01,income,12000,Daily Bank,,,salary,work,November salary
2026-11-03,expense,68.50,Daily Bank,,,food,food|friends,"Lunch, downtown"
2026-11-05,transfer,720,Daily Bank,USD Savings,100,investment,savings,Monthly saving
```

Columns may be reordered; unknown or duplicate columns are rejected. All rows are validated before any are saved; invalid imports do not partially modify your data. Account IDs appear on account cards and in JSON backups. Duplicate account names require an ID. CSV export prefixes cells beginning with `=`, `+`, `-`, `@`, a tab, carriage return, or apostrophe with an apostrophe to reduce spreadsheet formula interpretation. PocketWise removes one matching escape on import, preserving its own exports. Numeric imports must be finite, positive, and at most 100 trillion. Files are limited to 10 MB. Tags are limited to 100 per transaction, 100 characters per tag.

列可换序，但不允许未知列或重复列。全部行验证通过后才保存，不会部分导入。账户 ID 在账户卡片及 JSON 中可见；重名账户请用 ID。导出时，若单元格以 `=`、`+`、`-`、`@`、制表符、回车或单引号开头，会添加单引号，降低表格公式解释风险；重新导入会去掉相应转义以保持内容。金额须为有限正数，最多 100 万亿。文件最多 10 MB；每笔交易最多 100 个标签，每个最多 100 字符。

## Storage and backup / 存储和备份

All state is serialized under the single localStorage key **`pocketwise.v1`**:

```json
{
  "version": 1,
  "settings": { "base": "CNY", "lang": "en", "theme": "light" },
  "accounts": [],
  "transactions": [],
  "budgets": [],
  "subscriptions": [],
  "goals": [],
  "rules": []
}
```

The JSON backup is this complete object, including IDs, preferences, saved currencies, and recurring-rule cursors. Restore validates the supported version, fields, dates, IDs, references, and numeric bounds before replacing data, then processes due rules. An unreadable store is not silently overwritten; Settings can download the raw value for recovery. Storage failures are reported, and unsuccessful saves do not change in-memory data. Other open tabs receive storage updates, but simultaneous edits are last-writer-wins; use one active editing tab.

Data is local, **not encrypted**. Anyone with access to your browser profile or exported backup can read it. Clearing browser data, removing the profile, or using certain private modes can delete it. Clear all removes financial records and resets preferences to English, light mode, and CNY. Demo generation replaces the workspace while retaining preferences; neither runs automatically.

全部状态保存在唯一键 **`pocketwise.v1`**，JSON 备份包含完整对象、ID、偏好、币种与周期进度。恢复前验证版本、字段、日期、引用、唯一 ID 和数值范围，恢复后补记到期规则。无法读取的数据不会被静默覆盖，可在设置下载原文以恢复。保存失败会提示，不修改内存数据。其他标签页会接收存储更新，但同时编辑采用最后写入优先，建议仅在一个标签页操作。

本地数据**未加密**，能够访问浏览器用户配置或备份的人可读取。清理浏览器数据、删除用户配置或部分隐私模式可能删除数据。清除全部数据会移除财务记录，并将偏好重置为英文、浅色和人民币；演示数据保留当前偏好，需要用户主动确认，首次启动不会自动生成。

## An original alternative to Sure / 与 Sure 的区别

Inspired by the idea of self-managed finance in [Sure](https://github.com/we-promise/sure), but implemented independently. Sure's self-hosted architecture uses Ruby on Rails, PostgreSQL, Redis, and Docker. PocketWise uses plain HTML/CSS/JavaScript and localStorage: no backend operations, database setup, or service accounts. It adds dedicated subscription management, a bill calendar, savings goals, and offline rule-based insights to this small offline workspace. The tradeoff is intentional: no bank synchronization, cloud account, shared household database, server scheduling, or live exchange-rate feed. No Sure code, branding, or assets are included. The project link is documentation only; the application does not contact it.

设计灵感来自 [Sure](https://github.com/we-promise/sure) 的自主财务管理理念，但代码完全独立实现。Sure 自托管使用 Ruby on Rails、PostgreSQL、Redis、Docker；口袋理财使用原生 HTML/CSS/JavaScript 与 localStorage，无需后端运维、数据库或服务账户，并提供专门的订阅管理、账单日历、储蓄目标及离线规则洞察。取舍是没有银行同步、云账户、多人共享数据库、后台服务器调度或实时汇率。未使用 Sure 的代码、品牌或资源；文档链接不会被应用主动访问。

## Files and verification / 文件与检查

- `index.html` — application shell and accessible modal / 应用框架与表单弹窗
- `style.css` — responsive layout, light/dark themes / 响应式布局、浅深色主题
- `app.js` — local data model, all views/actions, recurrence, validation, import/export, canvas charts / 数据模型、交互视图、周期、验证、导入导出与图表
- `README.md` — bilingual documentation / 双语说明
- `LICENSE` — MIT license / MIT 许可证

Check syntax / 语法检查：

```sh
node --check app.js
```

No runtime dependencies. Licensed under **MIT**; see `LICENSE`. / 无运行时依赖。采用 **MIT** 许可证，详见 `LICENSE`。
