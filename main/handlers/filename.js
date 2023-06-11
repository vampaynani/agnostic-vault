const { ipcMain, app, dialog } = require("electron");
const path = require("path");
const file = require("../lib/file.js");
const { hexToText } = require("../lib/cypher.js");
const prompt = require("native-prompt");

module.exports = (window) =>
  ipcMain.handle("selectFilename", async (_event, filename) => {
    const dirPath = `${app.getPath("home")}/agnostic-vault`;
    const filePath = path.join(dirPath, filename);
    const fileData = file.read(filePath);
    let password;
    let decrypted;

    try {
      password = await prompt(
        "Encrypt password",
        "Which is the password used to encrypt the text",
        { mask: true }
      );
    } catch (e) {
      console.log(e);
    }
    if (password) {
      try {
        decrypted = hexToText(fileData, password);
        window.webContents.send("onFileDecrypt", decrypted);
      } catch (e) {
        dialog.showErrorBox("Error", e.message);
      }
    }
  });
