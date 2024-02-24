const path = require('node:path');
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile(path.join(process.cwd(), './pages/main-page/index.html'))
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
  })