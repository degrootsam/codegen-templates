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
git clone https://github.com/degrootsam/codegen-templates
npm install
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

## 💾 Reference

- [Git Submodules Docs](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Trunk Actions Docs](https://docs.trunk.io/cli/getting-started/actions)

---

Happy scaffolding! 💪
