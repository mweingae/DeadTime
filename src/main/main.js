const path = require('node:path');
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 500
  })

  win.loadFile(path.join(process.cwd(), './pages/main-page/index.html'))
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
  })