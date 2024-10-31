import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NamedAPIResource, NamedAPIResourceList, Pokemon, PokemonClient } from 'pokenode-ts'; // Import the Client
import PokemonData from './components/pokemon-data/PokemonData';

function App() {
  const api = new PokemonClient();
  const [count, setCount] = useState<number>(0);
  const [allPokemon, setAllPokemon] = useState<NamedAPIResource[] | null>(null);
  const [allTypes, setAllTypes] = useState<NamedAPIResource[] | null>(null);
  const [ready, setReady] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  
  const getRandomIntBetween = (min:number, max:number) : number =>  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    async function initialize() {
      const pokemonList = await api.listPokemons(0, 10000);
      const typeList = await api.listTypes(0, 50);
      console.log(typeList);

      setAllPokemon(pokemonList.results);
      setCount(pokemonList.count);
      setAllTypes(typeList.results);

      setReady(true);
    };
    initialize();
  }, []);

  const createTypeDictionary = async (typeList: NamedAPIResource[]) => {

  }

  const getRandomPokemon = async () => {
    if (ready && count > 0 && allPokemon) {
      // e.g. [ "https:", "", "pokeapi.co", "api", "v2", "pokemon", "1023", "" ]
      let urlArray = allPokemon[getRandomIntBetween(0, count - 1)].url.split("/");

      // The id of the pokemon is the second last element in the array
      setPokemon(await api.getPokemonById(parseInt(urlArray[urlArray.length - 2])));

    }
  }

  var renderedPokemonData = (
    pokemon ? <PokemonData className="pokemon-data" pokemon={pokemon}></PokemonData> : <></>
  );
  
  
  return (
    <div className="app-container">
      <div className="app">
          <button id="new-pokemon-button" onClick={() => getRandomPokemon()}>Get New Pokemon</button>
          {renderedPokemonData}
      </div>
    </div>
  )
}

export default App;
