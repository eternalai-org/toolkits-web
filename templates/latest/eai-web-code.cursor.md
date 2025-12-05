# /eai-web-code - Code Logic Command

## 🧠 Optimized for Claude Sonnet

This command is specifically designed for code logic, algorithms, and architecture.

**Best used with: Claude Sonnet** (superior code reasoning and problem-solving)

---

## ⚠️ MODEL VERIFICATION GATEKEEPER

**BEFORE DOING ANYTHING:**

### Step 1: Identify Yourself (REQUIRED!)

You MUST determine which AI model you are:
- Check your training data, capabilities, model name
- Are you Claude/Anthropic? → "Claude Sonnet"
- Are you Gemini/Google? → "Gemini 3 Pro"
- Are you GPT/OpenAI? → "GPT-4"
- Other/Unsure? → "Unknown Model"

### Step 2: Verify You're the Right Model

**IF you are Claude Sonnet:**
```
✅ MODEL VERIFICATION PASSED

🤖 Current Model: Claude Sonnet
✅ Perfect! This is a CODE task and you're optimized for it.

Proceeding with code generation...
```

**IF you are NOT Claude (e.g., Gemini, GPT-4):**
```
❌ MODEL VERIFICATION FAILED

🤖 Current Model: [Your Model - Gemini/GPT-4/Other]
⚠️  This is a CODE LOGIC task!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚫 STOPPING EXECUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This command (/eai-web-code) requires Claude Sonnet for optimal results.

Current Model: [Your Model]
Required Model: Claude Sonnet

Why Claude?
- Superior code reasoning and architecture design
- Better at complex algorithms and logic
- Stronger debugging and problem-solving
- More thorough error handling
- Better security practices

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please switch to Claude Sonnet:

1. Click the model selector in Cursor
   (Bottom-right in Composer or Top in Chat)

2. Select "Claude Sonnet 3.5" from dropdown

3. Run this command again: /eai-web-code [your request]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ I will NOT proceed with this code task using [Current Model].
⚠️ Please switch to Claude Sonnet first.

Alternative: Use /eai-web (generic) if you want me to proceed anyway.
```

**DO NOT PROCEED unless you are Claude Sonnet!**

---

## Command Usage
Type `/eai-web-code [your coding request]` in Cursor **after switching to Claude**.

## What This Command Does

Specializes in:
- 🧠 Complex algorithms and logic
- 🏗️ System architecture
- 🔐 Authentication and security
- 🗄️ Database design and queries
- ⚡ Performance optimization
- 🔄 State management
- 🧪 Testing strategies
- 🐛 Debugging and problem-solving

## Instructions for AI

When user invokes `/eai-web-code`:

1. **Check if you're Claude** - This task is optimized for Claude's code reasoning
2. **If not Claude** - Recommend switching to Claude Sonnet for best results
3. **Analyze code request** - Understand requirements, constraints, edge cases
4. **Pick tech stack** - Next.js 14 + TypeScript + appropriate libraries
5. **Design architecture** - Plan before coding, consider scalability
6. **Write production code** - Type-safe, tested, documented
7. **Explain implementation** - Why this approach, alternatives considered

## Example Usage

```
User: /eai-web-code authentication system with JWT and refresh tokens

AI Response:
🧠 CODE MODE: Logic & Architecture Task

Best Model: Claude Sonnet (you're in the right place!)

Requirements Analysis:
- JWT for stateless auth
- Refresh tokens for security
- Token rotation strategy
- Secure HTTP-only cookies

Architecture:
┌─────────────────────────────────────┐
│ Client → API Route → Auth Service  │
│   ↓         ↓            ↓          │
│ Cookies  Validate    JWT + Refresh │
│           ↓            ↓            │
│        Protected    Database        │
└─────────────────────────────────────┘

Stack:
- Next.js 14 API Routes
- Prisma + PostgreSQL
- jose (JWT library)
- bcrypt (password hashing)

Implementation:
[Generates auth system with proper security, error handling, types]
```

## Code Principles to Follow

1. **Type Safety** - Use TypeScript strictly, no `any`
2. **Error Handling** - Try-catch, proper error messages, logging
3. **Security** - Input validation, sanitization, secure patterns
4. **Performance** - Efficient algorithms, caching, lazy loading
5. **Testability** - Pure functions, dependency injection
6. **Documentation** - JSDoc comments, README
7. **Best Practices** - SOLID principles, DRY, clean code

## Stack Recommendations

### Backend Logic
```
Framework: Next.js 14 API Routes
Language: TypeScript
Database: Prisma + PostgreSQL
Auth: NextAuth.js or jose
Validation: Zod
```

### Frontend Logic
```
Framework: Next.js 14
Language: TypeScript
State: Zustand or React Query
Forms: React Hook Form + Zod
```

## Output Format

```
🧠 CODE MODE ACTIVATED

🤖 Current Model Check:
[✅ Claude Sonnet - Perfect for this task!]
[or]
[⚠️ Not Claude - Recommend switching to Claude Sonnet]

📋 Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

🏗️ Architecture:
[System design diagram or explanation]

💻 Implementation:
Tech Stack: [Stack details]

[Production-ready code with:
 - Type safety
 - Error handling
 - Security
 - Documentation
 - Tests (if requested)]

📚 Usage Examples:
[How to use the code]

🧪 Testing:
[Test cases and edge cases]

⚠️ Considerations:
[Security, performance, scalability notes]
```

## Code Quality Checklist

Before outputting code, verify:
- [ ] TypeScript types are correct
- [ ] Error handling is comprehensive
- [ ] Security best practices applied
- [ ] Performance optimized
- [ ] Edge cases handled
- [ ] Documentation included
- [ ] Code is testable
- [ ] Follows project conventions

---

**Pro Tip**: For best code quality and architecture, always use Claude Sonnet with this command! 🧠

