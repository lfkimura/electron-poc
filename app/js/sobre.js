
const { ipcRenderer, shell } = require('electron');


let fecharSobre = document.querySelector("#link-fechar");

fecharSobre.addEventListener("click", () => {
    console.log("sending...")
    ipcRenderer.send("fechar-sobre") 
});

let linkTwitter = document.querySelector("#link-twitter");

linkTwitter.addEventListener('click', function () {
    shell.openExternal("https://www.twitter.com/lfkimura");
});


const process = require('process');

let versaoElectron = document.querySelector('#electron-version');


window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
}