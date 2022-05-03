import React from "react";
import CodeEditor, {CodeEditorProps} from "../../CodeEditor";
import MonacoEditor from 'react-monaco-editor';
import {config, getCompletionProvider, language, scsTheme} from "../../../Utilities/scs-support";
import {convertOldGwfToNew} from "../../../Utilities/ScgConverter";
import {convertGwfToScs} from "../../../Utilities/ScsConverter";
import {getDocumentLanguage} from "../../../Storage/fileutils";
import {Switch} from "@blueprintjs/core";
import {saveScs} from "../../../Server/ServerSaver";

const editorWillMount = monaco => {
    monaco.languages.register({id: 'scs'});
    monaco.languages.registerCompletionItemProvider('scs', getCompletionProvider(monaco));
    monaco.languages.setMonarchTokensProvider('scs', language);
    monaco.languages.setLanguageConfiguration('scs', config);
    monaco.editor.defineTheme('scs', scsTheme);
}

export default class Scs_Editor extends CodeEditor {
    isSaved: boolean;
    isUploaded: boolean = false;

    constructor(props: CodeEditorProps) {
        super(props);
        let code = this.state.code
        if (getDocumentLanguage(this.state.documentName) === 'gwf') {
            code = convertOldGwfToNew(code)
            code = convertGwfToScs(code)
        }
        this.state = {
            language: 'scs',
            editor: 'ScsEditor',
            documentName: props.documentName,
            code: code,
            editorData: ''
        };
        this.isSaved = true;
        this.editorOptions = {saveHotkey: true};
        this.registerOptions(this.editorOptions);
    }

    componentDidMount = () => {
        this.setState({editor: "ScsEditor"});
    };

    editorDidMount(editor, monaco) {
        monaco.languages.register({id: 'scs'});
        monaco.languages.registerCompletionItemProvider('scs', getCompletionProvider(monaco));
        monaco.languages.setMonarchTokensProvider('scs', language);
        monaco.languages.setLanguageConfiguration('scs', config);
        monaco.editor.defineTheme('scs', scsTheme);
        editor.focus();
    }

    onChange = (newValue) => {
        this.updateDocument(newValue);
        // Toster.show({message: "saved", intent: "success"});
    };

    render() {
        return (
            <div style={{zIndex: 5}}>
                <Switch onChange={() => {
                    if (this.isUploaded) {
                        this.saveScs()
                        this.isUploaded = false;
                    } else {
                        this.deleteScs()
                        this.isUploaded = true;
                    }
                }}>Save</Switch>
                <MonacoEditor
                    language="scs"
                    theme={"scs"}
                    options={{
                        automaticLayout: true
                    }}
                    value={this.state.code}
                    onChange={this.onChange.bind(this)}
                    editorWillMount={editorWillMount}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }

    private saveScs() {
        // saveScs(this.state.code, this.state.documentName)
    }

    private deleteScs() {

    }
}
