function setup() {
  //Setup
  angleMode(DEGREES)
  createCanvas(400, 400);
  //Variables for bear
  bearX = random(0, width)
  bearY = random(0, height)
  XSpeed = 2
  YSpeed = 2
}

function draw() {
  //Draw background and bear
  background(120, 130, 170);
  drawBear(bearX, bearY, 0.25);
  //Key Movement
  if(keyIsPressed){
    if (keyCode==UP_ARROW || keyCode==87){  //Support for 'WASD' and Arrows
      bearY -= YSpeed
    }
    if (keyCode==DOWN_ARROW || keyCode==83){
      bearY += YSpeed
    }
    if (keyCode==LEFT_ARROW || keyCode==65){
      bearX -= XSpeed
    }
    if (keyCode==RIGHT_ARROW || keyCode==68){
      bearX += XSpeed
    }
  }
}
//Draw Bear Function
function drawBear(x, y, Scale){
  push();
  translate(x, y)
  scale(Scale);
    
  fill("hsl(17,46%,70%)");
  //ears
  ellipse(50, 50, 90, 80);
  ellipse(220, 50, 90, 80);
  //head
  ellipse(130, 130, 200, 175);
  
  //eyes
  fill("rgb(82,81,81)")
  rect(150, 130, 40, 5);
  rect(70, 130, 40, 5);
  
  
  fill("rgb(235,236,173)");
  ellipse(130, 190, 140, 60);
  
    //Mouth
  fill("rgb(173,12,12)");
  triangle(130, 200, 150, 180,110, 180);
  fill("rgb(90,7,7)");
  triangle(130, 200, 140, 190, 120, 190);
    //Teeth
  fill("white")
  triangle(135, 180, 140, 180, 138, 187);
  triangle(120, 180, 125, 180, 122, 187);
  
    //Moon
  fill("white");
  stroke("white")
  arc(130, 80, 40, 50, 41, 320);
  stroke("black")
  
  fill("rgb(184,83,83)");
  stroke("rgb(184,83,83)")
  ellipse(60, 160, 30, 20);
  ellipse(200, 160, 30, 20);
  
    //Lil Ear holes
  fill("black");
  ellipse(40, 60, 30, 30);
  ellipse(220, 60, 30, 30);
  
    //Mouse press conditional
  if(mouseIsPressed){
    fill("white");
    ellipse(170, 130, 40, 30);
    ellipse(90, 130, 40, 30);
    
    fill("black");
    ellipse(170, 130, 10);
    ellipse(90, 130, 10);
    
    rect(150, 100, 40, 3);
    rect(70, 100, 40, 3);
  }
  pop();
}
