# @girish2003-hub/my-button

A simple, lightweight React button component that works in Next.js (App Router and Pages Router) and any React 18+ app.

## Installation

```bash
npm install @girish2003-hub/my-button
```

`react` and `react-dom` (v18 or newer) are peer dependencies.

## Usage

Import the stylesheet once, usually in your root layout:

```tsx
// app/layout.tsx
import '@girish2003-hub/my-button/styles.css';
```

Then use the component:

```tsx
import { Button } from '@girish2003-hub/my-button';

export default function Home() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

If you pass event handlers such as `onClick`, use the button inside a Client Component:

```tsx
'use client';

import { Button } from '@girish2003-hub/my-button';

export function SaveButton() {
  return <Button onClick={() => alert('Saved!')}>Save</Button>;
}
```

## Props

`Button` accepts all standard `<button>` attributes plus:

| Prop      | Type                                  | Default     |
| --------- | ------------------------------------- | ----------- |
| `variant` | `"primary" \| "secondary" \| "ghost"` | `"primary"` |
| `size`    | `"sm" \| "md" \| "lg"`                | `"md"`      |

The component forwards its `ref` to the underlying `<button>` element.

## Development

```bash
npm install
npm run dev     # rebuild on change
npm run build   # production build into dist/
```

## License

MIT © Girish Khedikar
