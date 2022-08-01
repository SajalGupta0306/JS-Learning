// https://www.youtube.com/watch?v=nnwD5Lwwqdo

// Composition
// Follows has-a relationship
// Composition allows code-reuse
// no need to extend classes
// More Flexible

// Inheritance
// Follows is-a relationship
// Inheritance does not allow code-reuse.
// you will need to extend classes.
// less flexible compared to composition.

const monsterCanSwim = (monsterName) => {
  return {
    swim: function () {
      return `${monsterName} can swim.`;
    },
  };
};

const monsterCanWalkAndAttack = (monsterName) => {
  return {
    walk: function () {
      return `${monsterName} can walk.`;
    },
    attack: function () {
      return `${monsterName} can attack.`;
    },
  };
};

const monsterCanFly = (monsterName) => {
  return {
    fly: function () {
      return `${monsterName} can fly.`;
    },
  };
};

function normalMonster(name) {
  const monsterObj = { name };
  return {
    ...monsterObj,
    ...monsterCanWalkAndAttack(monsterObj.name),
  };
}

function normalMonsterWithSwim(name) {
  const monsterObj = { name };
  return {
    ...monsterObj,
    ...monsterCanWalkAndAttack(monsterObj.name),
    ...monsterCanSwim(monsterObj.name),
  };
}

function normalMonsterWithSwimAndFly(name) {
  const monsterObj = { name };
  return {
    ...monsterObj,
    ...monsterCanWalkAndAttack(monsterObj.name),
    ...monsterCanSwim(monsterObj.name),
    ...monsterCanFly(monsterObj.name),
  };
}

const monster1 = normalMonster("abcd");
console.log(monster1.attack());

const monster2 = normalMonsterWithSwim("xyz");
console.log(monster2.attack());
console.log(monster2.swim());

const monster3 = normalMonsterWithSwimAndFly("mno");
console.log(monster3.attack());
console.log(monster3.swim());
console.log(monster3.fly());
