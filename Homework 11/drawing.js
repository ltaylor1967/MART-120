var headX = 200;
var headY = 100;
var headDirection = 1;

var bodyX = 230;
var bodyY = 195;
var bodyDirection = 3;

var size = 22;
var count = 5;
var sizeDirection = 2;
function setup()
{
    createCanvas(400,400)
}

function draw()
{
    background(10,124,130);
    fill(10);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('My Self Portrait!', 100, 25);

    // head
    fill(235,300);
    circle(headX,headY,80);
    headX+=headDirection;
    if(headX >= 312 || headX <= 72)
    {
        headDirection *= -1;
    }

    // skirt
    fill('pink')
    triangle(headX, 150, 195, 165, 240, 280);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    //body
    rect(170,bodyY,50,85);
    bodyY+=bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }

    // decoration
    line(160, bodyY, 150, 230);
    bodyY+=bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }
    line(230, 150, 240, bodyY);
    bodyY+=bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }
    line(185, 285, 185, 340);
    line(205, 285, 205, 340);
    line(182, 123, 208, 118);
    line(195, 97, 195, 110);
    point(183, 89);
    point(207, 89);

    fill(300);
    textSize(18);
    text("Lucy Taylor",295,380 );
}