import { Pokemon } from "pokenode-ts";
import './pokemon-data.scss';
import Stats from '../stats/Stats';
import Moves from "../moves/Moves";
import Profile from "../profile/Profile";
import Bio from "../bio/Bio";


function PokemonData(props: any) {
    const pokemon = props.pokemon as Pokemon;

    return (
        <div className="pokemon-data capitalize">
            <Profile name={pokemon.name} 
                sprites={pokemon.sprites}
                types={pokemon.types} 
                allTypes={props.types}></Profile>
            <Stats stats={pokemon.stats}></Stats>
            <Bio pokemon={pokemon}></Bio>
            <Moves moves={pokemon.moves}></Moves>
        </div>
    )
}

export default PokemonData;