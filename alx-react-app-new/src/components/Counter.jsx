import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={containerStyle}>
      <p style={countStyle}>Current Count: {count}</p>
      <div style={buttonGroupStyle}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

// Inline styles for simple layout
const containerStyle = {
  textAlign: 'center',
  marginTop: '2rem',
};

const countStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
};

export default Counter;
