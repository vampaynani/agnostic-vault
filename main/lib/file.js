const { app } = require("electron");
const fs = require("fs");
const path = require("path");
const prompt = require("native-prompt");

module.exports = {
  save: async function (content) {
    const filePath = `${app.getPath("home")}/agnostic-vault`;
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, "0744");
    }
    const filename = await prompt(
      "Save file",
      "Type the name of the file where you will save the encrypted string"
    );
    fs.writeFileSync(path.join(filePath, `${filename}.txt`), content);
    return path.join(filePath, `${filename}.txt`);
  },
  read: function (filePath) {
    return fs.readFileSync(filePath, { encoding: "utf8" });
  },
};
