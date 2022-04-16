const {app, BrowserWindow} = require('electron');

let mainWindow;

const createWindow = async () => {
    await app.whenReady();
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    mainWindow.webContents.on('new-window',
        (event, url, frameName, disposition, options, additionalFeatures) => {
            if (frameName === 'NewWindowViewPort ') {
                event.preventDefault();
                Object.assign(options, {
                    parent: mainWindow,
                    width: 300,
                    height: 300,
                });
                event.newGuest = new BrowserWindow(options);
            }
        });
    mainWindow.loadURL("http://localhost:3000");

}

app.on('ready', createWindow);
