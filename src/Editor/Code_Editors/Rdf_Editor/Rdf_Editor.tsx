import React from "react";
import CodeEditor, {CodeEditorProps, Toster} from "../../CodeEditor";
import Editor from "@monaco-editor/react";
import {Button, Switch} from "@blueprintjs/core";
import {editor} from "monaco-editor";
import {deleteRdf, saveRdf} from "../../../Server/ServerSaver";

export default class RdfEditor extends CodeEditor {
    editor: editor.IStandaloneCodeEditor | null;
    isSaved: boolean;
    isUploaded: boolean = false;

    constructor(props: CodeEditorProps) {
        super(props);
        this.editor = null;
        this.isSaved = true;
        this.editorOptions = {saveHotkey: true};
        this.registerOptions(this.editorOptions);
    }

    componentWillMount = () => {
    };

    componentWillUnmount = () => {
        const code = this.editor.getValue();
        const name = this.state.documentName;
        if (!this.isSaved) {
            Toster.show({
                message: (
                    <div>
                        Do you want to save the changes you made in "{name}"
                        <Button
                            minimal
                            onClick={() => {
                                this.updateDocument(code);
                                Toster.clear();
                            }}
                            icon="tick"
                            text="yes"
                        />
                    </div>
                ),
                intent: "warning",
                timeout: 0
            });
        }
    };

    componentDidMount = () => {
        this.setState({editor: "Monaco"});
    };

    onEditorMount = (
        getEditorValue: () => string,
        editor: editor.IStandaloneCodeEditor
    ) => {
        this.editor = editor;
        this.editor.setValue(this.state.code);
        this.isSaved = true;
        this.editor.addAction({
            id: "NNP_SAVE",
            label: "save file",
            keybindings: [2048 | 49],
            run: this.save,
            contextMenuGroupId: "9_cutcopypaste"
        });
        this.editor.onKeyDown(() => {
            this.onChange();
        });
    };

    save = () => {
        this.updateDocument(this.editor.getValue());
        Toster.show({message: "saved", intent: "success"});
    };

    onChange = () => {
        this.isSaved = false;
    };

    saveRdf = () => {
        saveRdf(this.state.code, this.state.documentName)
    }

    deleteRdf = () => {
        deleteRdf(this.state.documentName)
    }

    render() {
        return (
            <div style={{zIndex: 5}}>
                <Switch onChange={() => {
                    if (this.isUploaded) {
                        this.deleteRdf()
                        this.isUploaded = false;
                    } else {
                        this.saveRdf()
                        this.isUploaded = true;
                    }
                }}>Save</Switch>
                <Editor
                    theme="vs-dark"
                    options={{
                        automaticLayout: true
                    }}
                    language="XML"
                    editorDidMount={this.onEditorMount}
                />
            </div>
        );
    }
}
