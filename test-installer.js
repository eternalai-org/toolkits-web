#!/usr/bin/env node

// Quick test script to verify installer logic
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simulate getTemplatePaths function
function getTemplatePaths(assistant, version = 'latest') {
    const packageRoot = __dirname;
    const templatesDir = join(packageRoot, 'templates');
    const baseDir = join(templatesDir, version);

    const templateMap = {
        'cursor': 'eai.cursor.md',
        'windsurf': 'eai.windsurf.md',
        'antigravity': ['eai.antigravity.md', 'eai.shared'],
        'copilot': ['eai.copilot.md', 'eai.shared'],
        'claude': 'eai.claude',
    };

    const templateNames = templateMap[assistant] || assistant;
    
    if (Array.isArray(templateNames)) {
        return templateNames.map(name => join(baseDir, name));
    }
    
    return [join(baseDir, templateNames)];
}

// Test different assistants
const assistants = ['cursor', 'antigravity', 'copilot', 'claude'];

console.log('Testing template path resolution:\n');

for (const assistant of assistants) {
    console.log(`\n${assistant}:`);
    const paths = getTemplatePaths(assistant);
    
    for (const p of paths) {
        const exists = fs.existsSync(p);
        const isDir = exists && fs.statSync(p).isDirectory();
        const type = isDir ? '[DIR]' : '[FILE]';
        const status = exists ? '✅' : '❌';
        
        console.log(`  ${status} ${type} ${p}`);
    }
}

console.log('\n\nTesting antigravity paths detail:');
const antiPaths = getTemplatePaths('antigravity');
const targetPaths = ['.agent/workflows/eai.md', '.shared/eai'];

console.log('\nSource -> Destination mapping:');
for (let i = 0; i < antiPaths.length; i++) {
    console.log(`  [${i}] ${antiPaths[i]}`);
    console.log(`   -> ${targetPaths[i]}`);
    
    if (fs.existsSync(antiPaths[i])) {
        const isDir = fs.statSync(antiPaths[i]).isDirectory();
        console.log(`      ✅ Source exists (${isDir ? 'directory' : 'file'})`);
    } else {
        console.log(`      ❌ Source NOT found!`);
    }
}

console.log('\n✨ Test complete!\n');

