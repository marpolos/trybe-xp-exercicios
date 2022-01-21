//Application Programming Interface (API)
//Em resumo, uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas. Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.
//Toda API é um back-end, mas nem todo back-end é uma API.
//Um back-end padrão de um site retorna templates (um arquivo HTML pronto, por exemplo) para o front-end de uma única aplicação, através de rotas definidas. Por exemplo, quando você acessa uma página da nossa plataforma, está fazendo um request ao servidor, que te retorna um template como response .
//As APIs também possuem rotas de acesso que permitem a comunicação com o servidor, mas não precisam retornar templates. Geralmente, retornam dados no formato JSON .
//JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos Javascript:
//JSON está sempre presente em aplicações web modernas, pois é simples, interpretável e ainda funciona muito bem em aplicações JavaScript. Além disso, é compatível com diversas outras linguagens, que conseguem interpretá-lo e gerar códigos no formato, como Python, Java, PHP, Ruby, entre outras. Desse modo, as APIs retornam os dados no formato JSON, a fim de manter uma alta escalabilidade e independência.
//por não ser um objeto nativo do JavaScript, precisamos traduzir ele para que fique a par da linguagem que estamos usando. Para isso existe a função JSON.parse() , assim como existe a função JSON.stringify() que transforma uma estrutura JavaScript em string.

//Sobre API
/* APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
Encontre uma API pública, que seja bem documentada e mantida;
Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
Entenda o formato dos dados disponíveis;
Faça requests e receba responses da API com os dados que você deseja receber. */
//Visualizar o API: abrir o console do chrome, ir na aba network, dgitar a url e clicar em preview.