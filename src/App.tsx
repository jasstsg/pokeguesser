import { useEffect, useState } from 'react';
import './App.css';
import { NamedAPIResource, Pokemon } from 'pokenode-ts';
import PokemonData from './components/pokemon-data/PokemonData';
import { ExtendedPokemonClient } from './classes/ExtendedPokemonClient';
import { ExtendedType, ExtendedTypeDictionary } from './interfaces/ExtendedType';

function App() {
  const api = new ExtendedPokemonClient();
  const [count, setCount] = useState<number>(0);
  const [allPokemon, setAllPokemon] = useState<NamedAPIResource[] | null>(null);
  const [allTypes, setAllTypes] = useState<ExtendedTypeDictionary | null>(null);
  const [ready, setReady] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  
  const getRandomIntBetween = (min:number, max:number) : number =>  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    async function initialize() {
      const pokemonList = await api.listPokemons(0, 10000);
      const typeList = await api.listTypes(0, 50);
      const extendedTypeDict = await getExtendedTypeDict(typeList.results);

      setAllPokemon(pokemonList.results);
      setCount(pokemonList.count);
      setAllTypes(extendedTypeDict);

      setReady(true);
    };
    initialize();
  }, []);

  const getExtendedTypeDict = async (typeList: NamedAPIResource[]) => {
    let dict: ExtendedTypeDictionary = {};

    // Map existing types to new extended type interface
    for (let i = 0; i < typeList.length; i++) {
      let typeName = typeList[i].name;
      let extendedType = await api.getExtendedTypeByName(typeName);
      dict[typeName] = extendedType;
    }
    
    return dict;
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
    pokemon ? <PokemonData className="pokemon-data" pokemon={pokemon} types={allTypes}></PokemonData> : <></>
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
