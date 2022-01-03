// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const createObject = (objeto, key, value) => {
    objeto = {};
    objeto[key] = value;
    return objeto;
} 

console.log(createObject("Identidade", "nome", "Jhonata"));
console.log(createObject("Identidade2", "nome", "Marcelle"));