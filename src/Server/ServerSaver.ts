import axios from "axios";
import {GlobalState, ServerConfig} from "../globalConfig";

export function saveScs(code: string, name: string) {

}

export function saveRdf(code: string, name: string) {
    console.log(name)
    axios({
        method: 'post',
        url: ServerConfig.scWinkBackUri + '/rdf',
        data: {
            rdfContent: btoa(code),
            rdfFileName: name
        }
    }).then(response => {
        GlobalState.currentUri = response.data
        console.log(response.data)
    });
}

export function deleteRdf(name: string) {
    axios.delete(ServerConfig.scWinkBackUri + '/rdf/delete/' + name).then(response => {
        GlobalState.currentUri = ""
        console.log("delete " + name)
    });
}