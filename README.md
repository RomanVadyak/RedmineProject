Repository with Playwright UI tests for the Redmine site (https://www.redmine.org). Tests automate the manual test cases from the Excel: Help, Search, Login error handling, Download→Roadmap, Projects navigation.

# Install

install Node.js: https://nodejs.org/

install Git: https://git-scm.com/

# clone repository

```
git clone <https://github.com/RomanVadyak/RedmineProject.git>
```

# go to the project folder

```
cd Redmine_PlaywrightHW
```

# install dependencies

```
npm install
```

# install Playwright browsers

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

pages — Page Object Model classes

test-results - results with screenshot and test trace

tests — spec files
