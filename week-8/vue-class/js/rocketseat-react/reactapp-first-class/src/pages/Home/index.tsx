import { useState } from 'react'
import './style.css'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Attendence List</h1>
      <input type="text" placeholder='Name'></input>
      <button>Submit</button>
    </div>
  )
}

