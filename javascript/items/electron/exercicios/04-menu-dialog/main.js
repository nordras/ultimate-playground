const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
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
  return window;
}

function createMenu(window) {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open folder...',
          click: async () => {
            await dialog.showOpenDialog(window, {
              properties: ['openDirectory'],
            });
          },
        },
        { type: 'separator' },
        { role: 'quit', label: 'Quit' },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

ipcMain.handle('open-folder', async (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  const response = await dialog.showOpenDialog(window, {
    properties: ['openDirectory'],
  });

  if (response.canceled) {
    return [];
  }

  return response.filePaths;
});

app.whenReady().then(() => {
  const window = createWindow();
  createMenu(window);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      const newWindow = createWindow();
      createMenu(newWindow);
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
