fetch('https://twitter.com/_staticvoid')
  .then((response) => {
    if (status === 200) return fetch('http://outrosite.com.br')
  })
  .then((response) => console.log(response.statusText));