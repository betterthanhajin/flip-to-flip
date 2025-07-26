# flip-count

A React component for animated flip counter with TypeScript support.

## Installation

```bash
npm install flip-to-flip
```

## Usage

```tsx
import { FlipCount } from 'flip-to-flip';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <FlipCount value={count} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number | - | The number to display |
| duration | number | 600 | Animation duration in milliseconds |
| className | string | '' | CSS class name |
| style | React.CSSProperties | {} | Inline styles |

## Build Support

This package supports:
- ESM (`import`)
- CommonJS (`require`)
- UMD (browser `<script>` tag)

## License

ISC