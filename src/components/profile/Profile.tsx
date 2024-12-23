import { PokemonSprites, PokemonType } from "pokenode-ts";
import './profile.scss'
import { ExtendedTypeDictionary } from "../../interfaces/ExtendedType";
import HiddenElement from "../hidden-element/HiddenElement";


function Profile(props: any) {
    
    const sprites = props.sprites as PokemonSprites;
    const types = props.types as PokemonType[];
    const allTypes = props.allTypes as ExtendedTypeDictionary;

    
    var nameData = props.name.split("-");
    var name = nameData[0];
    var form = nameData.length > 1 ? `(${nameData[1]})` : '';

    const getTypes = (types: PokemonType[]) => {
        return types.map(t => {
            let typeName = t.type.name;
            let typeKey = `type-${typeName}`;
            return (
                <img key={typeKey} 
                    className={`type-tag ${typeKey}`}
                    src={getTypeSprite(typeName)}
                    alt={typeKey}></img>);
        })
    };

    const getTypeSprite = (type: string) => {
        return allTypes[type].sprites["generation-viii"]["sword-shield"].name_icon;
    }

    return (
        <div className="pokemon-profile">
            <h2 className="pokemon-font">
                <HiddenElement className="selected-pokemon">{`${name} ${form}`}</HiddenElement>
            </h2>
            <div id="types"><HiddenElement>{getTypes(types)}</HiddenElement></div>
            <HiddenElement className="selected-pokemon">
                <img id="sprite-default" src={sprites.front_default ?? ""} alt="pokemon default image" />
                <img id="sprite-shiny" src={sprites.front_shiny ?? ""} alt="pokemon shiny image" />
            </HiddenElement>
        </div>
    );
}

export default Profile;