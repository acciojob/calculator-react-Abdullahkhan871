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

  // if

  function handleCal(items) {
    if (items == "=") {
      setShowValue((prev) => eval(prev));
    } else if (items == "C") {
      setShowValue("");
    } else {
      setShowValue((prev) => prev + items);
    }

    if (
      (showValue.slice(-1) == "/" ||
        showValue.slice(-1) == "-" ||
        showValue.slice(-1) == "*" ||
        showValue.slice(-1) == "+") &&
      (items == "/" || items == "-" || items == "*" || items == "+")
    ) {
      setShowValue(showValue.slice(0, -1) + items);
    }
  }
  return (
    <div className="Calculator">
      <input
        type="text"
        value={showValue}
        onChange={() => setShowValue(showValue)}
      />
      <div className="btn-vlv">
        {btnData.map((items, index) => (
          <button
            id={`btn-${index}`}
            onClick={() => handleCal(items)}
            key={index}
          >
            {items}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
