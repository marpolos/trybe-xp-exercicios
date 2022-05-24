
const number = () => Math.floor(Math.random() * 10 + 1);
const message = (userNumber) => {
    const n = number();
    switch (true) {
        case +userNumber === n:
            return 'Parabéns, número correto!';
        default:
            return `Opa, não foi dessa vez. O número era ${n}.`
    }
}

 module.exports = message;