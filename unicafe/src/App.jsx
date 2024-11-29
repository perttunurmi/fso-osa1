import { useState } from 'react'

const Otsikko = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Staticstics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const avg = (1 * good) + (0 * neutral) + (-1 * bad) / all || 0 // Näyttää toimivan
  const pospros = (good / all)*100 || 0

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {avg}</p>
      <p>positive {pospros} %</p>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Otsikko text="give feedback" />
      <button onClick={() => setGood(good + 1)} > good </button>
      <button onClick={() => setNeutral(neutral + 1)} > neutral </button>
      <button onClick={() => setBad(bad + 1)} > bad </button>
      <Otsikko text="statistics" />
      <Staticstics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
