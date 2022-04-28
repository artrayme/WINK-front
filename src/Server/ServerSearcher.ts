import axios from "axios";
import {GlobalState, ServerConfig} from "../globalConfig";

export function find(code: string) {
    console.log(code)
    axios({
        method: 'post',
        url: ServerConfig.scWinkBackUri + '/searcher',
        headers: {
            'Content-Type': 'application/json',
        },
        data: code
    }).then(response => {
        GlobalState.updateViewportFunction(response.data)
    });

}