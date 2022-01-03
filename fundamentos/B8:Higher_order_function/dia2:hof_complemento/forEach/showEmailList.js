/* Use o método forEach chamando a callback showEmailList para apresentar os emails */

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  /* const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui
  emailListInData.forEach(showEmailList); */

//emailListInData.forEach((item) => {console.log(`O email ${item} está cadastrado.`)});

const sucessful = (item) => console.log(`${item} cadastrado com sucesso.`);
emailListInData.forEach(sucessful);