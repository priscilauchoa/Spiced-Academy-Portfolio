import './style.css'

type CardProps = {
  text: string;
}; 

export function Card({ text = ''}: CardProps) {
  return (
    <div className="card">
      <strong>{text}</strong>
      <br></br>
    </div>
  )
}
