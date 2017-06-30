var electron = require('electron');

// automatic reload does not work. Do not uncomment this 
// Please enable automatic reload of image and send me a pull request.  :-)
// require('electron-reload')(__dirname + "/360_images/");

electron.app.on('ready', function () {
    var mainWindow = new electron.BrowserWindow({width: 800, height: 800});
    mainWindow.loadURL('file://' + __dirname + '/index.html');

});