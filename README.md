# CafeFlow Frontend Demo

## Run
1. Extract the ZIP.
2. Open the `cafeflow_frontend` folder in VS Code.
3. Install/use the VS Code Live Server extension.
4. Right-click `index.html` → Open with Live Server.

You can also open `index.html` directly in a modern browser, but Live Server is recommended.

## Pages
- index.html — Dashboard
- customers.html — Customer records
- orders.html — Manual orders and bill calculation
- menu.html — Menu item management
- materials.html — Raw material inventory
- recipes.html — Recipe ingredient mapping
- purchases.html — Purchase entry and stock increase
- expenses.html — Expense recording
- analytics.html — Sales/expense totals and charts
- receipts.html — Click-to-WhatsApp receipt flow
- settings.html — Cafe details and receipt preferences

## Shared assets
- assets/css/style.css — shared responsive UI and coral/lavender theme
- assets/js/app.js — localStorage demo data, CRUD and interactions
- assets/js/pages.js — page-specific initialization

## Important demo limitations
- Frontend only; no PHP backend, MySQL database, authentication or server-side validation.
- Records are stored in the current browser's localStorage, not shared between devices.
- WhatsApp receipt opens a `wa.me` chat with a prefilled message; staff must manually press Send.
- Recipe setup is a foundation; automatic ingredient deduction, wastage, supplier ledgers, GST, audit logs, role permissions and robust reporting must be implemented and tested in the backend.
- Dashboard starter metrics and sample chart values are illustrative, not live business figures.
