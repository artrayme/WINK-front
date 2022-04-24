import React, {Component} from "react";
import {ServerConfig} from "../../globalConfig";

class ScWebViewport extends Component<any> {

    mainIdtf: string = 'section_disadvantages_modern_technologies_of_computer_systems_design'

    constructor() {
        super("");
        // @ts-ignore
    }

    getFullUri() {
        return ServerConfig.scWebUri + '?sys_id=' + this.mainIdtf + "&scg_structure_view_only=true"
    }

    setMainIdtf(idtf: string) {
        this.mainIdtf = idtf;
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
