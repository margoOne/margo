import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState();
  const [result, setResult] = useState(0);

  return (
    <div className="calculator">
      <Display num1={num1} operator={operator} num2={num2} result={result} />
      <Buttons
        setNum1={setNum1}
        setOperator={setOperator}
        operator={operator}
        num2={num2}
        setNum2={setNum2}
        num1={num1}
        setResult={setResult}
      />
    </div>
  );
}

function Display(props) {
  return (
    <div className="display">
      <div className="num1">{props.num1}</div>
      <div className="operator">{props.operator}</div>
      <div className="num2">{props.num2}</div>
      <div className="result">{props.result}</div>
    </div>
  );
}

function Buttons(props) {
  const buttons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, "+", "-"],
    ["=", "/", "*"],
  ];

  function handleAdd(btn) {
    if (btn === "+" || btn === "-" || btn === "/" || btn === "*") {
      props.setOperator(btn);
    } else if (btn === "=") {
      if (props.operator === "+") {
        props.setResult(Number(props.num1) + Number(props.num2));
      } else if (props.operator === "-") {
        props.setResult(Number(props.num1) - Number(props.num2));
      } else if (props.operator === "*") {
        props.setResult(Number(props.num1) * Number(props.num2));
      } else if (props.operator === "/") {
        props.setResult(Number(props.num1) / Number(props.num2));
      }
    } else {
      if (!props.operator) {
        props.setNum1((prevNum) => String(prevNum) + btn);
      } else {
        props.setNum2((prevNum) => String(prevNum) + btn);
      }
    }
  }

  function clear() {
    props.setResult(0);
    props.setNum1(0);
    props.setNum2(0);
    props.setOperator(null);
  }

  return (
    <div className="buttons">
      {buttons.flat().map((button) => {
        return (
          <button key={button} onClick={() => handleAdd(button)}>
            {button}
          </button>
        );
      })}
      <button onClick={clear}>C</button>
    </div>
  );
}

export default App;
