var character;

var sword = new Weapon({name: "Short Sword", power: 3});
var axe = new Weapon({name: "Battle Axe", power: 6});
var halberd = new Weapon ({name: "Halberd", power: 5});
var staff = new Weapon ({name: "Staff", power: 4});
var broadSword = new Weapon({name: "Broad Sword", power: 6});
var silverSword = new Weapon ({name: "Silver Sword", power: 8});
var club = new Weapon({name: "Club", power: 4});
var greatClub = new Weapon ({name: "Great Club", power: 7});
var greatAxe = new Weapon ({name: "Great Axe", power: 7});
var masterSword = new Weapon({name: "Master Sword", power: 10});

var monsterAttack = new MonsterAttack();
var monsterAttackInterval;

var monster1 = new Monster({name: "Ghost"});

var clickedNum = 0;



// Character UI //
$('#weapon').html(sword.name)
$('#powerTotal').html(sword.power)



// Attack Button //
$('.buttons').on('click', '.attackButton', function(event){
  event.preventDefault();
  console.log("i'm working");
  if ($('#monsterClass').hasClass('hidden') !== true) {
    character.attack(monster1, character.weapon);
  }
  if (monster1.life <= 0) {
    $('.monster1').addClass('hidden');
    $('.monster1Dead').removeClass('hidden');
    monster1 = new Monster({name: "Ghost"});
    monsterAttack = new MonsterAttack();
  }
  if ($('#monsterClass').hasClass('hidden')) {
    $('.moveForwardButton').show();
    clearInterval(monsterAttackInterval);
  }

})



// Log In //
$('.wrapper').on('click', '.enter', function(event){
  event.preventDefault();
  console.log("i'm working");
  var nameLogIn = $('input[name="userName"]').val();
  character = new Character({name: nameLogIn});
  $('.pageWrapper').removeClass('hidden');
  $('.loginWrapper').addClass('hidden');
  $('#user').html(character.name);
  $('#charHealth').html(character.life)

})



// Up Button //
$('.moveForwardWrap').on('click', '.moveForwardButton', function(event){
  clickedNum ++;
  var randomizer = Math.floor(Math.random()*11);
  $('.monster1Dead').addClass('hidden');
  if (randomizer <= 1) {
    $('.chest').removeClass('hidden');
    $('.monster1').addClass('hidden');
  } else if (randomizer <= 6 && randomizer >= 2) {
    console.log('keep walking Hero');
    $('.chest').addClass('hidden');
    $('.monster1').addClass('hidden');
  } else if (randomizer >= 7) {
    $('.chest').addClass('hidden');
    $('.monster1').removeClass('hidden');
  }

  if (clickedNum === 20) {
      console.log("you win!")
      $('.chest').addClass('hidden');
      $('.monster1').addClass('hidden');
      $('.throne').removeClass('hidden');
  }



  if ($('#monsterClass').hasClass('hidden') !== true) {
    $('.moveForwardButton').hide();
      monsterAttackInterval = setInterval(function() {
      console.log(character.life);
      monster1.attack(character, monsterAttack)
      $('#charHealth').html(character.life)
      }, 500);
  }

});



// Treasure Chest //

$('.chest').on('click', '.chestBox', function(event){
  var randomizer = Math.floor(Math.random()*56);
  if (randomizer <= 1) {
    if (confirm('You found the Master Sword! It has a power of 10! will you take the weapon?')) {
        character.weapon = masterSword
        $('.chest').addClass('hidden');
    } else {
        $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 2 && randomizer <= 4 ) {
    if (confirm('You found a Silver Sword! It has a power of 8! will you take the weapon?')) {
        character.weapon = silverSword
        $('.chest').addClass('hidden');
    } else {
        $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 5 && randomizer <= 8 ) {
    if (confirm('You found a Great Club! It has a power of 7! will you take the weapon?')) {
        character.weapon = greatClub
        $('.chest').addClass('hidden');
    } else {
    $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 9 && randomizer <= 12 ) {
    if (confirm('You found a Great Axe! It has a power of 7! will you take the weapon?')) {
        character.weapon = greatAxe
        $('.chest').addClass('hidden');
    } else {
    $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 13 && randomizer <= 18 ) {
    if (confirm('You found a Broad Sword! It has a power of 6! will you take the weapon?')) {
        character.weapon = broadSword
        $('.chest').addClass('hidden');
    } else {
        $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 19 && randomizer <= 24 ) {
    if (confirm('You found a Axe! It has a power of 6! will you take the weapon?')) {
        character.weapon = axe
        $('.chest').addClass('hidden');
    } else {
        $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 25 && randomizer <= 30 ) {
    if (confirm('You found a Halberd! It has a power of 5! will you take the weapon?')) {
        character.weapon = halberd
        $('.chest').addClass('hidden');
    } else {
        $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 31 && randomizer <= 38 ) {
    if (confirm('You found a Staff! It has a power of 4! will you take the weapon?')) {
        character.weapon = staff
        $('.chest').addClass('hidden');
    } else {
        $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 39 && randomizer <= 45 ) {
    if (confirm('You found a Club! It has a power of 4! will you take the weapon?')) {
        character.weapon = club
        $('.chest').addClass('hidden');
    } else {
        $('.chest').addClass('hidden');
    }
  }
  if (randomizer >= 46) {
    console.log("You are healed!")
    var heart = new Heart();
    character.heal(heart);
  }

  $('#weapon').html(character.weapon.name);
  $('#powerTotal').html(character.weapon.power);

});
/////////////////////////////////////////////

////////////////
// Animations //
////////////////




////////////////////////////////////////////
