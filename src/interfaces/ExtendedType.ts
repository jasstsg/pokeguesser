import { Type } from "pokenode-ts";

export interface ExtendedTypeDictionary {
    [id: string] : ExtendedType
}

/*
    Modification of 'Type' to include the type sprites from the PokeAPI
    https://github.com/Gabb-c/pokenode-ts/blob/v1.20.0/src/models/Pokemon/type.ts
*/
export interface ExtendedType extends Type {
    "sprites": {
        "generation-iii": {
        "colosseum": {
            "name_icon": string
        },
        "emerald": {
            "name_icon": string
        },
        "firered-leafgreen": {
            "name_icon": string
        },
        "ruby-saphire": {
            "name_icon": string
        },
        "xd": {
            "name_icon": string
        }
        },
        "generation-iv": {
        "diamond-pearl": {
            "name_icon": string
        },
        "heartgold-soulsilver": {
            "name_icon": string
        },
        "platinum": {
            "name_icon": string
        }
        },
        "generation-ix": {
        "scarlet-violet": {
            "name_icon": string
        }
        },
        "generation-v": {
        "black-2-white-2": {
            "name_icon": string
        },
        "black-white": {
            "name_icon": string
        }
        },
        "generation-vi": {
        "omega-ruby-alpha-sapphire": {
            "name_icon": string
        },
        "x-y": {
            "name_icon": string
        }
        },
        "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
            "name_icon": string
        },
        "sun-moon": {
            "name_icon": string
        },
        "ultra-sun-ultra-moon": {
            "name_icon": string
        }
        },
        "generation-viii": {
        "brilliant-diamond-and-shining-pearl": {
            "name_icon": string
        },
        "legends-arceus": {
            "name_icon": string
        },
        "sword-shield": {
            "name_icon": string
        }
        }
    }
}