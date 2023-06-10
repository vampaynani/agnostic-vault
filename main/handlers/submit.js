const { ipcMain } = require("electron");

module.exports = () =>
  ipcMain.handle("onSubmit", (_event, text, password) => {
    console.log(text, password);
    // const hex = text_to_hex(text, password);
    // file.save(fileName, hex);

    // const decrypted = hex_to_text(hex, password);
    // console.log(fileName, text, password, hex, decrypted);
  });
