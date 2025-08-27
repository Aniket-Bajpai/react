import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter = 5

  const addValue = () =>{
    console.log("Add Value", counter)
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    console.log('Subtract value', counter)
    counter = counter - 1
    setCounter(counter - 1) 
  }

  const removeValue = () => {
    setCounter(counter = 0)
  }

  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}>Add</button>
    <br />
    <br />
    <button onClick={subtractValue}>Substract</button>
    <br />
    <br />
    <button  onClick={removeValue}>Remove</button>
    <p> Footer : {counter}</p>
    </>
  )
}

export default App
