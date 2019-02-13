# Contributing

> Thank you for contributing. Contributions are always welcome, no matter how large or small.

## Table of Contents

- [Guidelines](#guidelines)
- [Pull Requests](#pull-requests)
- [Clone the Repository](#clone-repo)
- [Install Dependencies](#install-dependencies)
- [File Structure](#file-structure)

---

## Guidelines <a id="guidelines"></a>

As a contributor, here are the guidelines we would like you to follow:

- [Code of conduct](https://github.com/seantrane/serverless/blob/master/CODE_OF_CONDUCT.md)
- [How can I contribute?](#how-can-i-contribute)
- [Using the issue tracker](#using-the-issue-tracker)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Coding rules](#coding-rules)
- [Working with code](#working-with-code)

We also recommend to read [How to Contribute to Open Source](https://opensource.guide/how-to-contribute).

---

## Pull Requests <a id="pull-requests"></a>

Thank you for contributing.

- Create your branch from `master`.
- Ensure your [git commit messages follow the required format](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#git-commit-messages).
- Ensure your scripts are well-formed, well-documented and object-oriented.
- Ensure your scripts are stateless and can be reused by all.
- Update your branch, and resolve any conflicts, before making pull request.
- Fill in [the required template](https://github.com/seantrane/serverless/blob/master/.github/PULL_REQUEST_TEMPLATE.md).
- Do not include issue numbers in the PR title.
- Include screenshots and animated GIFs in your pull request whenever possible.
- Follow the [style guide](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md) [applicable to the language](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#languages) or task.
- Include thoughtfully-worded, well-structured tests/specs. See the [Tests/Specs Style Guide](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#tests).
- Document new code based on the [Documentation Style Guide](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#documentation).
- End all files with a newline.

---

## Clone the Repository <a id="clone-repo"></a>

```sh
git clone git@github.com:seantrane/serverless.git serverless && cd serverless
```

## Install Dependencies <a id="install-dependencies"></a>

```sh
# Install lerna globally (to use lerna binary at command line)
npm install -g lerna

# Install repo dependencies, link local packages together and install remaining package dependencies
npm install

# List local packages
npm run list

# Run tests across all packages
npm run test

# Run tests across changed packages
npm run test:changed

# Run linting across all packages
npm run lint

# Run builds across all packages
npm run build

# Run builds across changed packages
npm run build:changed

# Run linting, tests and builds across all packages
npm run ci

# Clean all auto-generated files
npm run clean

# Clean all auto-generated files within packages
npm run clean:packages

# Uninstall all packages
npm run uninstall

# Add dependency to a sub-package
npm run add -- <package>[@version] [--dev] [--exact] [packages/...]

npm run add -- pkg packages/hello-world
# "dependencies": {
#   "pkg": "^1.1.0"
# }

npm run add -- pkg@1.0.1 packages/hello-world
# "dependencies": {
#   "pkg": "^1.0.1"
# }

npm run add -- pkg@1.0.1 --exact packages/hello-world
# "dependencies": {
#   "pkg": "1.0.1"
# }

npm run add -- pkg --dev packages/hello-world
# "devDependencies": {
#   "pkg": "^1.1.0"
# }
```

## Important Links <a id="important-links"></a>

- [Learn how to use `lerna`](https://github.com/lerna/lerna#readme)
- [Add a dependency to matched packages](https://github.com/lerna/lerna/tree/master/commands/add#readme) `lerna add <package>[@version] [--dev] [--exact]`
- [Run an npm script in each package that contains that script](https://github.com/lerna/lerna/tree/master/commands/run#readme) `lerna run <script> -- [..args]`
- [Run an arbitrary command in each package](https://github.com/lerna/lerna/tree/master/commands/exec#readme) `lerna exec -- <command> [..args]`
- [Remove the node_modules directory from all packages](https://github.com/lerna/lerna/tree/master/commands/clean#readme) `lerna clean`

---

## File Structure <a id="file-structure"></a>

```text
seantrane/serverless/
 ├─ services/                    * directory containing all Serverless services
 │   ├─ <service>/               * <service> directory
 │   :   ├─ __tests__/           * tests directory
 │       │   └─ handler.test.ts  * unit tests for function code
 │       │
 │       ├─ src/                 * source code directory
 │       │   └─ handler.ts       * function code, referenced by definitions in serverless.yml
 │       │
 │       ├─ event.json           * invoke function-data; `serverless invoke -p event.json`
 │       ├─ handler.js           * generated during deploy by `serverless-plugin-typescript`
 │       ├─ package.json         * <service> config, required for `npm run <script>`
 │       ├─ README.md            * each <service> should have a README with details therein
 │       ├─ serverless.yml       * Serverless functions and infrastructure resources
 │       └─ tsconfig.json        * TypeScript config
 │
 ├─ .markdownlint.yaml           * Markdown-lint rules and config
 ├─ .npmignore                   * npm publish ignore rules
 ├─ .releaserc.js                * semantic-release config
 ├─ .travis.yml                  * Travis CI config
 ├─ CODEOWNERS                   * default PR reviewers based on code-ownership
 ├─ CONTRIBUTING.md              * contribution guidelines
 ├─ CHANGLOG.md                  * changelog autogenerated by `@semantic-release/changelog`
 ├─ lerna.json                   * Lerna config
 ├─ mocha.opts                   * Mocha config
 ├─ package-lock.json            * npm package dependency lock file
 ├─ package.json                 * monorepo package config
 ├─ ROADMAP.md                   * repo and packages roadmap
 ├─ sonar-project.properties     * SonarCloud config, where each <service> must be declared
 ├─ STYLE_GUIDES.md              * Style guides, standards and practices
 ├─ tsconfig.json                * shared/base TypeScript config
 ├─ tslint.json                  * TSLint config
 └─ typedoc.json                 * TypeDoc config
```

---

## How can I contribute? <a id="how-can-i-contribute"></a>

### Improve documentation <a id="improve-documentation"></a>

Consider helping to improve the documentation by finding _documentation issues_ that need help, and by submitting pull requests for corrections, clarifications, more examples, new features, etc.

Please follow the [Documentation guidelines](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#documentation).

### Give feedback on issues <a id=""></a>

Some issues are created without information requested in the [Bug report guideline](#bug-report). Help making them easier to resolve by adding any relevant informations.

Issues with the [design label](https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aseantrane+archived%3Afalse+label%3Adesign) are meant to discuss the implementation of new features. Participating in the discussion is a good opportunity to get involved and influence the future.

### Fix bugs and implement features <a id=""></a>

Confirmed bug and ready to implement features are marked with the [help wanted label](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3Aseantrane+archived%3Afalse+label%3A%22help+wanted%22). Post a comment on an issue to indicate you would like to work on it and to request help from the [@seantrane/maintainers](https://github.com/orgs/seantrane/teams/contributors) and the community.

---

## Using the issue tracker <a id="using-the-issue-tracker"></a>

The issue tracker is the channel for [bug reports](#bug-report), [features requests](#feature-request) and [submitting pull requests](#submitting-a-pull-request) only. Please use the [Support](https://github.com/seantrane/serverless/blob/master/README.md#support) section for help, troubleshooting and questions.

Before opening an Issue or a Pull Request, please use the [GitHub issue search](https://github.com/issues?utf8=%E2%9C%93&q=user%3Aseantrane) to make the bug or feature request hasn't been already reported or fixed.

### Bug report <a id="bug-report"></a>

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report and fill the information requested in the _[Bug/Issue Template](https://github.com/seantrane/serverless/blob/master/.github/ISSUE_TEMPLATE.md)_.

### Feature request <a id="feature-request"></a>

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible and fill the information requested in the _[Agile Story Template](https://github.com/seantrane/serverless/blob/master/.github/STORY_TEMPLATE.md)_.

---

## Submitting a Pull Request <a id="submitting-a-pull-request"></a>

Good pull requests whether patches, improvements or new features are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

If you never created a pull request before, then [learn how to submit a pull request (great tutorial)](https://opensource.guide/how-to-contribute/#opening-a-pull-request).

#### Here is a summary of the steps to follow:

##### 1. [Set up the workspace](#set-up-the-workspace)

##### 2. If you cloned a while ago, get the latest changes from upstream and update dependencies:

```sh
git checkout master
git pull upstream master
rm -rf node_modules
npm install
```

##### 3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:

```sh
git checkout -b <topic-branch-name>
```

##### 4. Make your code changes, following the [Coding rules](#coding-rules)

##### 5. Push your topic branch up to your fork:

```sh
git push origin <topic-branch-name>
```

##### 6. [Open a Pull Request](https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request) with a clear title and description.

##### Tips:

- For ambitious tasks, open a Pull Request as soon as possible with the `[WIP]` prefix in the title, in order to get feedback and help from the community.
- [Allow semantic-release maintainers to make changes to you Pull Request branch](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork) this way we can rebase it and make some minor changes if necessary. All changes we make will be done in new commit and we'll ask for your approval before merging them.

---

## Coding rules <a id="coding-rules"></a>

- [Commit message guidelines](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#git-commit-messages)
- [Documentation](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#documentation)
- [Lint](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#lint)
- [Source Code](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#source-code)
- [Tests/Specs](https://github.com/seantrane/serverless/blob/master/STYLE_GUIDES.md#tests)

---

## Working with code <a id="working-with-code"></a>

### Set up the workspace <a id="set-up-the-workspace"></a>

[Fork](https://guides.github.com/activities/forking/#fork) the project, [clone](https://guides.github.com/activities/forking/#clone) your fork, configure the remotes and install the dependencies:

```bash
# Clone your fork of the repo into the current directory
$ git clone git@github.com:seantrane/serverless.git
# Navigate to the newly cloned directory
$ cd monorepo
# Assign the original repo to a remote called "upstream"
$ git remote add upstream git@github.com:seantrane/serverless.git
# Install the dependencies
$ npm install
```

---

#### Happy coding!
