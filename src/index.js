const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codedMessagesArray = Array.from(expr.match(/.{1,10}/g));
    for (let i = 0; i < codedMessagesArray.length; i++) {
        if (codedMessagesArray[i] === "**********") { 
            codedMessagesArray[i] = " ";
        }
        else {
            codedMessagesArray[i] = MORSE_TABLE[codedMessagesArray[i].replace(/^0+/, "").replace(/10/g, ".").replace(/11/g, "-")];
        }
    }
    return codedMessagesArray.join("");
}

}

module.exports = {
    decode
}
