
function preload(){
    bgImg = loadImage("images/bg.png");
    bioBinImg = loadImage("images/bioBin.png");
    nonbioBinImg = loadImage("images/nonbiobin.png");
    recycleBinImg = loadImage("images/recycleBin.png");

    girlStand = loadImage("images/girl2.png");
    girlWalkR = loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png","images/girl5.png","images/girl6.png");
    girlWalkL = loadAnimation("images/girl7.png","images/girl8.png","images/girl9.png","images/girl10.png","images/girl11.png","images/girl12.png");

    recycleImg = loadImage("images/recycleWaste.png");
    nonBioImg = loadImage("images/nonbiowaste.png");
    BioImg = loadImage ("images/biowaste.png");
}

function setup(){
    createCanvas(600,600);
    bg = createSprite(300,300,600,600);
    bg.addImage(bgImg);

    score = 0;

    bush1 = new Bush(100,100);
    bush2 = new BushV(450,300);
    bush3 = new Bush(300,550);
    bush4 = new Bush(210,375);
   /* bush5 = new Bush(106,333);
    bush6 = new Bush(106,333);
    bush7 = new BushV(158,10);
    bush8 = new BushV(274,10);
    bush9 = new BushV(274,45);
    bush10 = new BushV(390,75);
    bsuh11 = new Bush(220,250);
    bush12 = new Bush(180,356);
    bush13 = new Bush(156,190);
    bush14 = new BushV(340,102);
    bush15 = new BushV(350,300);
    bush16 = new Bush(15,250);
    bush17 = new BushV(255,150);
    bush18 = new BushV(375,156);
    bush19 = new BushV(300,240);
    bush20 = new BushV(350,75);
    bush21 = new Bush(296,350);
    bush22 = new BushV(275,192);*/
    
    player = createSprite(50,500,20,20);
    player.addImage(girlStand);
    player.scale = 0.4;

    Bin = createSprite(player.x+45,player.y,25,25);
    Bin.addImage(recycleBinImg);
    //Bin.addAnimation("nB",nonBioImg);
    //Bin.addAnimation("bB",bioBinImg);
    Bin.scale= 0.3;

    waste = new Group();
    bioW = new Group();
    nonbioW = new Group();
    recycleW = new Group();
}

function draw(){
    background("white");
    drawSprites();
    
    textSize(20);
    stroke(5);
    fill("white");
    text("Score: "+ score,475,50);

   /* bush1.display();
    bush2.display();
    bush3.display();
    bush4.display();
    bush5.display();
    bush6.display();
    bush7.display();
    bush8.display();
    bush9.display();
    bush10.display();
    bush11.display();
    bush12.display();
    bush12.display();
    bush13.display();
    bush14.display();
    bush15.display();
    bush16.display();
    bush17.display();
    bush18.display();
    bush19.display();
    bush20.display();
    bush21.display();
    bush22.display();*/

    if(keyDown("UP_ARROW")){
        player.changeAnimation('girlUp',girlWalkR);
        player.y = player.y - 5;
        Bin.y = Bin.y - 5;
    } else if(keyDown("DOWN_ARROW")){
        player.changeAnimation('girlDown',girlWalkR);
        player.y = player.y+ 5;
        Bin.y = Bin.y + 5;
    } else if(keyDown("RIGHT_ARROW")){
        player.changeAnimation('girlright',girlWalkR);
        player.x = player.x+5;
        Bin.x = Bin.x +5;
    } else if(keyDown("LEFT_ARROW")){
        player.changeAnimation("girlleft",girlWalkL);
        player.x = player.x- 5;
        Bin.x = Bin.x - 5;
    } /*else{
        player.addImage(girlStand);
    } */

    spawnBio();
    spawnNB();
    spawnR();
    destroyWaste();
    changeBin();
}

function spawnBio(){
    if(frameCount % 150 ===0){
        bioWaste = createSprite(random(100,500),50,20,20);
        bioWaste.addImage("bio",BioImg);
        bioWaste.velocityY = 3;
        bioWaste.scale = 0.1;
        waste.add(bioWaste);
        bioW.add(bioWaste);
    }
}
function spawnNB(){
    if(frameCount % 250 ===0){
        nonbioWaste = createSprite(random(100,500),50,20,20);
        nonbioWaste.addImage("nonbio",nonBioImg);
        nonbioWaste.velocityY = 3;
        nonbioWaste.scale = 0.2;
        waste.add(nonbioWaste);
        nonbioW.add(nonbioWaste);
    }
}
function spawnR(){
    if(frameCount % 350 ===0){
        recycleWaste = createSprite(random(100,500),50,20,20);
        recycleWaste.addImage("recycle",recycleImg);
        recycleWaste.velocityY = 3;
        recycleWaste.scale = 0.15;
        waste.add(recycleWaste);
        recycleW.add(recycleWaste);
    }
}

function destroyWaste(){
    if(player.isTouching(waste)){
        waste[0].destroy();
    } 
}

function changeBin(){
    if(Bin.isTouching(recycleW)){
        Bin.addImage(recycleBinImg);
        score = score + 3;
    } else if(Bin.isTouching(nonbioW)){
        Bin.addImage(nonbioBinImg);
        score = score + 1;
    } else if(Bin.isTouching(bioW)){
        Bin.addImage(bioBinImg);
        score = score + 2;
    }
}