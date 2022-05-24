// Criando uma promise
const p = new Promise((resolve, reject) => {
    try {
      resolve(funcaoX())
    } catch (e) {
      reject(e)
    }
  })
                        
  // Executando uma promise
  p
    .then((parametros) => /* sucesso */)
    .catch((erro) => /* erro */)
  
  // Tratando erros e sucessos no then
  p
    .then(resposta => { /* tratar resposta */ }, erro => { /* tratar erro */ })