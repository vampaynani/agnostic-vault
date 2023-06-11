const { ipcMain, app } = require("electron");
const fs = require("fs");

module.exports = (window) =>
  ipcMain.handle("list", async (_event) => {
    const dirPath = `${app.getPath("home")}/agnostic-vault`;
    const files = fs.readdirSync(dirPath);
    console.log(files);
    window.webContents.send("onDirectoryList", files);
  });
