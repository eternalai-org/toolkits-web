#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { initCommand } from './commands/init';
import { versionsCommand } from './commands/versions';
import { updateCommand } from './commands/update';

const program = new Command();

program
    .name('toolkits-web')
    .description('CLI tool to install AI assistant templates for web developers')
    .version('1.0.0');

// Init command - install templates
program
    .command('init')
    .description('Install templates for AI assistants')
    .option('--ai <assistant>', 'Specify AI assistant (claude, cursor, windsurf, antigravity, copilot, all)')
    .option('--version <version>', 'Install specific version')
    .action(initCommand);

// Versions command - list available versions
program
    .command('versions')
    .description('List available template versions')
    .action(versionsCommand);

// Update command - update to latest version
program
    .command('update')
    .description('Update templates to latest version')
    .action(updateCommand);

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
