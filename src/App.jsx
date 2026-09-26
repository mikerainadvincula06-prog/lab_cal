import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState("");

  const handleNumber = (number) => {
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (op) => {
    setFirstNumber(Number(display));
    setOperator(op);
    setDisplay("0");
  };

  const calculate = () => {
    const secondNumber = Number(display);
    let result;

    if (operator === "+") {
      result = firstNumber + secondNumber;
    } else if (operator === "-") {
      result = firstNumber - secondNumber;
    } else if (operator === "×") {
      result = firstNumber * secondNumber;
    } else if (operator === "÷") {
      if (secondNumber === 0) {
        setDisplay("Error");
        return;
      }

      result = firstNumber / secondNumber;
    }

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator("");
  };

  const clearCalculator = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator("");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-gray-900 rounded-2xl p-5 shadow-xl">

        <h1 className="text-white text-center text-2xl font-bold mb-4">
          Calculator
        </h1>

        {/* Display */}
        <div className="bg-black text-white text-right text-4xl p-5 rounded-xl mb-4 overflow-hidden">
          {display}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">

          <button
            onClick={clearCalculator}
            className="col-span-2 bg-red-500 hover:bg-red-400 text-white p-4 rounded-xl font-bold"
          >
            C
          </button>

          <button
            onClick={() => handleOperator("÷")}
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded-xl font-bold"
          >
            ÷
          </button>

          <button
            onClick={() => handleOperator("×")}
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded-xl font-bold"
          >
            ×
          </button>

          <button
            onClick={() => handleNumber("7")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            7
          </button>

          <button
            onClick={() => handleNumber("8")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            8
          </button>

          <button
            onClick={() => handleNumber("9")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            9
          </button>

          <button
            onClick={() => handleOperator("-")}
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded-xl font-bold"
          >
            −
          </button>

          <button
            onClick={() => handleNumber("4")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            4
          </button>

          <button
            onClick={() => handleNumber("5")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            5
          </button>

          <button
            onClick={() => handleNumber("6")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            6
          </button>

          <button
            onClick={() => handleOperator("+")}
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded-xl font-bold"
          >
            +
          </button>

          <button
            onClick={() => handleNumber("1")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            1
          </button>

          <button
            onClick={() => handleNumber("2")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            2
          </button>

          <button
            onClick={() => handleNumber("3")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            3
          </button>

          <button
            onClick={calculate}
            className="row-span-2 bg-green-500 hover:bg-green-400 text-white p-4 rounded-xl font-bold"
          >
            =
          </button>

          <button
            onClick={() => handleNumber("0")}
            className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            0
          </button>

          <button
            onClick={() => handleNumber(".")}
            className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-xl font-bold"
          >
            .
          </button>

        </div>

        <p className="text-gray-400 text-center text-sm mt-4">
          Simple React Calculator
        </p>

      </div>
    </div>
  );
}

export default App;