# 🔄 How to Switch AI Models in Cursor

## Important: Manual Switching Required

**⚠️ Cursor does NOT automatically switch AI models!**

The `/eai-web` orchestration system will **RECOMMEND** which model to use, but you must **manually switch** in Cursor.

## How to Switch Models in Cursor

### Method 1: Composer (Recommended)

1. Open Cursor Composer (Cmd+I or Ctrl+I)
2. Look at the bottom-right corner
3. Click on the current model name (e.g., "Claude Sonnet 3.5")
4. Select different model from dropdown
5. Run your `/eai-web` command

### Method 2: Chat Panel

1. Open Cursor Chat panel
2. Click the model selector at the top
3. Choose your desired model
4. Type your `/eai-web` command

### Method 3: Settings

1. Go to Cursor Settings (Cmd+, or Ctrl+,)
2. Navigate to "Models" section
3. Set your preferred default model
4. Restart chat/composer

## Available Models in Cursor

Typical Cursor models (may vary based on your subscription):

- **Claude Sonnet 3.5** - Best for code, logic, architecture
- **Claude Opus** - Most capable, slower
- **GPT-4** - Alternative for code
- **GPT-4 Turbo** - Faster GPT-4
- **Gemini** (if available) - Best for design, UX

**Note**: Model availability depends on your Cursor subscription and settings.

## Workflow with Manual Switching

### Example: Chat Bot + SDK Integration

**Step 1: Start with any model**
```
You: /eai-web create chat bot integrate with SDK

AI Response:
🤖 Current Model: Claude Sonnet 3.5

TASK ORCHESTRATION:
- Component 1: Chat UI → Gemini recommended
- Component 2: SDK logic → Claude recommended

Step 1: Please switch to Gemini for design
Command: /eai-web-design chat bot interface
```

**Step 2: You manually switch to Gemini**
- Click model selector
- Choose Gemini
- Run command

```
You: /eai-web-design chat bot interface

Gemini:
🤖 Current Model: Gemini 3 Pro
✅ Perfect for design tasks!

[Generates beautiful chat UI]
```

**Step 3: Switch back to Claude**
- Click model selector
- Choose Claude Sonnet
- Run next command

```
You: /eai-web-code integrate SDK

Claude:
🤖 Current Model: Claude Sonnet 3.5
✅ Perfect for code logic!

[Generates SDK integration]
```

## How AI Identifies Itself

Every AI response now starts with:

```
🤖 Current Model: [Model Name]
```

This helps you verify you're using the right model!

## Tips for Efficient Model Switching

### 1. Check Model Before Starting

Before running complex commands, check which model you're using:
```
Look at model selector → Verify → Proceed
```

### 2. Follow AI Recommendations

When AI says "Please switch to [Model]" - do it for best results!

### 3. Use Specialized Commands

Commands hint at which model to use:
- `/eai-web-design` → Switch to Gemini first
- `/eai-web-code` → Switch to Claude first
- `/eai-web-ux` → Switch to Gemini first

### 4. Plan Ahead

For complex tasks:
1. Read orchestration plan
2. Pre-plan model switches
3. Execute step-by-step

### 5. Bookmark Model Positions

Remember where each model is in your dropdown for quick switching

## What If I Don't Switch?

**You can still proceed!** AI will do its best with current model.

Trade-offs:
- ✅ Faster (no switching)
- ⚠️ May not be optimal
- ⚠️ Design with Claude = OK but not amazing
- ⚠️ Logic with Gemini = OK but not optimal

Example:
```
AI: 💡 Recommendation: Switch to Gemini for better design
You: [Stay with Claude]
AI: OK! I'll create the design with Claude. 
    (Note: Results may not be as visually optimal)
    
[Proceeds with Claude]
```

## Model Selection Quick Reference

| Task | Best Model | Why |
|------|------------|-----|
| Visual Design | Gemini | Superior visual understanding |
| UI/UX Design | Gemini | Interaction patterns, flows |
| Code Logic | Claude | Code reasoning, architecture |
| Algorithms | Claude | Problem solving |
| Frontend Code | Claude | React, Next.js expertise |
| Backend Code | Claude | API, database, security |
| Creative Copy | Gemini | Creative writing |
| Animations | Gemini | Visual effects |
| Debugging | Claude | Error analysis |
| Refactoring | Claude | Code quality |

## Common Scenarios

### Scenario 1: Simple Task (No Switching Needed)

```
Task: /eai-web create button component
Current Model: Claude
Recommendation: Claude is perfect! ✅
Action: No need to switch
```

### Scenario 2: Complex Task (Switching Recommended)

```
Task: /eai-web create landing page with form
Current Model: Claude
Recommendation: 
- Switch to Gemini for landing design
- Switch to Claude for form logic
Action: Plan to switch twice
```

### Scenario 3: Wrong Model (Switch Recommended)

```
Task: /eai-web-design beautiful hero section
Current Model: Claude
Recommendation: Switch to Gemini for better design ⚠️
Action: Switch to Gemini before proceeding
```

## Keyboard Shortcuts (Cursor)

Speed up model switching:

1. **Cmd+I** / **Ctrl+I** - Open Composer
2. **Tab** to model selector
3. **Arrow keys** to select model
4. **Enter** to confirm
5. Type command

## Advanced: Model Selection Strategy

### Start-of-Day Setup

Set your default based on today's work:
- Mostly design? → Start with Gemini
- Mostly code? → Start with Claude
- Mixed work? → Start with Claude (more versatile)

### Project-Specific

Different projects, different defaults:
- Design system → Gemini default
- Backend API → Claude default
- Full-stack → Switch as needed

## Limitations

### What Cursor CANNOT Do:
- ❌ Auto-switch models based on command
- ❌ Use multiple models in one response
- ❌ Remember your previous model choice
- ❌ Detect optimal model automatically

### What YOU Must Do:
- ✅ Manually switch models
- ✅ Follow AI recommendations
- ✅ Verify current model
- ✅ Plan switches for complex tasks

## Future Improvements (Not Available Yet)

Wishlist for Cursor:
- Auto-switch based on `/eai-web-design` vs `/eai-web-code`
- Model routing in background
- Multi-model collaboration
- Smart model detection

**For now: Manual switching is the way! 🔄**

## Summary

1. **AI Identifies Itself**: Every response shows current model
2. **AI Recommends**: Suggests optimal model for task
3. **You Switch Manually**: Use Cursor UI to change models
4. **Follow Workflow**: Switch → Run command → Switch → Run next
5. **Optional**: Can skip switching (trade-off in quality)

**Model switching is manual, but the results are worth it! 🚀**

