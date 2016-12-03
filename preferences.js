
const {app, BrowserWindow, ipcMain} = require('electron')
const createMainMenu = require('./menu')


module.exports = function(){

let win = new BrowserWindow({
	width: 600, height: 350, minWidth: 600, minHeight: 350,
	frame: false, titleBarStyle: 'hidden'})

win.loadURL('file:///'+__dirname+'/preferences.html')

}
