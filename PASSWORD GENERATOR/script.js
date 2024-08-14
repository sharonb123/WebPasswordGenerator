const resultElement = document.getElementById('result');
const lengthElement= document.getElementById('length');
const uppercaseElement= document.getElementById('uppercase');
const lowercaseElement= document.getElementById('lowercase');
const numberElement= document.getElementById('number');
const symbolsElement= document.getElementById('symbols');
const generateElement= document.getElementById('generate');
const clipboardElement= document.getElementById('clipboard');

const randomFunction = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumbers,
    symbols: getRandomSymbols
}

generateElement.addEventListener('click', ()=>{
    const length = +lengthElement.value
    const hasLower= lowercaseElement.checked
    const hasUpper= uppercaseElement.checked
    const hasNumber= numberElement.checked
    const hasSymbol = symbolsElement.checked

    resultElement.innerText = generatePassword(hasLower,hasUpper,hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length){

    let generatedPassword='';

    let typeCount = lower + upper + number + symbol 

    const typeArr = [{lower}, {upper}, {number}, {symbol}].filter((item)=>{
        Object.values(item)[0]
    })

    if (typeCount ===0){
        return '';
    } 

    for(i=0, i<length; i+=typeCount;){
        typeArr.forEach((type)=>{
           const keyFromRandomFunc = Object.keys(type)[0]
           generatePassword += randomFunction[keyFromRandomFunc]()

        })
    }

    const finalPassword = generatedPassword.slice(0,length)
    return finalPassword;

}


//generate random letters between 97-122 char-code
function getRandomLowerCase(){
     return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

//generate random uppercase letters between 65-90 char-code
function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

//generate random numbers between 48-57 char-code
function getRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbols(){
    const symbols = '!@#$%^&*()_+=-[]{}|;:,.<>/?';
    return symbols[Math.floor(Math.random() * symbols.length)];

}

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
  