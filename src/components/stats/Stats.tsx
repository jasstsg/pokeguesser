import { PokemonStat } from "pokenode-ts";
import './stats.scss'
import HiddenElement from "../hidden-element/HiddenElement";


function Stats(props: any) {
    const stats = props.stats as PokemonStat[];

    const getStatShortForm = (statName: string) => {
        switch(statName){
            case "hp": return "HP";
            case "attack": return "Attack";
            case "defense": return "Defense";
            case "special-attack": return "Sp. Atk.";
            case "special-defense": return "Sp .Def.";
            case "speed": return "Speed";
        }
    }

    return (
        <div className="pokemon-stats">
            <h3 className="pokemon-font">Stats</h3>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Base</th>
                        <th>EV</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map(s => (
                        <tr key={`row-${s.stat.name}`}>
                            <td>{getStatShortForm(s.stat.name)}</td>
                            <td><HiddenElement>{s.base_stat}</HiddenElement></td>
                            <td><HiddenElement>{s.effort}</HiddenElement></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Stats;