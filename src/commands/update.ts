import chalk from 'chalk';
import ora from 'ora';
import { updateToLatest } from '../utils/updater';

export async function updateCommand() {
    console.log(chalk.cyan.bold('\n🔄 Updating Templates\n'));

    const spinner = ora('Checking for updates...').start();

    try {
        const result = await updateToLatest();

        if (result.updated) {
            spinner.succeed(chalk.green(`Updated to version ${result.version}`));
            console.log(chalk.cyan('\n✨ Templates are now up to date!\n'));
        } else {
            spinner.info(chalk.yellow('Already on latest version'));
            console.log(chalk.white(`Current version: ${result.version}\n`));
        }
    } catch (error) {
        spinner.fail(chalk.red('Update failed'));
        console.error(chalk.red(`\n❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}\n`));
        process.exit(1);
    }
}
