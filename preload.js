const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    startTimer: (time) => ipcRenderer.send('start-timer', time)
});
