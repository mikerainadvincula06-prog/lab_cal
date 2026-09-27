import { useState } from "react"

function App() {
  const [display, setDisplay] = useState("0")
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState("")

  const numberClick = (number) => {
    if (display === "0") {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  const operatorClick = (op) => {
    setFirstNumber(Number(display))
    setOperator(op)
    setDisplay("0")
  }

  const calculate = () => {
    const secondNumber = Number(display)
    let answer = 0

    if (operator === "+") {
      answer = firstNumber + secondNumber
    }

    if (operator === "-") {
      answer = firstNumber - secondNumber
    }

    if (operator === "×") {
      answer = firstNumber * secondNumber
    }

    if (operator === "÷") {
      if (secondNumber === 0) {
        setDisplay("Error")
        return
      }

      answer = firstNumber / secondNumber
    }

    setDisplay(String(answer))
    setFirstNumber(null)
    setOperator("")
  }

  const clear = () => {
    setDisplay("0")
    setFirstNumber(null)
    setOperator("")
  }

  return (
    <div className="min-h-screen bg-gray-200 p-5">

      <div className="mx-auto max-w-sm rounded-xl bg-gray-800 p-5">

        <h1 className="mb-4 text-center text-2xl font-bold text-white">
          Calculator
        </h1>

        <div className="mb-4 rounded-lg bg-white p-4 text-right text-3xl font-bold">
          {display}
        </div>

        <div className="grid grid-cols-4 gap-2">

          <button
            onClick={clear}
            className="rounded-lg bg-red-500 p-4 text-xl text-white"
          >
            C
          </button>

          <button
            onClick={() => operatorClick("÷")}
            className="rounded-lg bg-orange-500 p-4 text-xl text-white"
          >
            ÷
          </button>

          <button
            onClick={() => operatorClick("×")}
            className="rounded-lg bg-orange-500 p-4 text-xl text-white"
          >
            ×
          </button>

          <button
            onClick={() => operatorClick("-")}
            className="rounded-lg bg-orange-500 p-4 text-xl text-white"
          >
            -
          </button>

          <button onClick={() => numberClick("7")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            7
          </button>

          <button onClick={() => numberClick("8")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            8
          </button>

          <button onClick={() => numberClick("9")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            9
          </button>

          <button
            onClick={() => operatorClick("+")}
            className="rounded-lg bg-orange-500 p-4 text-xl text-white"
          >
            +
          </button>

          <button onClick={() => numberClick("4")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            4
          </button>

          <button onClick={() => numberClick("5")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            5
          </button>

          <button onClick={() => numberClick("6")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            6
          </button>

          <button
            onClick={calculate}
            className="row-span-2 rounded-lg bg-blue-500 p-4 text-xl text-white"
          >
            =
          </button>

          <button onClick={() => numberClick("1")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            1
          </button>

          <button onClick={() => numberClick("2")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            2
          </button>

          <button onClick={() => numberClick("3")} className="rounded-lg bg-gray-600 p-4 text-xl text-white">
            3
          </button>

          <button
            onClick={() => numberClick("0")}
            className="col-span-3 rounded-lg bg-gray-600 p-4 text-xl text-white"
          >
            0
          </button>

        </div>

      </div>

    </div>
  )
}

export default App