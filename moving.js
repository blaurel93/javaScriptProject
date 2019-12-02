// DOM ELEMENTS //
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');
// DOM ELEMENTS //
// EVENTS //
const randomFunc = {
    lower: checkRandomLower,
    upper: checkRandomUpper,
    number: checkRandomNumber,
    symbol: checkRandomSymbol
};
// GENERATE EVENT // 
generateEl.addEventListener('click', () => {
    const length = lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasSymbol = symbolsEl.checked;
    const hasNumber = numbersEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasSymbol,
        hasNumber,
        length
    );
});
// COPY PASS WORD TO CLIPBOARD //
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});




// GENERATE PASSWORD FUNCTION //
function generatePassword(upper, lower, symbol, number, length) {
    //1. initialize password variable //
    //2. filter out unchecked types//
    //3. Loop over the length, call generator function for each type //
    //4. Add final pass to the pass var and return // 
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    // console.log('typesCount: ', typesCount);

    const typesArray = [{ upper }, { lower }, { symbol }, { number }].filter
        (item => Object.values(item)[0]
        );

    // console.log('typesArray: ', typesArray);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('funcName: ', funcName);
            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    
    return finalPassword;
}
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
