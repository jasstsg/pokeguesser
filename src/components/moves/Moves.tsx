import { PokemonMove } from "pokenode-ts";
import './moves.scss'


function Moves(props: any) {
    const moves = props.moves as PokemonMove[];

    return (
        <div className="pokemon-moves">
            <h3 className="pokemon-font">Learned Moves</h3>
            <div className="move-list">
                {moves.map(m => m.move.name.replace("-", " ")).join(", ")}
            </div>
        </div>
    );
}

export default Moves;