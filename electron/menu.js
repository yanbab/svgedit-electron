const { app, Menu } = require('electron')
const __ = require('./i18n')
const isMac = process.platform === 'darwin'

action = _ => { console.log(_) }

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      { label: 'New', accelerator: 'CmdOrCtrl+N'},
      { label: 'New from template', submenu: [
        {label: 'Tiger'}, {label: 'Car'}, 
        { type: "separator" },
        { label: "Save as template"},
        { label: "Open template folder"}
      ]},
      {type: 'separator'},
      { label: 'Open SVG...', accelerator: 'CmdorCtrl+O'},
      { label: 'Open Recent', submenu: []},
      {type: 'separator'},
      { label: 'Save', accelerator: 'CmdorCtrl+Shift+S'},
      { label: 'Save as...', accelerator: 'CmdorCtrl+Shift+S'},
      { label: 'Export', submenu: [
        { label: "PDF" },
        { label: "PNG" },        
      ]},
      {type: 'separator'},
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'delete' },
      { type: 'separator' },
      { role: 'selectAll' }      
      // ...(isMac ? [
      //   // { role: 'pasteAndMatchStyle' },
      //   // { role: 'delete' },
      //   // { role: 'selectAll' },
      //   // { type: 'separator' },
      //   // {
      //   //   label: 'Speech',
      //   //   submenu: [
      //   //     { role: 'startspeaking' },
      //   //     { role: 'stopspeaking' }
      //   //   ]
      //   // }
      // ] : [
      //   // { role: 'delete' },
      //   // { type: 'separator' },
      //   // { role: 'selectAll' }
      // ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { label: __("Toggle rulers") },
      { label: __("Toggle grid") },
      { type: 'separator' },
      { label: __("View SVG Source") },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    label: __('Tools'),
    submenu: [
      { label: __('Select'), accelerator: 'V', action: 'shortcut.v' },
      { label: __('Pencil'), accelerator: 'V', action: 'shortcut.v' },
      { label: __('Rectangle'), accelerator: 'R', action: 'shortcut.v' },
      { label: __('Ellipse'), accelerator: 'E', action: 'shortcut.v' },
      { label: __('Path'), accelerator: 'P', action: 'shortcut.v' },
      { label: __('Shape'), accelerator: 'V', action: 'shortcut.v' },
      { label: __('Text'), accelerator: 'T', action: 'shortcut.v' },
      { label: __('Zoom'), accelerator: 'Z', action: 'shortcut.v' },
      
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    label: 'Debug', submenu: [
      { type: 'separator' },
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'SVG-Edit Home Page',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://github.com/SVG-Edit/svgedit#readme')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
module.exports = menu