import { Pokemon } from "pokenode-ts";


function PokemonData(props: any) {
    const pokemon = props.pokemon as Pokemon;
    var nameData = pokemon?.name.split("-");
    var name = nameData[0];
    var form = nameData.length > 1 ? `(${nameData[1]})` : '';

    return (
        <>
            <div className="flex-row">
                <div className="bio flex-col">
                    <div>Height: {pokemon.height / 10}m</div>
                    <div>Weight: {pokemon.weight / 10}kg</div>
                    <div>Types: {pokemon.types.map(t => t.type.name).join(",")}</div>
                    <div>Abilities: {pokemon.abilities.map(a => a.ability.name).join(",")}</div>
                    <div>Forms: {pokemon.forms.map(f => f.name).join(",")}</div>
                    <div>Species: {pokemon.species.name}</div>
                    <div>Location Area Encounters: {pokemon.location_area_encounters}</div>
                    <div>Held Items: {pokemon.held_items.map(h => h.item.name).join(",")}</div>
                </div>
                <div className="flex-col">
                    <h1 className="capitalize">{`${name} ${form}`}</h1>
                    <img className="sprite" src={pokemon?.sprites.front_default ?? ""} alt="pokemon image" />
                    <div>Stats: {pokemon.stats.map(s => `${s.stat.name} (B:${s.base_stat}/EV:${s.effort})`).join(",")}</div>
                </div>
                <div className="flex-col">
                    <div>Moves: {pokemon.moves.map(m => m.move.name).join(",")}</div>
                </div>
            </div>
        </>
    )
}

export default PokemonData;