import React, { useState } from "react";

const Calculator = () => {
  const [showValue, setShowValue] = useState("");

  let btnData = [
    "C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "=",
  ];

  function handleCal(items) {
    if (items == "=") {
      setShowValue((prev) => eval(prev));
    } else if (items == "C") {
      setShowValue("");
    } else {
      setShowValue((prev) => prev + items);
    }
  }
  return (
    <div>
      <input
        type="text"
        value={showValue}
        onChange={() => setShowValue(showValue)}
      />
      <div className="btn-vlv">
        {btnData.map((items, index) => (
          <span onClick={(e) => handleCal(items, e)} key={index}>
            {items}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
