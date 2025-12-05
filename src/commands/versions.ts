import chalk from 'chalk';
import { getAvailableVersions } from '../utils/versions';

export async function versionsCommand() {
    console.log(chalk.cyan.bold('\n📦 Available Versions\n'));

    try {
        const versions = await getAvailableVersions();

        versions.forEach((version, index) => {
            const isLatest = index === 0;
            const prefix = isLatest ? chalk.green('✓') : chalk.gray('•');
            const label = isLatest ? chalk.green.bold(version) : chalk.white(version);
            const tag = isLatest ? chalk.yellow(' (latest)') : '';

            console.log(`  ${prefix} ${label}${tag}`);
        });

        console.log('');
    } catch (error) {
        console.error(chalk.red(`\n❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}\n`));
        process.exit(1);
    }
}
