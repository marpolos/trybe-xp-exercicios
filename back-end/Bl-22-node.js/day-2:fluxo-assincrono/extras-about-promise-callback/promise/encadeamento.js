
const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('yay'), 5000)
  })
  
  // Ambos os callbacks estão ligados a p
  p.then((res) => {}, (rej) => {})
  
  // Isto aqui é a mesma coisa
  new Promise((resolve, reject) => {})
    .then((res) => {}, (rej) => {})