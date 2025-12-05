# 🚀 Build & Publish Scripts

## Quick Reference

```bash
# Development & Testing
./scripts.sh build              # Build the package
./scripts.sh test               # Build + link + test in temp dir

# Version Management
./scripts.sh check              # Check current version

# Publishing
./scripts.sh publish            # Publish to npm (with checks)
./scripts.sh full               # Interactive: version bump + publish

# Help
./scripts.sh help               # Show all commands
```

## Using NPM Scripts

You can also use npm/bun scripts:

```bash
# Build
bun run build
npm run build

# Test locally
bun run test:local
npm run test:local

# Publish to npm
bun run publish:npm
npm run publish:npm

# Full release flow
bun run release
npm run release

# Link/unlink globally
bun run link
bun run unlink
```

## Detailed Commands

### `./scripts.sh build`

Builds the package:
- Cleans `dist/` folder
- Runs `bun build` to bundle TypeScript
- Generates type declarations

**Output**: `dist/index.js` and `.d.ts` files

### `./scripts.sh test`

Full local testing:
1. Builds the package
2. Links globally (`bun link`)
3. Creates temp directory
4. Tests `cursor` installation → verifies `.cursor/commands/eai.md`
5. Tests `antigravity` installation → verifies `.agent/workflows/eai.md` and `.shared/eai-web/`
6. Cleans up temp directory

**Safety**: Tests in isolated temp directory, doesn't affect your projects

### `./scripts.sh check`

Shows current package version from `package.json`.

**Reminder**: Update version before publishing!

### `./scripts.sh publish`

Safe publishing with checks:
1. ✅ Verifies npm login
2. ✅ Shows current version
3. ✅ Asks for confirmation
4. ✅ Builds package
5. ✅ Runs tests
6. ✅ Publishes to npm

**Safety features**:
- Won't publish if not logged in
- Won't publish without confirmation
- Runs full test suite before publishing

### `./scripts.sh full`

Interactive full release flow:
1. Prompts for version bump type:
   - `patch`: 1.0.0 → 1.0.1 (bug fixes)
   - `minor`: 1.0.0 → 1.1.0 (new features)
   - `major`: 1.0.0 → 2.0.0 (breaking changes)
   - `skip`: Don't bump version
2. Updates version in `package.json`
3. Runs publish flow (with all checks)

**Recommended for releases**

## Workflow Examples

### 1. Local Development & Testing

```bash
# Make changes to code
vim src/commands/init.ts

# Build and test
./scripts.sh test

# If tests pass, continue development
# If tests fail, fix and repeat
```

### 2. Publishing a Bug Fix

```bash
# After fixing bugs and testing locally
./scripts.sh full

# Select: 1) patch
# Confirm publish
# ✨ Published!
```

### 3. Publishing New Features

```bash
# After adding new features
./scripts.sh full

# Select: 2) minor
# Confirm publish
# ✨ Published!
```

### 4. Manual Version Control

```bash
# Manually update version
npm version patch
# or
npm version minor
# or
npm version major

# Then publish
./scripts.sh publish
```

## Safety Features

### ✅ Pre-publish Checks
- Verifies npm login
- Shows version for confirmation
- Requires user confirmation
- Runs full test suite

### ✅ Testing in Isolation
- Creates temporary directory
- Tests all AI assistant types
- Verifies file creation
- Cleans up after testing

### ✅ Error Handling
- Exits on any error (`set -e`)
- Clear error messages
- Colored output for visibility

## Color-Coded Output

- 🔵 **Blue (ℹ)**: Information
- 🟢 **Green (✓)**: Success
- 🟡 **Yellow (⚠)**: Warning
- 🔴 **Red (✗)**: Error

## Requirements

- **Bun**: For building and linking
- **Node.js**: For npm operations
- **npm account**: For publishing
- **tree** (optional): For better test output

## Troubleshooting

### "Not logged in to npm"
```bash
npm login
# Follow prompts
```

### "Permission denied: ./scripts.sh"
```bash
chmod +x ./scripts.sh
```

### "Command not found: toolkits-web"
```bash
# After running ./scripts.sh test, make sure to link:
bun link
```

### Test failures
- Check if template files exist in `templates/latest/`
- Verify file naming: `eai.cursor.md`, `eai.shared/`, etc.
- Review console output for specific errors

## CI/CD Integration

You can use these scripts in CI/CD pipelines:

### GitHub Actions Example

```yaml
name: Publish

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: ./scripts.sh build
      - run: ./scripts.sh test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Best Practices

1. **Always test locally** before publishing
   ```bash
   ./scripts.sh test
   ```

2. **Use semantic versioning**
   - Patch: Bug fixes
   - Minor: New features (backward compatible)
   - Major: Breaking changes

3. **Review changes** before confirming publish
   - Check `dist/` output
   - Verify version number
   - Review git changes

4. **Keep changelog** updated (optional but recommended)
   - Document what changed
   - Reference issues/PRs
   - Help users understand updates

## Related Files

- `package.json` - Package configuration and npm scripts
- `bunfig.toml` - Bun configuration
- `tsconfig.json` - TypeScript configuration
- `bin/cli.js` - CLI entry point

---

**Note**: These scripts use Bun by default but work with npm as well. Adjust commands if using npm exclusively.


