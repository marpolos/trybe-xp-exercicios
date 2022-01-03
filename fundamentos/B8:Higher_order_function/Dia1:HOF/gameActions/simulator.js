const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

/*   Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */
function damageDragon () {
    let damageInDragon = dragon.damage;
    damageInDragon = Math.round(15 + Math.random()*dragon.strength);
    return damageInDragon;
}

/* Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */

function damageForWarrior() {
  const strengthWarrior = warrior.strength;
  let damageForWarrior = Math.round(strengthWarrior + Math.random() * (strengthWarrior * warrior.weaponDmg));
  return damageForWarrior;
}

/* Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0. */

function damageAndManaMage () {
  const intelligengeMage = mage.intelligence;
  if (mage.mana < 15) {
    damageManaMage.damage = "Não possui mana suficiente";
    damageManaMage.mana = -0;
  }
  damageManaMage.damage = Math.round(intelligengeMage + Math.random() * (intelligengeMage * 2));
  damageManaMage.mana = -15;
  return damageManaMage;
}

/* Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior . */

const gameActions = {
  warriorAction : damageForWarrior => { dragon.healthPoints = damageForWarrior() };
};

/* Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage. */