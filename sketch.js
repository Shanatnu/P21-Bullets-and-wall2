var bullet,wall,thickness;
var speed,weight;

function setup() {
  speed  = random(223,321);
  weight = random(30,52);

  thickness=random(22,83);

  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 50);

  wall = createSprite(1200, 200, thickness, height/2);

  //set color
  color(80,80,80);

  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall))
  {
      bullet.velocityX =0;
       var Damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
   
    if(Damage>10){
        wall.shapeColor = color(255,0,0);
     }
   
  
    if(Damage<10){
     wall.shapeColor = color(0,255,0);
    }
  }
 
  drawSprites();
}


function hasCollided(Lbullet,Lwall){
  var bulletRightEdge=Lbullet.x + Lbullet.width;
  var wallleftEdge=Lwall.x;
  if(bulletRightEdge>=wallleftEdge)
  {
    return true;
  }
  return false;
}
//if(wall.x-bullet.x<(bullet.width + wall.width)/2)
