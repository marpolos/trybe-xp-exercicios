
const fs = require('fs').promises;

/* function readAll() {
    fs.readFile('./simpsons.json')
    .then((fileContent) => {
      const simpsons = JSON.parse(fileContent);
      //const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
      //strings.forEach((string) => console.log(string));
      console.log(simpsons);
    });
  }
  readAll(); */
async function readAll() {
  const rawData = await fs.readFile('./simpsons.json');
  const data = JSON.parse(rawData);

  const dataTratado = data.map(({ id, name }) => `${id} - ${name}`);
  dataTratado.forEach((string) => console.log(string));
}
readAll();
