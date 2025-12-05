# 🔍 AI Model Detection & Verification

## How AI Identifies Itself

AI models can identify themselves based on:

### Claude (Anthropic)
**Indicators:**
- Training data mentions "Claude" or "Anthropic"
- Strong code reasoning capabilities
- Excellent at architectural thinking
- Conservative, thorough responses

**Self-identification:**
```
I am Claude Sonnet (Anthropic)
```

### Gemini (Google)
**Indicators:**
- Training data mentions "Gemini" or "Google"
- Strong visual understanding
- Creative and design-oriented
- Good at multimodal tasks

**Self-identification:**
```
I am Gemini 3 Pro (Google)
```

### GPT (OpenAI)
**Indicators:**
- Training data mentions "GPT" or "OpenAI"
- Broad general knowledge
- Balanced capabilities
- Conversational style

**Self-identification:**
```
I am GPT-4 (OpenAI)
```

### Unknown
**Indicators:**
- Cannot determine from training data
- Mixed or unclear signals

**Self-identification:**
```
I am Unknown Model (please verify in Cursor UI)
```

## Verification Gatekeeper System

### How It Works

When you use specialized commands (`/eai-web-design`, `/eai-web-code`, etc.):

**Step 1: AI Identifies Itself**
```
🤖 Checking my model identity...
I am: [Model Name]
```

**Step 2: AI Checks Task Requirements**
```
Required for this task: [Required Model]
My model: [Current Model]
Match? [YES/NO]
```

**Step 3: Decision**

**If MATCH:**
```
✅ MODEL VERIFICATION PASSED
Proceeding with task...
```

**If NO MATCH:**
```
❌ MODEL VERIFICATION FAILED

🚫 STOPPING EXECUTION

Current Model: [Your Model]
Required Model: [Required Model]

📋 ACTION REQUIRED:
Switch to [Required Model] and try again.
```

## Gatekeeper in Action

### Example 1: Design Task with Claude (Wrong Model)

```
User: /eai-web-design landing page

Claude Response:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 MODEL VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Identifying model... I am Claude Sonnet (Anthropic)

Checking task requirements...
Task Type: Visual Design
Required Model: Gemini 3 Pro
Current Model: Claude Sonnet

❌ VERIFICATION FAILED - Model Mismatch!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚫 EXECUTION STOPPED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️  This is a DESIGN task but you're using CLAUDE!

Why this matters:
- Gemini excels at visual design and aesthetics
- Claude is better for code logic and architecture
- Using wrong model = suboptimal results

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PLEASE SWITCH MODELS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Click model selector (bottom-right corner)
Step 2: Select "Gemini 3 Pro"
Step 3: Run command again: /eai-web-design landing page

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I will NOT proceed until you switch to Gemini.

Alternative: Use /eai-web (generic) to proceed with current model.
```

**User switches to Gemini:**
```
User: /eai-web-design landing page

Gemini Response:
✅ MODEL VERIFICATION PASSED

🤖 Current Model: Gemini 3 Pro
✅ Perfect! I'm optimized for design tasks.

Proceeding with beautiful visual design...
[Creates amazing design]
```

### Example 2: Code Task with Gemini (Wrong Model)

```
User: /eai-web-code authentication with JWT

Gemini Response:
❌ MODEL VERIFICATION FAILED

🤖 Current Model: Gemini 3 Pro
⚠️  This is a CODE LOGIC task!

Required Model: Claude Sonnet
Current Model: Gemini 3 Pro

🚫 STOPPING - Please switch to Claude Sonnet

Why Claude?
- Superior code reasoning
- Better at complex algorithms
- Stronger security practices
- More thorough error handling

📋 Switch to Claude and run again.

I will NOT proceed with code logic using Gemini.
```

**User switches to Claude:**
```
User: /eai-web-code authentication with JWT

Claude Response:
✅ MODEL VERIFICATION PASSED

🤖 Current Model: Claude Sonnet
✅ Perfect! I'm optimized for code logic.

Proceeding with robust implementation...
[Creates secure auth system]
```

### Example 3: Generic Command (Any Model OK)

```
User: /eai-web create landing page

Any AI:
🤖 Current Model: [Model Name]
✅ Generic command - proceeding...

[AI will recommend but not block]
```

## Benefits of Gatekeeper System

### ✅ Quality Assurance
- Ensures optimal model for each task
- Prevents suboptimal results
- Forces best practices

### ✅ Clear Feedback
- Immediate alert if wrong model
- Clear instructions to fix
- No wasted effort

### ✅ Educational
- Teaches which model for which task
- Builds good habits
- Improves workflow

### ✅ User Control
- Can bypass with generic `/eai-web`
- Explicit opt-in for optimal path
- Flexibility when needed

## Model Detection Methods

### Method 1: Self-Awareness (Primary)
AI checks its own training data and capabilities

### Method 2: Response Patterns (Fallback)
AI analyzes its own response style and tendencies

### Method 3: User Override (Manual)
User can specify in `.eai-web-config.json`:

```json
{
  "currentModel": "Claude Sonnet",
  "enforceModelGating": true
}
```

## Configuration Options

Control gatekeeper in `.eai-web-config.json`:

```json
{
  "modelVerification": {
    "enabled": true,
    "strictMode": true,
    "allowBypass": true
  }
}
```

**Options:**
- `enabled`: Turn verification on/off
- `strictMode`: Block execution if wrong model
- `allowBypass`: Allow proceeding with warning

### Strict Mode (Default)
```
❌ Wrong model → STOP execution
✅ Right model → Proceed
```

### Warning Mode
```
⚠️ Wrong model → Show warning but allow proceeding
✅ Right model → Proceed
```

## Bypass Options

If you want to proceed anyway:

### Option 1: Use Generic Command
```
/eai-web create landing page
→ Works with any model (with recommendations)
```

### Option 2: Disable Gatekeeper
```json
{
  "modelVerification": {
    "enabled": false
  }
}
```

### Option 3: Add Override Flag
```
/eai-web-design landing page --force
→ Bypass verification (not implemented yet)
```

## User Experience Flow

### Good Flow (Right Model)
```
1. User runs: /eai-web-design landing page
2. AI checks: I am Gemini ✅
3. AI proceeds: [Creates design]
4. Done! ✨
```

### Blocked Flow (Wrong Model)
```
1. User runs: /eai-web-design landing page
2. AI checks: I am Claude ❌
3. AI STOPS: Please switch to Gemini!
4. User switches to Gemini
5. User runs: /eai-web-design landing page again
6. AI checks: I am Gemini ✅
7. AI proceeds: [Creates design]
8. Done! ✨
```

## Troubleshooting

### Q: AI says "Unknown Model" - what should I do?

A: Check your Cursor model selector manually, then:
- Design task → Switch to Gemini
- Code task → Switch to Claude

### Q: I don't have the recommended model?

A: Use generic `/eai-web` command - it works with any model.

### Q: Can I force AI to proceed anyway?

A: Yes, use `/eai-web` (generic) instead of specialized command.

### Q: Gatekeeper is annoying, can I disable?

A: Yes, but not recommended. Add to config:
```json
{
  "modelVerification": {
    "enabled": false
  }
}
```

## Visual Guide

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Specialized Command → Model Check → Decision      │
│                                                     │
│  /eai-web-design  →  Are you Gemini?                   │
│                  ├─ Yes → ✅ Proceed               │
│                  └─ No  → ❌ STOP & Alert          │
│                                                     │
│  /eai-web-code    →  Are you Claude?                   │
│                  ├─ Yes → ✅ Proceed               │
│                  └─ No  → ❌ STOP & Alert          │
│                                                     │
│  /eai-web (generic) → ✅ Any model (with tips)         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Summary

**Gatekeeper System:**
1. ✅ AI identifies itself
2. ✅ AI checks if it's the right model
3. ✅ Wrong model → STOPS and alerts
4. ✅ Right model → Proceeds
5. ✅ User switches and tries again
6. ✅ Best results guaranteed!

**No more wasting time with suboptimal models! 🎯**

