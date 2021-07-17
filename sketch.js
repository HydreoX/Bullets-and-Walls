var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600, 400);


  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)

  bullet = createSprite(10, 200, 40, 10);
  bullet.shapeColor = "white"
  wall = createSprite(1200, 200, thickness, height / 2);

}

function draw() {
  background("black");

  bullet.velocityX = speed;

  if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
    bullet.velocityX = 0;
    wall.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = "red"
    };

    if (damage < 10) {
      bullet.shapeColor = "green"
    };

  }

  drawSprites();
}