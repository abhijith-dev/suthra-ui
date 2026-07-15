# @suthra/ui

Production-focused React component library with strong defaults, flexible variants, and clean TypeScript types.

[![npm version](https://img.shields.io/npm/v/@suthra/ui)](https://www.npmjs.com/package/@suthra/ui)
[![license](https://img.shields.io/npm/l/@suthra/ui)](https://www.npmjs.com/package/@suthra/ui)
[![downloads](https://img.shields.io/npm/dm/@suthra/ui)](https://www.npmjs.com/package/@suthra/ui)

## Why Suthra UI

- Consistent API across components: `variant`, `size`, `state`, `intent` patterns.
- Built for modern product UIs: normal, glass, and modern visual styles.
- Type-safe by default with exported prop types.
- Easy to compose with your app styles and icons.

## Installation

```bash
pnpm add @suthra/ui
```

Peer dependencies:

- `react@^18.3.1`
- `react-dom@^18.3.1`

## Quick Start

```tsx
import { Button, Input } from "@suthra/ui";

export function Demo() {
	return (
		<div style={{ display: "grid", gap: 16, maxWidth: 420 }}>
			<Input
				label="Email"
				type="email"
				placeholder="you@company.com"
				hint="We never share your email."
			/>

			<Button intent="primary" size="md">
				Continue
			</Button>
		</div>
	);
}
```

## Styling Requirements

Current components use two styling approaches:

- `Button`: utility classes (Tailwind-compatible class names)
- `Input`: CSS Modules + design tokens (`--suthra-*` variables)

### 1) Tailwind-Compatible Utilities (for Button)

`Button` uses utility classes like `bg-blue-600`, `rounded-xl`, and custom shadows like `shadow-glow-primary`.

If you use Tailwind, add custom shadows:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
	theme: {
		extend: {
			boxShadow: {
				"glass-sm": "0 6px 20px rgba(15, 23, 42, 0.12)",
				"glow-primary": "0 0 18px 2px rgba(59, 130, 246, 0.55)"
			}
		}
	}
} satisfies Config;
```

### 2) Design Tokens (for Input)

Define these CSS variables in your global stylesheet. Suggested defaults:

```css
:root {
	--suthra-font-sans: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI,
		Roboto, Helvetica, Arial, sans-serif;

	--suthra-text-xs: 0.75rem;
	--suthra-text-sm: 0.875rem;
	--suthra-text-base: 1rem;

	--suthra-font-weight-medium: 500;

	--suthra-space-1: 0.25rem;
	--suthra-space-3: 0.75rem;
	--suthra-space-4: 1rem;
	--suthra-space-9: 2.25rem;

	--suthra-radius-md: 0.5rem;
	--suthra-radius-lg: 0.75rem;

	--suthra-duration-normal: 180ms;
	--suthra-ease-ease: ease;

	--suthra-color-primary-500: #3b82f6;
	--suthra-color-success-500: #22c55e;
	--suthra-color-danger-500: #ef4444;

	--suthra-color-neutral-300: #d1d5db;
	--suthra-color-neutral-400: #9ca3af;
	--suthra-color-neutral-700: #374151;
	--suthra-color-neutral-900: #111827;

	--suthra-color-glass-white10: rgba(255, 255, 255, 0.1);
	--suthra-color-glass-border: rgba(255, 255, 255, 0.28);

	--suthra-blur-md: 12px;

	--suthra-shadow-inner-sm: inset 0 0 0 1px rgba(59, 130, 246, 0.25);
	--suthra-shadow-glass-sm: 0 8px 22px rgba(15, 23, 42, 0.22);
	--suthra-shadow-glow-primary: 0 0 18px 2px rgba(59, 130, 246, 0.55);
}
```

## Component Documentation

### Button

Import:

```tsx
import { Button } from "@suthra/ui";
import type { ButtonProps } from "@suthra/ui";
```

Usage:

```tsx
<Button variant="normal" intent="primary" size="md">
	Save Changes
</Button>

<Button variant="glass" intent="outline" leftIcon={<span>+</span>}>
	New Item
</Button>

<Button variant="modern" intent="danger" isLoading>
	Deleting...
</Button>
```

Props:

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `"normal" \| "glass" \| "modern"` | `"normal"` | Visual style |
| `intent` | `"primary" \| "secondary" \| "danger" \| "ghost" \| "outline"` | `"primary"` | Semantic intent |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Height and padding |
| `isLoading` | `boolean` | `false` | Shows spinner and disables button |
| `leftIcon` | `ReactNode` | `undefined` | Icon before label |
| `rightIcon` | `ReactNode` | `undefined` | Icon after label |
| `...button props` | `ButtonHTMLAttributes<HTMLButtonElement>` | - | Native button attributes |

Notes:

- `isLoading` forces disabled state.
- `disabled` and `isLoading` both block pointer events.

### Input

Import:

```tsx
import { Input } from "@suthra/ui";
import type { InputProps } from "@suthra/ui";
```

Usage:

```tsx
<Input
	label="Password"
	type="password"
	variant="modern"
	size="md"
	hint="Use at least 12 characters"
/>

<Input
	label="Username"
	leftElement={<span>@</span>}
	error="Username already taken"
/>

<Input
	label="Search"
	placeholder="Find components"
	rightElement={<kbd>Ctrl+K</kbd>}
/>
```

Props:

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `"normal" \| "glass" \| "modern"` | `"normal"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Control height |
| `state` | `"default" \| "error" \| "success"` | `"default"` | Manual state |
| `label` | `string` | `undefined` | Accessible label text |
| `hint` | `string` | `undefined` | Helper text when no `error` |
| `error` | `string` | `undefined` | Error text and error state override |
| `leftElement` | `ReactNode` | `undefined` | Left adornment |
| `rightElement` | `ReactNode` | `undefined` | Right adornment |
| `isLoading` | `boolean` | `false` | Replaces right element with spinner |
| `className` | `string` | `undefined` | Wrapper class |
| `...input props` | `InputHTMLAttributes<HTMLInputElement>` | - | Native input attributes |

Notes:

- If `error` provided, effective state becomes `error`.
- Component auto-generates `id` if missing, then binds `label` with `htmlFor`.

## Component Catalog (35)

This package targets 35+ production components. Current release includes `Button` and `Input`.

| Component | Category | Status | Description |
| --- | --- | --- | --- |
| Button | Actions | Available | Primary action button with variants and loading |
| IconButton | Actions | Planned | Icon-only action button |
| SplitButton | Actions | Planned | Primary action + dropdown trigger |
| ToggleButton | Actions | Planned | Pressed/unpressed button state |
| LinkButton | Actions | Planned | Button styles with anchor semantics |
| Input | Forms | Available | Text input with label, hint, and status |
| Textarea | Forms | Planned | Multi-line text control |
| Select | Forms | Planned | Single-select dropdown |
| MultiSelect | Forms | Planned | Multi-value selection control |
| Checkbox | Forms | Planned | Boolean field with label |
| RadioGroup | Forms | Planned | Single choice from options |
| Switch | Forms | Planned | On/off toggle control |
| Slider | Forms | Planned | Numeric range slider |
| OTPInput | Forms | Planned | One-time-code segmented input |
| DatePicker | Forms | Planned | Date selection calendar input |
| TimePicker | Forms | Planned | Time-only selector |
| FormField | Forms | Planned | Label, control, hint, error wrapper |
| Badge | Data Display | Planned | Small status badge |
| Avatar | Data Display | Planned | User avatar with fallback |
| Card | Data Display | Planned | Surface container with slots |
| Stat | Data Display | Planned | Metric block with trend |
| Tooltip | Overlays | Planned | Hover/focus informational popup |
| Popover | Overlays | Planned | Anchored floating content |
| Dialog | Overlays | Planned | Modal with focus management |
| Drawer | Overlays | Planned | Slide-in side panel |
| Toast | Feedback | Planned | Timed non-blocking notifications |
| Alert | Feedback | Planned | Inline status message |
| Progress | Feedback | Planned | Determinate/indeterminate progress |
| Spinner | Feedback | Planned | Loading activity indicator |
| Tabs | Navigation | Planned | Section switcher by tab |
| Breadcrumb | Navigation | Planned | Hierarchical location path |
| Pagination | Navigation | Planned | Paged list navigation |
| Accordion | Layout | Planned | Expand/collapse grouped content |
| Divider | Layout | Planned | Visual content separator |
| Skeleton | Feedback | Planned | Placeholder loading shapes |

## Accessibility Principles

- Keyboard-first interaction for all actionable components.
- Focus-visible states required for every control.
- Semantic HTML first, ARIA only when necessary.
- Labels, hints, and errors tied to controls.

## TypeScript Support

Package ships declaration files and exports key prop types:

```tsx
import type { ButtonProps, InputProps } from "@suthra/ui";
```

## Changelog Strategy

- `feat:` new component or additive API
- `fix:` bug fixes without breaking changes
- `perf:` runtime or bundle performance improvements
- `refactor:` internal cleanup with no API change

## Contributing

```bash
pnpm install
pnpm build
pnpm lint
```

For component contributions, include:

- component implementation
- exported types
- variant contract
- README usage and prop table updates

## License

MIT

