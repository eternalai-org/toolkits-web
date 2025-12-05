import { getLatestVersion } from './versions';
import { installTemplates } from './installer';

interface UpdateResult {
    updated: boolean;
    version: string;
}

export async function updateToLatest(): Promise<UpdateResult> {
    const latestVersion = await getLatestVersion();

    // In a real implementation, you would check the currently installed version
    // For now, we'll just reinstall the latest version
    await installTemplates('all', latestVersion);

    return {
        updated: true,
        version: latestVersion,
    };
}
