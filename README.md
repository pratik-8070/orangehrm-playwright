# OrangeHRM Playwright Automation Project

This project automates core test scenarios of the [OrangeHRM](https://opensource-demo.orangehrmlive.com/) web application using **Playwright**.

## ✅ Features Covered

- Login with valid credentials
- Add new user from Admin section
- Screenshot and HTML reporting on failure

## 🧰 Tech Stack

- [Playwright](https://playwright.dev/) with JavaScript (ES Modules)
- Node.js
- HTML Reports
- Screenshot & video capture on failure

## 🧪 Test Cases Implemented

| SL No | Test Scenario     | Description                        |
|-------|-------------------|------------------------------------|
| TC001 | Login             | Login with valid credentials       |
| TC002 | Add User          | Add new user from Admin section    |

## 🐞 Bug Reports

Bug report file is included: **OrangeHRM_Bug_Report.docx**  
Sample bugs identified during testing.

## ▶️ How to Run

```bash
npm install
npx playwright test
```

## 📊 View Report

```bash
npx playwright show-report
```

## 📁 Project Structure

```
orangehrm-playwright/
├── tests/
│   ├── login.spec.js
│   └── addUser.spec.js
├── playwright.config.js
├── package.json
├── README.md
└── OrangeHRM_Bug_Report.docx
```

## 👨‍💻 Author

**Pratik Lal Vishwakarma**  
[LinkedIn](https://www.linkedin.com/in/pratik-lal-vishwakarma)

## 📄 Additional Files

- [OrangeHRM_Bug_Report.docx](OrangeHRM_Bug_Report.docx): Detailed manual bug report
- [OrangeHRM_TestCases.xlsx](OrangeHRM_TestCases.xlsx): 50+ manual test cases with steps, expected & actual results, bug IDs
