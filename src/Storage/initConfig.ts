import StorageManager from "./storageManager";

export interface ConfigStruct {
    currentProject: string,
    recentProjects: string[],
    theme: string
}

class DefaultConfigStruct implements ConfigStruct {
    currentProject = "TestProject";
    recentProjects = [];
    theme: string;
}

export default class Config {
    pathToConfigFile = "WinkProjects/.config/config.json";
    storage: StorageManager;
    config: ConfigStruct;

    constructor() {
        this.storage = new StorageManager();
        let fullPath = this.storage.getHomePath() + this.pathToConfigFile;
        let isExist = this.storage.syncExists(fullPath)
        this.config = new DefaultConfigStruct()
        if (isExist) {
            try {
                this.config = JSON.parse(this.storage.syncGetFile(fullPath)) as ConfigStruct
            } catch (e) {
                const childWindow = window.open('', 'modal')
                childWindow.document.write('JSON config is corrupted. Default config is used. (path=' + fullPath + ')')
            }
        }
    }
}
