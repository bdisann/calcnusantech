import "./App.css";
import InputNumber from "./components/InputNumber";
import InputOperator from "./components/InputOperator";

function App() {
  return (
    <div className="App">
      <h1>CALCULATOR EXERCISE V1</h1>
      <div className="cal__container">
        <div className="cal__panel__top">
          <InputNumber />
          <InputNumber />
          <InputNumber />
        </div>
        <div className="cal__panel__bottom">
          <InputOperator>+</InputOperator>
          <InputOperator>-</InputOperator>
          <InputOperator>/</InputOperator>
          <InputOperator>x</InputOperator>
        </div>
        <div className="cal__underline"></div>
        <div className="cal__result">
          <h3>HASIL:</h3>
          <h3>0</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
