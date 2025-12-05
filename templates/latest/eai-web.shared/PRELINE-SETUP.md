# Preline UI Setup Guide

## What is Preline?

Preline is an open-source UI component library built on top of Tailwind CSS. It provides professional, accessible, and modern UI components that work seamlessly with Tailwind.

**Official Website**: https://preline.co

## Why Preline?

- ✅ **Tailwind Native**: Built with Tailwind CSS utilities
- ✅ **No Custom CSS**: Works with your existing Tailwind setup
- ✅ **Professional**: Enterprise-grade components
- ✅ **Accessible**: WCAG compliant components
- ✅ **Modern**: Latest design trends
- ✅ **Free & Open Source**: MIT License

## Installation

### 1. Install Preline

```bash
npm install preline
```

### 2. Configure Tailwind

Add Preline to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    
    // Add Preline
    './node_modules/preline/preline.js',
  ],
  plugins: [
    require('preline/plugin'),
  ],
}
```

### 3. Import Preline JavaScript

In your `app/layout.tsx` (Next.js 14) or main file:

```tsx
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Initialize Preline
    require('preline/preline');
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Available Components

Preline provides 50+ components including:

### Navigation
- **Navbar** - Responsive navigation bars
- **Sidebar** - Collapsible sidebars
- **Breadcrumb** - Navigation breadcrumbs
- **Tabs** - Tab navigation
- **Pagination** - Page navigation

### Forms
- **Input** - Text inputs with validation
- **Select** - Dropdown selects
- **Checkbox** - Styled checkboxes
- **Radio** - Radio buttons
- **File Upload** - File input with preview
- **Textarea** - Multi-line text input

### Buttons & Actions
- **Button** - Primary, secondary, outline buttons
- **Button Group** - Grouped buttons
- **Dropdown** - Dropdown menus
- **Toggle** - On/off switches

### Feedback
- **Alert** - Success, error, warning messages
- **Toast** - Notification toasts
- **Progress** - Progress bars
- **Spinner** - Loading indicators
- **Badge** - Status badges

### Overlays
- **Modal** - Dialog modals
- **Drawer** - Slide-out panels
- **Tooltip** - Hover tooltips
- **Popover** - Click popovers

### Data Display
- **Card** - Content cards
- **Table** - Data tables
- **List** - Styled lists
- **Avatar** - User avatars
- **Timeline** - Event timelines

### Layout
- **Accordion** - Collapsible content
- **Collapse** - Expandable sections
- **Divider** - Section dividers
- **Grid** - Responsive grids

## Example Usage

### Hero Section with Preline

```tsx
export default function Hero() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="max-w-2xl text-center mx-auto">
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
          Build Better Products <span className="text-blue-600">Faster</span>
        </h1>
        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
          Professional UI components built with Tailwind CSS
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 gap-3 flex justify-center">
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
          Get Started
        </button>
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
          Learn More
        </button>
      </div>
    </div>
  );
}
```

### Form with Preline

```tsx
export default function ContactForm() {
  return (
    <form>
      {/* Input */}
      <div className="max-w-sm space-y-3">
        <input 
          type="email" 
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="you@email.com"
        />

        {/* Select */}
        <select className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
          <option selected>Choose...</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>

        {/* Button */}
        <button 
          type="button" 
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
```

### Modal with Preline

```tsx
export default function ModalExample() {
  return (
    <>
      {/* Button trigger */}
      <button 
        type="button" 
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
        data-hs-overlay="#hs-basic-modal"
      >
        Open modal
      </button>

      {/* Modal */}
      <div id="hs-basic-modal" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Modal title
              </h3>
              <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100" data-hs-overlay="#hs-basic-modal">
                <span className="sr-only">Close</span>
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <p className="text-gray-800 dark:text-gray-400">
                This is a modal example.
              </p>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50" data-hs-overlay="#hs-basic-modal">
                Close
              </button>
              <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
```

## Best Practices

### 1. Combine with Tailwind
Use Preline components with Tailwind utilities:

```tsx
<button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>
```

### 2. Dark Mode Support
Preline includes dark mode classes:

```tsx
<div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
  Content
</div>
```

### 3. Responsive Design
Use Tailwind breakpoints with Preline:

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards */}
</div>
```

### 4. Accessibility
Preline components include ARIA attributes:

```tsx
<button aria-label="Close modal" data-hs-overlay="#modal">
  <span className="sr-only">Close</span>
  {/* Icon */}
</button>
```

## Resources

- **Documentation**: https://preline.co/docs
- **Components**: https://preline.co/components
- **Examples**: https://preline.co/examples
- **GitHub**: https://github.com/htmlstreamofficial/preline

## Common Issues

### JavaScript not working?
Make sure you've imported Preline in your layout:

```tsx
useEffect(() => {
  require('preline/preline');
}, []);
```

### Styles not applying?
Check your `tailwind.config.js` includes Preline:

```js
content: [
  './node_modules/preline/preline.js',
],
plugins: [
  require('preline/plugin'),
],
```

### Modals not opening?
Ensure data attributes are correct:

```tsx
<button data-hs-overlay="#modal-id">Open</button>
<div id="modal-id" className="hs-overlay">...</div>
```

---

**Happy building with Preline! 🎨**

