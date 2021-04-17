import { useState } from "react";
import "./App.css";
import InputNumber from "./components/InputNumber";
import InputOperator from "./components/InputOperator";

function App() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [number3, setNumber3] = useState(null);
  const [checklist1, setCehcklist1] = useState(false);
  const [checklist2, setCehcklist2] = useState(false);
  const [checklist3, setCehcklist3] = useState(false);
  const [hasil, setHasil] = useState(0);

  const handleResultProcess = (param) => {
    const arrayOfNumber = [number1, number2];
    if (
      arrayOfNumber[0] === null ||
      isNaN(arrayOfNumber[0]) ||
      arrayOfNumber[1] === null ||
      isNaN(arrayOfNumber[1])
    ) {
      return window.alert("Silahkan periksa angka/checklist");
    } else if (!checklist1 || !checklist2) {
      return window.alert("Silahkan periksa checklist");
    }
    if (typeof number3 === "number" && checklist3 && !isNaN(number3)) {
      arrayOfNumber.push(number3);
    }
    // console.log(arrayOfNumber);

    switch (param) {
      case "+":
        return setHasil(arrayOfNumber.reduce((acc, current) => acc + current));

      case "-":
        return setHasil(arrayOfNumber.reduce((acc, current) => acc - current));

      case "/":
        return setHasil(arrayOfNumber.reduce((acc, current) => acc / current));

      case "x":
        return setHasil(arrayOfNumber.reduce((acc, current) => acc * current));
      default:
        return setHasil(arrayOfNumber);
    }
  };
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <div className="cal__container">
        <div className="cal__panel__top">
          <InputNumber
            number={number1}
            setNumber={(e) => setNumber1(parseInt(e.target.value))}
            checklist={checklist1}
            setChecklist={() => setCehcklist1(!checklist1)}
            placeholder="*required number"
            required
          />
          <InputNumber
            number={number2}
            setNumber={(e) => setNumber2(parseInt(e.target.value))}
            checklist={checklist2}
            setChecklist={() => setCehcklist2(!checklist2)}
            placeholder="*required number"
            required
          />
          <InputNumber
            number={number3}
            setNumber={(e) => setNumber3(parseInt(e.target.value))}
            checklist={checklist3}
            setChecklist={() => setCehcklist3(!checklist3)}
            placeholder="(optional)"
          />
        </div>
        <div className="cal__panel__bottom">
          <InputOperator click={handleResultProcess}>+</InputOperator>
          <InputOperator click={handleResultProcess}>-</InputOperator>
          <InputOperator click={handleResultProcess}>/</InputOperator>
          <InputOperator click={handleResultProcess}>x</InputOperator>
        </div>
        <div className="cal__underline"></div>
        <div className="cal__result">
          <h3>HASIL:</h3>
          <h3>{hasil ? hasil : 0}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
