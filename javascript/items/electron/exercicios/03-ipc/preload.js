const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  add: (a, b) => ipcRenderer.invoke('add', a, b),
});
