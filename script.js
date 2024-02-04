//copy-paste project"JUst for fun"


const passwordBox = document.getElementById("password");


const length = 12;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const symbol = "[]{};:'?/><.,)(*&^%$#@!~`|";
const number = "1234567890";


const allChars = upperCase + lowerCase + symbol + number;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    password += number[Math.floor(Math.random()*number.length)];
    

    while (length > password.length){
    
        password += allChars[Math.floor(Math.random()*allChars.length)];
    
    }
    
    passwordBox.value= password;
}

