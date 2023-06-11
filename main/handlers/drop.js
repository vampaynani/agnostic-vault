const { ipcMain, dialog } = require("electron");
const { textToHex } = require("../lib/cypher.js");
const file = require("../lib/file.js");
const prompt = require("native-prompt");

module.exports = () =>
  ipcMain.handle("onDrop", async (_event, text) => {
    const password = await prompt(
      "Encrypt text with password",
      "Which will be the password to encrypt the text with",
      { mask: true }
    );
    const hex = textToHex(text, password);
    const filePath = await file.save(hex);
    dialog.showMessageBox(null, {
      message: "File saved successfully",
      detail: `Your file has been saved at ${filePath}`,
    });
  });
