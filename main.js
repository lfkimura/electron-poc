const { app, BrowserWindow,ipcMain} = require("electron");
app.on("ready", ()=> {
    console.log("Aplicação iniciada")
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    console.log(__dirname)

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

 
});
app.on('window-all-closed', () => {
    app.quit();    
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
    console.log("recebeu evento sobre")
    if(sobreWindow == null) {
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 220,
            alwaysOnTop: true,
            frame: false
        });
        sobreWindow.on('closed', () => {
            sobreWindow = null;

        });
        ipcMain.on("fechar-sobre",() => {
            console.log("evento fechar janela sobre")
            if ( sobreWindow != null)
                sobreWindow.close() 
        })

    }

    

    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});