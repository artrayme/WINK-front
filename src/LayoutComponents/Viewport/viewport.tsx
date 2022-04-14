import React, {Component} from "react";

import StorageManager, {codeDir} from "../../Storage/storageManager";
import {getDocumentLanguage} from "../../Storage/fileutils";

interface ViewportProps {
    document: string | null;
}

interface ViewportState {
    index: number;
    code: string;
}

class Viewport extends Component<ViewportProps, ViewportState> {
    Storage: StorageManager;

    constructor(props: ViewportProps) {
        super(props);
        this.Storage = new StorageManager();
        this.state = {
            index: 0,
            code: "",
        };
    }

    componentDidMount() {
        setInterval(() => this.codeTick(), 1500);
    }

    getPrismLangusage = () => {
        const lang: any = getDocumentLanguage(this.props.document);
        return lang;
    };

    codeTick() {
        if (this.props.document) {
            this.Storage.getFile(this.props.document, codeDir).then((data) => {
                this.setState({
                    code: data,
                });
            });
        }
    }

    render() {
        return <div style={{height: "99%"}}>
            <iframe
                title="struct view"
                src="http://127.0.0.1:8000?sys_id=section_disadvantages_modern_technologies_of_computer_systems_design&scg_structure_view_only=true"
                className="Fill"
            />
        </div>

    }

}

export default Viewport;
