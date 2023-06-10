const { contextBridge, ipcRenderer } = require("electron");
// const $ = require("jquery");
// window.addEventListener("DOMContentLoaded", () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector);
//     if (element) element.innerText = text;
//   };

//   for (const dependency of ["chrome", "node", "electron"]) {
//     replaceText(`${dependency}-version`, process.versions[dependency]);
//   }
// });

contextBridge.exposeInMainWorld("mainProcess", {
  onSubmit: (text) => ipcRenderer.invoke("onSubmit", text),
  onDrop: (path) => ipcRenderer.invoke("onDrop", path),
});
