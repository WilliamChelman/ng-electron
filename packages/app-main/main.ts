import * as dotenv from "dotenv";
import { app, BrowserWindow } from "electron";
import * as url from "url";
import * as path from "path";

dotenv.config();

let win = null;

app.on("ready", function() {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({ width: 1000, height: 600 });

  // Specify entry point
  if (process.env.PACKAGE === "true") {
    // one "../" too much because generated .js file is in folder out-tsc/
    const pathname = path.join(__dirname, "../../app-renderer/dist/index.html");
    win.loadURL(
      url.format({
        pathname,
        protocol: "file:",
        slashes: true
      })
    );
  } else {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
    require("electron-reload")(__dirname);
  }

  // Remove window once app is closed
  win.on("closed", function() {
    win = null;
  });
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
