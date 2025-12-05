import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { installTemplates } from '../utils/installer';
import { AI_ASSISTANTS } from '../constants';

interface InitOptions {
    ai?: string;
    version?: string;
}

export async function initCommand(options: InitOptions) {
    console.log(chalk.cyan.bold('\n🚀 Eternal Toolkits Installer\n'));

    let selectedAI = options.ai;

    // If no AI specified, prompt user
    if (!selectedAI) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'assistant',
                message: 'Which AI assistant do you want to install templates for?',
                choices: [
                    { name: 'Claude Code', value: 'claude' },
                    { name: 'Cursor', value: 'cursor' },
                    { name: 'Windsurf', value: 'windsurf' },
                    { name: 'Antigravity', value: 'antigravity' },
                    { name: 'GitHub Copilot', value: 'copilot' },
                    { name: 'All Assistants', value: 'all' },
                ],
            },
        ]);
        selectedAI = answers.assistant;
    }

    // Validate AI assistant
    if (!(AI_ASSISTANTS as readonly string[]).includes(selectedAI!) && selectedAI !== 'all') {
        console.error(chalk.red(`\n❌ Invalid AI assistant: ${selectedAI}`));
        console.log(chalk.yellow(`Valid options: ${AI_ASSISTANTS.join(', ')}, all\n`));
        process.exit(1);
    }

    const spinner = ora('Installing templates...').start();

    try {
        await installTemplates(selectedAI!, options.version);
        spinner.succeed(chalk.green('Templates installed successfully!'));

        console.log(chalk.cyan('\n📝 Next steps:'));
        console.log(chalk.white('  1. Navigate to your project directory'));
        console.log(chalk.white('  2. Start using the templates with your AI assistant\n'));
    } catch (error) {
        spinner.fail(chalk.red('Installation failed'));
        console.error(chalk.red(`\n❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}\n`));
        process.exit(1);
    }
}
