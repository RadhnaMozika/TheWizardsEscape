class Layout {
    constructor(){
  

    }


    //function displaying the bg images
    bg(){
        imageMode(CENTER);
        image(bg1, 650/2+630, height/2, 2500, 2200);

        imageMode(CORNERS);
        image(bg2, -300, 1300, 2200, 4500)
       
        imageMode(CORNER);
        image(bg3, -285, 4500, 2500, 3000);
    }


    layout1(){
        //creating all the sprites for the walls
        this.wall1 = createSprite(-30, 350, 20, 1800);
        this.wall2 = createSprite(940, -510, 2000, 20);
        this.wall3 = createSprite(1920, 350, 20, 1800);
        this.wall4 = createSprite(300, 1180, 700, 20);
        this.wall5 = createSprite(1590, 1180, 700, 20);
        this.wall6 = createSprite(630, 1380, 20, 400);
        this.wall7 = createSprite(1270, 1380, 20, 400);

        this.wall8 = createSprite(300, 1560, 620, 20);
        this.wall9 = createSprite(1590, 1560, 620, 20);

       this.wall10 = createSprite(1900, 2850, 20, 2500);
        this.wall11 = createSprite(0, 2850, 20, 2500);

        this.wall12 = createSprite(625, 2120, 1250, 20);
        this.wall13 = createSprite(625, 2530, 1250, 20);

        this.wall14 = createSprite(1260, 2320, 20, 430);

        this.wall15 = createSprite(1260, 3100, 1270, 20);
        this.wall16 = createSprite(1260, 3380, 1270, 20);

        this.wall17 = createSprite(630, 3250, 20, 300);

        this.wall18 = createSprite(1590, 4090, 620, 20);
        this.wall19 = createSprite(300, 4090, 620, 20);

        
        this.wall20 = createSprite(1280, 4380, 20, 540);
        this.wall21 = createSprite(620, 4380, 20, 540);

        
        this.wall22 = createSprite(1200, 4700, 200, 120);
        this.wall23 = createSprite(700, 4700, 200, 120);

        this.wall24 = createSprite(1650, 4750, 800, 20);
        this.wall25 = createSprite(270, 4750, 800, 20);

        //long side walls
        this.wall26 = createSprite(-150, 5900, 20, 2500);
        this.wall27 = createSprite(2070, 5900, 20, 2500);

        this.wall28 = createSprite(-100, 5220, 100, 140);
        this.wall29 = createSprite(2030, 5220, 100, 140);

        this.wall30 = createSprite(300, 5220, 380, 120);
        this.wall31 = createSprite(1630, 5220, 380, 120);

        this.wall32 = createSprite(340, 5330, 310, 140);
        this.wall33 = createSprite(1580, 5330, 310, 140);

        this.wall34 = createSprite(260, 5450, 150, 200);
        this.wall35 = createSprite(1660, 5450, 150, 200);

        this.wall36 = createSprite(490, 7170, 600, 120);
        this.wall37 = createSprite(1450, 7170, 600, 120);

        this.wall38 = createSprite(2000, 6580, 180, 280);
        this.wall39 = createSprite(-70, 6580, 180, 280);

        this.wall40 = createSprite(-60, 6000, 180, 380);
        this.wall41 = createSprite(2000, 6000, 180, 380);

        this.wall42 = createSprite(270, 5750, 140, 140);
        this.wall43 = createSprite(1670, 5750, 140, 140);

        this.wall44 = createSprite(150, 5860, 250, 130);
        this.wall45 = createSprite(1780, 5860, 250, 130);

        this.wall46 = createSprite(-50, 7120, 170, 10);
        this.wall47 = createSprite(2000, 7120, 170, 10);

        this.wall48 = createSprite(10, 7250, 20, 230);
        this.wall49 = createSprite(1930, 7250, 20, 230);

        this.wall50 = createSprite(970, 7390-10, 2000, 20);

        //turning visiblilty of walls to false
        this.wall1.visible = false;
        this.wall2.visible = false;
        this.wall3.visible = false;
        this.wall4.visible = false;
        this.wall5.visible = false;
        this.wall6.visible = false;
        this.wall7.visible = false;
        this.wall8.visible = false;
        this.wall9.visible = false;
        this.wall10.visible = false;
        this.wall11.visible = false;
        this.wall12.visible = false;
        this.wall13.visible = false;
        this.wall14.visible = false;
        this.wall15.visible = false;
        this.wall16.visible = false;
        this.wall17.visible = false;
        this.wall18.visible = false;
        this.wall19.visible = false;
        this.wall20.visible = false;
        this.wall21.visible = false;
        this.wall22.visible = false;
        this.wall23.visible = false;
        this.wall24.visible = false;
        this.wall25.visible = false;
        this.wall26.visible = false;
        this.wall27.visible = false;
        this.wall28.visible = false;
        this.wall29.visible = false;
        this.wall30.visible = false;
        this.wall31.visible = false;
        this.wall32.visible = false;
        this.wall33.visible = false;
        this.wall34.visible = false;
        this.wall35.visible = false;
        this.wall36.visible = false;
        this.wall37.visible = false;
        this.wall38.visible = false;
        this.wall39.visible = false;
        this.wall40.visible = false;
        this.wall41.visible = false;
        this.wall42.visible = false;
        this.wall43.visible = false;
        this.wall44.visible = false;
        this.wall45.visible = false;
        this.wall46.visible = false;
        this.wall47.visible = false;
        this.wall48.visible = false;
        this.wall49.visible = false;
        this.wall50.visible = false;
    }


    //function to make player bounce off/collide the walls
    layoutBounceOff(){
        player.player.collide(this.wall1);
        player.player.collide(this.wall2);
        player.player.collide(this.wall3);
        player.player.collide(this.wall4);
        player.player.collide(this.wall5);
        player.player.collide(this.wall6);
        player.player.collide(this.wall7);

        player.player.bounceOff(this.wall8);
        player.player.bounceOff(this.wall9);
        player.player.bounceOff(this.wall10);
        player.player.bounceOff(this.wall11);
        player.player.bounceOff(this.wall12);
        player.player.bounceOff(this.wall13);
        player.player.bounceOff(this.wall14);
        player.player.bounceOff(this.wall15);
        player.player.bounceOff(this.wall16);
        player.player.bounceOff(this.wall17);
        player.player.bounceOff(this.wall18);
        player.player.bounceOff(this.wall19);
        player.player.bounceOff(this.wall20);
        player.player.bounceOff(this.wall21);
        player.player.bounceOff(this.wall22);
        player.player.bounceOff(this.wall23);
        player.player.bounceOff(this.wall24);
        player.player.bounceOff(this.wall25);
        player.player.bounceOff(this.wall26);
        player.player.bounceOff(this.wall27);
        player.player.bounceOff(this.wall28);
        player.player.bounceOff(this.wall29);
        player.player.bounceOff(this.wall30);
        player.player.bounceOff(this.wall31);
        player.player.bounceOff(this.wall32);
        player.player.bounceOff(this.wall33);
        player.player.bounceOff(this.wall34);
        player.player.bounceOff(this.wall35);
        player.player.bounceOff(this.wall36);
        player.player.bounceOff(this.wall37);
        player.player.bounceOff(this.wall38);
        player.player.bounceOff(this.wall39);
        player.player.bounceOff(this.wall40);
        player.player.bounceOff(this.wall41);
        player.player.bounceOff(this.wall44);
        player.player.bounceOff(this.wall45);
        player.player.bounceOff(this.wall46);
        player.player.bounceOff(this.wall47);
        player.player.bounceOff(this.wall48);
    }

  
}

