class Food{
    constructor(){
        //loading sounds and images
        this.sound = loadSound("sounds/powerup.wav");

        this.foodImage = loadImage("images/bread.png");
        this.medImage = loadImage("images/med.png");
        
        //creating the foods
        this.food1 = createSprite(1350, -440, 20, 20);
        this.food1.addImage(this.foodImage);
        this.food1.scale = 0.1;

        this.food2 = createSprite(550, 1130, 20, 20);
        this.food2.addImage(this.foodImage);
        this.food2.scale = 0.1;

        this.food3 = createSprite(1330, 3510, 20, 20);
        this.food3.addImage(this.foodImage);
        this.food3.scale = 0.1;

        this.food4 = createSprite(70, 1800, 20, 20);
        this.food4.addImage(this.foodImage);
        this.food4.scale = 0.1;

        this.food5 = createSprite(1680, 5615, 20, 20);
        this.food5.addImage(this.foodImage);
        this.food5.scale = 0.1;

        this.food6 = createSprite(65, 4015, 20, 20);
        this.food6.addImage(this.foodImage);
        this.food6.scale = 0.1;

        this.food7 = createSprite(115, 6905, 20, 20);
        this.food7.addImage(this.foodImage);
        this.food7.scale = 0.1;

        this.food8 = createSprite(1825, 6905, 20, 20);
        this.food8.addImage(this.foodImage);
        this.food8.scale = 0.1;

        this.food9 = createSprite(63, 2602, 20, 20);
        this.food9.addImage(this.foodImage);
        this.food9.scale = 0.1;

        //creating the med packs
        this.medicine1 = createSprite(1360, 1105, 20, 20);
        this.medicine1.addImage(this.medImage);
        this.medicine1.scale = 0.3;

        this.medicine2 = createSprite(65, 2050, 20, 20);
        this.medicine2.addImage(this.medImage);
        this.medicine2.scale = 0.3;

        this.medicine3 = createSprite(1835, 3025, 20, 20);
        this.medicine3.addImage(this.medImage);
        this.medicine3.scale = 0.3;

        this.medicine4 = createSprite(1365, 4015, 20, 20);
        this.medicine4.addImage(this.medImage);
        this.medicine4.scale = 0.3;

        
    }


    increaseHealth(){
        //increasing the player's hunger immunity when player touches food
        if(player.player.isTouching(this.food1)){
            this.food1.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }
        if(player.player.isTouching(this.food2)){
            this.food2.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }
        if(player.player.isTouching(this.food3)){
            this.food3.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }
        if(player.player.isTouching(this.food4)){
            this.food4.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }
        if(player.player.isTouching(this.food5)){
            this.food5.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }
        if(player.player.isTouching(this.food6)){
            this.food6.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }
        if(player.player.isTouching(this.food7)){
            this.food7.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }
        if(player.player.isTouching(this.food8)){
            this.food8.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }
        if(player.player.isTouching(this.food9)){
            this.food9.destroy();
            player.hunger = player.hunger + 150;
            this.sound.play();
        }

        //increasing the player's health when the player touches the med packs
        if(player.player.isTouching(this.medicine1)){
            this.medicine1.destroy();
            player.health = player.health + 50;
            this.sound.play();
        }

        if(player.player.isTouching(this.medicine2)){
            this.medicine2.destroy();
            player.health = player.health + 50;
            this.sound.play();
        }

        if(player.player.isTouching(this.medicine3)){
            this.medicine3.destroy();
            player.health = player.health + 50;
            this.sound.play();
        }
        if(player.player.isTouching(this.medicine4)){
            this.medicine4.destroy();
            player.health = player.health + 50;
            this.sound.play();
        }
    }

}