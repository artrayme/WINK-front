import StorageManager from "./storageManager";

export interface PersistConfigStruct {
    limit: number;
    currentProject: string,
    recentProjects: string[],
    theme: string
    scWinkBackUri: string
    scWebUri: string
    scWebsocketUri: string
}

class DefaultConfigStruct implements PersistConfigStruct {
    limit: number = 10;
    currentProject = "TestProject";
    recentProjects = [];
    theme = 'nnp';
    scWinkBackUri = 'http://localhost:8080'
    scWebUri = 'http://localhost:8000';
    scWebsocketUri = 'http://localhost:8090';
}

export function loadConfig(pathToConfigFile: string) {
    let storage = new StorageManager()
    let fullPath = storage.getHomePath() + pathToConfigFile;
    let isExist = storage.syncExists(fullPath)
    if (isExist) {
        try {
            return JSON.parse(this.storage.syncGetFile(fullPath)) as PersistConfigStruct
        } catch (e) {
            const childWindow = window.open('', 'modal')
            childWindow.document.write('JSON config is corrupted. Default config is used. (path=' + fullPath + ')')
        }
    }
    return new DefaultConfigStruct()
}
