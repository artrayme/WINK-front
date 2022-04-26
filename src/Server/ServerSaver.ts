import axios from "axios";
import {GlobalState, ServerConfig} from "../globalConfig";

export function saveScs(code: string, name: string) {

}

export function saveRdf(code: string, name: string) {
    axios({
        method: 'post',
        url: ServerConfig.scWinkBackUri + '/rdf',
        data: {
            rdfContent: btoa(code),
            rdfFileName: name
        }
    }).then(response => {
        GlobalState.updateViewportFunction(response.data)
    });
}

export function deleteRdf(name: string) {
    axios.delete(ServerConfig.scWinkBackUri + '/rdf', {params: {name: name}}).then(response => {
        GlobalState.updateViewportFunction("")
    });
}