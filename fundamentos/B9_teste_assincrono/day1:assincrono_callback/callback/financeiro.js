const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const renda = 1000;
//Abaixo minha solução para callback.
  /* const callback = (despesas) => {
      const despesaFinal = despesas.reduce((despesaTotal, contas) => {
          Object.values(contas).forEach((conta) => despesaTotal += conta)
          return despesaTotal;
      }, 0);
      return despesaFinal;
  } */

  
  
  const despesaMensal = (renda, despesas, callback) => {
      
      const despesaTotal = callback(despesas);
      const saldoFinal = renda - despesaTotal;
      
      console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
    };
    
    const somaDespesas = (despesas) => {
      const custoItem = despesas.map((item) => Object.values(item));
      //console.log(custoItem);
      const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
      //console.log(despesaTotal);
      return despesaTotal;
    };
    somaDespesas(despesas);
    
    despesaMensal(renda, despesas, somaDespesas);
 // despesaMensal(renda, despesas, callback);