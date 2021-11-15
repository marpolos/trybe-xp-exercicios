function contarLetras (arrayComPalavras) {

    let maiorNome = arrayComPalavras[0].length;
    let nome = arrayComPalavras[0];

    for (let i = 0; i < arrayComPalavras.length; i += 1) {
        if (maiorNome < arrayComPalavras[i].length) {
            maiorNome = arrayComPalavras[i].length;
            nome = arrayComPalavras[i];
        }
    }
    return "O maior nome é " + nome + " com " + maiorNome + " caracteres.";

}

console.log(contarLetras(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));