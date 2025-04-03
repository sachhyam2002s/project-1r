import {useState} from 'react';
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  const addValue = () => {
    //using if to set limit of the count 
    if(count < 20){
      setCount(count + 1)
    }
  }
  const removeValue = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add</button><br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
