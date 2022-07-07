import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardPersonaje from './components/cardPersonaje/cardPersonaje';

function App() {
  const [personajes, setPersonajes] = useState([])

  const getCharacter = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    setPersonajes(response.data.results)
  }

  console.log(personajes)

  useEffect(() => {
    getCharacter()
  }, [])

  return (
    <div className='container'>
      <p> rick and morty</p>
      {
        personajes.map(personaje => (
          <CardPersonaje  key={personaje.id} {...personaje}/>
        ))
      }
    </div>
  );
}

export default App;
