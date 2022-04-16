import React from "react";
import CodeEditor, {CodeEditorProps} from "../../CodeEditor";
import Editor from 'react-monaco-editor';
import {editor} from "monaco-editor";
import {config, getCompletionProvider, language, scsTheme} from "../../../Utilities/scs-support";
import {convertOldGwfToNew} from "../../../Utilities/ScgConverter";
import {convertGwfToScs} from "../../../Utilities/ScsConverter";


export default class Scs_Editor extends CodeEditor {
    editor: editor.IStandaloneCodeEditor | null;
    isSaved: boolean;

    constructor(props: CodeEditorProps) {
        super(props);
        let code = this.state.code
        if (this.state.documentName.endsWith('.gwf')) {
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
        this.editor = null;
        this.isSaved = true;
        this.editorOptions = {saveHotkey: true};
        this.registerOptions(this.editorOptions);
    }

    editorWillMount = monaco => {
        this.editor = monaco.editor
        monaco.languages.register({id: 'scs'});
        monaco.languages.registerCompletionItemProvider('scs', getCompletionProvider(monaco));
        monaco.languages.setMonarchTokensProvider('scs', language);
        monaco.languages.setLanguageConfiguration('scs', config);
        monaco.editor.defineTheme('scs', scsTheme);
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
        // editor.focus();
    }

    onChange = (newValue) => {
        this.updateDocument(newValue);
        // Toster.show({message: "saved", intent: "success"});
    };

    render() {
        return (
            <div style={{zIndex: 5}}>
                <Editor
                    language="scs"
                    theme={"scs"}
                    options={{
                        automaticLayout: true
                    }}
                    value={this.state.code}
                    onChange={this.onChange.bind(this)}
                    editorWillMount={this.editorWillMount}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }
}
