import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [current, setCurrent] = useState(null)
  const [error, setError] = useState(null)

  return (
    <>
      <h1>Unit converter</h1>

      <ul>
        <li onClick={() => setCurrent(0)}>Kilometre &rarr; Mile</li>
        <li onClick={() => setCurrent(1)}>Degree &rarr; Grad</li>
        <li onClick={() => setCurrent(2)}>PLN &rarr; EURO</li>
        <li onClick={() => setCurrent(3)}>Litre &rarr; Galon</li>
        <li onClick={() => setCurrent(4)}>Newtons &rarr; Poundals</li>
        <li onClick={() => setCurrent(5)}>Pascal &rarr; Bar</li>
        <li onClick={() => setCurrent(6)}>Kg &rarr; Pound</li>
      </ul>



    </>
  )
}

export default App
