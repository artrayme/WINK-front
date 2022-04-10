import React, {Component} from "react";

import Tabs from "../../UIComponents/tabs";
import {Pre, LineNo} from "./styles";
import Highlight, {defaultProps} from "prism-react-renderer";
import {DarkTheme} from "./theme";
import StorageManager, {codeDir} from "../../Storage/storageManager";
import {getDocumentLanguage} from "../../Storage/fileutils";
import Scrollbars from "react-custom-scrollbars";
import {Button} from "@blueprintjs/core";
import IframeResizer from 'iframe-resizer-react'

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
        return <IframeResizer
            log
            src="http://127.0.0.1:8000?sys_id=section_subject_domain_of_algebra&scg_structure_view_only=true"
            style={{ width: '1px', minWidth: '100%', minHeight: '100%'}}
        />
    }

    // render() {
    //     return (
    //         <Tabs
    //             id="ViewportTabs"
    //             currentTabId="now"
    //             tabs={[
    //                 {
    //                     heading: "Now hosting",
    //                     title: "live priview",
    //                     id: "now",
    //                     childerns: (
    //                         <div style={{height: "93%", marginTop: "-3%"}}>
    //                             <Button>ViewPortButton</Button>
    //                         </div>
    //                     ),
    //                 },
    //                 {
    //                     heading: "View your file in iframe",
    //                     title: "iframe preview",
    //                     id: "wb",
    //                     childerns: (
    //                         <div style={{height: "93%", marginTop: "-3%"}}>
    //                             <iframe
    //                                 title="page view"
    //                                 className="Fill"
    //                                 key={this.state.index}
    //                                 srcDoc={this.state.code}
    //                             />
    //                         </div>
    //                     ),
    //                 },
    //                 {
    //                     heading: "Preview your code",
    //                     title: "code view",
    //                     id: "cd",
    //                     childerns: (
    //                         <div>
    //                             <Scrollbars style={{height: "90%"}} autoHide>
    //                                 <Highlight
    //                                     {...defaultProps}
    //                                     code={this.state.code}
    //                                     theme={DarkTheme}
    //                                     language={this.getPrismLangusage()}
    //                                 >
    //                                     {({
    //                                           className,
    //                                           style,
    //                                           tokens,
    //                                           getLineProps,
    //                                           getTokenProps,
    //                                       }) => (
    //                                         <Pre className={className} style={style}>
    //                                             {tokens.map((line, i) => (
    //                                                 <div {...getLineProps({line, key: i})}>
    //                                                     <LineNo>{i + 1}</LineNo>
    //                                                     {line.map((token, key) => (
    //                                                         <span {...getTokenProps({token, key})} />
    //                                                     ))}
    //                                                 </div>
    //                                             ))}
    //                                         </Pre>
    //                                     )}
    //                                 </Highlight>
    //                             </Scrollbars>
    //                         </div>
    //                     ),
    //                 },
    //             ]}
    //         />
    //     );
    // }
}

export default Viewport;
