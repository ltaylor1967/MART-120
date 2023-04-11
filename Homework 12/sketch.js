// x and y for main character
var characterX = 150;
var characterY = 100;

//key codes for keyboard letters
var w = 70
var s = 72
var a = 69
var d = 71

// x and y for shape
var shapeX = 20;
var shapeY = 25;
var shapeXSpeed;
var shapeYSpeed;

// when mouse is clicked 
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(450, 400);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 2);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 2);
    createCharacter(100,230);
}
function draw()
{
    background(30,167,42);
    stroke(0);
    fill(2);
    
    // Borders function
    createBorders(7);

    // exit message
    textSize(18);
    text("EXIT", width-30,height-20); 

    //createCharacter(100,230);
    drawCharacter();
    characterMovement();


}

