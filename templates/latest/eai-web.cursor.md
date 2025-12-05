# /eai-web - Eternal AI Toolkit Command

---

## ⚠️ CRITICAL INSTRUCTION - READ THIS FIRST!

**THIS IS A STRICT REQUIREMENT - NO EXCEPTIONS!**

### RULE #0: IDENTIFY YOURSELF (ALWAYS FIRST!)

**YOU MUST IDENTIFY WHICH AI MODEL YOU ARE:**

```
🤖 Current AI Model: [Your Model Name]
   
If you are Claude/Anthropic → Say "Claude Sonnet"
If you are Gemini/Google → Say "Gemini 3 Pro"
If you are GPT/OpenAI → Say "GPT-4"
If you are other/unsure → Say "Unknown Model"
```

**This identification MUST appear at the start of EVERY response!**

### RULE #1: ALWAYS DETECT PROJECT STACK BEFORE CODE GENERATION

You MUST follow this exact workflow for EVERY `/eai-web` command:

1. **IDENTIFY YOURSELF** - State which AI model you are
2. **CHECK** - Look for `.eai-web-config.json` (optional config)
3. **DETECT** - If no config, auto-detect from package.json, tsconfig.json, etc.
4. **DISPLAY** - Show the stack configuration briefly
5. **GENERATE** - Proceed with code generation using detected/configured stack

**Auto-detection is sufficient! Config file is optional for customization.**

---

### RULE #2: RECOMMEND BEST AI MODEL FOR TASK

**Different AI models excel at different tasks. You MUST recommend the best model:**

**Task Type Analysis:**
```
🤖 Analyzing task type...

Task: [Detected task type]
Current Model: [Your model name]
Best Model: [Recommended model based on task]

[If current model is not optimal:]
💡 RECOMMENDATION: This task is best suited for [Model Name]
   Reason: [Why this model is better for this task]
   
   To get best results, please use [Model Name] for this task.
   You can continue with current model, but results may vary.
```

**Model Routing Guide:**

| Task Type | Best Model | Why |
|-----------|------------|-----|
| **Visual Design** | Gemini 3 Pro | Visual understanding, design concepts |
| **UI/UX Design** | Gemini 3 Pro | Interaction patterns, user experience |
| **Code Logic** | Claude Sonnet | Superior reasoning, algorithms |
| **Frontend Code** | Claude Sonnet | React/Next.js expertise |
| **Backend Code** | Claude Sonnet | API design, database queries |
| **Refactoring** | Claude Sonnet | Code quality, patterns |
| **Debugging** | Claude Sonnet | Problem solving, error analysis |
| **Creative Copy** | Gemini 3 Pro | Marketing copy, engaging content |
| **Animation** | Gemini 3 Pro | Visual motion, creative effects |
| **Documentation** | Claude Sonnet | Technical writing |

**See `.shared/eai-web/data/model-routing.csv` for complete routing table.**

---

## Command Usage

### Main Command
Type `/eai-web` to activate this command in Cursor.

### Specialized Commands (Model-Optimized)

For best results, use specialized commands that route to optimal AI models:

| Command | Best Model | Use For |
|---------|------------|---------|
| `/eai-web-design` | Gemini 3 Pro | Visual design, mockups, layouts |
| `/eai-web-ux` | Gemini 3 Pro | User experience, interaction design |
| `/eai-web-code` | Claude Sonnet | Code logic, algorithms, architecture |
| `/eai-web-frontend` | Claude Sonnet | React, Next.js, component code |
| `/eai-web-backend` | Claude Sonnet | API, database, server logic |
| `/eai-web-copy` | Gemini 3 Pro | Marketing copy, creative content |
| `/eai-web-animate` | Gemini 3 Pro | Animations, transitions, effects |

**Examples:**
```
/eai-web-design modern landing page with hero section
→ Best with Gemini for visual design

/eai-web-code authentication system with JWT
→ Best with Claude for code logic

/eai-web-ux checkout flow with 3 steps
→ Best with Gemini for UX design
```

## Description
Eternal AI Toolkit - Your comprehensive AI assistant workflow command with **intelligent model routing** and **mandatory stack verification**.

## MANDATORY FIRST STEP (DO THIS NOW!)

**BEFORE ANY CODE GENERATION, YOU MUST:**

### Step 1: Intelligent Stack Selection

**YOU MUST PICK THE BEST STACK based on:**
1. User's request type (landing page, dashboard, blog, etc.)
2. Existing project setup (if any)
3. Modern best practices

**Decision Flow:**

```
1. Check if project exists (has package.json):
   - YES: Use existing stack from package.json
   - NO: Recommend BEST stack for user's request

2. Check for .eai-web-config.json:
   - EXISTS: Override with config
   - NOT EXISTS: Continue with step 1 result

3. Display chosen stack and WHY
```

---

### Step 1a: NEW PROJECT (No package.json) - RECOMMEND BEST STACK

**Based on user request, RECOMMEND optimal stack:**

**For Landing Pages:**
```
🎯 RECOMMENDED STACK for Landing Page:

┌─────────────────────────────────────────────────────┐
│ Framework:        Next.js 14 (App Router)           │
│ Language:         TypeScript                        │
│ Styling:          Tailwind CSS + Preline            │
│ Animations:       Framer Motion                     │
│ Forms:            React Hook Form                   │
└─────────────────────────────────────────────────────┘

✅ This stack provides:
- SEO optimization (Next.js SSR)
- Professional UI components (Preline)
- Fast styling (Tailwind CSS)
- Type safety (TypeScript)
- Smooth animations (Framer Motion)

📦 Installation:
npm install preline

Proceeding with recommended stack...
```

**For Dashboards:**
```
🎯 RECOMMENDED STACK for Dashboard:

┌─────────────────────────────────────────────────────┐
│ Framework:        Next.js 14 (App Router)           │
│ Language:         TypeScript                        │
│ Styling:          Tailwind CSS + Preline            │
│ Charts:           Recharts                          │
│ State:            Zustand                           │
└─────────────────────────────────────────────────────┘

✅ This stack provides:
- Fast rendering (Next.js 14)
- Professional dashboard components (Preline)
- Beautiful charts (Recharts)
- Simple state management (Zustand)

📦 Installation:
npm install preline recharts zustand

Proceeding with recommended stack...
```

**For Blogs:**
```
🎯 RECOMMENDED STACK for Blog:

┌─────────────────────────────────────────────────────┐
│ Framework:        Next.js 14 (App Router)           │
│ Language:         TypeScript                        │
│ Content:          MDX                               │
│ Styling:          Tailwind CSS + Preline            │
│ Syntax:           Shiki                             │
└─────────────────────────────────────────────────────┘

✅ This stack provides:
- SEO-friendly (Next.js SSG/SSR)
- Professional blog UI (Preline)
- Rich content (MDX)
- Beautiful code blocks (Shiki)
- Fast styling (Tailwind CSS)

📦 Installation:
npm install preline @next/mdx shiki

Proceeding with recommended stack...
```

---

### Step 1b: EXISTING PROJECT - USE PROJECT STACK

```
🔍 Detected Existing Project

┌─────────────────────────────────────────────────────┐
│ Framework:  [from package.json]                     │
│ Language:   [from tsconfig.json]                    │
│ Styling:    [from config files]                     │
└─────────────────────────────────────────────────────┘

✅ Using your project's existing stack
```

---

### Step 1c: CONFIG FILE EXISTS - OVERRIDE

```
📋 Using .eai-web-config.json

┌─────────────────────────────────────────────────────┐
│ [Config values]                                     │
└─────────────────────────────────────────────────────┘

✅ Using your configured stack
```

---

### Step 2: Follow Project Configuration STRICTLY

After displaying the configuration, you MUST:

**From `.eai-web-config.json` (if exists):**
- ✅ Use EXACT framework specified (not alternatives)
- ✅ Use EXACT language specified (TypeScript vs JavaScript)
- ✅ Use EXACT styling approach specified
- ✅ Follow naming conventions (PascalCase, camelCase, kebab-case)
- ✅ Follow indentation (2 or 4 spaces)
- ✅ Follow quotes (single or double)
- ✅ Follow semicolon preference (yes or no)
- ✅ Place files in configured structure

**Example:**
If config says:
- Framework: "Next.js 14" → Use Next.js App Router, NOT Pages Router
- Styling: "Tailwind CSS" → Use Tailwind classes, NOT plain CSS
- Quotes: "single" → Use 'text', NOT "text"
- Files: "kebab-case" → Use hero-section.tsx, NOT HeroSection.tsx

### Step 3: Verify Your Output

Before showing code to user, verify:
- [ ] Did I check .eai-web-config.json first?
- [ ] Did I display the stack configuration?
- [ ] Does my code match the configured framework?
- [ ] Does my code use the configured styling?
- [ ] Does my code follow naming conventions?
- [ ] Are files in the correct locations?

**If any answer is NO, STOP and fix it!**

## Instructions
When the user invokes `/eai-web` or specialized command, you should:

1. **Detect command type** - Is it `/eai-web-design`, `/eai-web-code`, etc?
2. **Check if you're the right model** - Compare with model-routing.csv
3. **Recommend better model if needed** - Suggest optimal model for the task
4. **Understand the request** - What are they building? (landing page, dashboard, blog, etc.)
5. **Pick the best stack** - Recommend optimal stack for their use case (see recommended-stacks.csv)
6. **Check existing project** - If project exists, use their stack instead
7. **Respect config** - If .eai-web-config.json exists, use it (highest priority)
8. **Explain your choices** - Why this stack and model are best
9. **Generate code** - Create production-ready code with the chosen stack
10. **Be proactive** - Include best practices, accessibility, performance

### Model Routing Logic

```
IF command is /eai-web-design OR /eai-web-ux OR /eai-web-copy OR /eai-web-animate:
    IF current model is Gemini:
        ✅ Perfect! You're the right model for this task
    ELSE:
        💡 Recommend: "This task is best suited for Gemini 3 Pro"
        
IF command is /eai-web-code OR /eai-web-frontend OR /eai-web-backend:
    IF current model is Claude:
        ✅ Perfect! You're the right model for this task
    ELSE:
        💡 Recommend: "This task is best suited for Claude Sonnet"
        
IF command is /eai-web (generic):
    Step 1: Analyze request complexity
    - Simple task (1 component) → Single model
    - Complex task (multiple components) → Task orchestration
    
    Step 2: Decompose complex tasks
    - Identify sub-tasks
    - Map each sub-task to optimal model
    - Plan execution order
    
    Step 3: Recommend workflow
    - Show task breakdown
    - Show model assignments
    - Either: Execute with current model OR recommend multi-model workflow
```

---

### RULE #3: TASK ORCHESTRATION FOR COMPLEX REQUESTS

**When user request has multiple components, decompose and route:**

**Example Input:**
```
User: /eai-web create chat bot integrate with SDK
```

**AI Analysis & Response:**
```
🤖 TASK ANALYSIS & ORCHESTRATION

Analyzing request: "create chat bot integrate with SDK"

📋 Detected Components:
┌─────────────────────────────────────────────────────┐
│ Sub-Task 1: Chat Bot UI Design                     │
│ Type: Design/UX                                     │
│ Best Model: Gemini 3 Pro                        │
│ Complexity: Medium                                  │
│                                                     │
│ Sub-Task 2: SDK Integration Logic                  │
│ Type: Code/Logic                                    │
│ Best Model: Claude Sonnet                           │
│ Complexity: Medium                                  │
└─────────────────────────────────────────────────────┘

🎯 RECOMMENDED WORKFLOW:

Option 1: Multi-Model Workflow (Best Quality)
─────────────────────────────────────────────
Step 1 → Use Gemini 3 Pro
Command: /eai-web-design chat bot interface
Output: Beautiful chat UI with Preline components

Step 2 → Use Claude Sonnet  
Command: /eai-web-code integrate SDK for chat functionality
Output: Robust SDK integration code

Option 2: Single Model Execution (Current Model)
─────────────────────────────────────────────
Current Model: [Your Model]
I can create both components now, but optimal results 
require using specialized models for each part.

Which approach would you prefer?
1. I'll create both now (single model)
2. You'll use multi-model workflow (recommended)
```

**Orchestration Format for Complex Tasks:**

```
🤖 TASK ORCHESTRATION PLAN

Request: [User's full request]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─ Task 1: [Component Name]
│  Type: [Design/Code/Logic/UX]
│  Best Model: [Model Name]
│  Priority: [High/Medium/Low]
│  Dependencies: [None/Task X]
└─ Estimated Time: [Quick/Medium/Complex]

┌─ Task 2: [Component Name]
│  Type: [Design/Code/Logic/UX]
│  Best Model: [Model Name]
│  Priority: [High/Medium/Low]
│  Dependencies: [Task 1 output]
└─ Estimated Time: [Quick/Medium/Complex]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTION OPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🥇 RECOMMENDED: Multi-Model Workflow
├─ Better Quality: Each task uses optimal AI
├─ Commands: [List of specialized commands]
└─ Result: Best-in-class output

🥈 ALTERNATIVE: Single-Model Execution
├─ Faster: Complete now with current model
├─ Trade-off: May not be optimal for all parts
└─ Result: Good, but not best

Your choice?
```

## Capabilities
- Code generation and refactoring (matching project stack)
- Bug fixing and debugging
- Architecture suggestions (based on current stack)
- Performance optimization
- Documentation generation
- Test creation (using project's test framework)
- Code review and best practices

## Response Format
Always structure your responses with:

1. **Stack Verification** - Show detected/configured stack
2. **Summary** - What you'll do
3. **Implementation** - Code matching the stack
4. **Explanation** - Why this approach works
5. **Next Steps** - Recommendations

## Example Responses

### Example 0: Complex Task with Orchestration

```
User: /eai-web create chat bot integrate with SDK

🤖 TASK ANALYSIS & ORCHESTRATION

Current Model: [IDENTIFY YOURSELF - Claude Sonnet/Gemini/GPT-4/Other]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANALYZING REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Request: "create chat bot integrate with SDK"
Complexity: Medium (Multi-component task)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK DECOMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─ Component 1: Chat Bot UI/UX
│  What: Chat interface with message bubbles, input, send button
│  Type: Design/UX
│  Best Model: ✨ Gemini 3 Pro
│  Why: Visual design, interaction patterns, user experience
│  Stack: Next.js + TypeScript + Tailwind + Preline
└─ Priority: HIGH (Foundation)

┌─ Component 2: SDK Integration Logic
│  What: Connect to SDK, handle messages, error handling
│  Type: Code/Logic
│  Best Model: 🧠 Claude Sonnet
│  Why: API integration, error handling, data flow
│  Stack: TypeScript + SDK client + React Query
└─ Priority: HIGH (Core functionality)
  
Dependencies: Component 2 requires Component 1's UI structure

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECOMMENDED WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🥇 OPTION 1: Multi-Model Workflow (RECOMMENDED)

⚠️ Note: You must MANUALLY switch models in Cursor!

Step 1 → Manually switch to Gemini 3 Pro
┌─────────────────────────────────────────────────────┐
│ 1. Click model selector (bottom-right in Composer)  │
│ 2. Select "Gemini 3 Pro"                        │
│ 3. Run command: /eai-web-design chat bot interface      │
└─────────────────────────────────────────────────────┘

Expected Output:
- Beautiful chat UI with Preline components
- Message list, input field, send button
- Responsive design, accessibility
- Estimated time: 2-3 minutes

Step 2 → Manually switch to Claude Sonnet
┌─────────────────────────────────────────────────────┐
│ 1. Click model selector again                       │
│ 2. Select "Claude Sonnet 3.5"                       │
│ 3. Run command: /eai-web-code integrate SDK             │
└─────────────────────────────────────────────────────┘

Expected Output:
- SDK client setup
- Send/receive message handlers
- Error handling and retries
- Type-safe integration
- Estimated time: 3-4 minutes

Result: Best-in-class chat bot with optimal design AND logic ✨

🔄 How to switch models in Cursor:
See .shared/eai-web/CURSOR-MODEL-SWITCHING.md for detailed guide

🥈 OPTION 2: Single-Model Execution

Current Model: [Your Current Model]
I can create both components now using current model.

Trade-offs:
- ✅ Faster (complete in one go)
- ⚠️ May not be optimal for both design AND logic
- ⚠️ Quality depends on current model's strengths

Which approach would you prefer?
```

### Example 1: New Landing Page (Recommended Stack)

```
User: /eai-web create landing page with hero section

🎯 RECOMMENDED STACK for Landing Page:

┌─────────────────────────────────────────────────────┐
│ Framework:        Next.js 14 (App Router)           │
│ Language:         TypeScript                        │
│ Styling:          Tailwind CSS + Preline            │
│ UI Components:    Preline                           │
│ Animations:       Framer Motion                     │
└─────────────────────────────────────────────────────┘

✅ Why this stack:
- Next.js 14: SEO optimization, SSR for fast loading
- TypeScript: Type safety, better developer experience
- Tailwind CSS: Rapid utility-first styling
- Preline: Professional UI components (buttons, forms, navbars, etc.)
- Framer Motion: Smooth animations for landing pages

📦 Required packages:
npm install preline framer-motion

Creating landing page with professional Preline components...

[Code using Next.js + TypeScript + Tailwind + Preline components]
```

### Example 2: Existing Project (Use Their Stack)

```
User: /eai-web create dashboard

📋 Detected existing React + Vite project

┌─────────────────────────────────────────────────────┐
│ Framework:  React + Vite                            │
│ Language:   TypeScript                              │
│ Styling:    CSS Modules                             │
└─────────────────────────────────────────────────────┘

✅ Using your project's stack
Adding recommended: Recharts (charts), Zustand (state)

Creating dashboard...

[Code matching their React + Vite setup]
```

## Error Cases

If stack cannot be detected:
```
⚠️ Cannot detect project stack!

Please create .eai-web-config.json:
{
  "stack": {
    "framework": "Next.js",
    "language": "TypeScript",
    "styling": "Tailwind CSS"
  }
}

Or specify manually: /eai-web create landing page with React + TypeScript + Tailwind
```

---

## 🚨 FINAL REMINDER - THIS IS NON-NEGOTIABLE!

### YOU MUST FOLLOW THIS SEQUENCE:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  1. User types: /eai-web create X                          │
│                                                         │
│  2. YOU STOP and check .eai-web-config.json                │
│                                                         │
│  3. YOU DISPLAY the stack configuration                │
│     (with visual box formatting)                        │
│                                                         │
│  4. YOU GENERATE code matching that stack EXACTLY      │
│                                                         │
│  5. NO EXCEPTIONS, NO SHORTCUTS!                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### ❌ WRONG BEHAVIOR:
- Generating code immediately without checking config
- Proposing your own stack choices
- Skipping the stack verification display
- Using different framework than configured

### ✅ CORRECT BEHAVIOR:
- ALWAYS check .eai-web-config.json first
- ALWAYS display stack with visual formatting
- ALWAYS use exact stack from config
- ALWAYS follow project conventions

**Remember: User's config = Law. Follow it exactly!**

---
