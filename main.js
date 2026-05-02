const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    transparent: true,
    frame: false,
    alwaysOnTop: true, // ✅ corrigido
    webPreferences: {  // ✅ corrigido
      preload: __dirname + "/preload.js"
    }
  });

  win.loadFile("index.html"); // ✅ corrigido

  win.setMovable(true); // ✅ agora no lugar certo
}

app.whenReady().then(createWindow);