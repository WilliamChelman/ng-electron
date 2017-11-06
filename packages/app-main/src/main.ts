import * as dotenv from "dotenv";
import { app, BrowserWindow } from "electron";
import * as url from "url";
import * as path from "path";
import {MyClass} from "app-common";
dotenv.config();

let win: BrowserWindow = null;

app.on("ready", () => {
    console.log("Imported ", MyClass);
    console.log("Instance ", new MyClass());
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({ width: 1000, height: 600 });

  // Specify entry point
  if (process.env.PACKAGE === "true") {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, "../www/index.html"),
        protocol: "file:",
        slashes: false
      })
    );
  } else {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
    require("electron-reload")(__dirname);
  }

  // Remove window once app is closed
  win.on("closed", () => {
    win = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
