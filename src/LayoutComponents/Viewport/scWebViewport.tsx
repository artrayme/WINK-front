import React, {Component} from "react";
import {GlobalState, ServerConfig} from "../../globalConfig";

class ScWebViewport extends Component<any> {

    currentName = ""

    state = {
        requirementKey: Math.random()
    };


    constructor() {
        super("")
        GlobalState.updateViewportFunction = this.updateViewport.bind(this);
        // @ts-ignore
    }

    updateViewport(name: string) {
        this.currentName = name;
        this.setState({requirementKey: Math.random()});
    }

    getFullUri() {
        return ServerConfig.scWebUri + '?sys_id=' + this.currentName + "&scg_structure_view_only=true"
    }

    render() {
        return <div style={{height: "99%"}}>
            <iframe
                title="struct view"
                src={this.getFullUri()}
                className="Fill"
            />
        </div>
    }

}

export default ScWebViewport;
