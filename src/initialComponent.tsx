import React, {Component} from "react";
import WindowsLayout, {Theme} from "./WindowsLayout";
import {loadConfig, PersistConfigStruct} from "./Storage/initConfig";
import {AutocompleteConfig, GlobalConfig, ServerConfig} from "./globalConfig";
import StorageManager from "./Storage/storageManager";

const pathToConfigFile = "WinkProjects/.config/config.json";
const winkProjectFolder = 'WinkProjects'

class InitComponent extends Component {
    config: PersistConfigStruct

    constructor(props: {}) {
        super(props);
        let struct = loadConfig(pathToConfigFile)
        GlobalConfig.codeDir = new StorageManager().getHomePath() + '/' + winkProjectFolder + '/' + struct.currentProject + '/'
        GlobalConfig.projectName = struct.currentProject
        GlobalConfig.theme = struct.theme
        ServerConfig.scWinkBackUri = struct.scWinkBackUri
        ServerConfig.scWebsocketUri = struct.scWebsocketUri
        ServerConfig.scWebUri = struct.scWebUri
        AutocompleteConfig.limit = struct.limit
    }

    render() {
        return (
            <div>
                <WindowsLayout theme={GlobalConfig.theme as Theme}/>
            </div>
        );
    }
}

export default InitComponent;
