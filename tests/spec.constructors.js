//////////////////////////////
// CHARACTER CONSTRUCTOR ///
//////////////////////////
var sword = new Weapon({name: "sword", power: 2});
var character = new Character({name: "Samwise"});

describe('Character Constructor', function(){

  beforeEach(function(){
    this.monsterAttacked = new Monster({name: "ghost"});
    this.character = new Character({name:"Samwise"});
  });


  it('instance of Name', function() {
    expect(this.character).to.be.an.instanceOf(Character);
  });

  it('should have defaults', function() {
    expect(this.character.life).to.be.equal(100);
    expect(this.character.weapon).to.be.equal(sword);
  });

  it('should have properties', function() {
    expect(this.character.name).to.be.equal("Samwise");
  });


  describe('attack method', function() {
    beforeEach(function() {
      this.weapon = new Weapon({name: "fisticuffs", power: 5});
      sinon.stub(Math, 'random', function(){return 1});
    })


    it('should be a function', function() {
      expect(this.character.attack).is.a('function')
    });

    it('should reduce monster life by power', function () {
      var currentMonsterLife = this.monsterAttacked.life;
      this.character.attack(this.monsterAttacked, this.weapon);
      expect(this.monsterAttacked.life).to.be.equal(currentMonsterLife - this.weapon.power);
    });

    afterEach(function () {
      Math.random.restore();
    });
  });

  describe('heal method', function(){

    beforeEach(function() {
      this.heartAdd = new Heart();
    });

    it('should heal you', function() {
      var currentLife = this.character.life;
      this.character.heal(this.heartAdd);
      expect(this.character.life).to.be.equal(currentLife + this.heartAdd.heart);
    });

  });


});

/////////////////////////////////////////////////////




////////////////////////////
// MONSTER CONSTRUCTOR ///
////////////////////////

describe('Monster Constructor', function(){

  beforeEach(function(){
    this.character = new Character({name:"Samwise"});
    this.monster = new Monster({name: "ghost"})
    this.monsterAttackPower = new MonsterAttack();
      sinon.stub(Math, 'random', function(){return 1});
  });

  it('instance of Name', function() {
    expect(this.monster.name).to.be.equal('ghost');
  });

  describe('monster attack', function() {
    it('should damage character', function(){
      var currentCharLife = this.character.life
      this.monster.attack(this.character, this.monsterAttackPower);
      expect(this.character.life).to.be.equal(currentCharLife - this.monsterAttackPower.power);
    })
  })

  afterEach(function () {
    Math.random.restore();
  });

});

/////////////////////////////////////////////////////
