# @suthra/ui

Modern React component library with strong TypeScript types, design tokens, animation hooks, and icon-ready APIs.

[![npm version](https://img.shields.io/npm/v/@suthra/ui)](https://www.npmjs.com/package/@suthra/ui)
[![license](https://img.shields.io/npm/l/@suthra/ui)](https://www.npmjs.com/package/@suthra/ui)
[![downloads](https://img.shields.io/npm/dm/@suthra/ui)](https://www.npmjs.com/package/@suthra/ui)

## Why Suthra UI

- Consistent API patterns across components: `variant`, `size`, `state`.
- Visual variants built in: `normal`, `glass`, `dark`.
- Advanced style controls: `radius`, `fullWidth`, `elevated`, `animated`.
- Motion and theme tokens included via CSS variables.
- Lucide icon support and icon exports included.
- Storybook-ready with all components documented.

## Installation

```bash
pnpm add @suthra/ui react react-dom
```

## Quick Start

```tsx
import { Button, Input, Sparkles } from "@suthra/ui";

export function Demo() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 420 }}>
      <Input
        label="Email"
        type="email"
        placeholder="you@company.com"
        hint="We never share your email."
        variant="normal"
        animated
      />

      <Button
        intent="primary"
        variant="dark"
        elevated
        leftIcon={<Sparkles size={16} />}
      >
        Continue
      </Button>
    </div>
  );
}
```

## Styling Model

Suthra UI ships CSS styles and design tokens out of box.

- Global tokens file: `src/styles/tokens.css`
- Shared motion + surface system: `src/components/_shared/common.module.css`
- Component-specific CSS:
  - Button: `src/components/Button/Button.css`
  - Input: `src/components/Input/Input.module.css`
  - Other components use shared module base + local modules

### Core Tokens

Key token groups exposed:

- Typography: `--suthra-font-sans`, `--suthra-text-*`
- Spacing: `--suthra-space-*`
- Radius: `--suthra-radius-*`
- Colors: `--suthra-color-*`
- Shadows: `--suthra-shadow-*`
- Motion:
  - `--suthra-motion-duration-fast`
  - `--suthra-motion-duration-normal`
  - `--suthra-motion-duration-slow`
  - `--suthra-motion-ease-standard`
  - `--suthra-motion-ease-emphasized`

### Global Variant System

Most components support:

- `variant`: `"normal" | "glass" | "dark"`
- `size`: `"sm" | "md" | "lg"`
- `state`: `"default" | "error" | "success"`

Advanced style props are available on key form/action components (Button, Input):

- `radius`: `"sm" | "md" | "lg" | "pill"`
- `fullWidth`: `boolean`
- `elevated`: `boolean`
- `animated`: `boolean`

## Icons

Library uses `lucide-react` and re-exports common icons:

```tsx
import { AlertCircle, Bell, Sparkles } from "@suthra/ui";
```

Components with icon prop support today:

- `Alert` (`icon`)
- `Toast` (`icon`)
- `Dialog` (`icon`)
- `Drawer` (`icon`)
- `Button` (`leftIcon`, `rightIcon`)
- `Input` (`leftElement`, `rightElement`)

## Storybook

Run component docs locally:

```bash
pnpm storybook
```

Build static docs:

```bash
pnpm build-storybook
```

## Component Docs

### Button

```tsx
import { Button } from "@suthra/ui";
import type { ButtonProps } from "@suthra/ui";
```

```tsx
<Button variant="normal" intent="primary">Save</Button>
<Button variant="glass" intent="outline" radius="pill">Preview</Button>
<Button variant="dark" intent="danger" isLoading elevated>
  Deleting
</Button>
```

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `"normal" \| "glass" \| "dark"` | `"normal"` |
| `intent` | `"primary" \| "secondary" \| "danger" \| "ghost" \| "outline"` | `"primary"` |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` |
| `radius` | `"sm" \| "md" \| "lg" \| "pill"` | `"md"` |
| `fullWidth` | `boolean` | `false` |
| `elevated` | `boolean` | `false` |
| `animated` | `boolean` | `true` |
| `isLoading` | `boolean` | `false` |
| `leftIcon` | `ReactNode` | `undefined` |
| `rightIcon` | `ReactNode` | `undefined` |

### Input

```tsx
import { Input } from "@suthra/ui";
import type { InputProps } from "@suthra/ui";
```

```tsx
<Input label="Password" variant="dark" hint="At least 12 chars" />
<Input label="Username" leftElement={<span>@</span>} error="Taken" />
<Input label="Search" rightElement={<kbd>Ctrl+K</kbd>} elevated />
```

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `"normal" \| "glass" \| "dark"` | `"normal"` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `state` | `"default" \| "error" \| "success"` | `"default"` |
| `radius` | `"sm" \| "md" \| "lg" \| "pill"` | `"md"` |
| `fullWidth` | `boolean` | `false` |
| `elevated` | `boolean` | `false` |
| `animated` | `boolean` | `true` |
| `label` | `string` | `undefined` |
| `hint` | `string` | `undefined` |
| `error` | `string` | `undefined` |
| `leftElement` | `ReactNode` | `undefined` |
| `rightElement` | `ReactNode` | `undefined` |
| `isLoading` | `boolean` | `false` |

## Full Component Catalog

All components below are currently available and exported from package root:

- `Button`
- `IconButton`
- `SplitButton`
- `ToggleButton`
- `LinkButton`
- `Input`
- `Textarea`
- `Select`
- `MultiSelect`
- `Checkbox`
- `RadioGroup`
- `Switch`
- `Slider`
- `OTPInput`
- `DatePicker`
- `TimePicker`
- `FormField`
- `Badge`
- `Avatar`
- `Card`
- `Stat`
- `Tooltip`
- `Popover`
- `Dialog`
- `Drawer`
- `Toast`
- `Alert`
- `Progress`
- `Spinner`
- `Tabs`
- `Breadcrumb`
- `Pagination`
- `Accordion`
- `Divider`
- `Skeleton`

## TypeScript Support

Types exported for all components.

```tsx
import type {
  ButtonProps,
  InputProps,
  DialogProps,
  TabsProps,
  AccordionProps
} from "@suthra/ui";
```

## Development

```bash
pnpm install
pnpm build
pnpm lint
pnpm storybook
```

## License

MIT
