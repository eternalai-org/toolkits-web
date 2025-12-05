#!/bin/bash

# Toolkits Web - Build & Publish Scripts
# Usage: ./scripts.sh [command]

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Build locally
build() {
    print_info "Building toolkits-web..."
    
    # Clean dist folder
    print_info "Cleaning dist folder..."
    rm -rf dist
    
    # Build with Bun
    print_info "Running bun build..."
    bun run build
    
    print_success "Build completed!"
}

# Test locally
test_local() {
    print_info "Testing toolkits-web locally..."
    
    # Build first
    build
    
    # Link package globally
    print_info "Linking package globally..."
    bun link
    
    print_success "Package linked globally!"
    print_info "You can now use: toolkits-web --help"
    
    # Test in a temp directory
    print_info "Testing installation in temp directory..."
    
    TEMP_DIR=$(mktemp -d)
    print_info "Created temp directory: $TEMP_DIR"
    
    cd "$TEMP_DIR"
    
    # Test cursor installation
    print_info "Testing: toolkits-web init --ai cursor"
    toolkits-web init --ai cursor
    
    # Verify files
    if [ -f ".cursor/commands/eai-web.md" ]; then
        print_success "Cursor command file created: .cursor/commands/eai-web.md"
    else
        print_error "Cursor command file NOT found!"
        exit 1
    fi
    
    # Test antigravity installation
    print_info "Testing: toolkits-web init --ai antigravity"
    toolkits-web init --ai antigravity
    
    # Verify files
    if [ -f ".agent/workflows/eai-web.md" ] && [ -d ".shared/eai-web" ]; then
        print_success "Antigravity files created successfully"
        print_info "  - .agent/workflows/eai-web.md"
        print_info "  - .shared/eai-web/"
    else
        print_error "Antigravity files NOT found!"
        exit 1
    fi
    
    # Show installed files
    print_info "Installed files in temp directory:"
    tree -L 3 -a . 2>/dev/null || ls -la
    
    # Cleanup
    cd -
    print_info "Cleaning up temp directory..."
    rm -rf "$TEMP_DIR"
    
    print_success "All tests passed! ✨"
}

# Check version
check_version() {
    print_info "Checking package version..."
    
    VERSION=$(node -p "require('./package.json').version")
    print_info "Current version: $VERSION"
    
    print_warning "Make sure to update version before publishing!"
    print_info "Run: npm version patch|minor|major"
}

# Publish to npm
publish_npm() {
    print_info "Publishing toolkits-web to npm..."
    
    # Check if logged in to npm
    if ! npm whoami &> /dev/null; then
        print_error "Not logged in to npm!"
        print_info "Please run: npm login"
        exit 1
    fi
    
    NPM_USER=$(npm whoami)
    print_success "Logged in as: $NPM_USER"
    
    # Check version
    check_version
    
    # Confirm publish
    echo ""
    read -p "$(echo -e ${YELLOW}Do you want to continue? [y/N]:${NC} )" -n 1 -r
    echo
    
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_warning "Publish cancelled"
        exit 0
    fi
    
    # Build before publish
    print_info "Building before publish..."
    build
    
    # Run tests
    print_info "Running tests..."
    test_local
    
    # Publish to npm
    print_info "Publishing to npm..."
    npm publish
    
    print_success "Published successfully! 🎉"
    
    VERSION=$(node -p "require('./package.json').version")
    print_info "Package published: @eternalai-org/toolkits-web@$VERSION"
    print_info "View on npm: https://www.npmjs.com/package/@eternalai-org/toolkits-web"
}

# Build and publish full flow
build_and_publish() {
    print_info "Starting build and publish flow..."
    
    # Update version
    print_info "Updating version..."
    echo ""
    echo "Select version bump type:"
    echo "  1) patch (0.0.x)"
    echo "  2) minor (0.x.0)"
    echo "  3) major (x.0.0)"
    echo "  4) skip version bump"
    echo ""
    read -p "Enter choice [1-4]: " -n 1 -r
    echo
    
    case $REPLY in
        1)
            npm version patch
            ;;
        2)
            npm version minor
            ;;
        3)
            npm version major
            ;;
        4)
            print_warning "Skipping version bump"
            ;;
        *)
            print_error "Invalid choice"
            exit 1
            ;;
    esac
    
    # Publish
    publish_npm
}

# Show help
show_help() {
    echo ""
    echo "Toolkits Web - Build & Publish Scripts"
    echo ""
    echo "Usage: ./scripts.sh [command]"
    echo ""
    echo "Commands:"
    echo "  build              Build the package"
    echo "  test               Build and test locally"
    echo "  check              Check current version"
    echo "  publish            Publish to npm (with checks)"
    echo "  full               Full flow: version bump + publish"
    echo "  help               Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./scripts.sh build"
    echo "  ./scripts.sh test"
    echo "  ./scripts.sh publish"
    echo "  ./scripts.sh full"
    echo ""
}

# Main script
case "$1" in
    build)
        build
        ;;
    test)
        test_local
        ;;
    check)
        check_version
        ;;
    publish)
        publish_npm
        ;;
    full)
        build_and_publish
        ;;
    help|--help|-h|"")
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac


