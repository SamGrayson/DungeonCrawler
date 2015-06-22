////////////////////
// Main Character //
////////////////////



function Character(options) {
  this.name = options.name;
  this.life = 100;
  this.weapon = sword;
}

Character.prototype.attack = function (monster, weapon){
  var chance = Math.floor(Math.random() * 10);
  var critical = Math.floor(Math.random() * 10);
  if (chance > 1 && critical < 1) {
    var criticalHit = weapon.power + 5;
    console.log("Critical Hit!! You hit the monster for " + criticalHit + " damage!");
    monster.life = monster.life - (weapon.power + 5);
  }
  else if (chance > 1) {
    console.log("You hit the monster for " + weapon.power + " damage!");
    console.log(weapon.power);
    monster.life = monster.life - weapon.power;
  }
  if (monster.life <= 0) {
    console.log("You killed zee moster!");
  }
};

Character.prototype.heal = function (lifeAdd) {
  this.life = lifeAdd.heart + character.life
};

Character.prototype.getWeapon = function (weapon, power) {
  this.weapon = new Weapon ({name: name, power: power})
}

//////////////////
// Main Monster //
//////////////////


function Monster(options) {
  this.name = options.name;
  var randomLife;
    var difficulty = Math.floor(Math.random() * 10);
    if (difficulty > 1) {
      randomLife = 5;
    } else {
      randomLife = 15;
    }
  this.life = 5 + randomLife
}

Monster.prototype.attack = function (character, monsterAttack){
  var chance = Math.floor(Math.random() * 11);
  var critical = Math.floor(Math.random() * 11);
  if (character.life <= 0) {
    console.log("Game Over! You were killed!");
  }
  if (chance > 1 && critical < 1) {
    var criticalHit = monsterAttack.power + 5;
    console.log("Critical Hit!! You were hit for " + criticalHit + " damage!");
    character.life = character.life - (monsterAttack.power + 5);
  }
  if (chance > 1) {
    console.log("You were hit for " + monsterAttack.power + " damage!");
    character.life = character.life - monsterAttack.power;
  }
}

Monster.prototype.getWeapon = function (power) {
  var difficulty = Math.floor(Math.random() * 10);
  if (difficulty > 1) {
    this.power = 5;
  } else {
    this.power = 10;
  }
}

/////////////////////
// Weapons / Items //
/////////////////////



function Weapon(options) {
 this.name = options.name || "fists";
 this.power = options.power || 1;
}

function MonsterAttack () {
  this.power = Math.floor(Math.random() * 6);
}

function Heart() {
  var randomizer = Math.floor(Math.random() * 11);
  if (randomizer >=1 && randomizer <= 7) {
    this.heart = 5
  }
  else if (randomizer <= 1) {
    this.heart = 15;
  }
  else if (randomizer >= 7) {
    this.heart = 10;
  }
}
