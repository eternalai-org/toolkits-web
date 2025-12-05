# 🤖 AI Model Guide - Quick Reference

## Which Model for Which Task?

### 🎨 Use Gemini 3 Pro For:

- **Visual Design** - Landing pages, layouts, mockups
- **UI/UX Design** - User flows, interaction patterns
- **Creative Copy** - Marketing text, headlines, taglines
- **Animations** - Motion design, transitions
- **Brand Design** - Color schemes, visual identity

**Commands:**
- `/eai-web-design` - Visual design tasks
- `/eai-web-ux` - User experience design
- `/eai-web-copy` - Creative copywriting
- `/eai-web-animate` - Animations and effects

### 🧠 Use Claude Sonnet For:

- **Code Logic** - Algorithms, business logic
- **Architecture** - System design, patterns
- **Frontend Code** - React, Next.js, TypeScript
- **Backend Code** - APIs, databases, servers
- **Debugging** - Error fixing, problem solving
- **Refactoring** - Code quality, optimization
- **Testing** - Unit tests, integration tests
- **Security** - Authentication, validation

**Commands:**
- `/eai-web-code` - Code logic and architecture
- `/eai-web-frontend` - Frontend implementation
- `/eai-web-backend` - Backend implementation

### 🔄 Use Any Model For:

- **Generic Tasks** - Mixed or unclear tasks
- **Quick Questions** - Documentation, explanations
- **Prototyping** - When speed > perfection

**Commands:**
- `/eai` - Generic command (no model restriction)

## Model Verification System

### Specialized Commands (⚠️ Model Required)

These commands **ENFORCE** model requirements:

```
/eai-web-design → Requires Gemini
/eai-web-code   → Requires Claude
/eai-web-ux     → Requires Gemini
```

**If wrong model:**
```
❌ STOPS execution
⚠️ Shows alert
📋 Asks you to switch
🚫 Will not proceed until you switch
```

### Generic Command (✅ Any Model)

```
/eai-web → Works with any model
```

**Behavior:**
- ✅ Works with current model
- 💡 Recommends optimal model
- ✅ Proceeds either way

## Quick Workflow

### Design Task

```bash
1. Check current model (look at selector)
2. If not Gemini → Switch to Gemini
3. Run: /eai-web-design landing page
4. AI verifies → ✅ Proceeds
```

### Code Task

```bash
1. Check current model
2. If not Claude → Switch to Claude
3. Run: /eai-web-code auth system
4. AI verifies → ✅ Proceeds
```

### Complex Task (Design + Code)

```bash
1. Run: /eai-web create chat bot with SDK
2. AI shows orchestration plan
3. Follow plan with manual model switches:
   
   Step 1: Switch to Gemini
   Run: /eai-web-design chat bot interface
   
   Step 2: Switch to Claude
   Run: /eai-web-code integrate SDK
```

## How to Switch Models

### In Cursor Composer (Cmd+I)
1. Look at **bottom-right corner**
2. Click model name (e.g., "Claude Sonnet 3.5")
3. Select desired model
4. Run command

### In Cursor Chat
1. Look at **top of panel**
2. Click model selector
3. Choose model
4. Run command

### Keyboard Shortcut
```
Cmd+I → Tab → Arrow keys → Enter
```

## What Each Response Shows

Every AI response starts with:

```
🤖 Current Model: [Model Name]
```

This tells you:
- ✅ Which model is responding
- ✅ If it's the right model for the task
- ✅ Whether to switch or proceed

## Common Scenarios

### ✅ Right Model
```
You: /eai-web-design page (with Gemini)
AI: ✅ Gemini - Perfect!
```

### ❌ Wrong Model  
```
You: /eai-web-design page (with Claude)
AI: ❌ Claude - Please switch to Gemini!
    🚫 STOPPED
```

### 💡 Recommendation Only
```
You: /eai-web create page (with Claude)
AI: 💡 Gemini recommended for design
    ✅ Proceeding with Claude anyway
```

## Model Comparison

| Feature | Gemini 3 Pro | Claude Sonnet |
|---------|------------------|---------------|
| Visual Design | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| UI/UX Patterns | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Code Logic | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Architecture | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Debugging | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Creative Copy | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Algorithms | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Animations | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

## Command Cheat Sheet

```bash
# Design (Gemini required)
/eai-web-design modern landing page
/eai-web-ux checkout flow
/eai-web-copy hero section text
/eai-web-animate page transitions

# Code (Claude required)  
/eai-web-code authentication system
/eai-web-frontend dashboard components
/eai-web-backend REST API

# Generic (any model)
/eai-web create landing page
/eai-web help with this feature
/eai-web review this code
```

## Tips for Best Results

### 1. Plan Your Model Switches
Before starting complex task, review orchestration plan

### 2. Keep Models in Mind
Remember which model you're using

### 3. Follow Gatekeeper
When AI says stop, switch models

### 4. Use Right Command
Specialized command = better results

### 5. Generic for Flexibility
Use `/eai` when unsure or time-constrained

## Summary

- 🤖 **AI identifies itself** at start
- 🔒 **Specialized commands enforce** model requirements
- ❌ **Wrong model** = STOP + Alert
- ✅ **Right model** = Proceed
- 🔄 **You switch manually** in Cursor UI
- 💡 **Generic command** works with any model

**Use the right AI for the right job! 🎯**

