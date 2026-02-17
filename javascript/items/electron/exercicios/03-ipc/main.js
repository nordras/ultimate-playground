const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

function createWindow() {
  const window = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  window.loadFile(path.join(__dirname, 'index.html'));
}

ipcMain.handle('add', async (_event, a, b) => {
  const numberA = Number(a);
  const numberB = Number(b);

  if (Number.isNaN(numberA) || Number.isNaN(numberB)) {
    throw new Error('Please provide two valid numbers.');
  }

  return numberA + numberB;
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
