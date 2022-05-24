const functionPromise = (a, b, c) => new Promise((resolve, reject) => {
    if (typeof a !== 'number'
    || typeof b !== 'number'
    || typeof c !== 'number'
    ) reject('Informe apenas números');
    const calculo = ((a + b) * c);
    if (calculo < 50) reject(`Valor muito baixo ${a}, ${b}, ${c}`);
    resolve(`Valor obtido com os valores ${a}, ${b}, ${c}: ${calculo}`);
});

/* functionPromise(5, 1, 2).then((err, value) => {
    try {
        console.log(value);
    } catch {
        console.log(err);
    }
}); */

module.exports = functionPromise;