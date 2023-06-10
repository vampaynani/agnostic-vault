const { dialog, app } = require("electron");
const fs = require("fs");
const path = require("path");

module.exports = {
  save: function (filename, content) {
    const filePath = `${app.getPath("home")}/agnostic-vault`;
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, "0744");
    }
    // const options = {
    //   title: "Save file",
    //   defaultPath: base,
    //   buttonLabel: "Save",
    //   filters: [{ name: "txt", extensions: ["txt"] }],
    // };

    // dialog.showSaveDialog(null, options).then(({ filePath }) => {
    fs.writeFileSync(path.join(filePath, `${filename}.txt`), content);
    // });
  },
  read: function (filePath) {
    return fs.readFileSync(filePath, { encoding: "utf8" });
  },
};
