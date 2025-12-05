import fs from 'fs-extra';
import path from 'path';

export async function getAvailableVersions(): Promise<string[]> {
    const packageRoot = path.join(__dirname, '../../');
    const templatesDir = path.join(packageRoot, 'templates');

    try {
        const entries = await fs.readdir(templatesDir, { withFileTypes: true });
        const versions = entries
            .filter(entry => entry.isDirectory() && entry.name !== 'latest')
            .map(entry => entry.name)
            .sort((a, b) => {
                // Sort versions in descending order (newest first)
                return b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' });
            });

        return ['latest', ...versions];
    } catch (error) {
        throw new Error('Failed to read template versions');
    }
}

export async function getLatestVersion(): Promise<string> {
    const versions = await getAvailableVersions();
    return versions[0];
}
