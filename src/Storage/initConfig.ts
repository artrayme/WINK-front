import StorageManager from "./storageManager";

export interface PersistConfigStruct {
    currentProject: string,
    recentProjects: string[],
    theme: string
}

class DefaultConfigStruct implements PersistConfigStruct {
    currentProject = "TestProject";
    recentProjects = [];
    theme: string;
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
