import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-red-500 text-4xl ">Hello</h1>
      <p className='text-blue-900 text-4xl bg-red-500'>This is new project Vite</p>
    </>
  )
}

export default App
