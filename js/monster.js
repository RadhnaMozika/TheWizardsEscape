class Monster{
  constructor(){
    //loading animation for flames
    this.image = loadAnimation("images/blueFlame_01.png", "images/blueFlame_02.png", "images/blueFlame_03.png")
    this.image2 = loadAnimation("images/flame_01.png", "images/flame_02.png", "images/flame_03.png", 
    "images/flame_04.png", "images/flame_05.png", )

    //creating monsters every 10 frames in a position close to the player
    if(frameCount % 10 === 0){
      this.monster = createSprite(Math.round(random(player.player.x-200, player.player.x+200)), 
      Math.round(random(player.player.y-200, player.player.y+200)), 50, 50);

      //giving the monsters random velocities
      this.monster.velocityX = Math.round(random(-15, 15));
      this.monster.velocityY = Math.round(random(-10, 10));

      this.monster.lifetime = 100;

      //giving monsters animation according to random no.
       var rand = Math.round(random(1,2))
      if(rand === 1){
        this.monster.addAnimation("j", this.image);
        this.monster.scale = 0.12;
        }
      if(rand === 2){
        this.monster.addAnimation("j", this.image2);
        this.monster.scale = 0.09;  
        }
      //adding to group
      monsterGroup.add(this.monster);
    }
  }


  //function to decrease player's health when monsters touch player
  killPlayer(){
    if(player.player.isTouching(monsterGroup)){
        player.health = player.health-1;
        burnSound.play();
      }
    }  
}

                             