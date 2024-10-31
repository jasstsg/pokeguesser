import { Pokemon, PokemonType } from "pokenode-ts";
import './pokemon-data.css';
import Stats from '../stats/Stats';


function PokemonData(props: any) {
    const pokemon = props.pokemon as Pokemon;
    var nameData = pokemon?.name.split("-");
    var name = nameData[0];
    var form = nameData.length > 1 ? `(${nameData[1]})` : '';

    const getTypes = (types: PokemonType[]) => {
        return types.map(t => {
            let typeKey = `type-${t.type.name}`;
            return (<span key={typeKey} className={`type-tag ${typeKey}`}>{t.type.name}</span>);
        })
    };

    console.log(getTypes(pokemon.types));

    return (
        <div className="pokemon-data capitalize grid-1-1">
                <div className="bio">
                    <div>
                        <h1 className="pokemon-name">{`${name} ${form}`}</h1>
                        <div id="types">{getTypes(pokemon.types)}</div>
                    </div>
                    <div className="bio-details grid-1-1">
                        <Stats stats={pokemon.stats}></Stats>
                        <div>
                            <div className="text-center align-center grid-1-1-1">
                                <div className="border-right h-full">{pokemon.height / 10}m</div>
                                <img id="sprite-default" src={pokemon.sprites.front_default ?? ""} alt="pokemon default image" />
                                <img id="sprite-shiny" src={pokemon.sprites.front_shiny ?? ""} alt="pokemon shiny image" />
                            </div>
                            <div>
                                <div>Weight: {pokemon.weight / 10}kg</div>
                                <div>Held Items: {pokemon.held_items.length > 0 ? pokemon.held_items.map(h => h.item.name.replace("-", " ")).join(",") : "None"}</div>
                                <div>Abilities: {pokemon.abilities.map(a => a.ability.name.replace("-", " ")).join(", ")}</div>
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