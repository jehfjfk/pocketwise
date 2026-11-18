# PocketWise 口袋理财 — Build Spec

Inspired by the trending open-source personal finance app "Sure" (we-promise/sure,
16k+ stars, GitHub Trending this week), but an ORIGINAL implementation with a
deliberately different architecture and a richer feature set.

## Architecture (key innovation vs. the original)
- The original needs Ruby on Rails + PostgreSQL + Redis + Docker to self-host.
- PocketWise is ZERO-dependency: plain HTML/CSS/JS, data in localStorage.
  It runs by simply opening index.html. No build step, no server, no account,
  no tracking. Privacy-first, offline-first.
- Files: index.html, style.css, app.js, README.md (bilingual CN/EN), LICENSE (MIT).

## Features (must ALL work, wired to real localStorage data)
1. Dashboard: total net worth, monthly income/expense, savings rate, net-worth
   trend chart (canvas), expense-by-category donut chart (canvas).
2. Accounts: CRUD for cash/bank/credit-card/investment/loan accounts; balance
   auto-derived from transactions; per-account currency.
3. Transactions: CRUD income/expense/transfer; category, tags, note, date,
   account; full-text search + filters (type/category/account/month).
4. Budgets: monthly budget per category, progress bars, overspend warnings.
5. Subscriptions (NOT in the original): recurring subscription manager with
   monthly/yearly cycles, annualized cost total, next-charge countdown.
6. Bill calendar (NOT in the original): calendar view of recurring bills and
   credit-card due dates with due-soon highlighting.
7. Savings goals (NOT in the original): goal cards with progress and the
   auto-computed "amount to save per month" to hit the target date.
8. Recurring transactions: rules (weekly/monthly/yearly) that auto-generate
   transactions when due.
9. Multi-currency: CNY/USD/EUR/JPY/GBP/HKD with built-in static rates,
   all totals converted to a user-selected base currency.
10. Import/Export: CSV export of transactions, CSV import (with a documented
    column format), full JSON backup download + restore from file.
11. Local AI insights (offline rule engine, NO API key): detects unusual
    spending spikes, top growing category, subscription total burden,
    savings-rate commentary. Shown as insight cards on the dashboard.
12. Dark mode toggle; Chinese/English UI language toggle (full i18n dictionary).
13. One-click demo data generator + "clear all data" in Settings.
14. Responsive layout (mobile + desktop), clean modern design, sidebar nav
    with views: Dashboard / Transactions / Accounts / Budgets /
    Subscriptions / Calendar / Goals / Insights / Settings.

## Quality bar
- No external CDN or network requests at all. All charts hand-drawn on canvas.
- All state persisted under one localStorage key with a version field;
  seed with empty state (demo data only via the button).
- app.js must pass `node --check`.
- README: what it is, feature list, how it differs from / improves on Sure,
  quick start (open index.html), data format docs for CSV import, MIT license note.
