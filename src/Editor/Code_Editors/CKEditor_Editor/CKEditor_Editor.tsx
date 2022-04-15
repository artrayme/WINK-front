import React from "react";
import CodeEditor from "../../CodeEditor";
import CKEditor from "@ckeditor/ckeditor5-react";
import classicEditor from "@ckeditor/ckeditor5-build-classic";
import "./styles.css"
export default class CKEditorEditor extends CodeEditor {
    componentDidMount = () => {
        this.setState({editor: "CKEditorEditor"});
    };
    onEditorChange = (e, editor) => {
        const data = editor.getData();
        this.updateDocument(data);
    };
    componentWillUnmount = () => {
    };

    render() {
        const code = this.state.code;
        return (
            <CKEditor
                editor={classicEditor}
                data={code}
                onChange={this.onEditorChange}
            />
        );
    }
}
