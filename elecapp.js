var {app,BrowserWindow,dialog} = require('electron')
let win
app.on('ready',()=>{
    win = new BrowserWindow()
    win.loadURL('https://get-url-response.herokuapp.com/')
    win.webContents.session.on('will-download', (event, item, webContents) => {
        
        item.setSaveDialogOptions({
            title:"get-url-response"
        })
      })
})
app.on('window-all-closed',()=>{
    app.quit()
})