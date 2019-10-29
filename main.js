const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

// When Electron application is ready, create a new BrowserWindow for the app
app.on('ready', () => {
  const win = new BrowserWindow({
    title: 'Operator',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Electron window is configured differently during dev than in production
  if (isDev) {
    // Install and configure React dev tools
    const { 
      default: installExtension, 
      REACT_DEVELOPER_TOOLS 
    } = require('electron-devtools-installer');
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

    // Install Devtron tools
    require('devtron').install();

    // In development, load code from the react dev server
    win.loadURL('http://localhost:3000');

    // Automatically open dev tools
    win.webContents.openDevTools();
  } else {
    // In a production build, load from a file URL
    win.loadURL(`file://${path.join(__dirname, 'build', 'index.html')}`);
  }
});
