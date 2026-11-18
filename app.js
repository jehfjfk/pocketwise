'use strict';
(() => {
  const KEY = 'pocketwise.v1';
  const CURRENCIES = ['CNY', 'USD', 'EUR', 'JPY', 'GBP', 'HKD'];
  // Fixed illustrative rates: units of each currency per USD, never fetched.
  const RATES = { CNY: 7.2, USD: 1, EUR: 0.92, JPY: 150, GBP: 0.79, HKD: 7.82 };
  const CATEGORIES = ['salary', 'freelance', 'food', 'shopping', 'transport', 'housing', 'utilities', 'health', 'entertainment', 'education', 'travel', 'investment', 'other'];
  const EXPENSE_CATEGORIES = CATEGORIES.filter(x => !['salary', 'freelance'].includes(x));
  const TYPES = ['cash', 'bank', 'credit', 'investment', 'loan'];
  const VIEWS = ['dashboard', 'transactions', 'accounts', 'budgets', 'subscriptions', 'calendar', 'goals', 'insights', 'settings'];
  const ICONS = ['◫', '⇄', '▣', '▥', '↻', '▦', '⚑', '✧', '⚙'];
  const COLORS = ['#348c75', '#8bbca2', '#e2b76c', '#729fae', '#ab98bb', '#d68a79', '#bcc89c', '#637e9c', '#c9a185', '#7ab6ae', '#b9ae7d'];
  const DICT = {
    en: {
      workspace:'Your workspace', privateLocal:'Offline. Private. Yours.', footer:'Made for a clearer financial life. All data stays on this device.',
      dashboard:'Dashboard', transactions:'Transactions', accounts:'Accounts', budgets:'Budgets', subscriptions:'Subscriptions', calendar:'Calendar', goals:'Savings goals', insights:'Insights', settings:'Settings',
      overview:'YOUR MONEY, AT A GLANCE', dashboardTitle:'A little clarity. A lot of possibility.', dashboardSub:'Know where you stand. Make room for what matters.',
      transactionsSub:'Every little transaction tells a bigger story.', accountsSub:'All your balances, together in one place.', budgetsSub:'Give your spending a little direction.', subscriptionsSub:'Small recurring costs. A clearer big picture.', calendarSub:'See what’s coming, before it arrives.', goalsSub:'Turn your someday into a plan.', insightsSub:'A thoughtful look at your money, calculated entirely offline.', settingsSub:'Your workspace, your preferences, your data.',
      addTransaction:'Add transaction', addAccount:'Add account', addBudget:'Add budget', addSubscription:'Add subscription', addGoal:'Add goal', addRule:'Add recurring rule', edit:'Edit', delete:'Delete', save:'Save', cancel:'Cancel', close:'Close',
      netWorth:'Total net worth', monthIncome:'Monthly income', monthExpense:'Monthly expenses', savingsRate:'Savings rate', acrossAccounts:'Across {n} accounts', thisMonth:'This month', retained:'Of income retained', trend:'Net worth over time', sixMonths:'Last 6 months', trendNote:'Month-end balances · current month through today', spendingBreakdown:'Where it went', spendingNote:'Expenses by category', recentTransactions:'Recent transactions', viewAll:'View all', localInsights:'A little perspective', localEngine:'Offline insights',
      emptyTitle:'A fresh start, just for you', emptyBody:'Add an account and your first transaction to get started.', noTransactions:'No transactions yet', noMatches:'No matching transactions', noMatchesBody:'Try changing your search or filters.', noAccounts:'Your accounts start here', noAccountsBody:'Create an account with its opening balance.', noBudgets:'A plan for your spending', noBudgetsBody:'Set your first monthly category budget.', noSubscriptions:'Keep track of what repeats', noSubscriptionsBody:'Add a subscription to see its cost and next charge.', noGoals:'What are you saving for?', noGoalsBody:'Give your next goal an amount and a date.', noRules:'No recurring rules yet', noRulesBody:'Automate regular income, expenses, and transfers.', noExpenses:'No expenses this month', noData:'Not enough data yet',
      name:'Name', type:'Type', currency:'Currency', openingBalance:'Opening balance', openingHint:'For credit cards and loans, enter debt as a negative number.', balance:'Balance', creditDue:'Payment due day', optional:'Optional', dueDayHint:'Day 1–31; shorter months use their last day.', account:'Account', toAccount:'Destination account', amount:'Amount', receivedAmount:'Received amount', receivedHint:'Leave blank to use the built-in exchange rate.', category:'Category', tags:'Tags', tagsHint:'Separate tags with commas.', note:'Note', date:'Date', income:'Income', expense:'Expense', transfer:'Transfer', cash:'Cash', bank:'Bank', credit:'Credit card', investment:'Investment', loan:'Loan',
      salary:'Salary', freelance:'Freelance', food:'Food & dining', shopping:'Shopping', transport:'Transport', housing:'Housing', utilities:'Utilities', health:'Health', entertainment:'Entertainment', education:'Education', travel:'Travel', other:'Other',
      search:'Search notes, tags, categories, accounts…', allTypes:'All types', allCategories:'All categories', allAccounts:'All accounts', allMonths:'All months', resetFilters:'Reset filters', actions:'Actions', recordCount:'{n} transactions', total:'Total', month:'Month', limit:'Budget limit', spent:'Spent', remaining:'Remaining', overspent:'Over budget by {amount}', budgetCurrency:'Budgets use your base currency when created.', budgetDuplicate:'A budget already exists for this category and month.',
      cycle:'Billing cycle', monthly:'Monthly', yearly:'Yearly', weekly:'Weekly', nextCharge:'Next charge', nextDue:'Next due date', startDate:'First due date', active:'Active', paused:'Paused', annualCost:'Annualized cost', monthlyCost:'Monthly equivalent', activeSubscriptions:'Active subscriptions', dueToday:'Due today', dueIn:'In {n} days', overdue:'{n} days overdue', subscriptionNote:'Subscriptions are reminders; they do not create transactions. Add a recurring rule to record charges automatically.',
      recurringRules:'Recurring transactions', recurringNote:'Due rules run when you open the app and once a minute while it is open. Each occurrence is recorded once.', frequency:'Frequency', runNow:'Process due rules', runResult:'Created {n} recurring transactions.', ruleActive:'Automatically generate transactions', recurring:'Recurring',
      targetAmount:'Target amount', savedAmount:'Amount saved', targetDate:'Target date', perMonth:'{amount} / month to reach your goal', goalReached:'Goal reached. Well done!', goalOverdue:'Target date passed · {amount} still needed', goalNote:'Goals track amounts you enter here; they do not move money between accounts.',
      previousMonth:'Previous month', nextMonth:'Next month', today:'Today', dueSoon:'Due within 7 days', billLegend:'Subscriptions · recurring expenses · credit-card payment dates', creditBill:'{name} payment', creditBillNote:'Current outstanding balance; not a statement balance.', noBills:'No bills scheduled for this month.', weekdays:'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
      appearance:'Appearance & preferences', baseCurrency:'Base currency', baseHint:'Display totals converted with fixed illustrative rates.', language:'Language', theme:'Theme', light:'Light', dark:'Dark', darkMode:'Dark mode', lightMode:'Light mode', exchangeRates:'Built-in exchange rates', rateNote:'Illustrative fixed rates, not live market prices. 1 USD equals:', dataManagement:'Your data', exportCSV:'Export CSV', importCSV:'Import CSV', backup:'Download JSON backup', restore:'Restore JSON backup', csvNote:'CSV uses account IDs from your backup or exact account names. Required columns: date, type, amount, account. See README for the complete format.', backupNote:'Back up regularly. Browser data can be cleared, and is not encrypted. Restoring replaces all current data.', demoTitle:'Explore PocketWise', demoNote:'Load a realistic demo with accounts, transactions, and plans. Replaces current data.', loadDemo:'Load demo data', clearTitle:'Start fresh', clearNote:'Permanently remove all your PocketWise data on this browser.', clearData:'Clear all data',
      confirmDelete:'Delete this item? This cannot be undone.', accountInUse:'This account is used by transactions or recurring rules. Remove or reassign those records first.', confirmDemo:'Replace all current data with demo data? Download a backup first if needed.', confirmClear:'Permanently clear all data? This cannot be undone.', confirmRestore:'Replace all current data with this backup?', saved:'Saved.', deleted:'Deleted.', demoLoaded:'Demo data is ready.', cleared:'All data cleared.', restored:'Backup restored.', imported:'Imported {n} transactions.', exportDone:'Download prepared.', invalidFile:'Invalid file: {reason}', invalidBackup:'The backup does not match the supported version 1 format.', invalidCSV:'Invalid CSV format', csvRow:'CSV row {n}: {reason}', invalidDate:'Enter a valid date.', invalidAmount:'Enter a valid positive amount.', invalidAccounts:'Choose valid, different accounts for a transfer.', accountRequired:'Create an account first.', missingName:'A name is required.', invalidNumber:'Enter valid amounts and dates.', storageError:'Could not save. Browser storage may be unavailable or full. Download a backup and free up space.', loadError:'Stored data could not be read. It has not been overwritten. Download it below before clearing or restoring.', downloadRaw:'Download unreadable stored data', largeFile:'File must be smaller than 10 MB.', recurringLimit:'More than 5,000 occurrences are due. Use Process due rules to continue.',
      insightSavings:'Your savings rhythm', insightSavingsGood:'You kept {rate}% of this month’s income. Consistency makes a difference.', insightSavingsLow:'You kept {rate}% of income this month. A small budget adjustment can create more room.', insightSavingsNegative:'Expenses exceed income by {amount} this month. Review your largest categories first.', insightNoIncome:'Record income to calculate your savings rate.', insightSpike:'A change in spending', insightSpikeText:'Spending is {rate}% higher than the same elapsed period last month ({amount} more).', insightStable:'Spending has not risen more than 25% over the same elapsed period last month.', insightNew:'Add last month’s expenses to compare your spending rhythm.', insightGrowth:'Your fastest-growing category', insightGrowthText:'{category} increased by {amount} compared with the same elapsed period last month.', insightNoGrowth:'No category increased against the same period last month.', insightSubs:'The cost of little commitments', insightSubsText:'Active subscriptions add up to {amount} per month ({annual} per year).', insightBurden:'That is {rate}% of this month’s income.', insightMethod:'Comparisons use this month through today and the same days last month. Future-dated transactions are excluded from current balances and insights.',
      budgetSummary:'{spent} spent of {limit} planned', ruleRemovedNote:'Deleting a rule keeps transactions it already created.', accountId:'Account ID', dateRange:'Dates supported: 1900–2199.', baseTotal:'Total in {currency}', demo:'Demo',
    },
    zh: {
      workspace:'我的工作台', privateLocal:'离线使用，隐私属于你。', footer:'让财务生活更清晰。所有数据仅存储在此设备。',
      dashboard:'总览', transactions:'交易记录', accounts:'账户', budgets:'预算', subscriptions:'订阅管理', calendar:'账单日历', goals:'储蓄目标', insights:'财务洞察', settings:'设置',
      overview:'一眼看清你的财务', dashboardTitle:'多一点清晰，多一些可能。', dashboardSub:'了解当下，为重要的事留出空间。', transactionsSub:'每一笔小交易，都是生活的一部分。', accountsSub:'所有账户余额，一目了然。', budgetsSub:'让每一笔支出都有方向。', subscriptionsSub:'看清小额订阅背后的全年成本。', calendarSub:'提前了解即将到来的账单。', goalsSub:'把未来的愿望变成今天的计划。', insightsSub:'完全离线计算，细心了解你的财务状况。', settingsSub:'你的工作台，你的偏好，你的数据。',
      addTransaction:'添加交易', addAccount:'添加账户', addBudget:'添加预算', addSubscription:'添加订阅', addGoal:'添加目标', addRule:'添加周期规则', edit:'编辑', delete:'删除', save:'保存', cancel:'取消', close:'关闭',
      netWorth:'总净资产', monthIncome:'本月收入', monthExpense:'本月支出', savingsRate:'储蓄率', acrossAccounts:'共 {n} 个账户', thisMonth:'本月', retained:'收入留存比例', trend:'净资产趋势', sixMonths:'近 6 个月', trendNote:'月末余额 · 本月截至今天', spendingBreakdown:'钱都花在哪儿', spendingNote:'按类别统计支出', recentTransactions:'最近交易', viewAll:'查看全部', localInsights:'换个角度看财务', localEngine:'离线洞察',
      emptyTitle:'属于你的全新开始', emptyBody:'添加账户并记录第一笔交易，即可开始。', noTransactions:'还没有交易', noMatches:'没有匹配的交易', noMatchesBody:'试试调整搜索词或筛选条件。', noAccounts:'从你的账户开始', noAccountsBody:'创建账户并填写期初余额。', noBudgets:'为支出做好计划', noBudgetsBody:'设置第一个月度分类预算。', noSubscriptions:'掌握重复发生的费用', noSubscriptionsBody:'添加订阅，了解成本和下次扣款日期。', noGoals:'你正在为什么储蓄？', noGoalsBody:'为下一个目标设定金额和日期。', noRules:'还没有周期规则', noRulesBody:'自动记录定期收入、支出和转账。', noExpenses:'本月暂无支出', noData:'暂时没有足够的数据',
      name:'名称', type:'类型', currency:'币种', openingBalance:'期初余额', openingHint:'信用卡和贷款的欠款请填写负数。', balance:'余额', creditDue:'每月还款日', optional:'选填', dueDayHint:'填写 1–31；不足该天数的月份按月末计算。', account:'账户', toAccount:'转入账户', amount:'金额', receivedAmount:'到账金额', receivedHint:'留空则使用内置汇率计算。', category:'类别', tags:'标签', tagsHint:'多个标签用逗号分隔。', note:'备注', date:'日期', income:'收入', expense:'支出', transfer:'转账', cash:'现金', bank:'银行', credit:'信用卡', investment:'投资', loan:'贷款',
      salary:'工资', freelance:'自由职业', food:'餐饮', shopping:'购物', transport:'交通', housing:'住房', utilities:'生活缴费', health:'医疗健康', entertainment:'休闲娱乐', education:'教育', travel:'旅行', other:'其他',
      search:'搜索备注、标签、类别、账户…', allTypes:'所有类型', allCategories:'所有类别', allAccounts:'所有账户', allMonths:'所有月份', resetFilters:'重置筛选', actions:'操作', recordCount:'共 {n} 笔交易', total:'合计', month:'月份', limit:'预算金额', spent:'已支出', remaining:'剩余', overspent:'已超支 {amount}', budgetCurrency:'预算以创建时的基础币种记录。', budgetDuplicate:'该类别在此月份已有预算。',
      cycle:'扣款周期', monthly:'每月', yearly:'每年', weekly:'每周', nextCharge:'下次扣款', nextDue:'下次执行日期', startDate:'首次执行日期', active:'启用', paused:'已暂停', annualCost:'全年成本', monthlyCost:'月均成本', activeSubscriptions:'已启用订阅', dueToday:'今天到期', dueIn:'{n} 天后', overdue:'已逾期 {n} 天', subscriptionNote:'订阅用于提醒，不会生成交易。若需自动记账，请添加周期规则。',
      recurringRules:'周期交易', recurringNote:'打开应用时及使用期间每分钟处理到期规则，每期仅生成一次交易。', frequency:'频率', runNow:'处理到期规则', runResult:'已生成 {n} 笔周期交易。', ruleActive:'自动生成交易', recurring:'周期',
      targetAmount:'目标金额', savedAmount:'已储蓄金额', targetDate:'目标日期', perMonth:'每月需储蓄 {amount}', goalReached:'目标已达成，真棒！', goalOverdue:'目标日期已过 · 还需 {amount}', goalNote:'目标仅跟踪在此输入的金额，不会在账户之间转移资金。',
      previousMonth:'上个月', nextMonth:'下个月', today:'今天', dueSoon:'7 天内到期', billLegend:'订阅 · 周期支出 · 信用卡还款日', creditBill:'{name} 还款', creditBillNote:'显示当前欠款，非账单应还金额。', noBills:'本月没有计划账单。', weekdays:'日,一,二,三,四,五,六',
      appearance:'外观与偏好', baseCurrency:'基础币种', baseHint:'使用固定示例汇率换算汇总金额。', language:'语言', theme:'主题', light:'浅色', dark:'深色', darkMode:'深色模式', lightMode:'浅色模式', exchangeRates:'内置汇率', rateNote:'固定示例汇率，非实时行情。1 美元等于：', dataManagement:'数据管理', exportCSV:'导出 CSV', importCSV:'导入 CSV', backup:'下载 JSON 备份', restore:'恢复 JSON 备份', csvNote:'CSV 账户可使用备份中的账户 ID 或完整名称。必填列：date、type、amount、account。完整格式见 README。', backupNote:'请定期备份。浏览器数据可能被清除，且未加密。恢复备份将替换全部现有数据。', demoTitle:'探索口袋理财', demoNote:'加载含账户、交易和计划的演示数据，将替换现有数据。', loadDemo:'加载演示数据', clearTitle:'重新开始', clearNote:'永久清除此浏览器中的所有口袋理财数据。', clearData:'清除所有数据',
      confirmDelete:'删除此项目？此操作无法撤销。', accountInUse:'此账户被交易或周期规则使用。请先删除相关记录或改用其他账户。', confirmDemo:'用演示数据替换所有现有数据？如有需要请先下载备份。', confirmClear:'永久清除所有数据？此操作无法撤销。', confirmRestore:'用此备份替换所有现有数据？', saved:'已保存。', deleted:'已删除。', demoLoaded:'演示数据已就绪。', cleared:'已清除所有数据。', restored:'备份已恢复。', imported:'已导入 {n} 笔交易。', exportDone:'下载已准备好。', invalidFile:'文件无效：{reason}', invalidBackup:'备份不符合支持的第 1 版数据格式。', invalidCSV:'CSV 格式无效', csvRow:'CSV 第 {n} 行：{reason}', invalidDate:'请输入有效日期。', invalidAmount:'请输入有效正数金额。', invalidAccounts:'请为转账选择两个不同的有效账户。', accountRequired:'请先创建账户。', missingName:'请填写名称。', invalidNumber:'请输入有效金额和日期。', storageError:'无法保存。浏览器存储可能不可用或已满。请下载备份并释放空间。', loadError:'无法读取已存储数据，未覆盖原数据。请先下载原数据，再清除或恢复。', downloadRaw:'下载无法读取的原始数据', largeFile:'文件大小须小于 10 MB。', recurringLimit:'到期次数超过 5,000 次，请点击“处理到期规则”继续。',
      insightSavings:'你的储蓄节奏', insightSavingsGood:'本月留存了 {rate}% 的收入。坚持会带来改变。', insightSavingsLow:'本月留存了 {rate}% 的收入。小幅调整预算，就能留出更多空间。', insightSavingsNegative:'本月支出比收入多 {amount}。可先检查最大的支出类别。', insightNoIncome:'记录收入后即可计算储蓄率。', insightSpike:'支出的变化', insightSpikeText:'支出比上月同期增加 {rate}%（多出 {amount}）。', insightStable:'与上月同期相比，支出增幅未超过 25%。', insightNew:'添加上个月的支出，即可比较消费节奏。', insightGrowth:'增长最快的支出类别', insightGrowthText:'{category} 比上月同期增加了 {amount}。', insightNoGrowth:'与上月同期相比，没有支出类别增加。', insightSubs:'小额订阅的长期成本', insightSubsText:'已启用订阅每月共计 {amount}（全年 {annual}）。', insightBurden:'占本月收入的 {rate}%。', insightMethod:'比较本月至今与上月相同天数的数据。未来日期的交易不计入当前余额和洞察。',
      budgetSummary:'已支出 {spent} / 预算 {limit}', ruleRemovedNote:'删除规则不会删除已生成的交易。', accountId:'账户 ID', dateRange:'支持日期：1900–2199 年。', baseTotal:'以 {currency} 汇总', demo:'演示',
    }
  };
  const fresh = () => ({ version:1, settings:{base:'CNY',lang:'en',theme:'light'}, accounts:[], transactions:[], budgets:[], subscriptions:[], goals:[], rules:[] });
  let state = fresh(), rawUnreadable = null, storageBlocked = false;
  let currentView = VIEWS.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'dashboard';
  let calendarMonth = monthKey(), budgetMonth = monthKey();
  let filters = {search:'', type:'', category:'', account:'', month:''};
  let editing = null, toastTimer;
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const t = (key, values = {}) => (DICT[state.settings.lang][key] ?? DICT.en[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? ''));
  const uid = () => globalThis.crypto?.randomUUID?.() || `pw-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  function pad(n) { return String(n).padStart(2,'0'); }
  function dateKey(d = new Date()) { return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
  function monthKey(d = new Date()) { return dateKey(d).slice(0,7); }
  function dateObj(s) { const [y,m,d] = s.split('-').map(Number); return new Date(y,m-1,d,12); }
  function validDate(s) { return typeof s === 'string' && /^(19|20|21)\d{2}-\d{2}-\d{2}$/.test(s) && dateKey(dateObj(s)) === s; }
  function validMonth(s) { return typeof s === 'string' && /^(19|20|21)\d{2}-(0[1-9]|1[0-2])$/.test(s); }
  function daysBetween(a,b) { return Math.round((Date.UTC(...a.split('-').map((v,i)=>Number(v)-(i===1?1:0))) - Date.UTC(...b.split('-').map((v,i)=>Number(v)-(i===1?1:0)))) / 86400000); }
  function lastDay(y,m) { return new Date(y,m+1,0,12).getDate(); }
  function occurrence(start, cycle, index) {
    const d=dateObj(start), day=d.getDate();
    if(cycle==='weekly') d.setDate(day+7*index);
    else { const y=d.getFullYear()+(cycle==='yearly'?index:0), m=d.getMonth()+(cycle==='monthly'?index:0); const first=new Date(y,m,1,12); first.setDate(Math.min(day,lastDay(first.getFullYear(),first.getMonth()))); return dateKey(first); }
    return dateKey(d);
  }
  function nextOccurrence(start,cycle,from=dateKey()) {
    let n=0;
    if(start<from) {
      const a=dateObj(start),b=dateObj(from);
      n=cycle==='weekly'?Math.max(0,Math.floor(daysBetween(from,start)/7)):cycle==='monthly'?Math.max(0,(b.getFullYear()-a.getFullYear())*12+b.getMonth()-a.getMonth()):Math.max(0,b.getFullYear()-a.getFullYear());
      while(occurrence(start,cycle,n)<from) n++;
    }
    return occurrence(start,cycle,n);
  }
  const convert = (amount,from,to=state.settings.base) => amount / RATES[from] * RATES[to];
  const locale = () => state.settings.lang === 'zh' ? 'zh-CN' : 'en-US';
  const money = (amount,currency=state.settings.base) => new Intl.NumberFormat(locale(),{style:'currency',currency,maximumFractionDigits:currency==='JPY'?0:2}).format(amount);
  const displayDate = s => dateObj(s).toLocaleDateString(locale(),{month:'short',day:'numeric',year:'numeric'});
  const displayMonth = s => dateObj(s+'-01').toLocaleDateString(locale(),{month:'long',year:'numeric'});
  const accountById = id => state.accounts.find(a=>a.id===id);
  const accountName = id => accountById(id)?.name || '—';
  const transactionValue = x => convert(x.amount,accountById(x.account).currency);
  function balance(a,through=dateKey()) {
    return state.transactions.reduce((sum,x)=>{
      if(x.date>through) return sum;
      if(x.account===a.id) sum += x.type==='income'?x.amount:-x.amount;
      if(x.type==='transfer' && x.toAccount===a.id) sum += x.receivedAmount;
      return sum;
    },a.openingBalance);
  }
  const worth = through => state.accounts.reduce((sum,a)=>sum+convert(balance(a,through),a.currency),0);
  function totals(month=monthKey(), through=dateKey()) {
    const result={income:0,expense:0,categories:{}};
    state.transactions.filter(x=>x.date.startsWith(month)&&x.date<=through&&x.type!=='transfer').forEach(x=>{const amount=transactionValue(x);result[x.type]+=amount;if(x.type==='expense') result.categories[x.category]=(result.categories[x.category]||0)+amount;});
    return result;
  }
  function subscriptionAnnual() { return state.subscriptions.filter(s=>s.active).reduce((sum,s)=>sum+convert(s.amount,s.currency)*(s.cycle==='monthly'?12:1),0); }
  function toast(message) { $('#toast').textContent=message;$('#toast').style.display='block';clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').style.display='none',5000); }
  function commit(next) {
    if(storageBlocked) { toast(t('loadError'));return false; }
    try { localStorage.setItem(KEY,JSON.stringify(next));state=next;return true; }
    catch { toast(t('storageError'));return false; }
  }
  function change(fn) { const next=structuredClone(state);fn(next);return commit(next); }
  function validState(s) {
    const fail=()=>{throw new Error(t('invalidBackup'));};
    const str=(v,max=1000)=>typeof v==='string'&&v.length<=max;
    const num=v=>typeof v==='number'&&Number.isFinite(v)&&Math.abs(v)<=1e14;
    if(!s || s.version!==1 || !s.settings || !CURRENCIES.includes(s.settings.base)||!['en','zh'].includes(s.settings.lang)||!['light','dark'].includes(s.settings.theme)) fail();
    const lists=['accounts','transactions','budgets','subscriptions','goals','rules'];
    lists.forEach(k=>{if(!Array.isArray(s[k])||s[k].length>100000)fail();const ids=new Set();s[k].forEach(x=>{if(!x||!str(x.id,120)||!x.id||ids.has(x.id))fail();ids.add(x.id);});});
    const accounts=new Set(s.accounts.map(a=>a.id));
    s.accounts.forEach(a=>{if(!str(a.name,120)||!a.name.trim()||!TYPES.includes(a.type)||!CURRENCIES.includes(a.currency)||!num(a.openingBalance)||!(a.dueDay===null||(Number.isInteger(a.dueDay)&&a.dueDay>=1&&a.dueDay<=31)))fail();});
    const tx=x=>{if(!['income','expense','transfer'].includes(x.type)||!num(x.amount)||x.amount<=0||!accounts.has(x.account)||!CATEGORIES.includes(x.category)||!Array.isArray(x.tags)||x.tags.length>100||!x.tags.every(v=>str(v,100))||!str(x.note,2000))fail();if(x.type==='transfer'&&(!accounts.has(x.toAccount)||x.toAccount===x.account||!num(x.receivedAmount)||x.receivedAmount<=0))fail();};
    s.transactions.forEach(x=>{tx(x);if(!validDate(x.date))fail();if(x.occurrenceKey!==undefined&&!str(x.occurrenceKey,160))fail();});
    const occurrences=s.transactions.filter(x=>x.occurrenceKey).map(x=>x.occurrenceKey);if(new Set(occurrences).size!==occurrences.length)fail();
    const budgetKeys=new Set();s.budgets.forEach(b=>{const k=b.month+':'+b.category;if(!validMonth(b.month)||!EXPENSE_CATEGORIES.includes(b.category)||!num(b.amount)||b.amount<=0||!CURRENCIES.includes(b.currency)||budgetKeys.has(k))fail();budgetKeys.add(k);});
    s.subscriptions.forEach(x=>{if(!str(x.name,120)||!x.name.trim()||!num(x.amount)||x.amount<=0||!CURRENCIES.includes(x.currency)||!['monthly','yearly'].includes(x.cycle)||!validDate(x.startDate)||typeof x.active!=='boolean'||!EXPENSE_CATEGORIES.includes(x.category))fail();});
    s.goals.forEach(x=>{if(!str(x.name,120)||!x.name.trim()||!num(x.target)||x.target<=0||!num(x.saved)||x.saved<0||!CURRENCIES.includes(x.currency)||!validDate(x.targetDate))fail();});
    s.rules.forEach(x=>{tx(x);if(!str(x.name,120)||!x.name.trim()||!['weekly','monthly','yearly'].includes(x.frequency)||!validDate(x.startDate)||!Number.isInteger(x.nextIndex)||x.nextIndex<0||x.nextIndex>20000||typeof x.active!=='boolean')fail();});
    return s;
  }
  try { const raw=localStorage.getItem(KEY);if(raw) state=validState(JSON.parse(raw));else localStorage.setItem(KEY,JSON.stringify(state)); }
  catch { try {rawUnreadable=localStorage.getItem(KEY);}catch{} storageBlocked=true; }

  function processRules(notify=false) {
    if(storageBlocked)return;
    let count=0;const next=structuredClone(state),seen=new Set(next.transactions.map(x=>x.occurrenceKey).filter(Boolean));
    for(const rule of next.rules) {
      if(!rule.active) continue;
      let due=occurrence(rule.startDate,rule.frequency,rule.nextIndex);
      while(due<=dateKey() && count<5000) {
        const key=`${rule.id}:${due}`;
        if(!seen.has(key)) {next.transactions.push({id:uid(),type:rule.type,account:rule.account,toAccount:rule.toAccount,amount:rule.amount,receivedAmount:rule.receivedAmount,category:rule.category,tags:[...rule.tags],note:rule.note||rule.name,date:due,occurrenceKey:key});seen.add(key);count++;}
        rule.nextIndex++;due=occurrence(rule.startDate,rule.frequency,rule.nextIndex);
      }
    }
    if(JSON.stringify(next)!==JSON.stringify(state) && !commit(next))return;
    if(notify)toast(count===5000?t('recurringLimit'):t('runResult',{n:count}));
    return count;
  }
  const button = (label,action,extra='',secondary=false) => `<button class="button${secondary?' secondary':''}" data-action="${action}" ${extra}>${esc(label)}</button>`;
  const addButton = kind => button('+ '+t({transaction:'addTransaction',account:'addAccount',budget:'addBudget',subscription:'addSubscription',goal:'addGoal',rule:'addRule'}[kind]),'add',`data-kind="${kind}"`);
  function empty(title,body,kind) {return `<div class="empty"><div class="empty-icon">◇</div><h3>${esc(t(title))}</h3><p>${esc(t(body))}</p>${kind?addButton(kind):''}</div>`;}
  function heading(view,actions='') {return `<div class="page-heading"><div><div class="eyebrow">${esc(view==='dashboard'?t('overview'):'POCKETWISE / '+t(view))}</div><h1>${esc(view==='dashboard'?t('dashboardTitle'):t(view))}</h1><p class="subtitle">${esc(t(view+'Sub'))}</p></div><div class="actions">${actions}</div></div>`;}
  function itemActions(kind,id) { return `<div class="item-actions"><button class="icon-button" data-action="edit" data-kind="${kind}" data-id="${esc(id)}" aria-label="${esc(t('edit'))}" title="${esc(t('edit'))}">✎</button><button class="icon-button" data-action="delete" data-kind="${kind}" data-id="${esc(id)}" aria-label="${esc(t('delete'))}" title="${esc(t('delete'))}">×</button></div>`; }
  function metric(label,value,note,symbol) {return `<div class="card metric"><div class="metric-label">${esc(t(label))}<span class="metric-symbol">${symbol}</span></div><div class="metric-value">${esc(value)}</div><div class="metric-note">${esc(note)}</div></div>`;}
  function insightData() {
    const now=totals(), d=new Date(), prev=new Date(d.getFullYear(),d.getMonth()-1,1,12);prev.setDate(Math.min(d.getDate(),lastDay(prev.getFullYear(),prev.getMonth())));const before=totals(monthKey(prev),dateKey(prev));
    const rate=now.income?(now.income-now.expense)/now.income*100:0, annual=subscriptionAnnual();
    let saving=!now.income?t('insightNoIncome'):rate<0?t('insightSavingsNegative',{amount:money(now.expense-now.income)}):t(rate>=20?'insightSavingsGood':'insightSavingsLow',{rate:rate.toFixed(1)});
    const spike=before.expense>0?(now.expense>before.expense*1.25?t('insightSpikeText',{rate:((now.expense/before.expense-1)*100).toFixed(0),amount:money(now.expense-before.expense)}):t('insightStable')):t('insightNew');
    const growth=CATEGORIES.map(c=>({category:c,value:(now.categories[c]||0)-(before.categories[c]||0)})).sort((a,b)=>b.value-a.value)[0];
    return [{title:t('insightSavings'),body:saving},{title:t('insightSpike'),body:spike},{title:t('insightGrowth'),body:before.expense?growth.value>0?t('insightGrowthText',{category:t(growth.category),amount:money(growth.value)}):t('insightNoGrowth'):t('insightNew')},{title:t('insightSubs'),body:t('insightSubsText',{amount:money(annual/12),annual:money(annual)})+(now.income?' '+t('insightBurden',{rate:(annual/12/now.income*100).toFixed(1)}):'')}];
  }
  function insightCards(limit=4) {return insightData().slice(0,limit).map(x=>`<article class="insight"><h3><span class="insight-icon">✧</span>${esc(x.title)}</h3><p>${esc(x.body)}</p></article>`).join('');}
  function transactionTable(list,compact=false) {
    if(!list.length)return empty('noTransactions','emptyBody','transaction');
    return `<div class="table-wrap"><table><thead><tr><th>${esc(t('transactions'))}</th>${compact?'':`<th>${esc(t('account'))}</th><th>${esc(t('date'))}</th>`}<th class="amount">${esc(t('amount'))}</th>${compact?'':`<th>${esc(t('actions'))}</th>`}</tr></thead><tbody>${list.map(x=>{
      const a=accountById(x.account), sign=x.type==='income'?'+':x.type==='expense'?'−':'';
      return `<tr><td><div class="transaction-title"><span class="category-icon">${x.type==='transfer'?'⇄':x.type==='income'?'↙':'↗'}</span><div><strong>${esc(x.note||t(x.category))}</strong><div class="subtext">${esc(t(x.type))} · ${esc(t(x.category))}${compact?' · '+esc(displayDate(x.date)):x.tags.length?' · '+esc(x.tags.map(s=>'#'+s).join(' ')):''}${x.occurrenceKey?' · '+esc(t('recurring')):''}</div></div></div></td>${compact?'':`<td>${esc(a.name)}${x.type==='transfer'?` → ${esc(accountName(x.toAccount))}`:''}</td><td>${esc(displayDate(x.date))}</td>`}<td class="amount ${x.type==='income'?'positive':x.type==='expense'?'negative':''}">${sign}${esc(money(x.amount,a.currency))}${x.type==='transfer'?`<div class="subtext">→ ${esc(money(x.receivedAmount,accountById(x.toAccount).currency))}</div>`:''}</td>${compact?'':`<td>${itemActions('transaction',x.id)}</td>`}</tr>`;
    }).join('')}</tbody></table></div>`;
  }
  function dashboardView() {
    const data=totals(),rate=data.income?(data.income-data.expense)/data.income*100:null;
    return heading('dashboard',addButton('transaction'))+`<section class="metrics">${metric('netWorth',money(worth(dateKey())),t('acrossAccounts',{n:state.accounts.length}),'◈')}${metric('monthIncome',money(data.income),displayMonth(monthKey()),'↙')}${metric('monthExpense',money(data.expense),displayMonth(monthKey()),'↗')}${metric('savingsRate',rate===null?'—':rate.toFixed(1)+'%',t('retained'),'◷')}</section><section class="charts"><article class="card"><div class="card-heading"><div><h2>${esc(t('trend'))}</h2><p>${esc(t('trendNote'))}</p></div><span class="pill">${esc(t('sixMonths'))}</span></div><div class="chart-wrap"><canvas id="trend-chart" role="img" aria-label="${esc(t('trend'))}"></canvas></div></article><article class="card"><div class="card-heading"><div><h2>${esc(t('spendingBreakdown'))}</h2><p>${esc(t('spendingNote'))}</p></div><span class="pill">${esc(t('thisMonth'))}</span></div><div class="chart-wrap"><canvas id="donut-chart" role="img" aria-label="${esc(t('spendingBreakdown'))}"></canvas></div><div class="legend" id="donut-legend"></div></article></section><section class="lower-grid"><article class="card"><div class="card-heading"><h2>${esc(t('recentTransactions'))}</h2><a class="positive" href="#transactions">${esc(t('viewAll'))} →</a></div>${transactionTable([...state.transactions].filter(x=>x.date<=dateKey()).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5),true)}</article><article class="card"><div class="card-heading"><h2>${esc(t('localInsights'))}</h2><span class="pill">✧ ${esc(t('localEngine'))}</span></div><div class="insights-list">${insightCards(4)}</div></article></section>`;
  }
  const options = (items,value,withEmpty) => (withEmpty?`<option value="">${esc(withEmpty)}</option>`:'')+items.map(item=>{const [v,label]=Array.isArray(item)?item:[item,t(item)];return `<option value="${esc(v)}" ${v===value?'selected':''}>${esc(label)}</option>`;}).join('');
  function transactionsView() {
    return heading('transactions',addButton('transaction'))+`<div class="filters"><input id="search" type="search" aria-label="${esc(t('search'))}" placeholder="${esc(t('search'))}" value="${esc(filters.search)}"><select id="filter-type" aria-label="${esc(t('type'))}">${options(['income','expense','transfer'],filters.type,t('allTypes'))}</select><select id="filter-category" aria-label="${esc(t('category'))}">${options(CATEGORIES,filters.category,t('allCategories'))}</select><select id="filter-account" aria-label="${esc(t('account'))}">${options(state.accounts.map(a=>[a.id,a.name]),filters.account,t('allAccounts'))}</select><input type="month" min="1900-01" max="2199-12" id="filter-month" value="${esc(filters.month)}" aria-label="${esc(t('month'))}">${button(t('resetFilters'),'reset-filters','',true)}</div><article class="card"><div id="transaction-results"></div></article><div class="section-heading"><h2>${esc(t('recurringRules'))}</h2><div class="actions">${button(t('runNow'),'run-rules','',true)}${addButton('rule')}</div></div><p class="section-note">${esc(t('recurringNote'))} ${esc(t('ruleRemovedNote'))}</p>${rulesView()}`;
  }
  function renderTransactionResults() {
    const search=filters.search.trim().toLocaleLowerCase();
    const list=state.transactions.filter(x=>(!filters.type||x.type===filters.type)&&(!filters.category||x.category===filters.category)&&(!filters.account||x.account===filters.account||x.toAccount===filters.account)&&(!filters.month||x.date.startsWith(filters.month))&&(!search||[x.note,...x.tags,accountName(x.account),accountName(x.toAccount),x.category,t(x.category),x.type,t(x.type),x.date,String(x.amount)].join(' ').toLocaleLowerCase().includes(search))).sort((a,b)=>b.date.localeCompare(a.date));
    $('#transaction-results').innerHTML=`<div class="card-heading"><h2>${esc(t('recordCount',{n:list.length}))}</h2></div>`+(list.length?transactionTable(list):empty(state.transactions.length?'noMatches':'noTransactions',state.transactions.length?'noMatchesBody':'emptyBody',state.transactions.length?null:'transaction'));
  }
  function rulesView() {
    return state.rules.length?`<div class="grid-cards">${state.rules.map(r=>`<article class="card"><div class="item-head"><div><h3>${esc(r.name)}</h3><div class="subtext">${esc(t(r.frequency))} · ${esc(t(r.type))}</div></div>${itemActions('rule',r.id)}</div><div class="item-value">${esc(money(r.amount,accountById(r.account).currency))}</div><div class="subtext">${esc(accountName(r.account))}${r.type==='transfer'?' → '+esc(accountName(r.toAccount)):''}</div><div class="card-bottom"><span>${esc(t('nextDue'))}: ${esc(displayDate(occurrence(r.startDate,r.frequency,r.nextIndex)))}</span><span class="pill">${esc(t(r.active?'active':'paused'))}</span></div></article>`).join('')}</div>`:empty('noRules','noRulesBody','rule');
  }
  function accountsView() {
    return heading('accounts',addButton('account'))+(state.accounts.length?`<div class="card summary-strip"><div><small>${esc(t('netWorth'))}</small><strong>${esc(money(worth(dateKey())))}</strong></div><div><small>${esc(t('accounts'))}</small><strong>${state.accounts.length}</strong></div></div><div class="grid-cards">${state.accounts.map(a=>`<article class="card"><div class="item-head"><span class="category-icon">${a.type==='cash'?'◉':a.type==='investment'?'↗':'▣'}</span>${itemActions('account',a.id)}</div><h3>${esc(a.name)}</h3><div class="subtext">${esc(t(a.type))} · ${a.currency}</div><div class="item-value">${esc(money(balance(a),a.currency))}</div><div class="subtext">${esc(t('openingBalance'))}: ${esc(money(a.openingBalance,a.currency))}</div><div class="card-bottom"><span>${esc(t('accountId'))}: <code>${esc(a.id)}</code></span></div>${a.type==='credit'&&a.dueDay?`<div class="subtext">${esc(t('creditDue'))}: ${a.dueDay}</div>`:''}</article>`).join('')}</div>`:empty('noAccounts','noAccountsBody','account'));
  }
  function budgetSpent(b) {return state.transactions.filter(x=>x.type==='expense'&&x.category===b.category&&x.date.startsWith(b.month)&&x.date<=dateKey()).reduce((s,x)=>s+convert(x.amount,accountById(x.account).currency,b.currency),0);}
  function progress(percent) {return `<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(Math.min(100,Math.max(0,percent)))}"><div class="progress-fill${percent>100?' over':''}" data-width="${Math.min(100,Math.max(0,percent))}"></div></div>`;}
  function budgetsView() {
    const list=state.budgets.filter(b=>b.month===budgetMonth),spent=list.reduce((s,b)=>s+convert(budgetSpent(b),b.currency),0),limit=list.reduce((s,b)=>s+convert(b.amount,b.currency),0);
    return heading('budgets',`<input id="budget-month" type="month" min="1900-01" max="2199-12" aria-label="${esc(t('month'))}" value="${budgetMonth}">${addButton('budget')}`)+`<p class="section-note">${esc(t('budgetCurrency'))}</p>`+(list.length?`<div class="card summary-strip"><div><small>${esc(displayMonth(budgetMonth))}</small><strong>${esc(t('budgetSummary',{spent:money(spent),limit:money(limit)}))}</strong></div></div><div class="grid-cards">${list.map(b=>{const used=budgetSpent(b),percent=used/b.amount*100;return `<article class="card"><div class="item-head"><h3>${esc(t(b.category))}</h3>${itemActions('budget',b.id)}</div><div class="item-value">${esc(money(used,b.currency))}<span class="subtext"> / ${esc(money(b.amount,b.currency))}</span></div>${progress(percent)}<div class="card-bottom"><span>${percent.toFixed(0)}%</span><span class="${used>b.amount?'negative':''}">${esc(used>b.amount?t('overspent',{amount:money(used-b.amount,b.currency)}):t('remaining')+': '+money(b.amount-used,b.currency))}</span></div></article>`;}).join('')}</div>`:empty('noBudgets','noBudgetsBody','budget'));
  }
  const countdown = date => {const n=daysBetween(date,dateKey());return t(n===0?'dueToday':n<0?'overdue':'dueIn',{n:Math.abs(n)});};
  function subscriptionsView() {
    const annual=subscriptionAnnual();return heading('subscriptions',addButton('subscription'))+`<div class="card summary-strip"><div><small>${esc(t('annualCost'))}</small><strong>${esc(money(annual))}</strong></div><div><small>${esc(t('monthlyCost'))}</small><strong>${esc(money(annual/12))}</strong></div><div><small>${esc(t('activeSubscriptions'))}</small><strong>${state.subscriptions.filter(s=>s.active).length}</strong></div></div><p class="section-note">${esc(t('subscriptionNote'))}</p>`+(state.subscriptions.length?`<div class="grid-cards">${state.subscriptions.map(s=>{const next=nextOccurrence(s.startDate,s.cycle);return `<article class="card"><div class="item-head"><div><h3>${esc(s.name)}</h3><div class="subtext">${esc(t(s.category))} · ${esc(t(s.active?'active':'paused'))}</div></div>${itemActions('subscription',s.id)}</div><div class="item-value">${esc(money(s.amount,s.currency))} <span class="subtext">/ ${esc(t(s.cycle))}</span></div><div class="subtext">${esc(t('annualCost'))}: ${esc(money(s.amount*(s.cycle==='monthly'?12:1),s.currency))}</div><div class="card-bottom"><span>${esc(t('nextCharge'))}: ${esc(displayDate(next))}</span><span class="${s.active&&daysBetween(next,dateKey())<=7?'negative':''}">${esc(s.active?countdown(next):t('paused'))}</span></div></article>`;}).join('')}</div>`:empty('noSubscriptions','noSubscriptionsBody','subscription'));
  }
  function goalsView() {return heading('goals',addButton('goal'))+`<p class="section-note">${esc(t('goalNote'))}</p>`+(state.goals.length?`<div class="grid-cards">${state.goals.map(g=>{const left=Math.max(0,g.target-g.saved),days=daysBetween(g.targetDate,dateKey()),months=Math.max(1,Math.ceil(days/30.4375));return `<article class="card"><div class="item-head"><div><span class="category-icon">⚑</span><h3 class="spaced">${esc(g.name)}</h3></div>${itemActions('goal',g.id)}</div><div class="item-value">${esc(money(g.saved,g.currency))}</div><div class="subtext">${esc(t('targetAmount'))}: ${esc(money(g.target,g.currency))}</div>${progress(g.saved/g.target*100)}<div class="card-bottom"><span>${(g.saved/g.target*100).toFixed(0)}%</span><span>${esc(displayDate(g.targetDate))}</span></div><p class="${left&&days<0?'warning':'positive'}">${esc(!left?t('goalReached'):days<0?t('goalOverdue',{amount:money(left,g.currency)}):t('perMonth',{amount:money(left/months,g.currency)}))}</p></article>`;}).join('')}</div>`:empty('noGoals','noGoalsBody','goal'));}
  function calendarEvents(month) {
    const start=month+'-01',d=dateObj(start),end=dateKey(new Date(d.getFullYear(),d.getMonth()+1,0,12)),events=[];
    const addSeries=(item,cycle,kind)=>{
      let due=nextOccurrence(item.startDate,cycle,start);
      while(due<=end){events.push({date:due,name:item.name,amount:item.amount,currency:kind==='subscription'?item.currency:accountById(item.account).currency,kind,id:item.id});const after=dateObj(due);after.setDate(after.getDate()+1);due=nextOccurrence(item.startDate,cycle,dateKey(after));}
    };
    state.subscriptions.filter(s=>s.active).forEach(s=>addSeries(s,s.cycle,'subscription'));
    state.rules.filter(r=>r.active&&r.type==='expense').forEach(r=>addSeries(r,r.frequency,'rule'));
    state.accounts.filter(a=>a.type==='credit'&&a.dueDay).forEach(a=>events.push({date:month+'-'+pad(Math.min(a.dueDay,lastDay(d.getFullYear(),d.getMonth()))),name:t('creditBill',{name:a.name}),amount:Math.max(0,-balance(a)),currency:a.currency,kind:'account',id:a.id}));
    return events.sort((a,b)=>a.date.localeCompare(b.date));
  }
  function calendarView() {
    const first=dateObj(calendarMonth+'-01'),count=lastDay(first.getFullYear(),first.getMonth()),offset=first.getDay(),events=calendarEvents(calendarMonth);let cells='';
    for(let i=0;i<Math.ceil((offset+count)/7)*7;i++){const day=i-offset+1,valid=day>0&&day<=count,date=calendarMonth+'-'+pad(day);cells+=`<div class="day${!valid?' outside':''}${date===dateKey()?' today':''}">${valid?`<span class="day-number">${day}</span>${events.filter(e=>e.date===date).map(e=>`<button class="bill${daysBetween(e.date,dateKey())>=0&&daysBetween(e.date,dateKey())<=7?' soon':''}" data-action="edit" data-kind="${e.kind}" data-id="${esc(e.id)}" title="${esc(e.name+' · '+money(e.amount,e.currency))}">${esc(e.name)}<br>${esc(money(e.amount,e.currency))}</button>`).join('')}`:''}</div>`;}
    return heading('calendar',`<div class="actions calendar-controls"><button class="button secondary" data-action="calendar-prev" aria-label="${esc(t('previousMonth'))}">←</button><input id="calendar-month" type="month" min="1900-01" max="2199-12" value="${calendarMonth}" aria-label="${esc(t('month'))}"><button class="button secondary" data-action="calendar-next" aria-label="${esc(t('nextMonth'))}">→</button>${button(t('today'),'calendar-today','',true)}</div>`)+`<div class="card-heading"><h2>${esc(displayMonth(calendarMonth))}</h2><span class="pill">${esc(t('dueSoon'))}</span></div><div class="calendar">${t('weekdays').split(',').map(d=>`<div class="weekday">${esc(d)}</div>`).join('')}${cells}</div><p class="section-note">${esc(t('billLegend'))}. ${esc(t('creditBillNote'))}</p>${events.length?'':`<p class="muted">${esc(t('noBills'))}</p>`}`;
  }
  function settingsView() {return heading('settings')+`<div class="settings-grid"><article class="card"><h2>${esc(t('appearance'))}</h2><div class="settings-row"><div><strong>${esc(t('baseCurrency'))}</strong><p>${esc(t('baseHint'))}</p></div><select id="setting-base" aria-label="${esc(t('baseCurrency'))}">${options(CURRENCIES.map(c=>[c,c]),state.settings.base)}</select></div><div class="settings-row"><strong>${esc(t('language'))}</strong><select id="setting-lang" aria-label="${esc(t('language'))}">${options([['en','English'],['zh','中文']],state.settings.lang)}</select></div><div class="settings-row"><strong>${esc(t('theme'))}</strong><select id="setting-theme" aria-label="${esc(t('theme'))}">${options(['light','dark'],state.settings.theme)}</select></div><h3 class="spaced">${esc(t('exchangeRates'))}</h3><p class="section-note">${esc(t('rateNote'))}</p><div class="rates">${CURRENCIES.map(c=>`<span>${c} <strong>${RATES[c]}</strong></span>`).join('')}</div></article><article class="card"><h2>${esc(t('dataManagement'))}</h2><p class="section-note">${esc(t('backupNote'))}</p><div class="settings-actions">${button(t('backup'),'backup')}${button(t('restore'),'restore','',true)}</div><p class="section-note spaced">${esc(t('csvNote'))}</p><div class="settings-actions">${button(t('exportCSV'),'export-csv','',true)}${button(t('importCSV'),'import-csv','',true)}</div>${storageBlocked?`<p class="warning">${esc(t('loadError'))}</p>${button(t('downloadRaw'),'raw-backup','',true)}`:''}<input id="csv-file" class="file-input" type="file" accept=".csv,text/csv"><input id="json-file" class="file-input" type="file" accept=".json,application/json"></article><article class="card"><h2>${esc(t('demoTitle'))}</h2><p class="section-note">${esc(t('demoNote'))}</p>${button(t('loadDemo'),'demo','',true)}</article><article class="card"><h2>${esc(t('clearTitle'))}</h2><p class="section-note">${esc(t('clearNote'))}</p><button class="button danger" data-action="clear">${esc(t('clearData'))}</button></article></div>`;}
  function render() {
    document.documentElement.lang=state.settings.lang==='zh'?'zh-CN':'en';document.body.classList.toggle('dark',state.settings.theme==='dark');
    document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
    $('#navigation').setAttribute('aria-label',t('workspace'));$('#close-editor').setAttribute('aria-label',t('close'));
    $('#language-toggle').textContent=state.settings.lang==='en'?'中文':'EN';$('#language-toggle').setAttribute('aria-label',t('language'));
    $('#theme-toggle').textContent=state.settings.theme==='light'?'☾':'☀';$('#theme-toggle').setAttribute('aria-label',t(state.settings.theme==='light'?'darkMode':'lightMode'));
    $('#navigation').innerHTML=VIEWS.map((v,i)=>`<a href="#${v}" class="${v===currentView?'active':''}" ${v===currentView?'aria-current="page"':''} title="${esc(t(v))}"><span class="nav-icon" aria-hidden="true">${ICONS[i]}</span><span class="nav-text">${esc(t(v))}</span></a>`).join('');$('#crumb').textContent=t(currentView);
    const views={dashboard:dashboardView,transactions:transactionsView,accounts:accountsView,budgets:budgetsView,subscriptions:subscriptionsView,calendar:calendarView,goals:goalsView,insights:()=>heading('insights')+`<div class="grid-cards">${insightCards()}</div><p class="section-note">${esc(t('insightMethod'))}</p>`,settings:settingsView};
    $('#main').innerHTML=(storageBlocked&&currentView!=='settings'?`<p class="warning">${esc(t('loadError'))} <a href="#settings">${esc(t('settings'))} →</a></p>`:'')+views[currentView]();
    document.querySelectorAll('[data-width]').forEach(el=>el.style.width=el.dataset.width+'%');
    if(currentView==='transactions')renderTransactionResults();
    if(currentView==='dashboard')requestAnimationFrame(drawCharts);
  }

  const COLLECTION = {account:'accounts',transaction:'transactions',budget:'budgets',subscription:'subscriptions',goal:'goals',rule:'rules'};
  const FIELD_TITLES = {account:'addAccount',transaction:'addTransaction',budget:'addBudget',subscription:'addSubscription',goal:'addGoal',rule:'addRule'};
  function field(name,label,value='',type='text',extra='',hint='') {
    return `<label class="field ${type==='textarea'?'full':''}"><span>${esc(t(label))}</span>${type==='textarea'?`<textarea name="${name}" maxlength="2000" ${extra}>${esc(value)}</textarea>`:`<input name="${name}" type="${type}" value="${esc(value)}" ${extra}>`}${hint?`<small>${esc(t(hint))}</small>`:''}</label>`;
  }
  function selectField(name,label,items,value,extra='') { return `<label class="field"><span>${esc(t(label))}</span><select name="${name}" ${extra}>${options(items,value)}</select></label>`; }
  function checkField(name,label,checked) {return `<label class="field full"><span class="check-field"><input name="${name}" type="checkbox" ${checked?'checked':''}>${esc(t(label))}</span></label>`;}
  const numberAttrs = 'step="any" min="0.00000001" max="100000000000000" required';
  const dateAttrs = 'min="1900-01-01" max="2199-12-31" required';
  function openEditor(kind,id) {
    if(storageBlocked){toast(t('loadError'));return;}
    if(['transaction','rule'].includes(kind)&&!state.accounts.length){toast(t('accountRequired'));openEditor('account');return;}
    const item=id?state[COLLECTION[kind]].find(x=>x.id===id):null;
    if(id&&!item)return;
    editing={kind,id};let x=item||{},html='';
    const curr=()=>selectField('currency','currency',CURRENCIES.map(c=>[c,c]),x.currency||state.settings.base);
    const name=()=>field('name','name',x.name||'','text','maxlength="120" required');
    if(kind==='account') {
      html=name()+selectField('type','type',TYPES,x.type||'bank')+curr()+field('openingBalance','openingBalance',x.openingBalance??0,'number','step="any" min="-100000000000000" max="100000000000000" required','openingHint')+field('dueDay','creditDue',x.dueDay??'','number','min="1" max="31" step="1"','dueDayHint');
    } else if(kind==='transaction'||kind==='rule') {
      if(kind==='rule')html+=name();
      html+=selectField('type','type',['expense','income','transfer'],x.type||'expense')+field('amount','amount',x.amount??'','number',numberAttrs)+selectField('account','account',state.accounts.map(a=>[a.id,a.name+' · '+a.currency]),x.account||state.accounts[0]?.id)+`<div id="destination-field">${selectField('toAccount','toAccount',state.accounts.map(a=>[a.id,a.name+' · '+a.currency]),x.toAccount||state.accounts[1]?.id)}</div><div id="received-field">${field('receivedAmount','receivedAmount',x.receivedAmount??'','number','step="any" min="0.00000001" max="100000000000000"','receivedHint')}</div>`+selectField('category','category',CATEGORIES,x.category||'other');
      if(kind==='transaction')html+=field('date','date',x.date||dateKey(),'date',dateAttrs);
      else html+=selectField('frequency','frequency',['weekly','monthly','yearly'],x.frequency||'monthly')+field('startDate','startDate',x.startDate||dateKey(),'date',dateAttrs)+checkField('active','ruleActive',x.active??true);
      html+=field('tags','tags',(x.tags||[]).join(', '),'text','maxlength="1000"','tagsHint')+field('note','note',x.note||'','textarea');
    } else if(kind==='budget') {
      html=selectField('category','category',EXPENSE_CATEGORIES,x.category||'food')+field('amount','limit',x.amount??'','number',numberAttrs)+field('month','month',x.month||budgetMonth,'month','min="1900-01" max="2199-12" required')+curr();
    } else if(kind==='subscription') {
      html=name()+field('amount','amount',x.amount??'','number',numberAttrs)+curr()+selectField('cycle','cycle',['monthly','yearly'],x.cycle||'monthly')+field('startDate','startDate',x.startDate||dateKey(),'date',dateAttrs)+selectField('category','category',EXPENSE_CATEGORIES,x.category||'entertainment')+checkField('active','active',x.active??true);
    } else if(kind==='goal') {
      html=name()+curr()+field('target','targetAmount',x.target??'','number',numberAttrs)+field('saved','savedAmount',x.saved??0,'number','step="any" min="0" max="100000000000000" required')+field('targetDate','targetDate',x.targetDate||dateKey(),'date',dateAttrs);
    }
    $('#editor-title').textContent=id?t('edit')+' · '+t({account:'accounts',transaction:'transactions',budget:'budgets',subscription:'subscriptions',goal:'goals',rule:'recurringRules'}[kind]):t(FIELD_TITLES[kind]);
    $('#editor-fields').innerHTML=html;$('#form-error').textContent='';updateFormVisibility();
    if(!$('#editor').open)$('#editor').showModal();
  }
  function updateFormVisibility() {
    if(!editing)return;
    const form=$('#editor-form');
    if(['transaction','rule'].includes(editing.kind)) {
      const transfer=form.elements.type.value==='transfer';
      ['destination-field','received-field'].forEach(id=>{const container=$('#'+id);container.hidden=!transfer;container.querySelector('input,select').disabled=!transfer;});
    }
    if(editing.kind==='account') {form.elements.dueDay.closest('label').hidden=form.elements.type.value!=='credit';form.elements.dueDay.disabled=form.elements.type.value!=='credit';}
  }
  function submitEditor(event) {
    event.preventDefault();if(!editing)return;
    try {
      const {kind,id}=editing,form=new FormData($('#editor-form')),previous=id?state[COLLECTION[kind]].find(x=>x.id===id):null;
      const s=n=>String(form.get(n)||'').trim(),n=name=>Number(form.get(name)),bool=name=>form.has(name);
      let x={id:id||uid()};
      if(kind==='account')x={...x,name:s('name'),type:s('type'),currency:s('currency'),openingBalance:n('openingBalance'),dueDay:s('type')==='credit'&&s('dueDay')?n('dueDay'):null};
      if(['transaction','rule'].includes(kind)) {
        const type=s('type'),account=s('account'),toAccount=type==='transfer'?s('toAccount'):null;
        if(type==='transfer'&&(!accountById(toAccount)||toAccount===account))throw new Error(t('invalidAccounts'));
        x={...x,type,amount:n('amount'),account,toAccount,receivedAmount:type==='transfer'?(s('receivedAmount')?n('receivedAmount'):convert(n('amount'),accountById(account).currency,accountById(toAccount).currency)):null,category:s('category'),tags:s('tags').split(/[,，]/).map(v=>v.trim()).filter(Boolean),note:s('note')};
        if(kind==='transaction') {x.date=s('date');if(previous?.occurrenceKey)x.occurrenceKey=previous.occurrenceKey;}
        else {
          x={...x,name:s('name'),frequency:s('frequency'),startDate:s('startDate'),active:bool('active'),nextIndex:0};
          if(previous&&previous.startDate===x.startDate&&previous.frequency===x.frequency)x.nextIndex=previous.nextIndex;
        }
      }
      if(kind==='budget') {
        x={...x,category:s('category'),amount:n('amount'),month:s('month'),currency:s('currency')};
        if(state.budgets.some(b=>b.id!==id&&b.month===x.month&&b.category===x.category))throw new Error(t('budgetDuplicate'));
      }
      if(kind==='subscription')x={...x,name:s('name'),amount:n('amount'),currency:s('currency'),cycle:s('cycle'),startDate:s('startDate'),category:s('category'),active:bool('active')};
      if(kind==='goal')x={...x,name:s('name'),target:n('target'),saved:n('saved'),currency:s('currency'),targetDate:s('targetDate')};
      if('name' in x&&!x.name)throw new Error(t('missingName'));
      const next=structuredClone(state),list=next[COLLECTION[kind]];
      if(id)list[list.findIndex(v=>v.id===id)]=x;else list.push(x);
      try{validState(next);}catch{throw new Error(t('invalidNumber'));}
      if(commit(next)){$('#editor').close();editing=null;if(kind==='rule')processRules();render();toast(t('saved'));}
    } catch(err) {$('#form-error').textContent=err.message;}
  }
  function deleteItem(kind,id) {
    if(kind==='account'&&[...state.transactions,...state.rules].some(x=>x.account===id||x.toAccount===id)){toast(t('accountInUse'));return;}
    if(!confirm(t('confirmDelete')))return;
    if(change(next=>next[COLLECTION[kind]]=next[COLLECTION[kind]].filter(x=>x.id!==id))){render();toast(t('deleted'));}
  }
  function chartContext(id) {
    const canvas=$('#'+id);if(!canvas)return null;const bounds=canvas.getBoundingClientRect(),ratio=window.devicePixelRatio||1;
    canvas.width=Math.max(1,Math.round(bounds.width*ratio));canvas.height=Math.max(1,Math.round(bounds.height*ratio));
    const ctx=canvas.getContext('2d');if(!ctx)return null;ctx.scale(ratio,ratio);return {ctx,w:bounds.width,h:bounds.height,canvas};
  }
  function drawCharts() {
    const styles=getComputedStyle(document.body),muted=styles.getPropertyValue('--muted').trim(),line=styles.getPropertyValue('--line').trim(),accent=styles.getPropertyValue('--accent').trim(),text=styles.getPropertyValue('--text').trim();
    const chart=chartContext('trend-chart');
    if(chart) {
      const {ctx,w,h,canvas}=chart,now=new Date(),data=[];
      for(let i=5;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i+1,0,12),through=i===0?dateKey():dateKey(d);data.push({label:d.toLocaleDateString(locale(),{month:'short'}),value:worth(through)});}
      canvas.setAttribute('aria-label',t('trend')+': '+data.map(d=>d.label+' '+money(d.value)).join(', '));
      const left=67,right=17,top=15,bottom=29,cw=w-left-right,ch=h-top-bottom,values=data.map(d=>d.value);let lo=Math.min(...values),hi=Math.max(...values);const span=hi-lo||Math.max(Math.abs(hi)*.2,100);lo-=span*.15;hi+=span*.2;
      const y=v=>top+(hi-v)/(hi-lo)*ch,x=i=>left+i*cw/5;
      ctx.font='10px system-ui';ctx.lineWidth=1;
      for(let i=0;i<=4;i++){const value=lo+(hi-lo)*i/4,py=y(value);ctx.strokeStyle=line;ctx.beginPath();ctx.moveTo(left,py);ctx.lineTo(w-right,py);ctx.stroke();ctx.fillStyle=muted;ctx.textAlign='right';ctx.fillText(new Intl.NumberFormat(locale(),{notation:'compact',maximumFractionDigits:1}).format(value),left-10,py+3);}
      const gradient=ctx.createLinearGradient(0,top,0,h-bottom);gradient.addColorStop(0,state.settings.theme==='dark'?'rgba(123,211,178,.24)':'rgba(52,140,117,.20)');gradient.addColorStop(1,'rgba(52,140,117,0)');
      ctx.fillStyle=gradient;ctx.beginPath();ctx.moveTo(x(0),h-bottom);data.forEach((d,i)=>ctx.lineTo(x(i),y(d.value)));ctx.lineTo(x(5),h-bottom);ctx.closePath();ctx.fill();
      ctx.strokeStyle=accent;ctx.lineWidth=2.5;ctx.lineJoin='round';ctx.beginPath();data.forEach((d,i)=>i?ctx.lineTo(x(i),y(d.value)):ctx.moveTo(x(i),y(d.value)));ctx.stroke();
      data.forEach((d,i)=>{ctx.fillStyle=accent;ctx.beginPath();ctx.arc(x(i),y(d.value),3.5,0,Math.PI*2);ctx.fill();ctx.textAlign='center';ctx.fillStyle=muted;ctx.fillText(d.label,x(i),h-7);});
      ctx.textAlign='left';ctx.fillStyle=muted;ctx.fillText(state.settings.base,0,10);
    }
    const donut=chartContext('donut-chart');
    if(donut) {
      const {ctx,w,h,canvas}=donut,entries=Object.entries(totals().categories).sort((a,b)=>b[1]-a[1]),sum=entries.reduce((s,e)=>s+e[1],0),cx=w/2,cy=h/2,r=Math.min(w*.32,h*.39),thickness=r*.24;let start=-Math.PI/2;
      ctx.lineWidth=thickness;ctx.strokeStyle=line;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke();
      entries.forEach((entry,i)=>{const end=start+entry[1]/sum*Math.PI*2;ctx.strokeStyle=COLORS[i%COLORS.length];ctx.beginPath();ctx.arc(cx,cy,r,start+.012,Math.max(start+.012,end-.012));ctx.stroke();start=end;});
      ctx.fillStyle=muted;ctx.textAlign='center';ctx.font='11px system-ui';ctx.fillText(t(sum?'monthExpense':'noExpenses'),cx,cy-10);ctx.fillStyle=text;ctx.font='600 '+Math.max(14,Math.min(23,r*.3))+'px system-ui';ctx.fillText(money(sum),cx,cy+19,Math.max(70,r*1.55));
      canvas.setAttribute('aria-label',t('spendingBreakdown')+': '+(entries.length?entries.map(([c,v])=>t(c)+' '+money(v)).join(', '):t('noExpenses')));
      $('#donut-legend').innerHTML=entries.map(([c,v],i)=>`<span><i class="swatch" data-color="${COLORS[i%COLORS.length]}"></i>${esc(t(c))} ${Math.round(v/sum*100)}%</span>`).join('');
      document.querySelectorAll('[data-color]').forEach(el=>el.style.backgroundColor=el.dataset.color);
    }
  }
  function download(name,content,type) {const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast(t('exportDone'));}
  // RFC 4180 quoting, with a reversible apostrophe escape for spreadsheet formulas.
  function csvCell(value) {let s=String(value??'');if(/^[=+\-@\t\r']/.test(s))s="'"+s;return /[",\r\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;}
  const CSV_COLUMNS=['date','type','amount','account','to_account','received_amount','category','tags','note'];
  function exportCSV() {
    const rows=state.transactions.map(x=>[x.date,x.type,x.amount,x.account,x.toAccount||'',x.receivedAmount??'',x.category,JSON.stringify(x.tags),x.note]);
    download('pocketwise-transactions-'+dateKey()+'.csv','\uFEFF'+[CSV_COLUMNS,...rows].map(row=>row.map(csvCell).join(',')).join('\r\n'),'text/csv;charset=utf-8');
  }
  function parseCSV(text) {
    text=text.replace(/^\uFEFF/,'');const rows=[];let row=[],cell='',quoted=false,closed=false;
    for(let i=0;i<text.length;i++) {
      const c=text[i];
      if(quoted){if(c==='"'){if(text[i+1]==='"'){cell+='"';i++;}else{quoted=false;closed=true;}}else cell+=c;}
      else if(c==='"'){if(cell||closed)throw new Error(t('invalidCSV'));quoted=true;}
      else if(c===','){row.push(cell);cell='';closed=false;}
      else if(c==='\n'||c==='\r'){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(v=>v!==''))rows.push(row);row=[];cell='';closed=false;}
      else {if(closed)throw new Error(t('invalidCSV'));cell+=c;}
    }
    if(quoted)throw new Error(t('invalidCSV'));row.push(cell);if(row.some(v=>v!==''))rows.push(row);
    return rows.map(r=>r.map(v=>/^'[=+\-@\t\r']/.test(v)?v.slice(1):v));
  }
  function importCSVText(text) {
    const rows=parseCSV(text);if(!rows.length)throw new Error(t('invalidCSV'));
    const columns=rows.shift().map(v=>v.trim().toLowerCase());
    if(new Set(columns).size!==columns.length||!['date','type','amount','account'].every(c=>columns.includes(c))||columns.some(c=>!CSV_COLUMNS.includes(c)))throw new Error(t('invalidCSV'));
    const findAccount=value=>{const exact=state.accounts.find(a=>a.id===value);if(exact)return exact;const matches=state.accounts.filter(a=>a.name===value);return matches.length===1?matches[0]:null;};
    const imported=rows.map((r,i)=>{
      try {
        if(r.length!==columns.length)throw new Error(t('invalidCSV'));
        const o=Object.fromEntries(columns.map((c,j)=>[c,r[j]])),account=findAccount(o.account),to=o.type==='transfer'?findAccount(o.to_account):null;
        if(!account)throw new Error(t('accountRequired'));if(o.type==='transfer'&&(!to||to.id===account.id))throw new Error(t('invalidAccounts'));
        if(!validDate(o.date))throw new Error(t('invalidDate'));const amount=Number(o.amount);if(!Number.isFinite(amount)||amount<=0)throw new Error(t('invalidAmount'));
        const x={id:uid(),date:o.date,type:o.type,amount,account:account.id,toAccount:to?.id||null,receivedAmount:to?(o.received_amount?Number(o.received_amount):convert(amount,account.currency,to.currency)):null,category:o.category||'other',tags:(o.tags||'').trim().startsWith('[')?JSON.parse(o.tags):(o.tags||'').split('|').map(v=>v.trim()).filter(Boolean),note:o.note||''};
        validState({...state,transactions:[x]});return x;
      }catch(err){throw new Error(t('csvRow',{n:i+2,reason:err.message}));}
    });
    const next=structuredClone(state);next.transactions.push(...imported);validState(next);
    if(commit(next)){render();toast(t('imported',{n:imported.length}));}
    return imported.length;
  }
  async function importFile(input,kind) {
    const file=input.files[0];if(!file)return;
    try {
      if(file.size>10*1024*1024)throw new Error(t('largeFile'));const content=await file.text();
      if(kind==='csv')importCSVText(content);
      else {const next=validState(JSON.parse(content));if(confirm(t('confirmRestore'))){const blocked=storageBlocked;storageBlocked=false;if(commit(next)){rawUnreadable=null;processRules();render();toast(t('restored'));}else storageBlocked=blocked;}}
    } catch(err){toast(t('invalidFile',{reason:err.message}));}finally{input.value='';}
  }
  function demoState() {
    const demo=fresh();demo.settings={...state.settings};const zh=state.settings.lang==='zh',name=(en,cn)=>zh?cn:en,now=new Date();
    demo.accounts=[{id:'demo-bank',name:name('Everyday banking','日常银行账户'),type:'bank',currency:'CNY',openingBalance:26500,dueDay:null},{id:'demo-cash',name:name('Pocket money','随身现金'),type:'cash',currency:'CNY',openingBalance:850,dueDay:null},{id:'demo-invest',name:name('Long-term investments','长期投资'),type:'investment',currency:'USD',openingBalance:5200,dueDay:null},{id:'demo-credit',name:name('Travel card','旅行信用卡'),type:'credit',currency:'CNY',openingBalance:-1200,dueDay:Math.min(28,now.getDate()+3)},{id:'demo-loan',name:name('Education loan','助学贷款'),type:'loan',currency:'CNY',openingBalance:-18000,dueDay:null}];
    const dt=(offset,day)=>dateKey(new Date(now.getFullYear(),now.getMonth()+offset,Math.min(day,lastDay(now.getFullYear(),now.getMonth()+offset)),12));
    const add=(offset,day,type,amount,category,note,account='demo-bank')=>{const date=dt(offset,day);if(date<=dateKey())demo.transactions.push({id:uid(),date,type,amount,account,toAccount:null,receivedAmount:null,category,tags:[name('everyday','日常')],note});};
    for(let m=-5;m<=0;m++) {
      add(m,1,'income',14500,'salary',name('Monthly salary','月度工资'));
      add(m,2,'expense',3800,'housing',name('Apartment rent','公寓房租'));
      add(m,5,'expense',280,'utilities',name('Power & internet','电费与网络'));
      add(m,8,'income',1600+(m+5)*100,'freelance',name('Design project','设计项目'));
      for(let d=1;d<=28;d+=4)add(m,d,'expense',m===0?280:145+(d%3)*25,'food',name('Groceries & coffee','日常采购与咖啡'));
      add(m,10,'expense',m===0?1600:480,'shopping',name('Something for home','家居采购'),'demo-credit');
      add(m,14,'expense',160,'transport',name('Metro & rides','地铁与出行'),'demo-cash');
      add(m,18,'expense',220,'entertainment',name('Weekend with friends','周末聚会'));
      add(m,22,'expense',350,'health',name('Health & wellness','健康护理'));
      if(dt(m,16)<=dateKey())demo.transactions.push({id:uid(),date:dt(m,16),type:'transfer',amount:1440,account:'demo-bank',toAccount:'demo-invest',receivedAmount:200,category:'investment',tags:[],note:name('Monthly investing','每月定投')});
    }
    demo.budgets=[['food',1700],['shopping',1200],['housing',4000],['entertainment',600],['transport',400],['utilities',500]].map(([category,amount])=>({id:uid(),category,amount,month:monthKey(),currency:'CNY'}));
    demo.subscriptions=[{id:uid(),name:name('Music membership','音乐会员'),amount:18,currency:'CNY',cycle:'monthly',startDate:dt(-3,Math.min(now.getDate()+2,28)),active:true,category:'entertainment'},{id:uid(),name:name('Cloud storage','云端存储'),amount:2.99,currency:'USD',cycle:'monthly',startDate:dt(-4,Math.min(now.getDate()+5,28)),active:true,category:'utilities'},{id:uid(),name:name('Learning library','学习资料库'),amount:398,currency:'CNY',cycle:'yearly',startDate:dt(-12,15),active:true,category:'education'}];
    demo.goals=[{id:uid(),name:name('A little peace of mind','安心应急金'),target:60000,saved:32000,currency:'CNY',targetDate:dt(10,1)},{id:uid(),name:name('A journey to Japan','日本旅行'),target:18000,saved:6800,currency:'CNY',targetDate:dt(6,1)},{id:uid(),name:name('Creative studio','创作工作室'),target:4000,saved:1250,currency:'USD',targetDate:dt(14,1)}];
    demo.rules=[{id:uid(),name:name('Internet bill','网络账单'),type:'expense',account:'demo-bank',toAccount:null,amount:99,receivedAmount:null,category:'utilities',tags:[name('automatic','自动')],note:name('Home internet','家庭网络'),frequency:'monthly',startDate:dt(0,Math.min(now.getDate()+1,28)),nextIndex:0,active:true}];
    return demo;
  }
  function updateSetting(key,value) {if(change(next=>next.settings[key]=value))render();}
  function handleAction(event) {
    const el=event.target.closest('[data-action]');if(!el)return;
    const action=el.dataset.action;
    if(action==='add')openEditor(el.dataset.kind);
    else if(action==='edit')openEditor(el.dataset.kind,el.dataset.id);
    else if(action==='delete')deleteItem(el.dataset.kind,el.dataset.id);
    else if(action==='run-rules'){processRules(true);render();}
    else if(action==='reset-filters'){filters={search:'',type:'',category:'',account:'',month:''};render();}
    else if(action==='calendar-prev'||action==='calendar-next'){const d=dateObj(calendarMonth+'-01');d.setMonth(d.getMonth()+(action==='calendar-next'?1:-1));const value=monthKey(d);if(validMonth(value)){calendarMonth=value;render();}}
    else if(action==='calendar-today'){calendarMonth=monthKey();render();}
    else if(action==='export-csv')exportCSV();
    else if(action==='backup')download('pocketwise-backup-'+dateKey()+'.json',JSON.stringify(state,null,2),'application/json');
    else if(action==='raw-backup')download('pocketwise-unreadable-data.txt',rawUnreadable??'','text/plain');
    else if(action==='import-csv')$('#csv-file').click();
    else if(action==='restore')$('#json-file').click();
    else if(action==='demo'&&confirm(t('confirmDemo'))){if(commit(demoState())){processRules();render();toast(t('demoLoaded'));}}
    else if(action==='clear'&&confirm(t('confirmClear'))){const next=fresh(),blocked=storageBlocked;storageBlocked=false;if(commit(next)){rawUnreadable=null;filters={search:'',type:'',category:'',account:'',month:''};render();toast(t('cleared'));}else storageBlocked=blocked;}
  }
  $('#main').addEventListener('click',handleAction);
  $('#main').addEventListener('input',event=>{if(event.target.id==='search'){filters.search=event.target.value;renderTransactionResults();}});
  $('#main').addEventListener('change',event=>{
    const {id,value}=event.target;
    if(id.startsWith('filter-')){filters[id.slice(7)]=value;renderTransactionResults();}
    else if(id==='budget-month'&&validMonth(value)){budgetMonth=value;render();}
    else if(id==='calendar-month'&&validMonth(value)){calendarMonth=value;render();}
    else if(id.startsWith('setting-'))updateSetting(id.slice(8),value);
    else if(id==='csv-file')importFile(event.target,'csv');
    else if(id==='json-file')importFile(event.target,'json');
  });
  $('#language-toggle').addEventListener('click',()=>updateSetting('lang',state.settings.lang==='en'?'zh':'en'));
  $('#theme-toggle').addEventListener('click',()=>updateSetting('theme',state.settings.theme==='light'?'dark':'light'));
  $('#editor-form').addEventListener('submit',submitEditor);
  $('#editor-form').addEventListener('change',updateFormVisibility);
  $('#close-editor').addEventListener('click',()=>$('#editor').close());$('#cancel-editor').addEventListener('click',()=>$('#editor').close());
  $('#editor').addEventListener('close',()=>{editing=null;});
  window.addEventListener('hashchange',()=>{currentView=VIEWS.includes(location.hash.slice(1))?location.hash.slice(1):'dashboard';render();window.scrollTo(0,0);});
  let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(currentView==='dashboard')drawCharts();},100);});
  // Reload commits from other tabs before performing any more writes.
  window.addEventListener('storage',event=>{if(event.key!==KEY&&event.key!==null)return;try{state=event.newValue?validState(JSON.parse(event.newValue)):fresh();storageBlocked=false;rawUnreadable=null;if($('#editor').open)$('#editor').close();render();}catch{storageBlocked=true;rawUnreadable=event.newValue;render();}});
  setInterval(()=>{if($('#editor').open)return;const before=JSON.stringify(state);processRules();if(before!==JSON.stringify(state)||currentView==='calendar'||currentView==='subscriptions')render();},60000);
  processRules();render();
})();
