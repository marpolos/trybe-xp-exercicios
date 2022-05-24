const imc = (peso, altura) => (peso / (altura*0.01)**2).toFixed(2);

const result = (imc) => {
    switch (true) {
        case +imc < 18.5:
            return 'Abaixo do peso (magreza)';
        case (+imc >= 18.5 && +imc <= 24.9):
            return 'Peso normal';
        case (+imc >= 25 && +imc <= 29.9):
            return 'Acima do peso (sobrepeso)';
        case (+imc >= 30.0 && +imc <= 34.9):
            return 'Obesidade grau I';
        case (+imc >= 35.0 && +imc <= 39.9):
            return 'Obesidade grau II';
        case (+imc >= 40.0):
            return 'Obesidade graus III e IV';
        default:
            return 'Entrei aqui'
            }
}


export { imc, result };