interface Character {
    name: string;
    specialMove: string;
  }
  
  interface DbCharacter extends Character {
    id: number;
  }
  
  const db: DbCharacter[] = [];

  interface IModel {
    create(character: string): string;
    read(id: number): string;
    update(character: string): number;
    delete(id: number): void;
  }

  class LocalDbModel implements IModel {
    
  }