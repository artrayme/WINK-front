import {Button, Classes} from "@blueprintjs/core";
import classNames from "classnames";
import React from "react";

import {
    createBalancedTreeFromLeaves,
    getLeaves,
    Mosaic,
    MosaicNode,
    MosaicWindow,
    MosaicZeroState,
} from "react-mosaic-component";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Explorer from "./LayoutComponents/Explorer/Explorer";
import Viewport from "./LayoutComponents/Viewport/viewport";
import {EditorTabs, FilesTabs} from "./UIComponents/tabs";
import "./mosaic.css";

export const THEMES = {
    light: "mosaic-blueprint-theme",
    nnp: classNames("nnp-dark", Classes.DARK),
    dark: classNames("mosaic-blueprint-theme", Classes.DARK),
    none: "",
};
export type Theme = keyof typeof THEMES;

export interface WindowsLayoutState {
    currentNode: MosaicNode<number> | null;
    currentTheme: Theme;
    openDocument: string;
    editorTabs: EditorTabs[];
}

interface tab {
    name: string;
    toolbarControls: JSX.Element[];
    body: JSX.Element;
    draggable?: boolean;
}

export class WindowsLayout extends React.PureComponent<{ theme: Theme },
    WindowsLayoutState> {

    state: WindowsLayoutState = {
        currentNode: {
            direction: "row",
            first: {
                direction: "row",
                first: 3,
                second: 1,
                splitPercentage: 20,
            },
            second: {
                direction: "column",
                first: 2,
                second: 4,
                splitPercentage: 60,
            },
            splitPercentage: 70,
        },
        currentTheme: this.props.theme,
        openDocument: "",
        editorTabs: [],
    };

    openFile = (name: string) => {
        this.setState((state) => {
            if (!state.editorTabs.find((tab) => tab.filename === name)) {
                state.editorTabs.push({filename: name, id: name});
                if (state.editorTabs.length > 5) {
                    state.editorTabs.shift();
                }
            }
        });
        this.setState({openDocument: name}, () => {
            this.forceUpdate();
        });
    };

    Tabs: () => tab[] = () => [
        {
            name: "Editor",
            draggable: false,
            toolbarControls: React.Children.toArray([]) as JSX.Element[],
            body: this.state.openDocument !== "" && (
                <FilesTabs
                    currentTabId={this.state.openDocument}
                    tabs={this.state.editorTabs}
                    onCloseTab={(id) => {
                        this.setState((state) => {
                            state.editorTabs.splice(
                                state.editorTabs.findIndex((tab) => tab.id === id),
                                1
                            );
                            if (id === this.state.openDocument) {
                                if (state.editorTabs.length === 0) {
                                    this.setState({openDocument: ""});
                                } else {
                                    this.setState({openDocument: state.editorTabs[0].filename});
                                }
                            }
                        });
                    }}
                    setActiveTab={(id) => this.openFile(id)}
                />
            ),
        },
        {
            name: "Viewport",
            toolbarControls: React.Children.toArray([
                <Button
                    onClick={() => {

                        //ToDo open sc-web in new window

                        // window.open(
                        //     'http://127.0.0.1:8000?sys_id=section_disadvantages_modern_technologies_of_computer_systems_design&scg_structure_view_only=true',
                        //     'NewWindowViewPort',
                        //     'toolbar=0,status=0,width=548,height=325');

                        // window.open(
                        //     "./webView/" + this.state.openDocument,
                        //     "NewWindowViewPort",
                        //     "width=550,height=700"
                        // );

                    }}
                    minimal
                    icon="application"
                >
                    open in new window
                </Button>,
            ]) as JSX.Element[],
            body:
                <Viewport document={this.state.openDocument}/>
        },
        {
            name: "Explorer",
            toolbarControls: React.Children.toArray([]) as JSX.Element[],
            body: (
                <div>
                    <Explorer openFile={this.openFile}/>
                </div>
            ),
        },
        {
            name: "Apps",
            toolbarControls: React.Children.toArray([]) as JSX.Element[],
            body: (
                <div>
                    <Button> ahahahah </Button>
                    {/*<AppLauncher />*/}
                </div>
            ),
        },
    ];

    render() {
        return (
            <div
                className="windows-layout"
                style={{backgroundColor: "rgb(39,44,41,0.5)"}}
            >
                <Mosaic<number>
                    renderTile={(count, path) => {
                        const tab = this.Tabs()[count - 1];
                        return (
                            <MosaicWindow<number>
                                additionalControls={[]}
                                title={tab.name}
                                createNode={this.createNode}
                                toolbarControls={tab.toolbarControls}
                                path={path}
                                draggable={tab.draggable}
                            >
                                <div>{tab.body}</div>
                            </MosaicWindow>
                        );
                    }}
                    zeroStateView={<MosaicZeroState createNode={this.createNode}/>}
                    value={this.state.currentNode}
                    onChange={this.onChange}
                    className={THEMES[this.state.currentTheme]}
                />
            </div>
        );
    }

    createNode = () => {
        return -1;
    };

    onChange = (currentNode: MosaicNode<number> | null) => {
        this.setState({currentNode});
    };

    autoArrange = () => {
        const leaves = getLeaves(this.state.currentNode);

        this.setState({
            currentNode: createBalancedTreeFromLeaves(leaves),
        });
    };
}

export default WindowsLayout;
