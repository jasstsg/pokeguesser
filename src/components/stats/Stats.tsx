import { PokemonStat } from "pokenode-ts";


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
                        <tr>
                            <td>{getStatShortForm(s.stat.name)}</td>
                            <td>{s.base_stat}</td>
                            <td>{s.effort}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Stats;