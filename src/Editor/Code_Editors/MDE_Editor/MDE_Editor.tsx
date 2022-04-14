import React from "react";
import CodeEditor from "../../CodeEditor";

import MarkdownEditor from "@uiw/react-markdown-editor";

export default class MDEDitor extends CodeEditor {

    constructor(props) {
        super(props);
        this.state = {...this.state};
    }

    componentWillUnmount = () => {
        this.saveEditorDataFromState();
    };

    componentDidMount = () => {
        this.setState({editor: "MDEditor"});
    };

    onEditorChange = newValue => {
        this.saveEditorData(newValue, '');
        this.setState({code: newValue});
    };

    render() {
        return (
            <div style={{backgroundColor: "#fff", color: "#000"}}>
                <MarkdownEditor value={this.state.code}/>
            </div>
        );
    }
}
