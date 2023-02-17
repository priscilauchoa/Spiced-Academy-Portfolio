import './style.css'

type CardProps = {
  text: string;
  age: number
}; 

export function Card({ text = '', age = 0}: CardProps) {
  return (
    <div className="card">
      <strong>{text}</strong>
      <br></br>
      <small>{age} years old</small>
    </div>
  )
}
