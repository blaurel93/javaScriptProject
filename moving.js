// DOM ELEMENTS //
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
// const resultEl = document.getElementById('result');
// const resultEl = document.getElementById('result');






const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


// Selection Funtions ie. Include numbers symbols lower upper //
function checkRandomLower() {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}


function checkRandomUpper() {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
}


function checkRandomSymbol() {
    const symbols = '!@#$%&*+=';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function checkRandomNumber() {
    return (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
}
// RANDOMIZER FUNCTIONS ABOVE //
