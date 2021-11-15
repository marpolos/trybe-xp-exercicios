function arrayMenorValor(arrayEntrada) {
    // let arraySaida = arrayEntrada.sort((a, b) => a - b);
    // let menor = arraySaida[0];

    // let positionMenorValor = arraySaida.indexOf(menor);
    // return "A posição do menor valor é " + positionMenorValor + "\nArray entrada: " + arrayEntrada + "\nArray saída: " + arraySaida;

    let menor = arrayEntrada[0];
    for (let i = 0; i < arrayEntrada.length; i += 1) {
        if (menor > arrayEntrada[i]){
            menor = arrayEntrada[i];
        }
    }
    let position = arrayEntrada.indexOf(menor);
    return position;
}

console.log(arrayMenorValor([6, 6, 2, 7, 10, 3, 22, 78, 8]));