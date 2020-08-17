var bulllet, wall;
var speed, thickness, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  thickness = random(22, 83);
  weight = random(30, 52);
  //createSprite(400, 200, 50, 50);
  bullet = createSprite(50, 200, 100, 25);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0, 0, 0);  
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    damage = 0.5 * wieght * speed * speed / (thickness * thickness * thickness);
  }

  if(damage < 10){
    bullet.shapeColor = "green";
  }

  if(damage > 10){
    bullet.shapeColor = "red";
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}