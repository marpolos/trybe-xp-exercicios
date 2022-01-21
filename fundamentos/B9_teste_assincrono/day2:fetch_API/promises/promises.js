/* As promises se comportam de forma muito parecida com as funções que já conhecemos, mas existem 3 pontos de destaque das Promises em relação à outras funções:
As Promises são assíncronas , ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções;
As Promises têm "superpoderes", isto é, funções extras que facilitam o controle do fluxo assíncrono;
As Promises são construídas de uma forma distinta: para criar uma nova Promise, usamos um Construtor .
 */
//O retorno de um fetch é uma promise.

/* Outro ponto importante é que as Promises possuem 3 estados:
Pending (pendente): estado inicial, significa que ela está em execução;
Fulfilled (resolvida): estado de sucesso, significa que tudo deu certo e foi retornado o valor de sucesso;
Rejected (rejeitada): estado de rejeição, significa que algo deu errado e foi retornado o erro que gerou essa rejeição. */

//Evitam as callbacks hell: http://callbackhell.com/