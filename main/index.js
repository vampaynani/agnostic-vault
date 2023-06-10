const url = require("url");
const { app, BrowserWindow } = require("electron");
const path = require("path");
const submitHandler = require("./handlers/submit");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 360,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
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
  // mainWindow.openDevTools();

  submitHandler();
  // handleOnDrop();
}

app.on("ready", createWindow);
