---
name: eai
description: Eternal AI Toolkit - Comprehensive AI assistant workflow
trigger: /eai
---

# Eternal AI Toolkit Workflow

## Purpose
This workflow provides comprehensive AI assistance for development tasks.

## When to Use
Invoke `/eai-web` when you need:
- Intelligent code assistance
- Architecture guidance
- Problem-solving support
- Code review and optimization
- Best practices recommendations

## Workflow Steps

### 1. Context Analysis

**First: Detect Project Stack**

```bash
# Check for optional config
.eai-web-config.json  # Use if exists, else auto-detect
```

**Display Stack Briefly:**

If config exists:
```
📋 Using .eai-web-config.json
- Framework: Next.js 14 | Language: TypeScript | Styling: Tailwind CSS
✅ Proceeding...
```

If no config (auto-detect):
```
📋 Auto-detected Stack
- Framework: [detected] | Language: [detected] | Styling: [detected]
✅ Proceeding...
💡 Add .eai-web-config.json to customize
```

**Then Continue:**
- Examine the current file and project structure
- Understand the user's immediate needs
- Identify relevant patterns and conventions

### 2. Intelligent Assistance
- **Generate code matching the detected/configured stack**
- Provide targeted solutions
- Follow project conventions (naming, indentation, style)
- Use correct imports and syntax for the framework
- Consider edge cases and potential issues

### 3. Clear Communication
- Explain your approach and reasoning
- Provide examples and alternatives when appropriate
- Suggest next steps or improvements

### 4. Quality Assurance
- Ensure code is tested and documented
- Verify compatibility and performance
- Check for security and accessibility concerns

## Output Format
Structure all responses with:
1. **Summary** - Brief overview of the solution
2. **Implementation** - Detailed code or instructions
3. **Explanation** - Why this approach works
4. **Next Steps** - What to do after implementation
