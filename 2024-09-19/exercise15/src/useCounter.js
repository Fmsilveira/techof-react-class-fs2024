import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const _setCount = (type) => {
    if (type === 'increment') {
      increment();
    } else if (type === 'decrement') {
      decrement();
    }
  }
  return [count, _setCount];
}