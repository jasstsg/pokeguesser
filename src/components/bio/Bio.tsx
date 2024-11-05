import { NamedAPIResource, Pokemon, PokemonStat } from "pokenode-ts";
import './bio.scss'


function Bio(props: any) {
    const pokemon = props.pokemon as Pokemon;

    return (
        <div className="pokemon-bio">
            <h3 className="pokemon-font">Bio</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Height</td>
                        <td>{pokemon.height / 10}m</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{pokemon.weight / 10}kg</td>
                    </tr>
                    <tr>
                        <td>Held Items</td>
                        <td>
                            {
                                pokemon.held_items.length > 0 ?
                                    pokemon.held_items.map(h => h.item.name.replace("-", " "))
                                        .join(",") : "None"
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td>
                            {
                                pokemon.abilities.map(a => a.ability.name.replace("-", " "))
                                    .join(", ")
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bio;