Repository with Playwright UI tests for the Redmine site (https://www.redmine.org). Tests automate the manual test cases from the Excel: Help, Search, Login error handling, Download→Roadmap, Projects navigation.

# Install

Install Node.js: https://nodejs.org/ (v22.18.0)

Install Git: https://git-scm.com/ (v2.39.3)

# Clone repository

```
git clone <https://github.com/RomanVadyak/RedmineProject.git>
```

# Go to the project folder

```
cd Redmine_PlaywrightHW
```

# Install dependencies

```
npm install
```

# Install Playwright browsers

```
npm playwright install
```

# Run test

In headless mode:

```
npm run test
```

In headed mode:

```
npm run test:headed
```

# Folders:

helpers - texts in constants

pages — Page Object Model classes

tests — spec files
