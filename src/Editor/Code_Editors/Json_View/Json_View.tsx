import React from "react";
import CodeEditor from "../../CodeEditor";
import JSONInput from 'react-json-editor-ajrm';

export default class JsonView extends CodeEditor {

    constructor(props) {
        super(props);
        this.state = {...this.state};
    }

    componentDidMount = () => {
        this.setState({editor: "JsonView"});
    };

    componentWillUnmount = () => {
        this.saveEditorDataFromState();
    };

    updateCode = e => {
        // const newCode = JSON.stringify(e.updated_src);
        this.setState({
            code: e.updated_src
        });
        // this.updateDocument(newCode);
    };

    makeJSON(code) {
        try {
            return JSON.parse(code);
        } catch {
            return {name: this.state.documentName};
        }
    }

    //ToDo config
    render() {
        this.makeJSON(this.state.code);
        return (
            <JSONInput
                height="100%"
                width="100%"
                // placeholder={JSON.parse("{ToDo: config}")}
                // placeholder={JSON.stringify("{ToDo: config}")}
                // locale={locale}
                // onChange={(e) => {
                //     this.updateCode(e)
                // }}
            />
        );
    }
}
