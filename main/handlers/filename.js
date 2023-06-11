const { ipcMain, app } = require("electron");
const path = require("path");
const file = require("../lib/file.js");
const { hexToText } = require("../lib/cypher.js");
const prompt = require("native-prompt");

module.exports = (window) =>
  ipcMain.handle("selectFilename", async (_event, filename) => {
    const dirPath = `${app.getPath("home")}/agnostic-vault`;
    const filePath = path.join(dirPath, filename);
    const fileData = file.read(filePath);
    const password = await prompt(
      "Encrypt text with password",
      "Which will be the password to encrypt the text with",
      { mask: true }
    );
    const decrypted = hexToText(fileData, password);
    window.webContents.send("onFileDecrypt", decrypted);
  });
