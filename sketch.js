var bg1, bg2, bg3;

var layout, player;

var  monster, monsterGroup;
var food, foodGroup;

var trophy, trophyImage;

var storyBg, lostPage;
var healthImg, hungerMeterImg, timerImg;
var arrowImg, spaceImg;

var thunderSound, burnSound, winSound, loseSound;

var gameState = 0;
var score = 0;


function preload(){

  //loading the 3 background images
  bg1 = loadImage("images/Spawn2.jpg");
  bg2 = loadImage("images/map2.jpg");
  bg3 = loadImage("images/map1.png");

  //loading images for the game
  storyBg = loadImage("images/storyPage.jpg");
  lostPage = loadImage("images/lost.jpg");
  
  trophyImage = loadImage("images/trophy.png");

  arrowImg = loadImage("images/arrows.png");
  spaceImg = loadImage("images/space_bar.png");

  healthImg = loadImage("images/healthBar.png");
  timerImg = loadImage("images/timer.png");
  hungerMeterImg = loadImage("images/hungerMeter.png")
  
  //loading sounds for the game
  thunderSound = loadSound("sounds/thunder-crack.wav");
  burnSound = loadSound("sounds/burning.wav");
  winSound = loadSound("sounds/win.wav");
  loseSound = loadSound("sounds/gameOver.wav");
}


function setup() {
  createCanvas(1300, 650);

  //creating trophy
  trophy = createSprite(970, 6323, 100, 100);
  trophy.addImage(trophyImage);
  trophy.scale = 0.2;
  
  //creating player, layout and food objects
  player = new Player(1000, 350);

  layout = new Layout();
  layout.layout1();   

  food = new Food();

  //creaing group for monsters
  monsterGroup = new Group();
}

function draw() {
   background(150); 

  //setting story pages according to gamestate;
  if(gameState === 0)
    story1();

  if(gameState === 0.5)
    story2();

  if (gameState === 0.8){
    story3();
  }

  if(gameState === 1){
    layout.bg();
    layout.layoutBounceOff();

    //calling function to move player
    player.move();

    //creating monsters and making them harm player on contact
    monster = new Monster();
    monster.killPlayer();

    //increasing score
    score = score + Math.round(getFrameRate()/30)
  
    drawSprites();

    //calling function to increase health when player obtains food and medpack
    food.increaseHealth();

    //decreasing the timer and hunger
    player.timer = player.timer-1;
    player.hunger = player.hunger-2;


    //giving player ownership of weapon when player touches it
    if(player.player.isTouching(player.weapon)){
      player.ownership = true
    }

    if(player.ownership === true){
      player.pickWeapon();
      player.kill();
    }

    textSize(20);
    fill(0);
    strokeWeight(3);
    stroke(255);
    textFont("Garamond");

    //displaying score
    text ("SCORE - "+score, camera.x-width/2+20, camera.y-height/2+20);

    //displaying health
    image(healthImg, camera.x-width/2+20,camera.y+height/2-80, 200, 80);
    text(player.health, camera.x-width/2+110,camera.y+height/2-35);

    //displaying hunger
    image(hungerMeterImg, camera.x-width/2+210,camera.y+height/2-120, 200, 160);
    text(Math.round(player.hunger/10), camera.x-width/2+315, camera.y+height/2-32);

   
  
    //displaying timer if player has weapon
    if(player.ownership === true){

      image(timerImg, camera.x-width/2+470, camera.y+height/2-90, 90, 80);

      if(player.timer > 0){
        var a;
        if(Math.round(player.timer/10) < 10){
          a = 510;
        }
        else if(Math.round(player.timer/10) > 9){
          a = 503;
        }
        text(Math.round(player.timer/10), camera.x-width/2+a, camera.y+height/2-37);
      }
      if(player.timer < 0){
        text("GO!", camera.x-width/2+495, camera.y+height/2-35);
      }
    }
    


    //game is lost of hunger or health are 0
    if(player.health < 1 || player.hunger < 1){
      loseSound.play();
      gameState = 2;
    }

    //game is won if player reaches trophy
    if(player.player.isTouching(trophy)){
      winSound.play();
      gameState = 3;
    }

  }

  if(gameState === 2){
    //displaying image
    camera.x = 0;
    camera.y = 2000;
    image(lostPage, -700, 2000-height+275, 1400, 700);

    textFont("Garamond");
    textSize(40);
    fill(0);
    strokeWeight(1);
    stroke(0);

    text ("GAME OVER!", camera.x-130, camera.y-70);
    textSize(30);
    text ("YOU LOST!", camera.x-88, camera.y+10);
    textSize(25);

    //displaying score on game over screen
    var a;
    if(score < 9){
      a = 95
    }
    if(score > 9 && score < 99 ){
      a = 105;
    }
    if(score > 99 && score < 999){
      a = 115;
    }
    if(score > 999 && score < 9999){
      a = 125;
    }
    
    text ("YOUR SCORE : "+score, camera.x-a, camera.y+80);
  }

  if(gameState === 3){  
    //displaying image
    camera.x = 0;
    camera.y = 2000;
    image(lostPage, -700, 2000-height+275, 1400, 700);

    textSize(40);
    textFont("Garamond")
    fill(0);
    strokeWeight(1);
    stroke(0);

    text ("GAME OVER!", camera.x-125, camera.y-100);
    textSize(30);
    text ("YOU WIN!", camera.x-80, camera.y-20);
    textSize(25);

    //dislaying score on winning screen
    var a;
    if(score < 9){
      a = 95
    }
    if(score > 9 && score < 99 ){
      a = 105;
    }
    if(score > 99 && score < 999){
      a = 115;
    }
    if(score > 999 && score < 9999){
      a = 125;
    }
    text ("YOUR SCORE : "+score, camera.x-a, camera.y+80);
 
  }

}
  
  
function story1(){
  //story page image
  image(storyBg, -1200, -110);
  
  textSize(40);
  strokeWeight(1);
  stroke(0);
  textFont("Garamond");
  fill(0);

  //displaying game story text
  text("The Wizard's Escape", 490, 130);

  textSize(30);
  text("You are one of the finest wizards in the land.", 400, 250)
  text ("You have been transported to a maze cave, full of magically created fire goblets.", 190, 290);
  text ("Your goal is to survive and make it through the maze.", 340, 330);
  text("Your first goal is to find a grimmoire, or spellbook. If you don't have your spell book,", 150, 370)
  text("you cannot entinguish the fire goblets.", 430, 410);
  text("Thankfully, pieces of bread and water supplies have been left at intervals, to help increase your survival chances.", 10, 450);

  text("Press Enter to Continue", 510, 550);

  //game state changes when key is pressed
  if(keyDown("enter")){
    gameState = 0.5;
  }
  
}


function story2(){
  //bg
  image(storyBg, -1200, -110);

  textSize(30);
  strokeWeight(1);
  stroke(0);
  textFont("Garamond");
  fill(0);

  //displaying images
  image(timerImg, 900, 120, 180, 180);
  image(hungerMeterImg, 850, 300, 300, 240);
  image(healthImg, 850, 450, 300, 120)

  //story page text
  text("Once you press the space key and cast a spell,", 75, 190);
  text("there will be a short time span there you can't use the spell.", 75, 220);
  text("Make sure to keep an eye on", 75, 460); 
  text("the Health Bar and the Hunger Bar", 75, 490); 

  text("Press Space to Continue", 510, 550);

  //game state changes when key is pressed
  if(keyDown("space") && gameState === 0.5){
    gameState = 0.8;
  }
  

}

function story3(){
  //bg
  image(storyBg, -1200, -110);

  textSize(30);
  strokeWeight(1);
  stroke(0);
  textFont("Garamond");
  fill(0);

  //displaying images
  image(arrowImg, 800, 120, 400, 200);
  image(spaceImg, 850, 390, 300, 80);

  //displaying story text
  text("You can move your avatar using the arrow keys", 75, 280);
  text("You can attack using the space bar", 75, 435);
  text("Press Enter to Continue", 510, 550);
  
  //gamestate changes when key is pressed
  if(keyDown("enter") && gameState === 0.8){
    gameState = 1;
  }
  
}

  
  