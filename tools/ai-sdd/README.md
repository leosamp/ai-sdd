# ai-sdd

AI-powered Spec-Driven Development tool for 7 AI coding agents.

## Installation

```bash
npx ai-sdd@latest --claude --lang en
```

## Usage

After installation, use the following slash commands:

### Spec-Driven Development Commands

- `/sdd:spec-init <description>` - Initialize a new specification
- `/sdd:spec-requirements <spec-name>` - Generate requirements document
- `/sdd:spec-design <spec-name>` - Create design document with architecture
- `/sdd:spec-tasks <spec-name>` - Decompose into implementation tasks
- `/sdd:spec-impl <spec-name>` - Assist with implementation
- `/sdd:spec-status` - Show all specifications status

### Enhancement & Validation Commands

- `/sdd:steering` - Analyze existing codebase for enhancement
- `/sdd:steering-custom` - Custom steering with specific focus areas
- `/sdd:validate-gap <spec-name>` - Validate implementation gaps
- `/sdd:validate-design <spec-name>` - Validate design document
- `/sdd:validate-impl <spec-name>` - Validate implementation quality

## Configuration

All configuration lives in `.sdd/` directory:

```
.sdd/
├── specs/           # Generated specifications
├── settings/
│   ├── templates/   # Customizable document templates
│   └── rules/       # AI generation rules
```

## Supported Agents

- Claude Code (Commands / Subagents)
- Cursor IDE
- Gemini CLI
- Codex CLI
- GitHub Copilot
- Qwen Code
- Windsurf IDE

## Supported Languages

English (en), Japanese (ja), Traditional Chinese (zh-TW), Simplified Chinese (zh), Spanish (es), Portuguese (pt), German (de), French (fr), Russian (ru), Italian (it), Korean (ko), Arabic (ar)

## Learn More

- [Main Documentation](../../README.md)
- [AI-Assisted SDD Book](https://www.amazon.com/AI-Assisted-SDD-Spec-Driven-Development-Gemini-ebook/dp/B0CW19YX9R)

## License

MIT
