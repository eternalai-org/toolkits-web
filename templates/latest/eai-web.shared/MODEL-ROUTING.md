# 🤖 AI Model Routing Guide

## Why Different Models for Different Tasks?

Different AI models have different strengths:

- **Gemini 3 Pro** → Superior visual understanding, creative design, UX patterns
- **Claude Sonnet** → Superior code reasoning, complex logic, architecture

By routing tasks to the optimal model, you get **best-in-class results** for each type of work.

## Specialized Commands

### `/eai-web-design` - Visual Design
**Best Model**: Gemini 3 Pro

Use for:
- Landing page designs
- Visual layouts and mockups
- Color schemes and aesthetics
- Brand design
- UI patterns

Example:
```
/eai-web-design modern SaaS landing page with gradient hero
```

### `/eai-web-ux` - User Experience
**Best Model**: Gemini 3 Pro

Use for:
- User flows and journeys
- Interaction patterns
- UX improvements
- Navigation design
- Conversion optimization

Example:
```
/eai-web-ux checkout flow with 3 steps and progress indicator
```

### `/eai-web-code` - Code Logic
**Best Model**: Claude Sonnet

Use for:
- Algorithms and logic
- System architecture
- Authentication systems
- Database design
- Complex features

Example:
```
/eai-web-code authentication with JWT and refresh tokens
```

### `/eai-web-frontend` - Frontend Code
**Best Model**: Claude Sonnet

Use for:
- React/Next.js components
- State management
- Forms and validation
- API integration
- TypeScript types

Example:
```
/eai-web-frontend dashboard with data tables and filters
```

### `/eai-web-backend` - Backend Code
**Best Model**: Claude Sonnet

Use for:
- API design
- Database queries
- Server logic
- Authentication
- Background jobs

Example:
```
/eai-web-backend REST API with CRUD operations for users
```

### `/eai-web-copy` - Creative Copy
**Best Model**: Gemini 3 Pro

Use for:
- Marketing copy
- Headlines and taglines
- Product descriptions
- Call-to-action text
- Microcopy

Example:
```
/eai-web-copy compelling hero section for email marketing tool
```

### `/eai-web-animate` - Animations
**Best Model**: Gemini 3 Pro

Use for:
- Page transitions
- Scroll animations
- Hover effects
- Loading states
- Interactive elements

Example:
```
/eai-web-animate smooth page transitions with Framer Motion
```

## How Model Routing Works

### 1. You Use Specialized Command

```
User types: /eai-web-design landing page

AI checks: "Am I Gemini? Yes → Perfect!"
or
AI checks: "Am I Claude? Yes → Recommend Gemini for better results"
```

### 2. AI Recommends If Needed

If you're using suboptimal model:

```
🤖 MODEL RECOMMENDATION

Current Model: Claude Sonnet
Task Type: Visual Design
Best Model: Gemini 3 Pro

💡 For best results, please use Gemini 3 Pro for this task.
   Reason: Gemini excels at visual understanding and design concepts.

You can continue with current model, but results may vary.
```

### 3. You Can Switch or Continue

- **Switch**: Get optimal results with recommended model
- **Continue**: AI does best effort with current model

## Configuration

Add to `.eai-web-config.json`:

```json
{
  "modelRouting": {
    "enabled": true,
    "preferences": {
      "design": "Gemini 3 Pro",
      "ux": "Gemini 3 Pro",
      "code": "Claude Sonnet",
      "logic": "Claude Sonnet",
      "copy": "Gemini 3 Pro"
    },
    "autoRecommend": true
  }
}
```

**Options:**
- `enabled`: Enable/disable model routing recommendations
- `preferences`: Your preferred model for each task type
- `autoRecommend`: Auto-suggest model switches

## Model Comparison

| Feature | Gemini 3 Pro | Claude Sonnet |
|---------|------------------|---------------|
| **Visual Design** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Good |
| **UX Patterns** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Good |
| **Code Logic** | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |
| **Architecture** | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |
| **Algorithms** | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |
| **Creative Copy** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐ Very Good |
| **Debugging** | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |
| **Testing** | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |

## Best Practices

### 1. Use Right Tool for Job

Don't use Claude for design tasks:
```
❌ /eai-web-code design a beautiful landing page
✅ /eai-web-design beautiful landing page
```

Don't use Gemini for complex logic:
```
❌ /eai-web-design authentication system with JWT
✅ /eai-web-code authentication system with JWT
```

### 2. Follow AI Recommendations

If AI suggests switching models, consider it:
```
AI: "💡 This task is best suited for Claude Sonnet"
You: [Switch to Claude for better results]
```

### 3. Mix and Match

Use different models for different parts:
```
Step 1: /eai-web-design landing page layout (Gemini)
Step 2: /eai-web-code contact form logic (Claude)
Step 3: /eai-web-copy hero section text (Gemini)
```

### 4. Generic Command for Flexibility

Use `/eai-web` (no suffix) when:
- Task spans multiple areas
- Not sure which model is best
- Want AI to decide and recommend

## Complete Workflow Example

### Building a SaaS Landing Page

**Step 1: Design** (use Gemini)
```
/eai-web-design SaaS landing page with hero, features, pricing
→ Generates beautiful visual design with Preline
```

**Step 2: Logic** (use Claude)
```
/eai-web-code pricing calculator with annual/monthly toggle
→ Generates clean TypeScript logic
```

**Step 3: Copy** (use Gemini)
```
/eai-web-copy compelling headlines for project management tool
→ Generates engaging marketing copy
```

**Step 4: Animation** (use Gemini)
```
/eai-web-animate scroll reveal effects for feature cards
→ Generates smooth Framer Motion animations
```

**Step 5: Backend** (use Claude)
```
/eai-web-backend API for user sign-up and payment
→ Generates secure backend code
```

## Troubleshooting

### Q: Can I use any model for any task?

A: Yes! Recommendations are suggestions for optimal results. Any model can handle any task, but specialized models excel in their areas.

### Q: How do I know which model I'm using?

A: AI will tell you at start of response:
```
🤖 Current Model: Claude Sonnet
✅ Perfect for this code task!
```

### Q: What if I don't want recommendations?

A: Disable in `.eai-web-config.json`:
```json
{
  "modelRouting": {
    "enabled": false,
    "autoRecommend": false
  }
}
```

### Q: Can I use generic `/eai-web` command?

A: Yes! Use `/eai-web` for any task. AI will detect task type and recommend model if beneficial.

## Summary

- 🎨 **Design/UX/Copy** → Use Gemini 3 Pro
- 💻 **Code/Logic/Backend** → Use Claude Sonnet
- 🤝 **Hybrid Tasks** → Use generic `/eai-web` and follow recommendations
- ⚙️ **Configuration** → Add model routing to `.eai-web-config.json`

**Use the right AI for the right job = Best results! 🚀**

