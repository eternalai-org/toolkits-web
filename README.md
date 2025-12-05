# Toolkits Web

**AI-powered development assistant for web developers.**

Install once, use `/eai-web` command to generate production-ready code with optimal technology choices.

## Installation

```bash
bun install -g @eternalai-org/toolkits-web
```

> 💡 **Don't have Bun?** Install it first: [https://bun.sh/docs/installation](https://bun.sh/docs/installation)

Or with npm:
```bash
npm install -g @eternalai-org/toolkits-web
```

## Usage

### Install templates for a specific AI assistant

```bash
# Navigate to your project
cd /path/to/your/project

# Install for specific AI assistant
toolkits-web init --ai claude
toolkits-web init --ai cursor
toolkits-web init --ai windsurf
toolkits-web init --ai antigravity
toolkits-web init --ai copilot

# Install for all assistants
toolkits-web init --ai all
```

### Start Using `/eai-web` - Intelligent AI Routing!

After installation, use specialized commands for optimal results:

#### Specialized Commands (Route to Best AI Model)

| Command | Required Model | Use For |
|---------|----------------|---------|
| `/eai-web-design` | ⚠️ **Gemini 3 Pro** | Visual design, mockups, layouts |
| `/eai-web-ux` | ⚠️ **Gemini 3 Pro** | User experience, interaction design |
| `/eai-web-code` | ⚠️ **Claude Sonnet** | Logic, algorithms, architecture |
| `/eai-web-frontend` | ⚠️ **Claude Sonnet** | React, Next.js, components |
| `/eai-web-backend` | ⚠️ **Claude Sonnet** | API, database, server logic |
| `/eai-web-copy` | ⚠️ **Gemini 3 Pro** | Marketing copy, creative content |
| `/eai-web-animate` | ⚠️ **Gemini 3 Pro** | Animations, transitions |

**⚠️ Important**: Specialized commands have **model verification**. 

**If you use wrong model:**
```
You: /eai-web-design landing page (with Claude)

AI: ❌ MODEL VERIFICATION FAILED
    Current: Claude Sonnet
    Required: Gemini 3 Pro
    
    🚫 STOPPING - Please switch to Gemini first!
```

**AI will NOT proceed until you switch to the correct model!**

**Examples:**

```
/eai-web-design modern landing page
→ Best with Gemini (visual design excellence)
→ Stack: Next.js 14 + TypeScript + Tailwind + Preline

/eai-web-code authentication system with JWT
→ Best with Claude (code reasoning excellence)
→ Stack: Next.js 14 + TypeScript + Prisma + NextAuth

/eai-web-ux checkout flow with 3 steps
→ Best with Gemini (UX pattern excellence)
→ Stack: Next.js 14 + TypeScript + Tailwind + Preline
```

**Generic Command:**

```
/eai-web create landing page
→ AI detects task type, recommends model, picks best stack
```

**How it works:**
- 🤖 **Model Routing**: Different AI models for different tasks (design vs code)
- 🆕 **New project?** AI recommends best stack for your use case
- 📁 **Existing project?** AI uses your current stack
- ⚙️ **Want control?** Add `.eai-web-config.json` to customize

**Why Model Routing?**
- Gemini 3 Pro → Excellent at visual design, UX, creative copy
- Claude Sonnet → Excellent at code logic, architecture, debugging
- Use the right AI for the right job = Best results!

### 🎯 Automatic Task Orchestration

**Complex requests? AI automatically breaks them down:**

```
User: /eai-web create chat bot integrate with SDK

AI Response:
🤖 TASK ORCHESTRATION

Detected Components:
┌─ Component 1: Chat Bot UI
│  Best Model: Gemini 3 Pro (design)
│  Command: /eai-web-design chat bot interface
│
┌─ Component 2: SDK Integration  
│  Best Model: Claude Sonnet (logic)
│  Command: /eai-web-code integrate SDK

Recommended Workflow:
Step 1 → Gemini creates beautiful chat UI
Step 2 → Claude builds robust SDK integration

Result: Best of both models! ✨
```

**Features:**
- ✅ Auto-detects complex multi-component tasks
- ✅ Routes each component to optimal AI model
- ✅ Provides step-by-step workflow with manual switching instructions
- ✅ You choose: multi-model or single-model execution

### 🔒 Model Verification Gatekeeper

**Specialized commands enforce model requirements:**

When you use wrong model:
```
You: /eai-web-design landing page (using Claude)

AI: ❌ MODEL VERIFICATION FAILED
    
    Current Model: Claude Sonnet
    Required: Gemini 3 Pro
    
    🚫 STOPPING EXECUTION
    Please switch to Gemini and run again!
```

**AI will NOT proceed until you switch!**

When you use correct model:
```
You: /eai-web-design landing page (using Gemini)

AI: ✅ MODEL VERIFICATION PASSED
    
    Current Model: Gemini 3 Pro
    ✅ Perfect for design tasks!
    
    Proceeding...
```

**How to switch models in Cursor:**
1. Click model selector (bottom-right in Composer)
2. Choose required model (Gemini/Claude)
3. Run command again

See `.shared/eai-web/CURSOR-MODEL-SWITCHING.md` for detailed guide.

### Optional: Customize with `.eai-web-config.json`

Want more control over code generation? Create `.eai-web-config.json`:

```bash
# Copy example config
cp .shared/eai-web/.eai-web-config.example.json .eai-web-config.json
```

Example configuration:

```json
{
  "stack": {
    "framework": "Next.js",
    "language": "TypeScript",
    "styling": "Tailwind CSS"
  },
  "conventions": {
    "indentation": 2,
    "quotes": "single",
    "naming": {
      "files": "kebab-case"
    }
  }
}
```

**Benefits of config file:**
- ✅ Override auto-detection
- ✅ Specify exact conventions
- ✅ Define custom project structure
- ✅ Team consistency

**Without config file:**
- ✅ Still works great with auto-detection!
- ✅ AI detects stack from your project files
- ✅ Uses sensible defaults

See `.shared/eai-web/CONFIG.md` for full documentation.

### Interactive mode

```bash
toolkits-web init
```

This will prompt you to select which AI assistant you want to install templates for.

### Install specific version

```bash
toolkits-web init --ai claude --version v1.0.0
```

### List available versions

```bash
toolkits-web versions
```

### Update to latest version

```bash
toolkits-web update
```

## Supported AI Assistants

All assistants will have the `/eai-web` (Eternal AI Web) command available after installation:

- **Claude Code** - Installs to `.claude/skills/eai-web` → Use `/eai-web` in Claude
- **Cursor** - Installs to `.cursor/commands/eai-web.md` → Use `/eai-web` in Cursor
- **Windsurf** - Installs to `.windsurf/workflows/eai-web.md` → Use `/eai-web` in Windsurf
- **Antigravity** - Installs to `.agent/workflows/eai-web.md` and `.shared/eai-web` → Use `/eai-web` in Antigravity
- **GitHub Copilot** - Installs to `.github/prompts/eai-web.prompt.md` and `.shared/eai-web` → Use `/eai-web` in Copilot

### How It Works

1. **AI Understands Your Goal**: Landing page? Dashboard? Blog?
2. **AI Picks Best Stack**: Recommends optimal technologies for your use case
3. **Explains Why**: SEO? Performance? Developer experience?
4. **Generates Production Code**: Modern, tested, best practices

Example workflow:
```
You: /eai-web create landing page

AI: 🎯 RECOMMENDED STACK for Landing Page:
    
    Framework: Next.js 14 → SEO optimization, SSR
    Language: TypeScript → Type safety
    Styling: Tailwind CSS → Rapid development
    Animations: Framer Motion → Smooth UX
    
    ✅ Creating landing page with this stack...
    
    Created: 
    - app/page.tsx (Next.js 14 App Router)
    - components/hero.tsx (TypeScript + Tailwind)
    - components/features.tsx (with Framer Motion)
    
    [Production-ready code that follows best practices]
```

**AI adapts to your situation:**
- 🆕 No project? → Recommends best stack
- 📁 Existing project? → Uses your stack
- ⚙️ Has config? → Follows your preferences

## Clone & Run Locally

For developers who want to clone and use directly from source:

```bash
# Clone the repository
git clone https://github.com/eternalai-org/toolkits-web.git
cd toolkits-web

# Install dependencies
bun install

# Build the project
bun run build

# Link globally (makes 'toolkits-web' command available)
bun link

# Now you can use it in any project
cd /path/to/your/project
toolkits-web init --ai cursor
```

> 💡 **Don't have Bun?** Install it first: [https://bun.sh/docs/installation](https://bun.sh/docs/installation)

## Development

### Quick Start with Scripts

We provide a convenient `scripts.sh` for common tasks:

```bash
# Build and test locally
./scripts.sh test

# Build only
./scripts.sh build

# Publish to npm (with safety checks)
./scripts.sh publish

# Full flow: version bump + build + test + publish
./scripts.sh full
```

### Manual Setup

```bash
# Install dependencies
bun install

# Build
bun run build

# Link globally for testing
bun link

# Test the CLI
toolkits-web --help
toolkits-web init --ai cursor

# Publish to npm
npm publish
```

### Scripts.sh Commands

| Command | Description |
|---------|-------------|
| `./scripts.sh build` | Build the package |
| `./scripts.sh test` | Build, link, and test in temp directory |
| `./scripts.sh check` | Check current package version |
| `./scripts.sh publish` | Publish to npm with safety checks |
| `./scripts.sh full` | Interactive version bump + publish |
| `./scripts.sh help` | Show all available commands |

## Template Structure

Templates are organized in the `templates/` directory:

```
templates/
  latest/
    eai-web.claude/          # Claude skill folder
    eai-web.cursor.md        # Cursor command file
    eai-web.windsurf.md      # Windsurf workflow file
    eai-web.antigravity.md   # Antigravity workflow file
    eai-web.copilot.md       # Copilot prompt file
    eai-web.shared/          # Shared knowledge base
      data/                  # CSV knowledge base
        patterns.csv
        best-practices.csv
        code-snippets.csv
      scripts/               # Query utilities
        search.py
  v1.0.0/                    # Version-specific templates
    ...
```

### Knowledge Base

The `eai-web.shared/` folder contains a structured knowledge base with:
- **Design Patterns**: 15+ patterns with examples (Singleton, Factory, Observer, etc.)
- **Best Practices**: 20+ coding best practices with good/bad examples
- **Code Snippets**: 15+ reusable utilities (debounce, deep clone, retry logic, etc.)
- **Search Tool**: Python script to query the knowledge base efficiently

This knowledge base is used by Antigravity and Copilot to provide consistent, informed responses.

### Default UI Library: Preline

All recommendations include **Preline** - a professional UI component library built with Tailwind CSS:

- 50+ production-ready components
- Buttons, forms, modals, navigation, cards, etc.
- No custom CSS needed - pure Tailwind
- Accessible and responsive
- Installation: `npm install preline`

See `.shared/eai-web/PRELINE-SETUP.md` for complete setup guide.

## License

MIT
