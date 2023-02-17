import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Attendence List</h1>
      <input type="text" placeholder='Name'></input>
      <button>Submit</button>
    </>
  )
}

export default Home
