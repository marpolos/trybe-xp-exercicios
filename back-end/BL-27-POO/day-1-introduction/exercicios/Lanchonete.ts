export class Cliente {
  _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }
};

export class Pedido {
  _nome: string;
  _preco: number;
  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }
};

export class ItemPedido {
  _cliente: Cliente;
  _pedido: Pedido[];
  _pagamento: string;
  _desconto?: number;
  constructor(cliente: Cliente, pedido: Pedido[], pagamento: string, desconto?: number) {
    this._cliente = cliente;
    this._pedido = pedido;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  total() {
    const sum = this._pedido.reduce((acc, value) => {
        const soma = acc += value._preco;
        return soma;
    }, 0);
    return sum;
  }

  totalComDesconto() {
    if (!this._desconto) throw new Error('Esse pedido não tem desconto');
    const sum = this._pedido.reduce((acc, value) => {
        const soma = acc += value._preco;
        return soma;
    }, 0);
    const desconto = sum * ( 1 - this._desconto!);
    return desconto;
  }
}