import './style.css'

type Card = {
  text: string;
  age: number
}; 

export function Card({ text = '', age = 0}: Card) {
  return (
    <div className="card">
      <strong>{text}</strong>
      <br></br>
      <small>{age} years old</small>
    </div>
  )
}
