const url = require("url");
const { app, BrowserWindow } = require("electron");
const path = require("path");
// const handleOnSubmit = require("./handlers/on_submit");
// const handleOnDrop = require("./handlers/on_drop");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
    },
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true,
    });
  mainWindow.loadURL(startUrl);

  //Enable when developing
  mainWindow.openDevTools();

  // handleOnSubmit();
  // handleOnDrop();
}

app.on("ready", createWindow);
