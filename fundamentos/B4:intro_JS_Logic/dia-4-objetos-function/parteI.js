
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
  console.log("Bem vinda, " + info.personagem + "!");

  //Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
  info['recorrente'] = "Sim";
  console.log(info);

  //3 - Faça um for/in que mostre todas as chaves do objeto.
  for (let key in info){
      console.log(key);
  }

  //Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 
  for (let valor in info){
      console.log(info[valor]);
  }

  //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
  let info2 =
      {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
        }

        let info3 =
        {
      personagem: 'Capitain Kirk',
      origem: "Jornada nas estrelas",
      nota: 'Capitão da frota estelar do futuro',
      recorrente: 'Sim'
          }

console.log("********************");
  for (let valores in info2){
      console.log(info2[valores] + " e " + info[valores] + " e " + info3[valores]);
  }