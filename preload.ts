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
  onSubmit: (fileName: string, text: string, password: string) =>
    ipcRenderer.invoke("onSubmit", fileName, text, password),
  onDrop: (path: string) => ipcRenderer.invoke("onDrop", path),
});
