# ParaBank Automation Project

This repository contains the automated test suite for the [ParaBank](https://parabank.parasoft.com/parabank/index.htm) web application, developed using **Cypress** and **TypeScript**. The project is designed to validate the functionality of the ParaBank application through robust and efficient test cases.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JonathanLopez0327/para-bank-automation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd para-bank-automation
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

- **Cypress Configuration:** Update `cypress.config.ts` to set up the base URL, test file patterns, and other settings specific to your environment.
- **Environment Variables:** If required, add sensitive information to a `cypress.env.json` file (not tracked by Git).

## Running Tests

1. **Open Cypress Test Runner:**

   ```bash
   npx cypress open
   ```

   This launches the Cypress Test Runner for interactive test execution.

2. **Run Tests in Headless Mode:**

   ```bash
   npx cypress run
   ```

   Executes all tests in headless mode, suitable for continuous integration.

## Writing Tests

- Add new test files in the `cypress/e2e/` directory.
- Use fixtures from `cypress/fixtures/` for test data.
- Define reusable custom commands in `cypress/support/commands.ts`.

## Reporting

- **Screenshots:** Automatically captured on test failure and stored in `cypress/screenshots/`.
- **Videos:** Recordings of test runs saved in `cypress/videos/` (if enabled).

## Continuous Integration

To integrate this project with a CI/CD pipeline, configure the environment to execute `npx cypress run` as part of the build process. For example, in GitHub Actions:

```yaml
name: CI
on:
  push:
    branches:
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm install
      - run: npx cypress run
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear descriptions.
4. Push to your branch.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ParaBank](https://parabank.parasoft.com/parabank/index.htm) for the demo application.
- [Cypress Documentation](https://docs.cypress.io/) for providing comprehensive resources.

---

For questions or feedback, please open an issue on [GitHub](https://github.com/JonathanLopez0327/para-bank-automation/issues).