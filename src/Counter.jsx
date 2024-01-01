// Kita bisa bikin variable yang REACTIVE (state) menggunakan useState
// Maksud dari reactive adalah ketika VALUEnya BERUBAH, component akan RENDER ULANG
// Syntax:
// const [state, setState] = useState()
import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState();

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    // ngecek apakah angka bukan 0
    if (number !== 0) {
      setNumber(number - 1); // Mengubah value number menjadi number - 1
    }
  };

  // Reset itu membuat number jadi 0
  const reset = () => {
    setNumber(0); // Mengubah value number menjadi 0
  };

  const xmas = () => {
    setMessage("Merry Christmas");
  };

  const newYear = () => {
    setMessage("Happy New Year!");
  };

  // Kita bisa kasih conditional rendering di dalam return dengan cara:
  // 1. condition ? ifTrue : ifFalse
  // 2. condition && ifTrue

  return (
    <div style={{ padding: "8px", border: "1px solid gray" }}>
      <h1>Counter Component</h1>
      {number >= 10 && (
        <p style={{ color: "green" }}>You've reached number 10</p>
      )}
      <p>Current number: {number}</p>
      <p>Message: {message}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> {/* -1 */}
      <button onClick={reset}>Reset</button> {/* Resets number to 0 */}
      <button onClick={xmas}>Merry Christmas</button>
      <button onClick={newYear}>New Year</button>
    </div>
  );
}

export default Counter;
