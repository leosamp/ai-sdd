# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ai-sdd** is an NPM package that enables AI-powered Spec-Driven Development (SDD) workflows across 7 AI coding agents (Claude Code, Cursor, Gemini CLI, Codex CLI, GitHub Copilot, Qwen Code, and Windsurf).

The project implements a structured development workflow: Requirements → Design → Tasks → Implementation, with `/sdd:` prefixed slash commands.

## Repository Structure

```
ai-sdd/
├── tools/ai-sdd/              # Main NPM package
│   ├── src/                   # TypeScript source code
│   │   ├── cli/               # CLI parsing and UI
│   │   ├── agents/            # Agent registry and definitions
│   │   ├── manifest/          # Manifest loading and planning
│   │   ├── plan/              # Execution planning
│   │   ├── resolvers/         # Path and config resolvers
│   │   ├── template/          # Template rendering engine
│   │   ├── constants/         # Language definitions
│   │   └── utils/             # Utility functions
│   ├── templates/             # Templates for all agents
│   │   ├── agents/            # Agent-specific templates
│   │   │   ├── claude-code/   # Claude Code commands
│   │   │   ├── claude-code-agent/  # Claude subagents
│   │   │   ├── cursor/        # Cursor IDE templates
│   │   │   ├── gemini-cli/    # Gemini CLI templates
│   │   │   ├── codex/         # Codex templates
│   │   │   ├── github-copilot/  # Copilot templates
│   │   │   ├── qwen-code/     # Qwen templates
│   │   │   └── windsurf/      # Windsurf templates
│   │   ├── manifests/         # Installation manifests (JSON)
│   │   └── shared/            # Shared templates and settings
│   │       └── settings/      # Default settings
│   │           ├── templates/ # Spec document templates
│   │           └── rules/     # AI generation rules
│   ├── scripts/               # Build scripts
│   ├── package.json           # Package configuration
│   └── tsconfig.json          # TypeScript configuration
├── README.md                  # Main documentation
└── CLAUDE.md                  # This file
```

## Development Commands

### Build and Test

```bash
cd tools/ai-sdd
npm install         # Install dependencies
npm run build       # Compile TypeScript
npm test            # Run tests
npm run test:watch  # Watch mode for tests
```

### Local Testing

```bash
# Test the CLI locally
cd tools/ai-sdd
npm run build
node dist/cli.js --help

# Test installation in a test project
cd /path/to/test-project
npx /path/to/ai-sdd/tools/ai-sdd --claude --lang en --dry-run
```

## Architecture

### Core Workflow

1. **CLI Entry** (`src/cli.ts`, `src/index.ts`):
   - Parses command-line arguments
   - Validates agent selection and configuration
   - Delegates to manifest planner

2. **Manifest Planning** (`src/manifest/`):
   - Loads agent-specific manifest JSON
   - Plans file operations (copy, template render)
   - Resolves paths and contexts

3. **Template Rendering** (`src/template/`):
   - Replaces placeholders like `{{SDD_DIR}}`, `{{AGENT}}`, `{{LANG_CODE}}`
   - Generates agent-specific commands and documentation
   - Supports 12 languages

4. **Execution** (`src/plan/`):
   - Categorizes operations (commands, docs, project-memory, settings)
   - Handles conflicts (prompt/skip/force)
   - Writes files to target directories

### Key Concepts

**SDD Directory** (`.sdd/`):
- Default directory for all spec-driven development artifacts
- Contains `specs/` (generated specifications) and `settings/` (customization)
- Configurable via `--sdd-dir` flag

**Slash Commands** (`/sdd:*`):
- Installed to agent-specific command directories
- Each command is a Markdown file with instructions for the AI agent
- Commands: spec-init, spec-requirements, spec-design, spec-tasks, spec-impl, steering, validate-*

**Template Context**:
- `SDD_DIR`: Path to .sdd directory
- `AGENT`: Agent type (claude-code, cursor, etc.)
- `LANG_CODE`: Language code (en, ja, etc.)
- `AGENT_DIR`, `AGENT_DOC`, `AGENT_COMMANDS_DIR`: Agent-specific paths

**Agents Registry** (`src/agents/registry.ts`):
- Defines supported agents with their layouts
- Maps CLI flags (--claude, --cursor) to agent types
- Determines command installation directories

## Important Notes

### Naming Conventions

- **SDD** (not Kiro): This project uses ".sdd" folder and "SDD" terminology
- **ai-sdd** (not cc-sdd): Package name is "ai-sdd"
- **/sdd:** (not /kiro:): Slash command prefix is "/sdd:"
- **SDD_DIR** (not KIRO_DIR): Template placeholder is `{{SDD_DIR}}`

### Placeholders in Templates

All template files use these placeholders:
- `{{SDD_DIR}}` - Resolves to .sdd (or custom path)
- `{{AGENT}}` - Current agent name
- `{{LANG_CODE}}` - Language code
- `{{DEV_GUIDELINES}}` - Language-specific guidelines
- `{{AGENT_DIR}}`, `{{AGENT_DOC}}`, `{{AGENT_COMMANDS_DIR}}` - Agent paths

### Adding New Features

When adding new slash commands:
1. Create command template in `templates/agents/<agent>/commands/`
2. Follow existing command structure (frontmatter + instructions)
3. Use `{{SDD_DIR}}` for path references
4. Add to all supported agents for consistency

When modifying core logic:
1. Update TypeScript source in `src/`
2. Rebuild with `npm run build`
3. Test with `--dry-run` flag first
4. Verify all agents work correctly

## Testing Strategy

- Unit tests in `src/**/*.test.ts` (if present)
- Integration testing via `--dry-run` flag
- Manual testing across different agents and languages
- Test matrix: 7 agents × 12 languages = 84 combinations

## Publishing

The package is published to NPM as `ai-sdd`. Publishing workflow:
1. Update version in `tools/ai-sdd/package.json`
2. Build: `npm run build`
3. Test installation locally
4. Publish: `npm publish` (from tools/ai-sdd directory)

## Documentation Philosophy

This project emphasizes the SDD (Spec-Driven Development) methodology from the book "AI-Assisted SDD" by Leonardo Sampaio. All documentation should:
- Reference the book as the authoritative source for methodology
- Focus on spec-first, structured development
- Avoid mentioning Kiro or cc-sdd
- Emphasize the benefits of AI-assisted specification generation

## Related Resources

- [AI-Assisted SDD Book](https://www.amazon.com/AI-Assisted-SDD-Spec-Driven-Development-Gemini-ebook/dp/B0CW19YX9R)
- [NPM Package](https://www.npmjs.com/package/ai-sdd)
- [GitHub Repository](https://github.com/leosamp/ai-sdd)
