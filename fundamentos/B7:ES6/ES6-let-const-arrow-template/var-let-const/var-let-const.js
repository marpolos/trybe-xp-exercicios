function userInfo() {
    const userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo();
  //console.log(userEmail);

var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas

//O var sobescreve o valor e vaza para fora do escopo do if e for.

const userInfo2 = {
    name: "Cláudio",
    id: "5489-2",
    email: "claudio@email.com"
  };
  userInfo2.name = "João" //Podemos reatribuir chamando uma chave do objeto, mas nunca reatribuir o objeto inteiro.
  
  console.log(userInfo2) // { name: "João", id: "5483-2", email: "claudio@email.com }