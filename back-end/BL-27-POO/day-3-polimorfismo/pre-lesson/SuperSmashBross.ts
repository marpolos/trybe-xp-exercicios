abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeeleCharacter extends Character {
  talk() {
    console.log("Eu sou Meele");
  }
  specialMove(): void {
    console.log("Meele movie");
  }
}

class LongRangeCharacter extends Character {
    talk() {
      console.log("Eu sou LongRange");
    }
    specialMove(): void {
      console.log("LongRange movie");
    }
  }

  const character = (person: Character) => {
    person.talk();
    person.specialMove();
  }

  const meele = new MeeleCharacter();
  const range = new LongRangeCharacter();

  character(meele);
  character(range);