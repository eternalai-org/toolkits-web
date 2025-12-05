---
description: /eai-web - AI-powered development toolkit for web developers
---

# Eternal AI Toolkit Workflow

## Workflow: /eai-web

### Description
Comprehensive AI assistant workflow for intelligent development support.

### Trigger
`/eai-web` - Activate the Eternal AI Toolkit

### ⚠️ CRITICAL: INTELLIGENT STACK SELECTION

**PICK THE BEST STACK based on user's request:**

**Decision Priority:**
1. `.eai-web-config.json` exists? → Use it
2. Project exists (package.json)? → Use existing stack
3. New project? → **RECOMMEND BEST STACK for use case**

**Recommended Stacks by Use Case:**

- **Landing Page** → Next.js 14 + TypeScript + Tailwind + **Preline** + Framer Motion
- **Dashboard** → Next.js 14 + TypeScript + Tailwind + **Preline** + Recharts + Zustand
- **Blog** → Next.js 14 + TypeScript + Tailwind + **Preline** + MDX + Shiki
- **E-commerce** → Next.js 14 + TypeScript + Tailwind + **Preline** + Stripe + Zustand
- **SaaS App** → Next.js 14 + TypeScript + Tailwind + **Preline** + NextAuth + Prisma
- **Portfolio** → Next.js 14 + TypeScript + Tailwind + **Preline** + Framer Motion
- **Corporate** → Next.js 14 + TypeScript + Tailwind + **Preline** + React Hook Form
- **Admin Panel** → Next.js 14 + TypeScript + Tailwind + **Preline** + Prisma + NextAuth

**Why Preline?**
- Professional UI components built with Tailwind CSS
- No custom CSS needed - works natively with Tailwind
- Modern, accessible components (buttons, forms, modals, navbars, etc.)
- Fast development with pre-built patterns
- Installation: `npm install preline`

**Output Format:**

For NEW projects (recommend):
```
🎯 RECOMMENDED STACK for [Use Case]:
- Framework: Next.js 14 (SEO, performance)
- Language: TypeScript (type safety)
- Styling: Tailwind CSS + Preline (professional UI)
- UI Components: Preline (buttons, forms, navbars, etc.)
- [Additional tools for use case]

📦 Installation: npm install preline [additional packages]

✅ Using recommended stack...
```

For EXISTING projects:
```
📋 Using existing project stack:
- Framework: [detected]
- Language: [detected]
- Styling: [detected]

✅ Proceeding...
```

**See `.shared/eai-web/data/recommended-stacks.csv` for full recommendations.**

### Capabilities

#### Code Assistance
- Generate clean, efficient code
- Refactor and optimize existing code
- Fix bugs and resolve errors
- Implement new features

#### Architecture & Design
- Suggest optimal architectural patterns
- Design scalable solutions
- Review code structure
- Recommend best practices

#### Problem Solving
- Debug complex issues
- Analyze error messages
- Provide step-by-step solutions
- Offer multiple approaches

#### Quality & Maintenance
- Write comprehensive tests
- Generate documentation
- Perform code reviews
- Ensure security and performance

### Execution Flow

1. **⚠️ MANDATORY: Verify Project Stack (DO THIS FIRST!)**
   
   **Step 1a: Check for `.eai-web-config.json`**
   ```bash
   # Look for this file in project root
   .eai-web-config.json
   ```
   
   **Step 1b: Display Configuration**
   - If found: Show stack from config
   - If not found: Auto-detect and show detected stack
   - **ALWAYS display this before proceeding**
   
   **Step 1c: Wait for Confirmation**
   - User must confirm stack is correct
   - If incorrect, ask user to update config or provide correct stack
   
   **Example Output:**
   ```
   🔍 Reading .eai-web-config.json...
   
   📋 Project Stack:
   - Framework: Next.js 14
   - Language: TypeScript
   - Styling: Tailwind CSS
   - State: Zustand
   
   ✅ I will generate code using this stack.
   Proceeding with your request...
   ```

2. **Understand Context**
   - Read current files and project structure
   - Identify the user's goal
   - Recognize relevant patterns and conventions
   - Check existing code style

3. **Analyze & Plan**
   - Determine the best approach **using the verified stack from step 1**
   - Plan implementation with correct framework syntax
   - Consider edge cases
   - Identify required files and locations

4. **Execute Solution**
   - **Generate code matching verified stack EXACTLY**
   - Use framework-specific syntax (e.g., Next.js App Router vs Pages Router)
   - Apply correct styling approach (Tailwind classes, CSS modules, etc.)
   - Follow project conventions from config (naming, indentation, quotes)
   - Place files in correct project structure locations
   - Ensure quality and completeness

5. **Communicate Clearly**
   - Show what was created and where
   - Explain the solution
   - Confirm alignment with verified stack
   - Suggest improvements

### Response Structure
- **Summary**: Brief overview
- **Solution**: Detailed implementation
- **Rationale**: Why this approach
- **Next Steps**: Follow-up actions
