# @seantrane/serverless

> A monorepo for the management of Serverless services.

---

[![Build Status](https://travis-ci.com/seantrane/serverless.svg?branch=master)](https://travis-ci.com/seantrane/serverless) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Table of Contents

- [About the Repository](#about)
- [Install](#install)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## About the Repository <a id="about"></a>

This is a monorepo for the management of *Serverless* function-code and infrastructure-as-code. There are a few dependencies that make this possible;

- [lerna](https://lernajs.io/): a tool for managing *JavaScript* projects with multiple packages.
- [semantic-release-monorepo](https://github.com/Updater/semantic-release-monorepo): use [semantic-release](https://github.com/semantic-release/semantic-release) within a monorepo.
- [Serverless](https://serverless.com/framework/docs/): framework for managing and deploying *Serverless* functions and infrastructure.

## Install <a id="install"></a>

```sh
# Install lerna globally (to use lerna binary at command line)
npm install -g lerna
# Install repo dependencies, link local packages together and install remaining package dependencies
npm install
```

## Usage <a id="usage"></a>

### CLI

```sh
# List local packages
npm run list
# Run tests across all packages
npm test
# Run linting, tests and builds across all packages
npm run ci
# Clean all auto-generated files
npm run clean
# Uninstall all packages
npm run uninstall
```

Read [CONTRIBUTING.md](https://github.com/seantrane/serverless/blob/master/CONTRIBUTING.md) documentation for more details.

---

## Support <a id="support"></a>

Submit an [issue](https://github.com/seantrane/serverless/issues/new), in which you should provide as much detail as necessary for your issue.

## Contributing <a id="contributing"></a>

Contributions are always appreciated. Read [CONTRIBUTING.md](https://github.com/seantrane/serverless/blob/master/CONTRIBUTING.md) documentation to learn more.

## Changelog <a id="changelog"></a>

Release details are documented in the CHANGELOG.md file of each package (service), and on the [GitHub Releases page](https://github.com/seantrane/serverless/releases).

---

## License <a id="license"></a>

[ISC License](https://github.com/seantrane/serverless/blob/master/LICENSE)

Copyright (c) 2018 [Sean Trane Sciarrone](https://github.com/seantrane)
