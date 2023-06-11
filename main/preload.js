const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronApi", {
  onSubmit: (text) => ipcRenderer.invoke("onSubmit", text),
  onDrop: (path) => ipcRenderer.invoke("onDrop", path),
  onDirectoryList: (callback) =>
    ipcRenderer.on("onDirectoryList", (_event, list) => callback(list)),
  listFiles: () => ipcRenderer.invoke("list"),
  selectFilename: (filename) => ipcRenderer.invoke("selectFilename", filename),
  onFileDecrypt: (callback) =>
    ipcRenderer.on("onFileDecrypt", (_event, decryptedData) =>
      callback(decryptedData)
    ),
  copyToClipboard: (data) => ipcRenderer.invoke("copyToClipboard", data),
});
