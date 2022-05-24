const p = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve('yay')
    reject('no')
  })
  
  p.catch(function erro1 (err) { console.error('Eu pego todos os erros dessa promise'); return 'Error'; })
  
  p
  .then(function acao1 (res) { console.log(`Estou rejeitando o valor, o catch a seguir deve tratar`); throw new Error('Erro'); })
  .catch(function erro2 (rej) { console.error('Eu pego somente os erros que aconteceram até a ação 1') })
  .then(function acao2 (res) { console.log(`Eu executo normalmente`); return res; })
  .then(function acao3 (res) { console.log(`Eu executo normalmente`); return res; })
  .catch(function erro3 (rej) { console.error('Eu pego somente os erros que acontecem nas ações 2 e 3') })