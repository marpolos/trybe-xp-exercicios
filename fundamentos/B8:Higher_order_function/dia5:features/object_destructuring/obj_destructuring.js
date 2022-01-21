//Desestruturação de objetos ou object destructuring
//Tem como característica trabalhar em um nível por vez.

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

//No exemplo abaixo, como você faria para imprimir o valor de cada propriedade do objeto product ?

console.log(Object.values(product));

// A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:

//const { name } = product;
//console.log(name); // Smart TV Crystal UHD

//Se quisermos pegar, além do nome, o vendedor do produto, podemos incluir a propriedade seller dentro das chaves para acessar o seu valor correspondente:
const { name, seller } = product;
//Essa forma de acessar é equivalente a product.name e product.seller.
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

//você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável. Acompanhe o exemplo abaixo:
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: nameStudent, b: classAssigned, c: subject } = student;
  
  console.log(nameStudent); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática