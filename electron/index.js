const {app, BrowserWindow} = require('electron')
const path = require('path')

const menu = require('./menu')

const RENDERER = '../svgedit/editor/svg-editor-es.html'
const PRELOAD_SCRIPT = 'preload.js'

var windows = []

function window() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 550,
    show: false,
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
  windows.push(window())
}

app.on('ready', onready)

