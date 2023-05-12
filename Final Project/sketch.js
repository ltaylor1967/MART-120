var characterX = 100;
var characterY = 100;

var bodyX = 230;
var bodyY = 145;
var bodyDirection = 3;

function setup() {
  createCanvas(500,500)
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 2);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 2);
}

function draw()
{
background(173, 230, 230);
stroke(0);
fill(0);

//opening

textSize(15);
text("Try moving the Coin! ", width / 2 - 230, height / 15 - 10, );


// Yoshi outline

//feet left to right
rect(160,400,130,10);
rect(160,370,10,30);
rect(170,350,10,30);
rect(180,350,60,10);
rect(220,360,10,20);
rect(230,370,20,10);
rect(230,380,10,20);
rect(250,360,10);
rect(260,360,20);
rect(280,370,10,30);
rect(270,350,10);

//body left to right
rect(160,330,10,20);
rect(150,290,10,40);
rect(160,290,20,10);
rect(170,270,10,20);
rect(180,260,10);
rect(190,250,40,10);
rect(210,260,40,10);
rect(220,240,30,10);
rect(240,250,10);
rect(220,270,20,10);
rect(210,280,20,10);
rect(200,290,10);
rect(180,300,20,10);
rect(180,310,10,30);
rect(190,340,10);
rect(280,340,50,10);
rect(290,260,10,80);
rect(300,290,10,30);
rect(310,300,10);
rect(330,290,10,50);
rect(320,280,10);
rect(300,260,20);
rect(320,260,30,10);

//arm
rect(240,340,10);
rect(250,310,10,30);
rect(240,320,10);
rect(240,300,10);
rect(250,290,10);

//mouth
rect(300,250,10);
rect(290,220,10,30);
rect(280,230,10);

//head left to right
rect(230,230,10);
rect(210,230,10);
rect(210,210,20);
rect(200,210,10);
rect(190,190,10,20);
rect(200,180,10);
rect(210,150,10,30);
rect(220,170,10,40);
rect(230,170,10);
rect(220,140,30,10);
rect(250,130,10,40);
rect(240,160,10);
rect(260,120,10);
rect(270,110,20,10);
rect(290,120,10);
rect(300,110,20,10);
rect(320,120,10);
rect(320,170,10);

//nose
rect(330,130,10,40);
rect(340,160,20,10);
rect(360,170,10);
rect(360,190,10);
rect(370,180,10);
rect(340,190,10);
rect(380,190,10,50);
rect(370,240,10);
rect(350,250,20,10);

//eyes
rect(290,bodyY,10,20);
rect(310,bodyY,10,20);
bodyY+=bodyDirection;
if(bodyY <= 135 || bodyY >= 150 )
{
    bodyDirection *= -1;
}

//coin
stroke(4)
fill(255, 204, 0)
createCharacter(characterX,characterY);

if (keyIsPressed) {

    if (key=='d') {
        characterX+=3
    }
    if (key=='a') {
      characterX-=3
    }
    if (key=='s') {
      characterY+=3
    }
    if (key=='w') {
      characterY-=3
    }

};

}

function createCharacter (x,y)
{

circle(x,y,40)

}