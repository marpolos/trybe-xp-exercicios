/* Ao fazer uma requisição para uma API, nós dependemos de diversos fatores externos ao nosso código, alguns exemplos são ter acesso a internet e o serviço da API funcionar... Então, tenha em mente que:
Você nunca deve testar uma requisição real para a API!
Imagine que você está utilizando uma API da previsão do tempo, no momento da criação do seu teste a previsão era de sol. No dia seguinte você vai dar continuidade para os testes, mas agora a API está retornando que a previsão é de chuva, ou seja, o teste passava enquanto a previsão era sol, quando passou a ser chuva, seu teste falhou. Além da falta de controle sobre o retorno de uma requisição, você também pode ter problemas como:
A URL da API estar incorreta.
Uma falha na conexão com a internet.
Uma instabilidade no servidor que gerencia a API.
Se nunca podemos testar nossa função com uma API real, então como podemos realizar os testes? */

//Instalar as dependencias do node-fetch eu uso npm i, pois o usuário vai usar.
//Para instalar devDependêncies que só os deves usam nós usamos npm --dev
//Para passar um test posso colocar um x na frente do it/test.