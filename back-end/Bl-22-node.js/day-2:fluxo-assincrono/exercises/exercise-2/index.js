const functionPromise = require('../exercise-1/returnPromise');
const aleatoryNumber = Math.floor(Math.random() * 100 + 1);

/* functionPromise(aleatoryNumber, aleatoryNumber, aleatoryNumber)
.then((value) => console.log(value))
.catch((err) => console.error(err)); */

(async () => {
  try {
    const value = await functionPromise(aleatoryNumber, aleatoryNumber, aleatoryNumber);
    console.log(value);
  } catch(err) {
      console.log(err);
  }
})()