const { ipcMain, dialog, clipboard } = require("electron");

module.exports = () =>
  ipcMain.handle("copyToClipboard", async (_event, data) => {
    clipboard.writeText(data);
    dialog.showMessageBox(null, {
      title: "Clipboard",
      message: "Data copied successfully to clipboard",
    });
  });
