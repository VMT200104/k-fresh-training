# 🚀 Playwright E-commerce Automation Framework

A high-performance, scalable automated testing framework built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern. This project is tailored for testing the eCommerce Playground platform.

---

## 🌟 Key Features

*   **Page Object Model (POM)**: Enhanced maintainability by separating locators, page actions, and test logic.
*   **Multi-Environment Support**: Seamlessly switch between `dev`, `qa`, `staging`, `uat`, and `prod` using dedicated `.env` profiles.
*   **Data-Driven Testing**: Externalized test data in TypeScript/JSON formats.
*   **Smart Locators Strategy**: Hierarchical locator management (Common vs. Feature-specific).
*   **Robust Reporting**: Detailed HTML reports with step-by-step Execution logs.
*   **CI/CD Ready**: Configured for headless execution and cross-environment runs.

---

## 🛠️ Technology Stack

| Component | Technology |
| :--- | :--- |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Test Runner** | [Playwright Test](https://playwright.dev/) |
| **Logic Pattern** | Page Object Model (POM) |
| **Env Management** | `dotenv`, `cross-env` |
| **Reporting** | Playwright HTML Reporter |

---

## 📁 Project Structure

```text
k-fresh-training/
├── data/               # Test data files (JSON/TS)
├── documents/          # Manual test case documentation (.md)
├── locators/           # UI selectors separated from logic
│   ├── common-locators.ts
│   └── search.locators.ts
├── models/             # TypeScript interfaces and types
├── pages/              # Page Object classes (Actions & Flows)
│   ├── base-page.ts    # Custom fixtures & initialization
│   ├── common-page.ts  # Base page actions
│   └── search-page.ts
├── profiles/           # Environment-specific .env files
├── tests/              # Test suites
│   └── ui/             # UI automation scripts
├── utilities/          # Global constants and helper functions
├── playwright.config.ts# Playwright global configuration
└── package.json        # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v16 or higher)
*   npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VMT200104/k-fresh-training.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright Browsers:
   ```bash
   npx playwright install
   ```

---

## 🧪 Running Tests

By default, tests run in the **QA** environment.

### Run all tests
```bash
npm test
```

### Run specific test files
```bash
npx playwright test tests/ui/test-search.spec.ts
```

### Run on different environments
You can override the environment by passing the `ENV` variable:
```bash
# Windows (PowerShell)
$env:ENV="dev"; npx playwright test

# Linux/Mac/Git Bash
ENV=prod npx playwright test
```

---

## 📊 Reporting

After running the tests, you can view the execution report:

```bash
npx playwright show-report
```

The report includes:
*   Visual execution steps.
*   Screenshots and videos (if configured).
*   Detailed trace for debugging failed cases.

---

## 🤝 Contribution

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---
**Happy Testing!** 🎭✨