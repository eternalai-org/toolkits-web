import fs from 'fs-extra';
import path from 'path';
import { AI_ASSISTANTS, TEMPLATE_PATHS } from '../constants';

export async function installTemplates(assistant: string, version?: string) {
    const cwd = process.cwd();
    const assistants = assistant === 'all' ? AI_ASSISTANTS : [assistant];

    for (const ai of assistants) {
        const templateConfig = TEMPLATE_PATHS[ai];
        if (!templateConfig) {
            throw new Error(`No template configuration found for ${ai}`);
        }

        // Get template source paths (can be single or multiple)
        const templateSources = getTemplatePaths(ai, version);

        // Copy templates to project
        for (let i = 0; i < templateConfig.paths.length; i++) {
            const targetPath = templateConfig.paths[i];
            const templateSource = templateSources[i];
            const destination = path.join(cwd, targetPath);

            // Ensure parent directory exists
            await fs.ensureDir(path.dirname(destination));

            // Check if source exists
            if (!(await fs.pathExists(templateSource))) {
                console.warn(`Template source not found: ${templateSource}`);
                continue;
            }

            // Check if source is file or directory
            const stats = await fs.stat(templateSource);

            if (stats.isDirectory()) {
                // Copy entire directory (for claude skills and shared folders)
                await fs.copy(templateSource, destination, { overwrite: true });
            } else {
                // Copy single file (for cursor, windsurf, etc.)
                await fs.copy(templateSource, destination, { overwrite: true });
            }
        }
    }
}

function getTemplatePaths(assistant: string, version?: string): string[] {
    // This will point to the templates directory in the npm package
    const packageRoot = path.join(__dirname, '../../');
    const templatesDir = path.join(packageRoot, 'templates');

    const versionDir = version || 'latest';
    const baseDir = path.join(templatesDir, versionDir);

    // Map assistant names to their template file/folder names
    const templateMap: Record<string, string | string[]> = {
        'cursor': ['eai-web.cursor.md', 'eai-web-design.cursor.md', 'eai-web-code.cursor.md'],
        'windsurf': 'eai-web.windsurf.md',
        'antigravity': ['eai-web.antigravity.md', 'eai-web.shared'],
        'copilot': ['eai-web.copilot.md', 'eai-web.shared'],
        'claude': 'eai-web.claude',
    };

    const templateNames = templateMap[assistant] || assistant;

    // Return array of paths
    if (Array.isArray(templateNames)) {
        return templateNames.map(name => path.join(baseDir, name));
    }

    return [path.join(baseDir, templateNames)];
}
