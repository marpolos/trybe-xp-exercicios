const fs = require('fs')

fs.writeFile('./arquivo.txt', 'Marcelle Monteiro', (err, texto) => {});
fs.readFile('./arquivo.txt', 'utf-8', (err, texto) => {
  console.log(texto);
});