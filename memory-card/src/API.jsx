import { useEffect } from "react"

export function FetchData({setpokemons}){
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')


    
        .then((response)   => response.json())
        .then((data)=>
    {
        const pokemonsData=[]

        

            data.results.forEach((pokemon) =>{
                fetch(pokemon.url)
                .then((response) => response.json())
                .then((pokemonData)=>

                    {
                        const poke_img= pokemonData.sprites.other['home'].front_default
                        console.log("yoo")
                        
                        console.log(`${pokemon.name}, ${poke_img}`)
                        pokemonsData.push({
                            name: pokemon.name,
                            image: poke_img})

                
                    if (pokemonsData.length === data.results.length) {
                        setpokemons(pokemonsData);
                      }
                      console.log(pokemonsData)

                    })
                })
            })


            },[setpokemons])
        
    
    

}