import Aluno from './Aluno';
import Data from './Data';
import { Cliente, ItemPedido, Pedido } from './Lanchonete';
const aluno1 = new Aluno('Maria', '123456', [10, 9, 8, 7], [7, 8]);
// console.log(aluno1);
// console.log('Soma notas', aluno1.sumNotas());
// console.log('Média', aluno1.media());
const aluno2 = new Aluno('Arnaldo', '789545', [5, 8, 6, 7], [8, 7]);
// console.log(aluno2);

const cliente = new Cliente('Marcelle');
const pedido1 = new Pedido('batata', 8.99);
const pedido2 = new Pedido('cebola', 5.89)
const itemPedido = new ItemPedido(cliente, [pedido1, pedido2], 'pix', 0.1);
console.log('Total', itemPedido.total);
console.log('Com desconto', itemPedido.totalComDesconto);

const data = new Data(2, 99, 1600);
console.log(data);