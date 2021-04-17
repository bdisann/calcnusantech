import React from "react";
import "./InputNumber.css";

const InputNumber = ({
  number,
  setNumber,
  checklist,
  setChecklist,
  placeholder,
}) => {
  return (
    <div className="inputNumber">
      <input
        type="number"
        placeholder="Insert a number"
        className="inputNumber__form"
        value={number}
        onChange={setNumber}
      />
      {checklist ? (
        <i class="fas fa-check-square checklist"></i>
      ) : (
        <i class="far fa-square checklist"></i>
      )}
    </div>
  );
};

export default InputNumber;
