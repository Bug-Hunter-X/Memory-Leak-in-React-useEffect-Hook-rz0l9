```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic.  Should use a cleanup function to prevent memory leaks.
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      //Missing clearInterval to stop the interval
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```