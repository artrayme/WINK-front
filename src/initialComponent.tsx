import React, {Component} from "react";
import WindowsLayout from "./WindowsLayout";
import {PersistConfigStruct, loadConfig} from "./Storage/initConfig";
import {GlobalConfig} from "./globalConfig";
import StorageManager from "./Storage/storageManager";

const pathToConfigFile = "WinkProjects/.config/config.json";
const winkProjectFolder = 'WinkProjects'

class InitComponent extends Component {
    config: PersistConfigStruct

    constructor(props: {}) {
        super(props);
        let struct = loadConfig(pathToConfigFile)
        GlobalConfig.history = struct;
        GlobalConfig.codeDir = new StorageManager().getHomePath() + '/' + winkProjectFolder +'/' + struct.currentProject + '/'
        GlobalConfig.projectName = struct.currentProject
        GlobalConfig.theme = 'nnp'
    }

    render() {
        return (
            <div>
                <WindowsLayout theme={GlobalConfig.theme}/>
            </div>
        );
    }
}

export default InitComponent;
