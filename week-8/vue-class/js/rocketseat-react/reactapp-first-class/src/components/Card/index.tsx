type Card = {
  text: string;
  age: number
}; 

export function Card({ text = '', age = 0}: Card) {
  return (
    <div>
      <strong>{text}</strong>
      <br></br>
      <small>{age} years old</small>
    </div>
  )
}
