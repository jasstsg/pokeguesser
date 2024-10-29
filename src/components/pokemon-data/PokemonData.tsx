import { Pokemon } from "pokenode-ts";
import './pokemon-data.css';
import Stats from '../stats/Stats';


function PokemonData(props: any) {
    const pokemon = props.pokemon as Pokemon;
    var nameData = pokemon?.name.split("-");
    var name = nameData[0];
    var form = nameData.length > 1 ? `(${nameData[1]})` : '';

    return (
        <div className="pokemon-data capitalize grid-1-1">
                <div className="bio">
                    <div className="pokemon-name">
                        <h1>{`${name} ${form}`} [{pokemon.types.map(t => t.type.name).join(",")}]</h1>
                    </div>
                    <div className="bio-details grid-1-1">
                        <Stats stats={pokemon.stats}></Stats>
                        <div>
                            <div className="sprites">
                                <img src={pokemon.sprites.front_default ?? ""} alt="pokemon default image" />
                                <img src={pokemon.sprites.front_shiny ?? ""} alt="pokemon shiny image" />
                            </div>
                            <div>
                                <div>Height: {pokemon.height / 10}m | Weight: {pokemon.weight / 10}kg</div>
                                <div>Abilities: {pokemon.abilities.map(a => a.ability.name.replace("-", " ")).join(",")}</div>
                                <div>Held Items: {pokemon.held_items.length > 0 ? pokemon.held_items.map(h => h.item.name.replace("-", " ")).join(",") : "None"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="moves">
                <h3>Moves</h3>
                <div>
                    {pokemon.moves.map(m => m.move.name.replace("-", " ")).join(", ")}
                </div>
            </div>
        </div>
    )
}

export default PokemonData;