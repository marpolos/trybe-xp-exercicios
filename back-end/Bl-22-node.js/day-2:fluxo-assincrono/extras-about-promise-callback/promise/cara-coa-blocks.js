const p = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve('yay')
    reject('no')
  })
  
  // Veja que estamos definindo o catch diretamente em p
  p.catch(function erro1 (err) { console.error('Primeiro catch'); return 'Error'; })
  p.catch(function erro (rej) { console.error(rej) })
  
  // Estamos definindo as chamadas dos then's também diretamente em p
  p
  .then(function acao1 (res) { console.log(`${res} da ação 1`); return res; })
  .then(function acao2 (res) { console.log(`${res} da ação 2`); return res; })
  .then(function acao3 (res) { console.log(`${res} da ação 3`); return res; })