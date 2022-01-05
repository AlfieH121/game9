var box1
var box2
var box3
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(100,200,50,50,3)
  box2=new Box(70,300,10,30,1)
  box3=new Box(50,17,20,40,8)
}

function draw() 
{
  background(220);
box1.show();
box2.show();
box3.show();
box1.move();
box2.move();
box3.move();
}

