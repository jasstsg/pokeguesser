import { Pokemon } from "pokenode-ts";
import './pokemon-data.css';


function PokemonData(props: any) {
    const pokemon = props.pokemon as Pokemon;
    var nameData = pokemon?.name.split("-");
    var name = nameData[0];
    var form = nameData.length > 1 ? `(${nameData[1]})` : '';

    return (
        <div className="pokemon-data">
            <div className="flex-row">
                <div className="basic-info flex-col">
                    <h1 className="capitalize">{`${name} ${form}`}</h1>
                    <img className="sprite" src={pokemon.sprites.front_default ?? ""} alt="pokemon image" />
                    <div>{pokemon.stats.map(s => (
                        <table>
                            <tbody>
                                <tr>
                                    <td>{s.stat.name}</td>
                                    <td>{s.base_stat}</td>
                                    <td>{s.effort}</td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </div>
                </div>
                <div className="bio-info flex-col">
                    <div>Height: {pokemon.height / 10}m</div>
                    <div>Weight: {pokemon.weight / 10}kg</div>
                    <div>Types: {pokemon.types.map(t => t.type.name).join(",")}</div>
                    <div>Abilities: {pokemon.abilities.map(a => a.ability.name.replace("-", " ")).join(",")}</div>
                    <div>Forms: {pokemon.forms.map(f => f.name).join(",")}</div>
                    <div>Species: {pokemon.species.name}</div>
                    <div>Held Items: {pokemon.held_items.map(h => h.item.name.replace("-", " ")).join(",")}</div>
                </div>
                <div className="moves-info flex-col">
                    <div>Moves: {pokemon.moves.map(m => m.move.name.replace("-", " ")).join(",")}</div>
                </div>
            </div>
        </div>
    )
}

export default PokemonData;