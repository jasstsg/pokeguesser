import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NamedAPIResource, Pokemon, PokemonClient } from 'pokenode-ts'; // Import the Client

function App() {
  const api = new PokemonClient();
  const [count, setCount] = useState<number>(0);
  const [allPokemon, setAllPokemon] = useState<NamedAPIResource[] | null>(null);
  const [ready, setReady] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [clicked, setClicked] = useState(0);
  
  const getRandomIntBetween = (min:number, max:number) : number =>  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    async function initialize() {
      const res = await api.listPokemons(0, 10000);
      setAllPokemon(res.results)
      setCount(res.count);
      setReady(true);
    };
    initialize();
  }, []);

  useEffect(() => {
    async function getRandomPokemon() {

      if (ready && count > 0 && allPokemon) {
        // e.g. [ "https:", "", "pokeapi.co", "api", "v2", "pokemon", "1023", "" ]
        let urlArray = allPokemon[getRandomIntBetween(0, count - 1)].url.split("/");

        // The id of the pokemon is the second last element in the array
        setPokemon(await api.getPokemonById(parseInt(urlArray[urlArray.length - 2])));

      }

    }

    getRandomPokemon();
  }, [ready, clicked]);

  if (pokemon) {
    return (
      <div className="App">
        <header className="App-header">
          <button id="new-pokemon-button" onClick={() => setClicked(clicked + 1)}>Get New Pokemon</button>
          <h1>{pokemon?.name}</h1>
          <img src={pokemon?.sprites.front_default ?? ""} alt="pokemon image" />
        </header>
      </div>
    )
  }
  else {
    return <>Loading...</>
  }
}

export default App;
