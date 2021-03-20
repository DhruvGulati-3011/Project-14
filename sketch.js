var path, mainCyclist,pinkCyclists,yellowCyclists,redCyclists;
var pathImg,mainRacer1,mainRacer2,mainRacerImg1,mainRacerImg2;
var cycleBell;
var distance = 0;
var opponentCycle;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var player1,oppPink1Img,player2,oppoYellowImg,player3,oppoRedImg;
var obstacleGroup;

function preload() {
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png", "images/mainPlayer2.png");
  mainRacerImg2 = loadAnimation("images/mainPlayer3.png");
 cycleBell = loadSound("sound/bell.mp3") 
    player1 = loadImage("images/mainPlayer1.png");
   player2 = loadImage("images/mainPlayer2.png")
}

function setup() {

  createCanvas(1200, 300);

  // Moving background
  path = createSprite(100, 150);
  path.addImage(pathImg);
  path.velocityX = -(6 + 2 * distance / 150);

  obstacleGroup = new Group();  

  //creating boy running
  mainCyclist = createSprite(70, 150, 20, 20);
  mainCyclist.addAnimation("SahilRunning", mainRacerImg1);
  mainCyclist.scale = 0.07;

  
mainCyclist.setCollider("rectangle",0,0,mainCyclist.width,mainCyclist.height);
}

function draw() {
  background(0);

  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: " + distance, 500, 30);

  if (gameState === PLAY) {

    
    mainCyclist.y = World.mouseY;

    edges = createEdgeSprites();
    mainCyclist.collide(edges);

    


    //code to reset the background
    if (path.x < 0) {
      path.x = width / 2;


    }
 
  if(keyDown("space")) {
    cycleBell.play();
  }   
  if(keyDown(UP_ARROW)) {
    reset();
  }
    
}
if(World.frameCount % 150 == 0) {
  if(select_oppPlayer == 1  )  {
    pinkCyclists();
  }else {
    redCyclists();
 
} 
 //creating continious opponent players
 var select_oppPlayer = Math.round(random(1,3));
 
} 
pinkCyclists();
 yellowCyclists(); 
 redCyclists();

function pinkCyclists() {
  player1 = createSprite(1100,Math.round(random(50,250),10,10));
  player1.scale=0.06;
  player1.addAnimation("opponentPlayer1",oppPink1Img)
  player1.setLifetime = 170;
  pinkCyclists.add(player1);
  path.velocityX= -(6+2*distance/150);
  pinkCyclists.velocityX= -(6+2*distance/150);
}    
function yellowCyclists() {
  player2 = createSprite(1100,Math.round(random(50,250),10,10));
  player2.scale = 0.06;
  player2.addAnimation("opponentPlayer2",oppPink1Img)
  player2.setLifetime = 170;
  yellowCyclists.add(player2);
  path.velocityX= -(6+2*distance/150);
  yellowCyclists.velocityX= -(6+2*distance/150);
}
function redCyclists() {
  player3 = createSprite(1100,Math.round(random(50,250),10,10));
  player3.scale = 0.06;
  player3.addAnimation("opponentPlayer3,oppoRedImg");
  player3.setLifetime = 170;
  redCyclists.add(player3);
  path.velocityX = -(6+2*distance/150);
  redCyclists.velocityX = -(6+2*distance/150);
}   
 

  function reset() {
   gameState  = PLAY;
   gameOver.visible = false;
   
   pinkCG.destroyEach();
   yellowCyclists.destroyEach();
   redCyclists.destroyEach(); 
    distance=0;
  }