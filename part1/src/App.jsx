import { useState } from 'react'

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  const [counter, setCounter] = useState(0)
  console.log("render", counter)
  const nimi = "Pekka"
  const ika = 10


  const increaseByOne = () => {
    console.log("arvo ennen korotusta", counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log("arvo ennen laskua", counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log("arvo oli", counter, "ennen nollausta")
    setCounter(0)
  }

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  console.log('rendering...', counter)

  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  const Display = ({ counter }) => {
    return (
      <div>{counter}</div>
    )
  }

  const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Display counter={counter} />
      <Button handleClick={increaseByOne}
        text="plus"
      />
      <Button handleClick={setToZero}
        text="zero"
      />
      <Button handleClick={decreaseByOne}
        text="minus"
      />
    </div>
  )
}

export default App
