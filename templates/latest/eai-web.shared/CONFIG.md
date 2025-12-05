# .eai-web-config.json - Project Configuration

## Purpose

The `.eai-web-config.json` file tells the `/eai-web` command about your project's tech stack and conventions, ensuring generated code matches your setup exactly.

## Location

Place this file in your **project root** (next to `package.json`):

```
your-project/
├── .eai-web-config.json    ← Create this
├── package.json
├── src/
└── ...
```

## Quick Start

Copy the example config:

```bash
cp .shared/eai-web/.eai-config.example.json .eai-web-config.json
```

Then customize it for your project.

## Configuration Options

### Basic Stack

```json
{
  "stack": {
    "framework": "Next.js",       // React, Vue, Next.js, Remix, etc.
    "language": "TypeScript",     // JavaScript, TypeScript
    "styling": "Tailwind CSS",    // CSS Modules, Styled Components, etc.
    "stateManagement": "Zustand", // Redux, Zustand, Jotai, Context API
    "database": "Prisma + PostgreSQL",
    "auth": "NextAuth.js",
    "testing": "Jest + React Testing Library"
  }
}
```

### Code Conventions

```json
{
  "conventions": {
    "componentStyle": "functional",  // functional, class
    "indentation": 2,                // 2 or 4 spaces
    "quotes": "single",              // single, double
    "semicolons": true,              // true, false
    "naming": {
      "components": "PascalCase",    // PascalCase
      "files": "kebab-case",         // kebab-case, PascalCase, camelCase
      "functions": "camelCase"       // camelCase
    }
  }
}
```

### Project Structure

```json
{
  "structure": {
    "components": "src/components",
    "pages": "src/app",
    "utils": "src/lib",
    "styles": "src/styles",
    "types": "src/types"
  }
}
```

### Preferences

```json
{
  "preferences": {
    "cssFramework": "tailwind",      // tailwind, css-modules, styled-components
    "serverComponents": true,        // true, false (for React Server Components)
    "apiRoute": "app/api",          // API route location
    "comments": "JSDoc"              // JSDoc, inline, minimal
  }
}
```

## Full Example Configurations

### Next.js 14 with TypeScript

```json
{
  "stack": {
    "framework": "Next.js 14",
    "language": "TypeScript",
    "styling": "Tailwind CSS",
    "stateManagement": "Zustand",
    "database": "Prisma + PostgreSQL",
    "auth": "NextAuth.js",
    "testing": "Vitest + Testing Library"
  },
  "conventions": {
    "componentStyle": "functional",
    "indentation": 2,
    "quotes": "single",
    "semicolons": false,
    "naming": {
      "components": "PascalCase",
      "files": "kebab-case",
      "functions": "camelCase"
    }
  },
  "structure": {
    "components": "src/components",
    "pages": "src/app",
    "utils": "src/lib",
    "styles": "src/styles",
    "types": "src/types"
  },
  "preferences": {
    "cssFramework": "tailwind",
    "serverComponents": true,
    "apiRoute": "app/api",
    "comments": "JSDoc"
  }
}
```

### React + Vite with JavaScript

```json
{
  "stack": {
    "framework": "React + Vite",
    "language": "JavaScript",
    "styling": "CSS Modules",
    "stateManagement": "Context API",
    "testing": "Jest + RTL"
  },
  "conventions": {
    "componentStyle": "functional",
    "indentation": 2,
    "quotes": "double",
    "semicolons": true,
    "naming": {
      "components": "PascalCase",
      "files": "PascalCase",
      "functions": "camelCase"
    }
  },
  "structure": {
    "components": "src/components",
    "pages": "src/pages",
    "utils": "src/utils",
    "styles": "src/styles"
  },
  "preferences": {
    "cssFramework": "css-modules",
    "comments": "inline"
  }
}
```

### Vue 3 with Composition API

```json
{
  "stack": {
    "framework": "Vue 3",
    "language": "TypeScript",
    "styling": "Tailwind CSS",
    "stateManagement": "Pinia",
    "testing": "Vitest + Vue Test Utils"
  },
  "conventions": {
    "componentStyle": "composition-api",
    "indentation": 2,
    "quotes": "single",
    "semicolons": false,
    "naming": {
      "components": "PascalCase",
      "files": "PascalCase",
      "functions": "camelCase"
    }
  },
  "structure": {
    "components": "src/components",
    "pages": "src/views",
    "utils": "src/composables",
    "styles": "src/assets/styles"
  },
  "preferences": {
    "cssFramework": "tailwind",
    "comments": "JSDoc"
  }
}
```

## How AI Uses This Config

When you run `/eai-web create landing page`:

### 1. AI reads `.eai-web-config.json`

```
📋 Reading project configuration...
✅ Found .eai-web-config.json
```

### 2. AI confirms the stack

```
📋 Detected Stack:
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v3
- State: Zustand
- Testing: Vitest

Proceeding with this configuration...
```

### 3. AI generates matching code

- Uses TypeScript syntax
- Applies Tailwind classes
- Follows your naming conventions (kebab-case files, PascalCase components)
- Places files in correct directories (src/components, src/app)
- Matches your code style (2 spaces, single quotes, no semicolons)

### 4. AI provides context

```
✅ Created landing page matching your stack:

Files created:
- src/app/landing/page.tsx (Next.js App Router)
- src/components/hero-section.tsx (Tailwind + TypeScript)

Following conventions:
- File names: kebab-case ✓
- Components: PascalCase ✓
- Indentation: 2 spaces ✓
- Quotes: single ✓
```

## Auto-Detection Fallback

If no `.eai-web-config.json` exists, AI will auto-detect:

```
⚠️ No .eai-web-config.json found. Auto-detecting...

📋 Detected from package.json:
- Framework: Next.js (found: next@14.0.0)
- Language: TypeScript (found: typescript@5.0.0)
- Styling: Tailwind CSS (found: tailwindcss@3.0.0)

Want to save this config? Create .eai-web-config.json
```

## Benefits

### ✅ Consistency
- All generated code matches your project style
- No manual adjustments needed
- Team consistency guaranteed

### ✅ Accuracy
- Correct imports and syntax
- Proper file locations
- Right framework APIs

### ✅ Efficiency
- No back-and-forth clarifications
- First-time correct generation
- Faster development

### ✅ Flexibility
- Override per request: `/eai-web create modal with Shadcn UI`
- Update anytime
- Version control friendly

## Best Practices

### 1. Create Config Early
Set up `.eai-web-config.json` when starting a project or first using `/eai-web`.

### 2. Keep It Updated
Update when you:
- Add new major dependencies
- Change styling approach
- Update framework version
- Switch state management

### 3. Commit to Git
```bash
git add .eai-web-config.json
git commit -m "Add EAI project configuration"
```

### 4. Document Differences
If using multiple configs in monorepo:
```
monorepo/
├── .eai-web-config.json          # Root config
├── apps/
│   ├── web/.eai-web-config.json  # Web app overrides
│   └── api/.eai-web-config.json  # API overrides
└── packages/
    └── ui/.eai-web-config.json   # UI library overrides
```

### 5. Share with Team
Everyone uses same config → consistent AI-generated code across team.

## Troubleshooting

### Config not being read?
- Check file location (must be in project root)
- Verify JSON syntax (use JSON validator)
- Restart your AI assistant/editor

### AI not following config?
- Be explicit: `/eai-web create landing page following project config`
- Check if config has all required fields
- Try regenerating: `/eai-web regenerate with correct stack`

### Need different stack for one task?
Override in prompt: `/eai-web create dashboard with React + MUI (ignore config)`

## Advanced: Per-Domain Configs

For monorepos or complex projects:

```json
{
  "default": {
    "stack": { "language": "TypeScript" }
  },
  "frontend": {
    "stack": {
      "framework": "Next.js",
      "styling": "Tailwind CSS"
    }
  },
  "backend": {
    "stack": {
      "framework": "Express",
      "database": "Prisma"
    }
  }
}
```

Specify in command: `/eai-web frontend: create landing page`

## Schema Validation (Optional)

For IDE autocomplete, add JSON schema:

```json
{
  "$schema": "https://example.com/eai-config-schema.json",
  "stack": {
    // Your config...
  }
}
```

## Summary

`.eai-web-config.json` = AI knows your project = Perfect code every time ✨

---

**Next Steps**: Copy `.eai-config.example.json` and customize for your project!

