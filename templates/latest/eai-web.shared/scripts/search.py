#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Eternal AI Toolkit - Search Engine for Development Knowledge Base
Usage: python search.py "<query>" [--domain <domain>] [--max-results N]

Domains: patterns, practices, snippets
"""

import argparse
import csv
import os
from pathlib import Path

# Configuration
DATA_DIR = Path(__file__).parent.parent / "data"
AVAILABLE_DOMAINS = {
    'patterns': 'patterns.csv',
    'practices': 'best-practices.csv',
    'snippets': 'code-snippets.csv'
}
MAX_RESULTS = 5


def simple_search(query, csv_file, max_results=MAX_RESULTS):
    """Simple keyword-based search in CSV file"""
    results = []
    query_lower = query.lower()
    query_words = set(query_lower.split())
    
    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                # Create searchable text from all fields
                searchable = ' '.join(str(v).lower() for v in row.values())
                
                # Score based on keyword matches
                score = sum(1 for word in query_words if word in searchable)
                
                if score > 0:
                    results.append((score, row))
    except FileNotFoundError:
        return []
    
    # Sort by score (highest first) and return top results
    results.sort(key=lambda x: x[0], reverse=True)
    return [row for score, row in results[:max_results]]


def format_output(results, domain):
    """Format results for AI consumption (token-optimized)"""
    if not results:
        return f"No results found in {domain}"
    
    output = [f"## Search Results from {domain.title()}\n"]
    
    for i, result in enumerate(results, 1):
        output.append(f"### Result {i}")
        for key, value in result.items():
            if value and value.strip():
                output.append(f"**{key}**: {value}")
        output.append("")
    
    return '\n'.join(output)


def main():
    parser = argparse.ArgumentParser(description='Search Eternal AI Toolkit knowledge base')
    parser.add_argument('query', help='Search query')
    parser.add_argument('--domain', choices=list(AVAILABLE_DOMAINS.keys()), 
                       help='Specific domain to search')
    parser.add_argument('--max-results', type=int, default=MAX_RESULTS,
                       help='Maximum number of results')
    
    args = parser.parse_args()
    
    # Determine which domains to search
    domains = [args.domain] if args.domain else list(AVAILABLE_DOMAINS.keys())
    
    all_output = []
    for domain in domains:
        csv_file = DATA_DIR / AVAILABLE_DOMAINS[domain]
        results = simple_search(args.query, csv_file, args.max_results)
        if results:
            all_output.append(format_output(results, domain))
    
    if all_output:
        print('\n---\n'.join(all_output))
    else:
        print(f"No results found for: {args.query}")


if __name__ == "__main__":
    main()


