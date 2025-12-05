# Eternal AI Toolkit - Shared Resources

This folder contains shared knowledge base for the `/eai-web` command used by Antigravity and GitHub Copilot.

## 📁 Directory Structure

```
.shared/eai-web/
├── data/                      # Structured CSV knowledge base
│   ├── patterns.csv          # Design patterns and architecture
│   ├── best-practices.csv    # Coding best practices
│   └── code-snippets.csv     # Reusable code snippets
├── scripts/                   # Utilities to query the knowledge base
│   └── search.py             # Search engine for CSV data
└── README.md
```

## 🎯 About /eai

The Eternal AI Toolkit provides comprehensive AI assistance for development tasks including:

- Code generation and refactoring
- Bug fixing and debugging
- Architecture suggestions
- Performance optimization
- Documentation generation
- Test creation
- Code review and best practices

## 📊 Knowledge Base (CSV Files)

### `data/patterns.csv`
Design patterns and architectural patterns with examples:
- **Columns**: No, Pattern, Category, Keywords, Description, Example, UseCase, Language, Framework
- **Examples**: Singleton, Factory, Observer, Repository, MVC, etc.

### `data/best-practices.csv`
Coding best practices and guidelines:
- **Columns**: No, Practice, Category, Keywords, Description, GoodExample, BadExample, Impact, Language
- **Examples**: Meaningful names, DRY principle, error handling, input validation, etc.

### `data/code-snippets.csv`
Reusable code snippets and utilities:
- **Columns**: No, Title, Category, Keywords, Description, Code, Language, Framework
- **Examples**: Debounce, throttle, deep clone, async retry, localStorage hook, etc.

## 🔍 Using the Search Tool

The search script allows querying the knowledge base:

```bash
# Search all domains
python scripts/search.py "singleton pattern"

# Search specific domain
python scripts/search.py "error handling" --domain practices

# Limit results
python scripts/search.py "react hooks" --max-results 3
```

**Available domains**: `patterns`, `practices`, `snippets`

## 🤖 AI Integration

AI assistants can:
1. **Read CSV files directly** - All data is structured and AI-readable
2. **Use search script** - Query specific information efficiently
3. **Reference examples** - Provide concrete code examples from the knowledge base

## 💡 Usage

Type `/eai-web` in your AI assistant (Antigravity or GitHub Copilot) to activate intelligent development support powered by this knowledge base.

## 🔧 Customization

You can extend the knowledge base by:
1. Adding new rows to existing CSV files
2. Creating new CSV files in `data/`
3. Adding new search capabilities in `scripts/`

All resources here are shared between different AI assistant integrations to maintain consistency.

