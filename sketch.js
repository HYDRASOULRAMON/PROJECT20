var catImg1,cat_running,catImg2,catLast_image,catImg3,rat,ratImg,rat_teasing,ratImg2,ratImg3,garden,gardenImg
var gamestate = "PLAY"


function preload() {

catImg1=loadImage("images/cat1.png")
cat_running=loadAnimation("images/cat2.png","images/cat3.png");
catLast_image=loadImage("images/cat4.png")   
ratImg=loadImage("images/mouse1.png")
rat_teasing=loadAnimation("images/mouse2.png","images/mouse3.png");
ratImg3=loadImage("images/mouse4.png")
gardenImg=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);

    garden=createSprite(500,400,50,50)
    garden.addImage("graden",gardenImg)

    cat=createSprite(750,650,20,20);
    cat.addAnimation("cat1",catImg1)
    cat.addAnimation("cat_running",cat_running)
    cat.addAnimation("catLast_image",catLast_image)
    cat.scale=0.1

    rat=createSprite(150,650,20,20);
    rat.addAnimation("mouse1",ratImg)
rat.addAnimation("rat_teasing",rat_teasing)
rat.addAnimation("ratImg3",ratImg3)
    rat.scale=0.1

}

function draw() {
background(255);
if(cat.isTouching(rat) ){
    gamestate= "END"
        
    }
if(gamestate==="END"){
    cat.changeAnimation("catLast_image",catLast_image)
    rat.changeAnimation("ratImg3",ratImg3)
    cat.velocityX=0;
}



    drawSprites()
}


function keyPressed(){
if(keyDown(LEFT_ARROW)){
cat.velocityX = -5;
cat.changeAnimation("cat_running",cat_running)
rat.changeAnimation("rat_teasing",rat_teasing)

}

}
