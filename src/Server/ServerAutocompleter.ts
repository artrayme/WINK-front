import axios, {AxiosResponse} from "axios";
import {AutocompleteConfig, ServerConfig} from "../globalConfig";

export function getIdtfs(idtfPart: string): Promise<AxiosResponse> {
    return axios.get(ServerConfig.scWinkBackUri + '/element', {
        params: {part: idtfPart, limit: AutocompleteConfig.limit},
        headers: {"Access-Control-Allow-Origin": "*"}
    })
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            // ToDo exception
            console.log(error);
        });
}