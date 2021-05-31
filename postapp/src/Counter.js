import { useState } from "react"
function Counter() {
  const [counter, setCounter] = useState(0)
  function handleAddCounter() {
    setCounter(counter + 1)
    console.log('Add counter')
  }
  function handleSubtractCounter() {
    setCounter(counter - 1)
    console.log('Subtract counter')
  }

  function handleResetCounter() {
    setCounter(0)
    console.log('Reset counter')
  }
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={handleAddCounter}>Add</button>
      <button onClick={handleSubtractCounter}>Subtract</button>
      <button onClick={handleResetCounter}>Reset</button>


    </div >
  )
}
export default Counter;
