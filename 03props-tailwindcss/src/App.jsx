import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username: 'react',
    years: 20,
  }
  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-2xl mb-4'>Tailwind test</h1>
      <Card username="react" btnTxt="Next" someObj={myObj} array={newArr}/>
      <Card username="vite" btnTxt="More"/>
      
    </>
  )
}

export default App
