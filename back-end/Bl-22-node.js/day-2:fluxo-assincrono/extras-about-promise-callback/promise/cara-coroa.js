const p = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve('yay')
    reject('no')
  })
  
  p.then(console.log).catch(console.error);

  