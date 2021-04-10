var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1 = createSprite(50,590,200,20);
    box1.shapeColor = "Orange"

    box2 = createSprite(270,590,200,20);
    box2.shapeColor = "Red"

    box3 = createSprite(490,590,200,20);
    box3.shapeColor = "Pink"

    box4 = createSprite(712,590,200,20);
    box4.shapeColor = "Yellow"
        
    ball = createSprite(random(20,750),300,20,20);

    ball.velocityX = 6;
    ball.velocityY = 10;
 
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges)
    colorchange();
 

    
  
    //add condition to check if box touching surface and make it box
    drawSprites();
}


function colorchange () {
    if (box1.isTouching(ball) && ball.bounceOff(box1)) {
    ball.shapeColor = "Orange";
    music.play();
    }

    if (box2.isTouching(ball) && ball.bounceOff(box2)) {
        ball.shapeColor = "Red";
        music.play();
    }
     
    if (box3.isTouching(ball) && ball.bounceOff(box3)) {
        ball.shapeColor = "Pink";
        music.play();
    }
 
    if (box4.isTouching(ball)) {
        ball.shapeColor = "Yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        }   
          
}