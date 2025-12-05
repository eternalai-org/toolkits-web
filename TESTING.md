# 🧪 Testing Eternal AI Toolkit

## Testing the Stack Verification Feature

### Problem We Fixed

**Before:** AI would propose/guess the stack without checking configuration first.

**After:** AI MUST check `.eai-web-config.json` first and display stack before generating code.

### Test Setup

#### 1. Example Projects with Configs

We've created example configs in:
- `examples/landing-page/.eai-web-config.json` (Vite + React + CSS Modules)
- `examples/chat-bot/.eai-web-config.json` (Next.js 14 + TypeScript + Tailwind)

#### 2. Strengthened All AI Templates

Updated to enforce mandatory stack verification:
- ✅ `eai.antigravity.md` - Added ⚠️ CRITICAL section
- ✅ `eai.cursor.md` - Made stack check mandatory
- ✅ `eai.windsurf.md` - Enforced config check first
- ✅ `eai.copilot.md` - Added critical first step
- ✅ `eai.claude/README.md` - Made Phase 1 mandatory

## How to Test

### Test 1: With Config File

```bash
cd examples/chat-bot

# Make sure .eai-web-config.json exists
cat .eai-web-config.json
```

**In Antigravity (or any AI assistant):**
```
/eai-web Create landing page with chat bot integration
```

**Expected AI Response:**
```
🔍 Reading .eai-web-config.json...

📋 Project Stack Configuration:
- Framework: Next.js 14
- Language: TypeScript
- Styling: Tailwind CSS
- State Management: Zustand
- SDK: @eternalai-org/sdk

✅ I will generate code using this exact stack.

[Then proceeds with code generation matching this stack]
```

✅ **PASS**: AI reads config and displays stack before coding
❌ **FAIL**: AI proposes its own stack without checking config

### Test 2: Without Config File

```bash
cd examples/landing-page

# Remove config temporarily
mv .eai-web-config.json .eai-web-config.json.backup
```

**In AI assistant:**
```
/eai-web Create hero section component
```

**Expected AI Response:**
```
⚠️ No .eai-web-config.json found in project root!

Auto-detecting from project files:
- Framework: Vite + React (from package.json)
- Language: TypeScript (from tsconfig.json)
- Styling: CSS Modules

⚠️ For best results, create .eai-web-config.json

Proceeding with auto-detected stack...

[Then generates code with detected stack]
```

✅ **PASS**: AI warns about missing config and auto-detects
❌ **FAIL**: AI doesn't mention config at all

### Test 3: Verify Code Matches Config

After AI generates code, check:

**If config says:**
```json
{
  "stack": {
    "framework": "Next.js 14",
    "styling": "Tailwind CSS"
  },
  "conventions": {
    "quotes": "single",
    "semicolons": false,
    "naming": {
      "files": "kebab-case"
    }
  }
}
```

**Generated code should:**
- ✅ Use Next.js 14 syntax (App Router if applicable)
- ✅ Use Tailwind CSS classes
- ✅ Use single quotes: `'hello'`
- ✅ No semicolons at end of lines
- ✅ File names in kebab-case: `hero-section.tsx`

### Test 4: Different AI Assistants

Test with each AI assistant to ensure consistency:

**Cursor:**
```
/eai-web create pricing page
```

**Antigravity:**
```
/eai-web create pricing page
```

**Claude:**
```
/eai-web create pricing page
```

All should show the same stack verification output format.

## Expected Output Format

All AI assistants should follow this format:

### When Config Exists:
```
🔍 Reading .eai-web-config.json...

📋 Project Stack Configuration:
- Framework: [value]
- Language: [value]
- Styling: [value]
- [other stack items]

✅ I will generate code using this exact stack.

[Code generation follows]
```

### When Config Missing:
```
⚠️ No .eai-web-config.json found in project root!

Auto-detecting from project files:
- Framework: [detected]
- Language: [detected]
- Styling: [detected]

⚠️ For best results, create .eai-web-config.json:
{
  "stack": {
    "framework": "[detected]",
    "language": "[detected]",
    "styling": "[detected]"
  }
}

Proceeding with auto-detected stack...

[Code generation follows]
```

## Common Test Scenarios

### Scenario 1: Simple Component Creation
```
/eai-web create button component with variants
```

Expected:
1. Shows stack verification
2. Creates component matching framework
3. Uses configured styling approach
4. Follows naming conventions

### Scenario 2: Full Page Creation
```
/eai-web create landing page with hero, features, and pricing sections
```

Expected:
1. Verifies stack first
2. Creates page using correct framework structure
3. Places files in configured directories
4. All components match stack and conventions

### Scenario 3: API/Backend Code
```
/eai-web create API endpoint for user authentication
```

Expected:
1. Checks stack for backend framework
2. Uses correct API syntax (Next.js API routes, Express, etc.)
3. Matches language (TypeScript vs JavaScript)
4. Follows project structure

## Debugging Test Failures

### AI skips config check?

**Possible causes:**
- Template not updated (rebuild package)
- AI assistant not using latest template
- Config file in wrong location

**Fix:**
```bash
# Rebuild and reinstall
cd toolkits-web
./scripts.sh build
./scripts.sh test

# Reinstall in test project
cd examples/chat-bot
toolkits-web init --ai antigravity --force
```

### AI reads config but doesn't follow it?

**Check:**
- Config file JSON syntax is valid
- All required fields present
- Config values are recognized (e.g., "Next.js" not "NextJS")

**Validate config:**
```bash
# Check JSON syntax
cat .eai-web-config.json | jq .
```

### AI proposes different stack?

**Verify:**
1. Config file exists in project root
2. File name is exactly `.eai-web-config.json`
3. AI is actually reading the file (check output)

## Test Checklist

Use this checklist when testing:

- [ ] AI checks for `.eai-web-config.json` first
- [ ] AI displays stack configuration before coding
- [ ] AI uses correct framework syntax
- [ ] AI applies correct styling approach
- [ ] AI follows naming conventions
- [ ] AI places files in correct locations
- [ ] AI uses correct indentation
- [ ] AI uses correct quotes (single/double)
- [ ] AI respects semicolon preference
- [ ] Generated code actually works

## Automated Testing (Future)

Script to automate testing:

```bash
#!/bin/bash
# test-stack-verification.sh

echo "Testing stack verification..."

# Test 1: With config
cd examples/chat-bot
echo "Test 1: AI should read .eai-web-config.json"
# [AI command here]

# Test 2: Without config  
mv .eai-web-config.json .backup
echo "Test 2: AI should auto-detect and warn"
# [AI command here]
mv .backup .eai-web-config.json

echo "Tests complete!"
```

## Reporting Issues

If tests fail, report with:
- AI assistant used (Cursor, Antigravity, etc.)
- Command executed
- Expected vs actual output
- `.eai-web-config.json` contents
- `package.json` contents

---

**Happy Testing! 🧪✨**

