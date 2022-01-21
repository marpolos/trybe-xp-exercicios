/* Setup - é o primeiro ciclo. Ele ocorre antes dos testes serem executados. É uma fase inicial que você pode definir algumas configurações.
Testes - é considerado o segundo ciclo, ou seja, o momento em que ocorrem os testes. O ciclo em que foi trabalhado nos blocos anteriores.
Teardown - é o terceiro ciclo. Uma fase que ocorre após os testes serem executados. */

// cicles.test.js

let cities = [];
const { addCity, removeCity } = require('./cities');

 /* const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
}; */



test('Testa a função addCity', () => {
    cities = [];
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(3);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
  
  test('Testa a função removeCity', () => {
    cities = [];
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(2);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });