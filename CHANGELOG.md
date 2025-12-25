# Changelog

All notable changes to ai-sdd will be documented in this file.

## [1.1.0] - 2025-12-25

### Added
- Complete implementation of AI-powered Spec-Driven Development workflow
- Support for 7 AI coding agents (Claude Code, Cursor, Gemini CLI, Codex CLI, GitHub Copilot, Qwen Code, Windsurf IDE)
- 11 slash commands with `/sdd:` prefix for spec-driven workflows
- Support for 12 languages (en, ja, zh-TW, zh, es, pt, de, fr, ru, it, ko, ar)
- Comprehensive documentation referencing "AI-Assisted SDD" book
- `.sdd` directory structure for specifications and settings
- Template customization system for teams
- Project Memory feature for AI agents

### Features
- `/sdd:spec-init` - Initialize new specifications
- `/sdd:spec-requirements` - Generate requirements documents
- `/sdd:spec-design` - Create architecture designs with Mermaid diagrams
- `/sdd:spec-tasks` - Decompose into implementation tasks with dependencies
- `/sdd:spec-impl` - Implementation assistance
- `/sdd:steering` - Analyze existing codebase
- `/sdd:steering-custom` - Custom steering with specific focus
- `/sdd:validate-gap` - Validate implementation gaps
- `/sdd:validate-design` - Validate design documents
- `/sdd:validate-impl` - Validate implementation quality
- `/sdd:spec-status` - Show all specifications status

### Documentation
- Comprehensive README with quick start guide
- CLAUDE.md for Claude Code development guidance
- GETTING_STARTED.md for contributors
- Package-specific documentation in tools/ai-sdd/

## [1.0.0] - 2025-12-25

### Added
- Initial package publication (placeholder)
