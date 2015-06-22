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
var masterSword = new Weapon({name: "Master Sword", power: 9000});

var monsterAttack = new MonsterAttack();
var monsterAttackInterval;

var monster1 = new Monster({name: "Ghost"});

var clickedNum = 0;

var monsterClass;


// Character UI //
$('#weapon').html(sword.name)
$('#powerTotal').html(sword.power)



// Attack //
$('.middleContent').on('click', monsterClass, function(event){
  event.preventDefault();
  if ($(monsterClass).hasClass('hidden') !== true) {
    character.attack(monster1, character.weapon);
  }
  if (monster1.life <= 0) {
    $(monsterClass + "Dead").fadeIn(1);
    $(monsterClass).addClass('hidden');
    $(monsterClass + "Dead").removeClass('hidden');
    $('.monsterShadow').fadeOut(1200);
    setTimeout(function() {$('.monsterShadow').addClass('hidden')}, 1200)
    monster1 = new Monster({name: "Ghost"});
    monsterAttack = new MonsterAttack();

  }
  if ($(monsterClass).hasClass('hidden')) {
    $('.moveForwardButton').show();
    clearInterval(monsterAttackInterval);
    setTimeout(function(){$(monsterClass + "Dead").fadeOut(1000)},800)
  }

});


// Log In //
$('.wrapper').on('click', '.enter', function(event){
  event.preventDefault();
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
  var randomMonster = Math.ceil(Math.random()*2);
  monsterClass = ".monster" + randomMonster;

  $(monsterClass + "Dead").addClass('hidden');
  $('.chestOpen').addClass('hidden');
  if (randomizer <= 1) {
    $('.chest').removeClass('hidden');
    $(monsterClass).addClass('hidden');
    $('.monsterShadow').addClass('hidden');
  } else if (randomizer <= 6 && randomizer >= 2) {
    console.log('keep walking Hero');
    $('.chest').addClass('hidden');
    $(monsterClass).addClass('hidden');
    $('.monsterShadow').addClass('hidden');
  } else if (randomizer >= 7) {
    $('.chest').addClass('hidden');
    $(monsterClass).removeClass('hidden');
    $('.monsterShadow').removeClass('hidden');
    $('.monsterShadow').fadeIn(1);
  }

  if (clickedNum === 50) {
      console.log("you win!")
      $('.chest').addClass('hidden');
      $(monsterClass).addClass('hidden');
      $('.throne').removeClass('hidden');
      $('.monsterShadow').addClass('hidden');
      $('.moveForwardButton').hide();
  }

  if ($(monsterClass).hasClass('hidden') !== true) {
    $('.moveForwardButton').hide();
      monsterAttackInterval = setInterval(function() {
      monster1.attack(character, monsterAttack)
      $('#charHealth').html(character.life)
      }, 500);
  }


});



// Treasure Chest //

$('.chest').on('click', '.chestBox', function(event){
  var randomizer = Math.floor(Math.random()*61);
  var heart = new Heart();
  $('.chestOpen').removeClass('hidden');
  $('.chest').addClass('hidden');
  if (randomizer <= 1) {
    if (confirm('You found the Master Sword! Its power level is OVER 9000!!!!! will you take the weapon?')) {
        character.weapon = masterSword
        $('.chestOpen').addClass('hidden');
    } else {
        $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 2 && randomizer <= 4 ) {
    if (confirm('You found a Silver Sword! It has a power of 8! will you take the weapon?')) {
        character.weapon = silverSword
        $('.chestOpen').addClass('hidden');
    } else {
        $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 5 && randomizer <= 8 ) {
    if (confirm('You found a Great Club! It has a power of 7! will you take the weapon?')) {
        character.weapon = greatClub
        $('.chestOpen').addClass('hidden');
    } else {
    $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 9 && randomizer <= 12 ) {
    if (confirm('You found a Great Axe! It has a power of 7! will you take the weapon?')) {
        character.weapon = greatAxe
        $('.chestOpen').addClass('hidden');
    } else {
    $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 13 && randomizer <= 18 ) {
    if (confirm('You found a Broad Sword! It has a power of 6! will you take the weapon?')) {
        character.weapon = broadSword
        $('.chestOpen').addClass('hidden');
    } else {
        $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 19 && randomizer <= 24 ) {
    if (confirm('You found a Axe! It has a power of 6! will you take the weapon?')) {
        character.weapon = axe
        $('.chestOpen').addClass('hidden');
    } else {
        $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 25 && randomizer <= 30 ) {
    if (confirm('You found a Halberd! It has a power of 5! will you take the weapon?')) {
        character.weapon = halberd
        $('.chestOpen').addClass('hidden');
    } else {
        $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 31 && randomizer <= 38 ) {
    if (confirm('You found a Staff! It has a power of 4! will you take the weapon?')) {
        character.weapon = staff
        $('.chestOpen').addClass('hidden');
    } else {
        $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 39 && randomizer <= 45 ) {
    if (confirm('You found a Club! It has a power of 4! will you take the weapon?')) {
        character.weapon = club
        $('.chestOpen').addClass('hidden');
    } else {
        $('.chestOpen').addClass('hidden');
    }
  }
  if (randomizer >= 46) {
    character.heal(heart);
    $('#charHealth').html(character.life)
  }

  $('#weapon').html(character.weapon.name);
  $('#powerTotal').html(character.weapon.power);
});

/////////////////////////////////////////////////////


////////////////////
// Smoke Particle //
////////////////////

var particles = [];
var particleCount = 30;
var maxVelocity = 2;
var targetFPS = 33;
var canvasWidth = 1000;
var canvasHeight = 800;
var imageObj = new Image();

imageObj.onload = function() {
    particles.forEach(function(particle) {
            particle.setImage(imageObj);
    });
};

imageObj.src = "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png";


function Particle(context) {

    // Set the initial x and y positions
    this.x = 0;
    this.y = 0;

    // Set the initial velocity
    this.xVelocity = 0;
    this.yVelocity = 0;

    // Set the radius
    this.radius = 5;

    // Store the context which will be used to draw the particle
    this.context = context;

    // The function to draw the particle on the canvas.
    this.draw = function() {

        // If an image is set draw it
        if(this.image){
            this.context.drawImage(this.image, this.x-128, this.y-128);
            // If the image is being rendered do not draw the circle so break out of the draw function
            return;
        }
        // Draw the circle as before, with the addition of using the position and the radius from this object.
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = "rgba(0, 255, 255, 1)";
        this.context.fill();
        this.context.closePath();
    };

    // Update the particle.
    this.update = function() {
        // Update the position of the particle with the addition of the velocity.
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        // Check if has crossed the right edge
        if (this.x >= canvasWidth) {
            this.xVelocity = -this.xVelocity;
            this.x = canvasWidth;
        }
        // Check if has crossed the left edge
        else if (this.x <= 0) {
            this.xVelocity = -this.xVelocity;
            this.x = 0;
        }

        // Check if has crossed the bottom edge
        if (this.y >= canvasHeight) {
            this.yVelocity = -this.yVelocity;
            this.y = canvasHeight;
        }

        // Check if has crossed the top edge
        else if (this.y <= 0) {
            this.yVelocity = -this.yVelocity;
            this.y = 0;
        }
    };

    // A function to set the position of the particle.
    this.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
    };

    // Function to set the velocity.
    this.setVelocity = function(x, y) {
        this.xVelocity = x;
        this.yVelocity = y;
    };

    this.setImage = function(image){
        this.image = image;
    }
}

// A function to generate a random number between 2 values
function generateRandom(min, max){
    return Math.random() * (max - min) + min;
}

// The canvas context if it is defined.
var context;

// Initialise the scene and set the context if possible
function init() {
    var canvas = document.getElementById('smoke');
    if (canvas.getContext) {

        // Set the context variable so it can be re-used
        context = canvas.getContext('2d');

        // Create the particles and set their initial positions and velocities
        for(var i=0; i < particleCount; ++i){
            var particle = new Particle(context);

            // Set the position to be inside the canvas bounds
            particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));

            // Set the initial velocity to be either random and either negative or positive
            particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
            particles.push(particle);
        }
    }
    else {
        alert("Please use a modern browser");
    }
}

// The function to draw the scene
function draw() {
    // Clear the drawing surface and fill it with a black background
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.fillRect(0, 0, 400, 400);

    // Go through all of the particles and draw them.
    particles.forEach(function(particle) {
        particle.draw();
    });
}

// Update the scene
function update() {
    particles.forEach(function(particle) {
        particle.update();
    });
}

// Initialize the scene
init();

// If the context is set then we can draw the scene (if not then the browser does not support canvas)
if (context) {
    setInterval(function() {
        // Update the scene befoe drawing
        update();

        // Draw the scene
        draw();
    }, 1000 / targetFPS);
}


/////////////////////////////////////////////

////////////////
// Animations //
////////////////




////////////////////////////////////////////
