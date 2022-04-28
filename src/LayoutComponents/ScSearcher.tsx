import React, {Component} from "react";
import MonacoEditor from "react-monaco-editor";
import {Button} from "@blueprintjs/core";
import {find} from "../Server/ServerSearcher";
import {convertToJson} from "../Utilities/SearcherJsonParser/SearcherConverter";

export interface ScSearcherState {
    code: string;
}


export class ScSearcher extends Component<any, ScSearcherState> {
    code: string = ""

    constructor(props) {
        super(props);
        this.state = {
            code: ""
        }
    }

    editorDidMount(editor, monaco) {
        editor.focus();
    }

    onChange(newValue, e) {
        console.log('onChange', newValue, e);
        // this.setState({code = newValue})
        this.setState({code: newValue});

    }

    render() {
        // const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <div>
                <Button onClick={() => {
                    find(convertToJson(this.code));
                }}>Find</Button>
                <MonacoEditor
                    width="800"
                    height="600"
                    language="javascript"
                    theme="vs-dark"
                    value={this.code}
                    options={options}
                    onChange={(val) => this.code = val}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }

}