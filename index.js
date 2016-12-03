
const {app, BrowserWindow, ipcMain} = require('electron')
const createMainMenu = require('./menu')

var willQuitApp = false;

app.on('ready', function(){

	createMainMenu();

	let win = new BrowserWindow({
		width: 900, height: 700, minWidth: 300, minHeight: 400,
		frame: false, titleBarStyle: 'hidden'})

	win.loadURL('file:///'+__dirname+'/index.html')

	app.on('before-quit', () => willQuitApp = true);
  	win.on('close', (e) => {
    	if (willQuitApp) {

      		//window = null;
    	} else {
      		/* the user only tried to close the window */
      		e.preventDefault();
      		win.hide();
    	}
  	});
	app.on('activate', () => {
		win.show();
	});
})
