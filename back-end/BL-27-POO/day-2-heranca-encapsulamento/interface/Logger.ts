export default interface Logger {
  log(param: string): void;
}

export default interface Database {
  attr: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
    log(param: string) {
        console.log(param);
    }
}

class ConsoleLogger2 implements Logger {
    log(param: string) {
        console.log('Segunda tentativa', param);
    }
}

class ExampleDataBase implements Database {
  constructor(attr: Logger) {
    attr = attr;
  }

};