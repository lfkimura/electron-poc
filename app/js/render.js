const { ipcRenderer } = require('electron')

let linkSobre = document.querySelector("#link-sobre");

console.log("estou na janela");

linkSobre.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-sobre');
    
});


let linkTwitter = document.querySelector("#link-twitter");

linkTwitter.addEventListener('click', function () {

});
