import { useState } from 'react'

import './App.css'
import { FetchData } from './api'
import Card from './Component/Card'

function App() {
  const [pokemons, setpokemons] = useState([])
  const [maxscore,setmaxscore]=useState(0)
  const [score,setScore]=useState(0)
  
  const [clickedPokemons,setclickedPokemons]=useState(new Set())


  const shuffleArray= (array) =>{
    return array.sort(()=> Math.random()-0.5)

  }
  const handleCardClick =(pokemonName)=>{

    if(clickedPokemons.has(pokemonName)){
      alert(`${pokemonName} has already been pressed!`);

      setScore(0)
      setclickedPokemons(new Set())
    }
    else{
      setScore(score=>{
        
        const newscore=score+1

        if(newscore>maxscore){
          setmaxscore(newscore)
        }
        return newscore
      })
  

      setclickedPokemons(new Set(clickedPokemons).add(pokemonName))
      setpokemons(shuffleArray([...pokemons]))
    }

  }


  return (
    <div className='main-container'>

      <FetchData setpokemons={setpokemons}/>
      <h2>Score: {score}</h2>
      <h3>Max Score: {maxscore}</h3>
      <div className="pokemon-cards">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.name}
            Name={pokemon.name}
            Image={pokemon.image}
            onClick={() => handleCardClick(pokemon.name)}
          />
        ))}
      </div>


    </div>
  )
}

export default App
