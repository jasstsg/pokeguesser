import { ENDPOINTS, PokemonClient } from "pokenode-ts";
import { ExtendedType } from "../interfaces/ExtendedType";
import { AxiosError, AxiosResponse } from "axios";

export class ExtendedPokemonClient extends PokemonClient {

    /*  
        Modification of the following method, using my 'ExtendedType':
        https://github.com/Gabb-c/pokenode-ts/blob/v1.20.0/src/clients/pokemon.client.ts
    */
    public async getExtendedTypeByName(name: string): Promise<ExtendedType> {
        return new Promise<ExtendedType>((resolve, reject) => {
          this.api
            .get<ExtendedType>(`${ENDPOINTS.TYPE}/${name}`)
            .then((response: AxiosResponse<ExtendedType>) => resolve(response.data))
            .catch((error: AxiosError<string>) => reject(error));
        });
    }
}

