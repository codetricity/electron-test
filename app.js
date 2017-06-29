var electron = require('electron');

electron.app.on('ready', function () {
    var mainWindow = new electron.BrowserWindow({width: 800, height: 800});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});