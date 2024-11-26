import { PokemonMove } from "pokenode-ts";
import './moves.scss'
import HiddenElement from "../hidden-element/HiddenElement";


function Moves(props: any) {
    const moves = props.moves as PokemonMove[];

    return (
        <div className="pokemon-moves">
            <h3 className="pokemon-font">Learned Moves</h3>
            <div className="move-list">
                <HiddenElement>
                    {moves.map(m => m.move.name.replace("-", " ")).join(", ")}
                </HiddenElement>
            </div>
        </div>
    );
}

export default Moves;