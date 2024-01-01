import { useState } from "react";

function Calculator() {
  const [number, setNumber] = useState("0");

  const assignToNumber = (numberToAssign) => {
    if (number === "0") {
      setNumber(numberToAssign);
    } else {
      let result = number.concat(numberToAssign);
      setNumber(result);
    }
  };

  const resetNumber = () => {
    setNumber("0");
  };

  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={() => assignToNumber("1")}>1</button>
      <button onClick={() => assignToNumber("2")}>2</button>
      <button onClick={() => assignToNumber("3")}>3</button>
      <button onClick={() => assignToNumber("0")}>0</button>
      <button onClick={resetNumber}>AC</button>
    </div>
  );
}

export default Calculator;
