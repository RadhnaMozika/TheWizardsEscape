class Player{
    constructor(x, y){
        //loading images and sounds
        this.rightImg = loadImage("images/player1 - Copy.png");
        this.leftImg = loadImage("images/player1-left.png");

        this.spellbookImg = loadImage("images/spellbook.png");
        this.spellImg = loadAnimation("images/spell_01.png", "images/spell_02.png", "images/spell_03.png", "images/spell_04.png", 
        "images/spell_05.png", "images/spell_06.png", "images/spell_07.png", "images/spell_08.png", )

        this.powerSound = loadSound("sounds/powerup2.wav");


        //creating player and spellbook.
        this.player = createSprite(x, y, 50, 50);
        this.player.addImage(this.rightImg);
        this.player.scale = 1;

        this.weapon = createSprite(1840, 700, 50, 50);
        this.weapon.addImage(this.spellbookImg);
        this.weapon.scale = 0.12;
        
        //creating properties
        this.health = 100;
        this.hunger = 500;
        this.timer = 1;

        this.owernership = false;
    }

    //function to move player
    move(){
        if(keyDown("up")){
            this.player.y = this.player.y-20;
        }
        if(keyDown("down")){
            this.player.y = this.player.y+20;
        }
        if(keyDown("left")){
            this.player.x = this.player.x-20;
            this.player.addImage(this.leftImg);
        }
        if(keyDown("right")){
            this.player.x = this.player.x+20;
        }

        //restricting the camera's movement out of the bg image frame
        if(this.player.x < 360){
            camera.x = 360;
        }
        else if(this.player.x > 360 && this.player.x < 1550){
            camera.x = this.player.x;
        }
        if(this.player.x > 1550){
            camera.x = 1550;
        }
        if(this.player.y < -400){
            camera.y = -400;
        }
        else if(this.player.y > -390 && this.player.x<7000){
            camera.y = this.player.y;
        }
        if(this.player.y>7000){
            camera.y = 7000;
        }
    }


    pickWeapon(){
        //changing position of sleppbook when claimed
        this.owernership = true;
        this.weapon.x = camera.x-width/2+450;
        this.weapon.y = camera.y+280;
    }


    kill(){
        if(this.owernership === true){
            
            //attacking when space key is pressed
            if(keyDown("space") && this.timer < 1){
                monsterGroup.destroyEach();
                score = score + 50;
                this.timer = 70;

                //creating a lightning effect for spell casting
                this.lightning = createSprite(this.player.x, this.player.y, 50, 50);
                this.spellImg.frameDelay = 1;
                this.lightning.addAnimation("light", this.spellImg);
                this.lightning.lifetime = 6;
                thunderSound.play();
            }
        }

    }


}