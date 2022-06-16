//figma : https://www.figma.com/file/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator-(New-version)?node-id=0%3A1
//help : https://projects.scrimba.com/password-generator

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("generate")
let generatedPassword = document.getElementById("password")

buttonEl.addEventListener("click", function() {
    let randomPass = ""
    for(let i = 0; i < 16; i += 1) {
        let randomChar = Math.floor(Math.random() * characters.length)
        randomPass += characters[randomChar]
    }
    generatedPassword.textContent = randomPass
});
