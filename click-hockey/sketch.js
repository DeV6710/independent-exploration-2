let xPos = 250;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
let score = 0;

function setup() {
    createCanvas(500, 500);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    background(222);

    // draw goal
    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    // draw ball
    fill(255, 0, 255);
    rect(xPos, yPos, 30, 30);

    // draw score
    fill(18);
    textSize(20);
    text("Score: " + score, 10, 30); // move down so it's visible

    // check if in goal
    if (xPos >= 220 && xPos <= 280 && yPos + 15 >= 480) {
        score++; // increment score
        xPos = random(15, 485);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(0, 10);
    }

    // move forward
    xPos += xSpeed;
    yPos += ySpeed;

    // wrap around if boundary exceeded
    if (xPos < 0) xPos = 500;
    if (xPos > 500) xPos = 0;

    if (yPos > 500) {
        yPos = 0;
        score--; // decrease score if missed
    }
}

function mouseClicked() {
    xSpeed = random(-5, 5);
    ySpeed = random(0, 5);
}
