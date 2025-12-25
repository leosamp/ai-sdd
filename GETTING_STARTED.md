# Getting Started with ai-sdd Development

This guide will help you get started with developing and maintaining the ai-sdd project.

## Prerequisites

- Node.js 18+ and npm
- TypeScript knowledge
- Git

## Project Structure

```
ai-sdd/
├── tools/ai-sdd/              # Main NPM package
│   ├── src/                   # TypeScript source
│   ├── templates/             # Templates for all agents
│   ├── package.json
│   └── tsconfig.json
├── README.md                  # Main documentation
├── CLAUDE.md                  # Claude Code guidance
└── LICENSE                    # MIT License
```

## Development Workflow

### 1. Initial Setup

```bash
cd tools/ai-sdd
npm install
```

### 2. Build the Project

```bash
npm run build
```

This compiles TypeScript to `dist/` and adds shebang to CLI file.

### 3. Test Locally

```bash
# Test help
node dist/cli.js --help

# Test dry-run installation
node dist/cli.js --claude --lang en --dry-run

# Test actual installation in a test project
cd /path/to/test-project
npx /path/to/ai-sdd/tools/ai-sdd --claude --lang en
```

### 4. Make Changes

Common modifications:

**Adding a new command:**
1. Add template file in `templates/agents/<agent>/commands/`
2. Use `{{SDD_DIR}}` placeholder for .sdd directory
3. Add to all agents for consistency
4. Rebuild and test

**Updating core logic:**
1. Modify TypeScript files in `src/`
2. Run `npm run build`
3. Test with `--dry-run` first

**Adding new language:**
1. Add to `src/constants/languages.ts`
2. Add guidelines in `src/template/context.ts`
3. Test with all agents

## Publishing to NPM

```bash
cd tools/ai-sdd

# Update version
npm version patch  # or minor, major

# Build
npm run build

# Test
npm pack
# Install the .tgz in a test project to verify

# Publish
npm publish
```

## Testing Matrix

Test across:
- 7 agents: claude-code, claude-code-agent, cursor, gemini-cli, codex, github-copilot, qwen-code, windsurf
- 12 languages: en, ja, zh-TW, zh, es, pt, de, fr, ru, it, ko, ar
- Installation modes: --dry-run, normal, --overwrite=force

## Important Conventions

### Naming
- Use `.sdd` (not `.kiro`)
- Use `SDD_DIR` placeholder (not `KIRO_DIR`)
- Use `/sdd:` prefix for commands (not `/kiro:`)
- Package name is `ai-sdd` (not `cc-sdd`)

### Documentation
- Reference the book: "AI-Assisted SDD" by Leonardo Sampaio
- Avoid mentioning Kiro or cc-sdd
- Focus on SDD methodology benefits

## Troubleshooting

**Build errors:**
- Ensure all TypeScript files compile
- Check for missing imports
- Verify placeholder names are consistent

**Installation issues:**
- Test with `--dry-run` first
- Check agent-specific directory structures
- Verify template rendering with various configs

**Template problems:**
- Ensure placeholders use double braces: `{{SDD_DIR}}`
- Check that all agents have corresponding templates
- Validate JSON manifest files

## Resources

- [Main README](README.md)
- [CLAUDE.md](CLAUDE.md) - Development guidance
- [AI-Assisted SDD Book](https://www.amazon.com/AI-Assisted-SDD-Spec-Driven-Development-Gemini-ebook/dp/B0CW19YX9R)
- [GitHub Repository](https://github.com/leosamp/ai-sdd)
