// Crie um objeto player contendo as variáveis listadas abaixo.
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let obj = {
    name: "Maria",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2, 
        silver: 3
    }
}

console.table(obj);
//Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

obj["fullName"] = obj.name + " " + obj.lastName;

console.log("A jogadora " + obj.fullName + " tem " + obj.age + " anos de idade.");

//Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

obj["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

//Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log("A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes nos anos: " + obj["bestInTheWorld"]);
console.log(obj);

//cesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log("A jogadora possui " + obj.medals.golden + " medalhas de ouro e " + obj['medals']['silver'] + " medalhas de prata.");