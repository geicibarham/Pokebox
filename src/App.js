import { useState, UseEffect, useEffect } from 'react'
import './App.css';
import Header from './components/header/Header';
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then((data) => data.json())
        .then(setData)
        console.log(data)

    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
