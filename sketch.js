var wall,thickness;
var bullet,speed,weight;
var damage

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);

  thickness = random(22,83);

  wall = createSprite(1200 ,200 , thickness, height/2); 
  wall.shapeColor = (80,80,80);

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  damage = (0.5*weight*speed*speed)/(thickness**3);
}

function draw() {
  background("Black"); 

  console.log(damage);

  wall.shapceColor = (80,80,80);

  if (bullet.x - wall.x < wall.height/2 + bullet.height/2
    && wall.x - bullet.x < wall.height/2 + bullet.height/2) {
  
      bullet.velocityX = 0;

      if (damage > 10) {
        wall.shapeColor = "green";
      }
      
      }

      else if (damage<10) {
        wall.shapeColor = "Red";
      }






  drawSprites();
}