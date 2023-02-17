import { useState } from 'react'
import './style.css'
import { Card } from '../../components/Card'

export function Home() {
  const [student, setStudent] = useState<string>()

  function handleNameChange(name: string) {
    setStudent(name)
    console.log(name)
  }

  return (
    <div className='container'>
      <h1>Attendence List</h1>
      <h1>Name: {student}</h1>
      <Card text='Priscila Flores' age={30}/>
      <Card text='Jaime Flores' age={34}/>
      <input type="text" placeholder='Name' onChange={e => handleNameChange(e.target.value)}></input>
      <button>Submit</button>
    </div>
  )
}

