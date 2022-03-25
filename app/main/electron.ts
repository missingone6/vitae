/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow } from 'electron';

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });
  mainWindow.webContents.openDevTools();
  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`);
    console.log('development');
  } else {
    //  生产模式production下
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    console.log('production');
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});