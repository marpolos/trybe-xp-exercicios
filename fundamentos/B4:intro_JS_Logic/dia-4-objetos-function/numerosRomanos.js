function lerRomanos (numero) {

    let numeroArray = numero.split("");
    let newNum = 0;

// let romanos = {
//     I: 1,
//     II: 2,
//     III: 3,
//     IV: 4,
//     V: 5,
//     IX:9,
//     X: 10,
//     XL: 40,
//     L: 50, 
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000
// };

for (let i = 0; i < numeroArray.length; i += 1) {
    switch (numeroArray[i]) {
        case "I": 
            newNum += 1;
            break;
        case "V": 
            newNum += 5; 
            break;
        case "X": 
            newNum += 10; 
            break;
        case "L": 
            newNum += 50; 
            break;
        case "C": 
            newNum += 100; 
            break;
        case "D": 
            newNum += 500; 
            break;
        case "M": 
            newNum += 1000; 
            break;
        default: 
            break;
    }
}

}
console.log(lerRomanos("XI"));