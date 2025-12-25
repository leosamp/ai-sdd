export interface AgentLayoutDefaults {
  commandsDir: string;
  agentDir: string;
  docFile: string;
}

export interface AgentCommandHints {
  spec: string;
  steering: string;
  steeringCustom: string;
}

export interface AgentCompletionGuide {
  prependSteps?: string[];
  appendSteps?: string[];
}

export interface AgentDefinition {
  label: string;
  description: string;
  aliasFlags: string[];
  recommendedModels?: string[];
  layout: AgentLayoutDefaults;
  commands: AgentCommandHints;
  manifestId?: string;
  completionGuide?: AgentCompletionGuide;
  templateFallbacks?: Record<string, string>;
}

const codexCopyInstruction = String.raw`Move Codex Custom prompts to ~/.codex/prompts by running:
    mkdir -p ~/.codex/prompts \
      && cp -Ri ./.codex/prompts/. ~/.codex/prompts/ \
      && printf '\n==== COPY PHASE DONE ====\n' \
      && printf 'Remove original ./.codex/prompts ? [y/N]: ' \
      && IFS= read -r a \
      && case "$a" in [yY]) rm -rf ./.codex/prompts && echo 'Removed.' ;; *) echo 'Kept original.' ;; esac`;

export const agentDefinitions = {
  'claude-code': {
    label: 'Claude Code',
    description:
      'Installs sdd prompts in `.claude/commands/sdd/`, shared settings in `{{SDD_DIR}}/settings/` (default `.sdd/settings/`), and an AGENTS.md quickstart.',
    aliasFlags: ['--claude-code', '--claude'],
    recommendedModels: ['Claude 4.5 Sonnet or newer'],
    layout: {
      commandsDir: '.claude/commands/sdd',
      agentDir: '.claude',
      docFile: 'CLAUDE.md',
    },
    commands: {
      spec: '`/sdd:spec-init <what-to-build>`',
      steering: '`/sdd:steering`',
      steeringCustom: '`/sdd:steering-custom <what-to-create-custom-steering-document>`',
    },
    templateFallbacks: {
      'CLAUDE.md': '../../CLAUDE.md',
    },
    manifestId: 'claude-code',
  },
  'claude-code-agent': {
    label: 'Claude Code Agents',
    description:
      'Installs sdd prompts in `.claude/commands/sdd/`, a Claude agent library in `.claude/agents/sdd/`, shared settings in `{{SDD_DIR}}/settings/`, and a CLAUDE.md quickstart.',
    aliasFlags: ['--claude-code-agent', '--claude-agent'],
    recommendedModels: ['Claude 4.5 Sonnet or newer'],
    layout: {
      commandsDir: '.claude/commands/sdd',
      agentDir: '.claude',
      docFile: 'CLAUDE.md',
    },
    commands: {
      spec: '`/sdd:spec-quick <what-to-build>`',
      steering: '`/sdd:steering`',
      steeringCustom: '`/sdd:steering-custom <what-to-create-custom-steering-document>`',
    },
    templateFallbacks: {
      'CLAUDE.md': '../../CLAUDE.md',
    },
    manifestId: 'claude-code-agent',
  },
  codex: {
    label: 'Codex CLI',
    description:
      'Installs sdd prompts in `.codex/prompts/`, shared settings in `{{SDD_DIR}}/settings/`, and an AGENTS.md quickstart.',
    aliasFlags: ['--codex', '--codex-cli'],
    recommendedModels: ['gpt-5.1-codex medium/high', 'gpt-5.1 medium/high'],
    layout: {
      commandsDir: '.codex/prompts',
      agentDir: '.codex',
      docFile: 'AGENTS.md',
    },
    commands: {
      spec: '`/prompts:sdd-spec-init <what-to-build>`',
      steering: '`/prompts:sdd-steering`',
      steeringCustom: '`/prompts:sdd-steering-custom <what-to-create-custom-steering-document>`',
    },
    completionGuide: {
      prependSteps: [codexCopyInstruction],
    },
    manifestId: 'codex',
  },
  cursor: {
    label: 'Cursor IDE',
    description:
      'Installs sdd prompts in `.cursor/commands/sdd/`, shared settings in `{{SDD_DIR}}/settings/`, and an AGENTS.md quickstart.',
    aliasFlags: ['--cursor'],
    recommendedModels: [
      'Claude 4.5 Sonnet thinking mode or newer',
      'gpt-5.1-codex medium/high',
      'gpt-5.1 medium/high',
    ],
    layout: {
      commandsDir: '.cursor/commands/sdd',
      agentDir: '.cursor',
      docFile: 'AGENTS.md',
    },
    commands: {
      spec: '`/sdd/spec-init <what-to-build>`',
      steering: '`/sdd/steering`',
      steeringCustom: '`/sdd/steering-custom <what-to-create-custom-steering-document>`',
    },
    manifestId: 'cursor',
  },
  'github-copilot': {
    label: 'GitHub Copilot',
    description:
      'Installs sdd prompts in `.github/prompts/`, shared settings in `{{SDD_DIR}}/settings/`, and an AGENTS.md quickstart.',
    aliasFlags: ['--copilot', '--github-copilot'],
    recommendedModels: [
      'Claude 4.5 Sonnet thinking mode or newer',
      'gpt-5.1-codex medium/high',
      'gpt-5.1 medium/high',
    ],
    layout: {
      commandsDir: '.github/prompts',
      agentDir: '.github',
      docFile: 'AGENTS.md',
    },
    commands: {
      spec: '`/sdd-spec-init <what-to-build>`',
      steering: '`/sdd-steering`',
      steeringCustom: '`/sdd-steering-custom <what-to-create-custom-steering-document>`',
    },
    manifestId: 'github-copilot',
  },
  'gemini-cli': {
    label: 'Gemini CLI',
    description:
      'Installs sdd prompts in `.gemini/commands/sdd/`, shared settings in `{{SDD_DIR}}/settings/`, and an AGENTS.md quickstart.',
    aliasFlags: ['--gemini-cli', '--gemini'],
    recommendedModels: ['Gemini 2.5 Pro or newer'],
    layout: {
      commandsDir: '.gemini/commands/sdd',
      agentDir: '.gemini',
      docFile: 'GEMINI.md',
    },
    commands: {
      spec: '`/sdd:spec-init <what-to-build>`',
      steering: '`/sdd:steering`',
      steeringCustom: '`/sdd:steering-custom <what-to-create-custom-steering-document>`',
    },
    manifestId: 'gemini-cli',
  },
  windsurf: {
    label: 'Windsurf IDE',
    description:
      'Installs sdd workflows in `.windsurf/workflows/`, shared settings in `{{SDD_DIR}}/settings/`, and an AGENTS.md quickstart.',
    aliasFlags: ['--windsurf'],
    recommendedModels: ['Claude 4.5 Sonnet or newer', 'gpt-5.1-codex medium/high', 'gpt-5.1 medium/high'],
    layout: {
      commandsDir: '.windsurf/workflows',
      agentDir: '.windsurf',
      docFile: 'AGENTS.md',
    },
    commands: {
      spec: '`/sdd-spec-init <what-to-build>`',
      steering: '`/sdd-steering`',
      steeringCustom: '`/sdd-steering-custom <what-to-create-custom-steering-document>`',
    },
    manifestId: 'windsurf',
  },
  'qwen-code': {
    label: 'Qwen Code',
    description:
      'Installs sdd prompts in `.qwen/commands/sdd/`, shared settings in `{{SDD_DIR}}/settings/`, and an AGENTS.md quickstart.',
    aliasFlags: ['--qwen-code', '--qwen'],
    layout: {
      commandsDir: '.qwen/commands/sdd',
      agentDir: '.qwen',
      docFile: 'QWEN.md',
    },
    commands: {
      spec: '`/sdd:spec-init <what-to-build>`',
      steering: '`/sdd:steering`',
      steeringCustom: '`/sdd:steering-custom`',
    },
    manifestId: 'qwen-code',
  },
} as const satisfies Record<string, AgentDefinition>;

export type AgentType = keyof typeof agentDefinitions;

export const getAgentDefinition = (agent: AgentType): AgentDefinition => {
  const definition = agentDefinitions[agent];
  if (!definition) {
    throw new Error(`Unknown agent: ${agent as string}`);
  }
  return definition as AgentDefinition;
};

export const agentList = Object.keys(agentDefinitions) as AgentType[];
