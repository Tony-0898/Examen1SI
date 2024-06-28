import { useState } from 'react';

const temperature = () => {
  const [count, setCount] = useState(20);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default temperature;

