const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  //Crie uma string com os nomes de todas as pessoas autoras.
//console.log(books.map((book) => book.author.name).join(', '));
function reduceNames() {
    // escreva seu código aqui
    const names = (acc, book) => `${acc}, ${book.author.name}`;
    return books.reduce(names, books[0].author.name);
  }

//console.log(reduceNames());

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
//const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const medAge = (acc, age) => (age.releaseYear - age.author.birthYear) + acc;
  return (books.reduce(medAge, 0)) / books.length;
}
//console.log(averageAge());

//Encontre o livro com o maior nome.


/* const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  }; */
  
  function longestNamedBook() {
    // escreva seu código aqui
    
    const moreLongTitle = (acc, book) => acc.name.length > book.name.length ? acc : book;
    return books.reduce(moreLongTitle);
  }

  console.log(longestNamedBook(), {name: ' '});
  //console.log(books[0].name.length)