const { contextBridge, app } = require('electron')
//soon

contextBridge.exposeInMainWorld('BetterEaglerDesktop', {
    quitGame: () => {
        app.quit()
    }
})