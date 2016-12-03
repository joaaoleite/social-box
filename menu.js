'use strict';
const app = require('electron').app;
const Menu = require('electron').Menu;
const shell = require('electron').shell;
const preferences = require('./preferences');

module.exports = function createMainMenu() {
  const template = [
    {
      label: 'SocialBox',
      submenu: [
		{
	      label: 'About',
	      role: 'about',
	    },
	    {
	      type: 'separator'
	    },
		{
	      label: 'Preferences',
	      role: 'preferences',
		  click: () => {
            preferences();
          }
	    },
	    {
	      type: 'separator'
	    },
        {
          label: 'Services',
          role: 'services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide SocialBox',
          accelerator: 'Cmd+H',
          role: 'hide'
        },
        {
          label: 'Hide Others',
          accelerator: 'Alt+Cmd+H',
          role: 'hideothers'
        },
        {
          label: 'Show All',
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'Cmd+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'CmdOrCtrl+Z',
          role: 'undo'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+CmdOrCtrl+Z',
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          label: 'Cut',
          accelerator: 'CmdOrCtrl+X',
          role: 'cut'
        },
        {
          label: 'Copy',
          accelerator: 'CmdOrCtrl+C',
          role: 'copy'
        },
        {
          label: 'Paste',
          accelerator: 'CmdOrCtrl+V',
          role: 'paste'
        },
        {
          label: 'Select All',
          accelerator: 'CmdOrCtrl+A',
          role: 'selectall'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click: (item, win) => {
            if (win) win.reload();
          }
        },
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Cmd+F',
          click: (item, win) => {
            if (win) win.setFullScreen(!win.isFullScreen());
          }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Cmd+I',
          click: (item, win) => {
            if (win) win.webContents.toggleDevTools();
          }
        }
      ]
    },
    {
      label: 'Window',
      role: 'window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'CmdOrCtrl+M',
          role: 'minimize'
        },
        {
          label: 'Close',
          accelerator: 'CmdOrCtrl+W',
          role: 'close'
        },
        {
          type: 'separator'
        },
        {
          label: 'Messenger',
          accelerator: 'CmdOrCtrl+1',
          type: 'radio',
          checked: false
        },
		{
          label: 'Steam',
          accelerator: 'CmdOrCtrl+2',
          type: 'radio',
          checked: false
        },
		{
          label: 'Inbox',
          accelerator: 'CmdOrCtrl+3',
          type: 'radio',
          checked: false
        },
		{
          label: 'WhatsApp',
          accelerator: 'CmdOrCtrl+4',
          type: 'radio',
          checked: false
        },
		{
          label: 'Telegram',
          accelerator: 'CmdOrCtrl+5',
          type: 'radio',
          checked: false
        },
		{
          label: 'Hangouts',
          accelerator: 'CmdOrCtrl+6',
          type: 'radio',
          checked: false
        },
      ]
    },
    {
      label: 'Help',
      role: 'help',
      submenu: [
        {
          label: 'View website',
          click: () => {
            shell.openExternal('http://github.com/joaaoleite');
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};
