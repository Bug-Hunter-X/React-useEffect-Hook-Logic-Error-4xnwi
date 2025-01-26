```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here: if count is 0, it will never update
    if (count !== 0) {
      console.log('Count updated:', count);
    }
    return () => {
      console.log('Component unmounted');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```