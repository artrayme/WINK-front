import React from "react";
import MonacoEditor from "react-monaco-editor";
import {Button} from "@blueprintjs/core";


export class ScSearcher extends React.Component {
    code: string

    constructor(props) {
        super(props);
    }

    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }

    convert(code: string) {

    }

    render() {
        // const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <div>
                <Button onClick={() => {

                }}>Find</Button>
                <MonacoEditor
                    width="800"
                    height="600"
                    language="javascript"
                    theme="vs-dark"
                    value={this.code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }

}