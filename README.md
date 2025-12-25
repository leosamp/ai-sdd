# ai-sdd: AI-Assisted Spec-Driven Development

[![npm version](https://img.shields.io/npm/v/ai-sdd?logo=npm)](https://www.npmjs.com/package/ai-sdd?activeTab=readme)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

## Transform AI coding agents into production-ready spec-driven development

**One command. Hours instead of weeks. Requirements → Design → Tasks → Implementation.**

Stop losing development time to scattered context and unclear specifications. ai-sdd brings structured **Spec-Driven Development (SDD)** to Claude Code, Cursor, Gemini CLI, Codex CLI, GitHub Copilot, Qwen Code, and Windsurf, based on the methodology from [AI-Assisted SDD book](https://www.amazon.com/AI-Assisted-SDD-Spec-Driven-Development-Gemini-ebook/dp/B0CW19YX9R).

### What you get:
- ✅ **Spec-first guarantees** — Approve requirements/design upfront, then AI implements exactly as specified
- ✅ **Parallel execution ready** — Tasks decomposed for concurrent implementation with dependency tracking
- ✅ **Team-aligned templates** — Customize once, all agents output docs that fit your approval process
- ✅ **Project Memory** — AI remembers your architecture, patterns, and standards across sessions
- ✅ **7 agents, unified workflow** — Same spec-driven process across Claude, Cursor, Gemini, Codex, Copilot, Qwen, Windsurf
- ✅ **Hours instead of weeks** — Feature planning goes from days to hours with AI-assisted specs

## 🚀 Quick Start

```bash
# Run in your project root directory
cd your-project
npx ai-sdd@latest --claude --lang en ## Claude Code

# ✅ That's it! Now run: /sdd:spec-init <what-to-build>
```

**Installation takes 30 seconds.** Supports 7 agents (Claude (Commands / Subagents), Cursor, Gemini, Codex, Copilot, Qwen, Windsurf) × 12 languages.

## 📋 See It In Action

### Example: Building a new Photo Albums Feature

```bash
/sdd:spec-init Photo albums with upload, tagging, and sharing
/sdd:spec-requirements photo-albums-en
/sdd:spec-design photo-albums-en -y
/sdd:spec-tasks photo-albums-en -y
```

**Generated in 10 minutes:**
- ✅ requirements.md — EARS-format requirements
- ✅ design.md — Architecture with Mermaid diagrams
- ✅ tasks.md — Implementation tasks with dependencies

## 🎯 Use Cases

| Scenario | Workflow |
|----------|----------|
| **New feature (greenfield)** | `spec-init` → `spec-requirements` → `spec-design` → `spec-tasks` → `spec-impl` |
| **Enhance existing code (brownfield)** | `steering` → `spec-init` → (`validate-gap` →) `spec-design` → (`validate-design` →) `spec-tasks` → `spec-impl` |
| **Team process alignment** | Customize templates once in `.sdd/settings/templates/` → all agents follow same format |

## 🎨 Customization

Customize templates and rules in `.sdd/settings/` to match your team's workflow:

- **templates/** - Define document structure (requirements, design, tasks)
- **rules/** - Define AI generation principles and judgment criteria

Common use cases: PRD-style requirements, API/database schemas, approval gates, JIRA integration, domain-specific standards.

## ⚙️ Advanced Installation

### Choose Your Agent

```bash
npx ai-sdd@latest --claude         # Claude Code (11 commands) [default]
npx ai-sdd@latest --claude-agent   # Claude Code Subagents (12 commands + 9 subagents)
npx ai-sdd@latest --cursor         # Cursor IDE
npx ai-sdd@latest --gemini         # Gemini CLI
npx ai-sdd@latest --codex          # Codex CLI
npx ai-sdd@latest --copilot        # GitHub Copilot
npx ai-sdd@latest --qwen           # Qwen Code
npx ai-sdd@latest --windsurf       # Windsurf IDE
```

### Choose Your Language

```bash
npx ai-sdd@latest --lang ja        # Japanese
npx ai-sdd@latest --lang zh-TW     # Traditional Chinese
npx ai-sdd@latest --lang es        # Spanish
# Supports: en, ja, zh-TW, zh, es, pt, de, fr, ru, it, ko, ar
```

### Advanced Options

```bash
# Preview changes before applying
npx ai-sdd@latest --dry-run

# Custom specs directory
npx ai-sdd@latest --sdd-dir docs
```

---

## 📚 Documentation & Support

### 📖 Learn More

**Book**: [AI-Assisted SDD: Spec-Driven Development with Gemini, Claude, and ai-sdd](https://www.amazon.com/AI-Assisted-SDD-Spec-Driven-Development-Gemini-ebook/dp/B0CW19YX9R)

This comprehensive guide by Leonardo Sampaio covers the complete SDD methodology, practical examples, and best practices for AI-assisted development.

### Package Documentation
- [tools/ai-sdd/README.md](tools/ai-sdd/README.md) - Complete tool documentation

---

## 📦 Package Information

This repository contains the **ai-sdd** NPM package located in [`tools/ai-sdd/`](tools/ai-sdd/).

For detailed documentation, installation instructions, and usage examples, see the [Tool Documentation](tools/ai-sdd/README.md).

## 💡 About SDD Methodology

Spec-Driven Development (SDD) is a systematic approach to software development that emphasizes:

1. **Clear Specifications First** - Define what you're building before writing code
2. **AI-Assisted Planning** - Leverage AI to generate comprehensive requirements and design documents
3. **Structured Workflow** - Follow a proven path from requirements to implementation
4. **Team Alignment** - Ensure everyone works from the same specifications
5. **Quality Gates** - Validate specifications before implementation begins

Learn more about the methodology in the [AI-Assisted SDD book](https://www.amazon.com/AI-Assisted-SDD-Spec-Driven-Development-Gemini-ebook/dp/B0CW19YX9R).

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Leonardo Sampaio - [Amazon Author Page](https://www.amazon.com/AI-Assisted-SDD-Spec-Driven-Development-Gemini-ebook/dp/B0CW19YX9R)
