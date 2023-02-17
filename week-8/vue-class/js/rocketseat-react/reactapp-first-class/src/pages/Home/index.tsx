import { useState } from 'react'
import './style.css'
import { Card } from '../../components/Card'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Attendence List</h1>
      <Card text='Priscila Flores' age={30}/>
      <input type="text" placeholder='Name'></input>
      <button>Submit</button>
    </div>
  )
}

