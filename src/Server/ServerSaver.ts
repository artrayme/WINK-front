import axios from "axios";
import {GlobalState, ServerConfig} from "../globalConfig";
import {convertToJson} from "../Utilities/ScsToJsonConverter";

export function saveScs(code: string, name: string) {
    let jsonCode = convertToJson(code).slice(1)
    let request = {
        filename: name,
        nativeFormat: "scs",
        scElements: jsonCode
    }
    console.log(request)

    axios({
        method: 'post',
        url: ServerConfig.scWinkBackUri + '/element',
        data: request
    }).then(response => {
        GlobalState.updateViewportFunction(response.data)
    });
}

export function deleteScs(name: string) {
    axios.delete(ServerConfig.scWinkBackUri + '/element', {params: {name: name}}).then(response => {
        GlobalState.updateViewportFunction("")
    });
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