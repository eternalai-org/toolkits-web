export const AI_ASSISTANTS = ['claude', 'cursor', 'windsurf', 'antigravity', 'copilot'] as const;

export type AIAssistant = typeof AI_ASSISTANTS[number];

interface TemplateConfig {
    paths: string[];
    description: string;
}

export const TEMPLATE_PATHS: Record<string, TemplateConfig> = {
    claude: {
        paths: ['.claude/skills/eai-web'],
        description: 'Claude Code skill',
    },
    cursor: {
        paths: [
            '.cursor/commands/eai-web.md',
            '.cursor/commands/eai-web-design.md',
            '.cursor/commands/eai-web-code.md',
        ],
        description: 'Cursor commands (main + specialized)',
    },
    windsurf: {
        paths: ['.windsurf/workflows/eai-web.md'],
        description: 'Windsurf workflow',
    },
    antigravity: {
        paths: [
            '.agent/workflows/eai-web.md',
            '.shared/eai-web',
        ],
        description: 'Antigravity workflow and shared resources',
    },
    copilot: {
        paths: [
            '.github/prompts/eai-web.prompt.md',
            '.shared/eai-web',
        ],
        description: 'GitHub Copilot prompt',
    },
};
