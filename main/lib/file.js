const { app } = require("electron");
const fs = require("fs");
const path = require("path");
const prompt = require("native-prompt");

module.exports = {
  save: async function (content) {
    const dirPath = `${app.getPath("home")}/agnostic-vault`;
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, "0744");
    }
    const filename = await prompt(
      "Save file",
      "Type the name of the file where you will save the encrypted string"
    );

    const filePath = path.join(dirPath, `${filename}.txt`);
    fs.writeFileSync(filePath, content);
    return filePath;
  },
  read: function (filePath) {
    return fs.readFileSync(filePath, { encoding: "utf8" });
  },
};
