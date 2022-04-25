import React, {Component} from "react";
import {GlobalState, ServerConfig} from "../../globalConfig";
import { Button } from "@blueprintjs/core";

class ScWebViewport extends Component<any> {

    state = {
        requirementKey: Math.random()
    };


    constructor() {
        super("")
        // @ts-ignore
    }

    getFullUri() {
        return ServerConfig.scWebUri + '?sys_id=' + GlobalState.currentUri + "&scg_structure_view_only=true"
    }

    render() {
        return <div style={{height: "99%"}}>
            <Button onClick={()=>{
                this.setState({ requirementKey: Math.random() });
            }
            }>refresh</Button>
            <iframe
                title="struct view"
                src={this.getFullUri()}
                className="Fill"
            />
        </div>
    }

}

export default ScWebViewport;
