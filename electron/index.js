const {app, BrowserWindow} = require('electron')
const path = require('path')

const menu = require('./menu')

const RENDERER = __dirname + '/../svgedit/editor/svg-editor-electron.html'
const PRELOAD_SCRIPT = __dirname + '/preload.js'

var windows = []

function window() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 515,
    minHeight: 515,
    minWidth: 320,
    show: false,
    backgroundColor: 'red',
    webPreferences: {
      nodeIntegration: true,
      partition: 'persist:xxx',
      preload: path.join(__dirname, PRELOAD_SCRIPT)
    }
  })
  // and load the index.html of the app.
  win.loadFile(RENDERER)
  win.on('closed', function () {
    win = null
  })
  win.on('ready-to-show', function () {
    win.show()
  })
  return win
}

function onready() {
  app_new()
}

app.on('ready', onready)

app_new = () => {

  windows.push(window())
}