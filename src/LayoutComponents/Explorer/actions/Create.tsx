import React, {Component} from "react";
import StorageManager from "../../../Storage/storageManager";
import {Card, Dialog, Divider, Elevation, H6, InputGroup, Switch} from "@blueprintjs/core";

interface CreateFileState {
    isOpen: boolean;
    fileName: string;
    fileIsDirectory: boolean;
}

interface CreateFileProps {
    isOpen: boolean;
    selected: string;
    onClose: (success: boolean) => void;
}

class CreateFile extends Component<CreateFileProps, CreateFileState> {
    storage: StorageManager;
    originalFileName: string;

    constructor(props: CreateFileProps) {
        super(props);
        this.storage = new StorageManager();
        this.state = {
            isOpen: props.isOpen,
            fileName: props.selected,
            fileIsDirectory: false
        };
        this.originalFileName = this.state.fileName;
    }

    Create = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            const fileName = this.state.fileName;
            if (
                fileName &&
                fileName !== this.originalFileName &&
                fileName !== this.props.selected
            ) {
                if (this.state.fileIsDirectory) {
                    this.storage.makeDirectory(fileName);
                    this.props.onClose(true);
                } else {
                    this.storage.MakeDocument(fileName).then(() => {
                        this.props.onClose(true);
                    });
                }
            }
        }
    };

    render() {
        return (
            <Dialog
                className={"bp3-dark"}
                isOpen={this.state.isOpen}
                onClose={() => this.props.onClose(false)}
                icon="add"
                title="create file"
            >
                <InputGroup
                    onKeyDown={this.Create}
                    autoFocus
                    large
                    intent="primary"
                    defaultValue={this.state.fileName}
                    placeholder="enter file name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        this.setState({fileName: e.target.value});
                    }}
                />
                <Divider/>
                <Switch
                    large
                    label="create directory"
                    onChange={(e: any) => {
                        this.setState({fileIsDirectory: e.target.checked});
                    }}
                />
                <Card elevation={Elevation.ZERO}>
                    <H6>click enter to create or escape to cancel</H6>
                </Card>
            </Dialog>
        );
    }
}

export default CreateFile;
