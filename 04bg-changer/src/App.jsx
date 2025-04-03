import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#8abbd2")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-500 px-2 py-1 rounded-3xl'>
            <button onClick={() => setColor("white")} className='outline-none px-4 bg-white text-black rounded-4xl shadow-lg'>white</button>
            <button onClick={() => setColor("red")} className='outline-none px-4 bg-red-600 text-white rounded-4xl shadow-lg'>red</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 bg-blue-500 text-white rounded-4xl shadow-lg'>blue</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 bg-green-600 text-white rounded-4xl shadow-lg'>green</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 bg-yellow-400 text-black rounded-4xl shadow-lg'>yellow</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 bg-black text-white rounded-4xl shadow-lg'>black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
