class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(b: string, s: number, r: string, c: string[], co: string) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = co;
  }

  turnOn() {
    console.log(`Marca da tv: ${this._brand}
    Polegadas: ${this._size}
    Resolução da tela: ${this._resolution}
    Conexões disponíveis: ${this._connections}`)
  }

  get start() {
    return this._connectedTo;
  }

  set start(connect: string) {
    const positive = this._connections.some((value) => value === connect);
    positive ? this._connectedTo = connect : console.log("Conexão indisponível");
  }
}

const tv1 = new TV('LG', 27, '1024*720', ['hdmi', 'avg'], '');
tv1.turnOn();
console.log(tv1.start);
tv1.start = 'hdmi';
console.log(tv1.start);