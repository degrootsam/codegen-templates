# 🛠 Maintainers Guide

Welcome, maintainer! This guide will help you correctly clone and work with this repository, including its submodules.

---

## 📦 What’s Inside?

This repository (`codegen-templates`) includes **Git submodules** for project templates such as:

- `bb-generic-actions-typescript` (TypeScript)
- `bb-generic-actions` (JavaScript)

These are hosted as **nested Git submodules** inside `codegen-templates/projects/`.

---

## 🩹 First Time Setup

To install and initialize everything:

```bash
npm run setup
```

> This runs: `trunk actions run init-submodules`

You do **not** need to use `git clone --recurse-submodules` if you use the setup script.

---

## 🔄 Updating Submodules

To pull the latest version of each submodule:

```bash
npm run update:projects
```

> This runs: `trunk actions run update-submodules`

Or update manually inside each submodule:

```bash
cd projects/ts-project
git fetch
git checkout v1.3.0
```

---

## 🧪 Reinitializing Submodules (if things break)

If you ever need to reset submodules:

```bash
git submodule deinit -f .
git submodule update --init --recursive
```

---

## 🏋 Releasing a New Version

To tag a release of this repository:

```bash
npm run release
```

> This runs: `node scripts/create-release-tag.js`

Make sure all submodules are pointing to the correct versions before tagging!

---

## 📦 Dependencies

This repository relies on the following dev dependencies:

| Package                                                                              | Version | Purpose                                                                   |
| ------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------- |
| [@trunkio/launcher](https://www.npmjs.com/package/@trunkio/launcher)                 | ^1.3.4  | CLI integration for managing pre-commit hooks and actions via Trunk.io    |
| [commitizen](https://www.npmjs.com/package/commitizen)                               | ^4.3.1  | Standardizes commit messages and helps follow conventional commit formats |
| [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog) | ^3.3.0  | Adapter for Commitizen to enforce the Conventional Changelog spec         |
| [prettier](https://www.npmjs.com/package/prettier)                                   | ^3.5.3  | Code formatter to enforce consistent style                                |

These tools ensure consistent formatting, commits, and CI-ready submodule management.

These tools ensure consistent formatting, commits, and CI-ready submodule management.

---

## 💾 Reference

- [Git Submodules Docs](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Trunk Actions Docs](https://docs.trunk.io/cli/getting-started/actions)

---

Happy scaffolding! 💪
