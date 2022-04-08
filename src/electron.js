const {app, BrowserWindow, remote, Menu} = require('electron');

let mainWindow;

const createWindow = async () => {
    await app.whenReady();
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // sandbox: true
            nodeIntegration: true
        }
    })
    mainWindow.loadURL("http://localhost:3000");
}

app.on('ready', createWindow);
