const {app, BrowserWindow} = require('electron');

let mainWindow;

const createWindow = async () => {
    await app.whenReady();
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true
        }
    })
    await mainWindow.loadURL("http://localhost:3000");
}

app.on('ready', createWindow);
