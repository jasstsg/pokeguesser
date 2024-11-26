import { NamedAPIResource, Pokemon, PokemonStat } from "pokenode-ts";
import './bio.scss'
import HiddenElement from "../hidden-element/HiddenElement";


function Bio(props: any) {
    const pokemon = props.pokemon as Pokemon;

    return (
        <div className="pokemon-bio">
            <h3 className="pokemon-font">Bio</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Height</td>
                        <td><HiddenElement>{pokemon.height / 10}m</HiddenElement></td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td><HiddenElement>{pokemon.weight / 10}kg</HiddenElement></td>
                    </tr>
                    <tr>
                        <td>Held Items</td>
                        <td>
                            <HiddenElement>
                                {
                                    pokemon.held_items.length > 0 ?
                                        pokemon.held_items.map(h => h.item.name.replace("-", " "))
                                            .join(",") : "None"
                                }
                            </HiddenElement>
                        </td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td>
                            <HiddenElement>
                                {
                                    pokemon.abilities.map(a => a.ability.name.replace("-", " "))
                                        .join(", ")
                                }
                            </HiddenElement>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bio;