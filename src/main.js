const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        title: 'Paper',
        backgroundColor: '#eeeeee',
        minWidth: 800,
        minHeight: 600,
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
