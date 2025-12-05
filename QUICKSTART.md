# ⚡ Quick Start Guide

Get started with Eternal AI Toolkit in 3 minutes!

## Step 1: Install globally

```bash
npm install -g toolkits-web
# or
bun install -g toolkits-web
```

## Step 2: Install in your project

```bash
cd your-project

# For Cursor users
toolkits-web init --ai cursor

# For other AI assistants
toolkits-web init --ai claude
toolkits-web init --ai windsurf
toolkits-web init --ai antigravity
toolkits-web init --ai copilot

# Install for all
toolkits-web init --ai all
```

## Step 3: Start using `/eai`! 🎉

That's it! You can now use `/eai` in your AI assistant:

```
/eai-web create landing page
```

The AI will auto-detect your stack and generate matching code!

## Optional Step 4: Customize (if needed)

Want more control? Create `.eai-web-config.json` in your project root:

```bash
# Quick setup
cat > .eai-web-config.json << 'EOF'
{
  "stack": {
    "framework": "Next.js",
    "language": "TypeScript",
    "styling": "Tailwind CSS",
    "stateManagement": "Zustand"
  },
  "conventions": {
    "componentStyle": "functional",
    "indentation": 2,
    "quotes": "single",
    "semicolons": false
  },
  "structure": {
    "components": "src/components",
    "pages": "src/app",
    "utils": "src/lib"
  }
}
EOF
```

The AI will now:
1. ✅ Use your custom configuration
2. ✅ Follow your specific conventions
3. ✅ Generate code exactly as you want

**Without config file:** AI auto-detects and works great!
**With config file:** Full control over every detail!

Example output:
```
📋 Project Configuration (from .eai-web-config.json):
- Framework: Next.js 14
- Language: TypeScript
- Styling: Tailwind CSS
- State: Zustand

✅ Creating landing page with your stack...

Created files:
- src/app/landing/page.tsx
- src/components/hero-section.tsx
- src/components/features-section.tsx

All code uses:
- TypeScript ✓
- Tailwind CSS ✓
- Functional components ✓
- 2-space indentation ✓
- Single quotes ✓
```

## Common Commands

### Code Generation
```
/eai-web create auth page with login form
/eai-web create dashboard with charts
/eai-web create api endpoint for users
/eai-web create button component with variants
```

### Code Review & Improvement
```
/eai-web review this component
/eai-web optimize this function
/eai-web add error handling
/eai-web refactor for better performance
```

### Debugging
```
/eai-web fix this bug
/eai-web why is this not working?
/eai-web debug this error
```

### Testing
```
/eai-web write tests for this component
/eai-web add integration tests
/eai-web create test fixtures
```

## Tips for Best Results

### 1. Be Specific
❌ Bad: `/eai-web create page`
✅ Good: `/eai-web create pricing page with 3 tiers and monthly/yearly toggle`

### 2. Reference Your Stack
❌ Unnecessary: `/eai-web create button with React and TypeScript`
✅ Better: `/eai-web create button component` (uses your config automatically)

### 3. Override When Needed
```
/eai-web create modal using Radix UI
# This overrides your config for this specific task
```

### 4. Ask for Explanations
```
/eai-web explain how this authentication flow works
/eai-web what's the best way to handle this use case?
```

## Config Examples

### React + Vite + TypeScript
```json
{
  "stack": {
    "framework": "React + Vite",
    "language": "TypeScript",
    "styling": "Tailwind CSS"
  }
}
```

### Next.js 14 Full Stack
```json
{
  "stack": {
    "framework": "Next.js 14",
    "language": "TypeScript",
    "styling": "Tailwind CSS",
    "stateManagement": "Zustand",
    "database": "Prisma + PostgreSQL",
    "auth": "NextAuth.js"
  }
}
```

### Vue 3 + Composition API
```json
{
  "stack": {
    "framework": "Vue 3",
    "language": "TypeScript",
    "styling": "Tailwind CSS",
    "stateManagement": "Pinia"
  }
}
```

## Troubleshooting

### AI not following my stack?
1. Check `.eai-web-config.json` exists in project root
2. Verify JSON syntax is correct
3. Try: `/eai-web create X following project config`

### Config not being detected?
- Restart your AI assistant
- Check file location (must be in project root, next to `package.json`)
- Verify file name is exactly `.eai-web-config.json`

### Want to skip config for one task?
```
/eai-web create component with Shadcn UI (ignore config)
```

## Next Steps

- 📖 Read full config documentation: `.shared/eai-web/CONFIG.md`
- 🎨 Explore knowledge base: `.shared/eai-web/data/`
- 🔍 Try search tool: `python .shared/eai-web/scripts/search.py "singleton pattern"`
- 📚 Check examples: See `KNOWLEDGE_BASE.md`

## Need Help?

- Documentation: `README.md`, `CONFIG.md`, `KNOWLEDGE_BASE.md`
- Issues: [GitHub Issues](https://github.com/yourusername/toolkits-web/issues)
- Examples: See `.shared/eai-web/` folder

---

**Happy coding with `/eai`! 🚀**

