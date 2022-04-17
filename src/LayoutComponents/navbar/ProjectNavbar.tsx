import React, {Component} from "react";
import StorageManager from "../../Storage/storageManager";

interface NavbarProps {
    document: string;
    theme: string;
    openFile: (file: string) => void;
}

interface NavbarState {
    document: string;
    theme: string;
    hostingPanelIsOpen: boolean;
    githubPanelIsOpen: boolean;
}

export type panels = "now" | "github";

export default class ProjectNavbar extends Component<NavbarProps, NavbarState> {
    storage: StorageManager;

    constructor(props: NavbarProps) {
        super(props);
        this.storage = new StorageManager();
        this.state = {
            document: props.document,
            theme: props.theme,
            hostingPanelIsOpen: false,
            githubPanelIsOpen: true
        };
    }

    render() {
        return (
            <div/>
            // <div className={classNames("mosaic-blueprint-theme", Classes.DARK)}>
            //     <ButtonGroup fill minimal>
            //         <Popover
            //             minimal
            //             transitionDuration={10}
            //             hoverOpenDelay={10}
            //             hoverCloseDelay={10}
            //             interactionKind="hover"
            //             content={
            //                 <ButtonGroup vertical minimal style={ButtonGroupStyle}>
            //                     <Button text="create"/>
            //                     <Button text="save"/>
            //                     <Button text="export"/>
            //                 </ButtonGroup>
            //             }
            //         >
            //             <Button text="File"/>
            //         </Popover>
            //         <Popover
            //             minimal
            //             transitionDuration={10}
            //             hoverOpenDelay={10}
            //             hoverCloseDelay={10}
            //             interactionKind="hover"
            //             content={
            //                 <ButtonGroup vertical minimal style={ButtonGroupStyle}>
            //                     <Button
            //                         intent="warning"
            //                         text="switch editor"
            //                         onClick={() => {
            //                             // this.storage.setEditor(this.state.document, "");
            //                             this.props.openFile("");
            //                         }}
            //                     />
            //                     <Button text="rename"/>
            //                     <Button intent="danger" text="delete"/>
            //                 </ButtonGroup>
            //             }
            //         >
            //             <Button text="Edit"/>
            //         </Popover>
            //         <Popover
            //             minimal
            //             transitionDuration={10}
            //             hoverOpenDelay={10}
            //             hoverCloseDelay={10}
            //             interactionKind="hover"
            //             content={
            //                 <ButtonGroup vertical minimal style={ButtonGroupStyle}>
            //                     <Button text="download code"/>
            //                     <Button text="download project"/>
            //                     <Button
            //                         text="HOSTING"
            //                         intent="primary"
            //                         onClick={() => this.setState({hostingPanelIsOpen: true})}
            //                     />
            //                     <Button text="GIT" intent="success"/>
            //                 </ButtonGroup>
            //             }
            //         >
            //             <Button intent="success" text="Project"/>
            //         </Popover>
            //     </ButtonGroup>
            //     <div/>
            // </div>
        );
    }
}
