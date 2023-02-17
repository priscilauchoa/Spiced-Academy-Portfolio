import { useState, useEffect } from 'react'
import './style.css'
import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState<string>()
  const [students, setStudents] = useState<{name: string}[]>([])
  const [user, setUser] = useState<{name: string, avatar: string}[]>([])

  useEffect(() => {
    fetch("https://api.github.com/users/priscilauchoa")
      .then(resp => resp.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url
       })
      })
  }, [students])

// name: string, age: number
  function handleNameChange(name: string) {
    setStudentName(name)
  }
  function handleAddStudent(name: string) {
    const newStudent = { name: studentName }

    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <div className='container'>
      <header> <h1>Attendence List</h1>
        <div> <strong>{ user.name}</strong>
        <img className='avatar' src={user.avatar} /></div>
      </header>
      <input type="text" placeholder='Name' onChange={e => handleNameChange(e.target.value)}></input>
      <button onClick={handleAddStudent}>Add student</button>

        {students.map(student =><Card key={Math.random()} text={student.name}/>)
 }
    </div>
  )
}

