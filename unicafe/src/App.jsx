import { useState } from 'react'

const Otsikko = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>
}

const StaticsticLine = ({ text, value, text2 }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} {text2} </td>
    </tr>
  )
}

const Staticstics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all > 0) {
    const avg = (good + (-1 * bad)) / all || 0 // Näyttää toimivan
    console.log(avg)
    const pospros = (good / all) * 100 || 0

    return (
      <table>
        <tbody>
          <StaticsticLine text="good" value={good} />
          <StaticsticLine text="neutral" value={neutral} />
          <StaticsticLine text="bad" value={bad} />
          <StaticsticLine text="all" value={all} />
          <StaticsticLine text="average" value={avg} />
          <StaticsticLine text="positive" value={pospros} text2="%" />
        </tbody>
      </table>
    )
  }

  return (
    <p>No feedback given</p>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Otsikko text="give feedback" />
      <Button text="good" handler={handleGood} />
      <Button text="neutral" handler={handleNeutral} />
      <Button text="bad" handler={handleBad} />
      <Otsikko text="statistics" />
      <Staticstics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
