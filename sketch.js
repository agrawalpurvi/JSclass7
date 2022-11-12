var paddle1,paddle2,bg,ball;
var gamestate;
var player1_score=0;
var player2_score=0;
function preload(){
    bg=loadImage("images/bg.jpg");
}

function setup(){
    createCanvas(400,400);
    paddle1=createSprite(380,200,10,100);
    paddle1.shapeColor="white";
    paddle2=createSprite(20,200,10,100);
    paddle2.shapeColor="white";
    ball=createSprite(200,200,10,10);
    ball.shapeColor="white";
    edges=createEdgeSprites();
    gamestate="play";
}

function draw(){
    background(bg);

    paddle1.y=mouseY;


    for(i=0;i<400; i=i+20){
        line(200,i,200,i+10);
    }

    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(paddle1);
    ball.bounceOff(paddle2);

    if(gamestate === "play"){
        text("Press SPACE to Start",150,180);
    }
    fill("black");
    text(("Player 1 Score :"+player1_score,90,10));
    text(("Player 2 Score :"+player2_score,220,10));

    paddle2.y=ball.y;

    if(ball.x >400 || ball.x <0){
        if(ball.x >400){
            player1_score=player1_score+1;
        }
        if(ball.x <0){
            player2_score=player2_score+1;
        }

        reset();
    }

    if(keyDown("space") && gamestate==="play"){
        serve();
        gamestate="play";
    }

    if((player1_score===5) || (player2_score===5)){
        gamestate="over";
        text("Game Over",165,180);
        text("Pres 'r' to Start Over", 140,140);
    }

    if(keyDown("r") && gamestate==="over"){
        gamestate="play";
        player1_score=0;
        player2_score=0;
    }




    drawSprites();
}

function serve(){
    ball.velocityX=3;
    ball.velocityY=5;
}

function reset(){
    ball.velocityX=0;
    ball.velocityY=0;
    ball.X=200;
    ball.Y=200;
}
