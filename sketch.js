function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(2);
  background (227,229,215);
}
var diametro = 0;

//var z = 0;
function draw() {
noFill();
noStroke();


if (width>height) {
  diametro = height; }
else {diametro=width;}

//QUADRANTE
fill(88,104,117);
ellipse(width/2,height/2,diametro*5/6,diametro*5/6);
fill(189,214,210);
ellipse(width/2,height/2,diametro*7/10,diametro*7/10);

// TACCHE
push();
 translate(width/2,height/2);
for (var z=0;z<=12;z++) {
  push();
rotate(z*30);
rect(diametro*.327,0,diametro*.09,diametro*.002);
  pop();
}
pop();


var secondi = -180 + second()*6;
var minuti = -180 + minute()*6;
var ore = -180 + hour()*30;
if (ore>12*30) {ore-=12*30}

push();
translate(width/2,height/2);
fill(50, 64, 79);
//LANCETTA SECONDI
push();
rotate(secondi);
rect(-diametro*.005,-diametro*.08,diametro*.01,diametro*.4,diametro*.010);
pop();

//LANCETTA MINUTI
push();
rotate(minuti);
fill(36, 48, 58);
rect(-diametro*.010,0,diametro*.02,diametro*.30,diametro*.010);
pop();

//LANCETTA ORE
push();
rotate(ore);
fill(14, 20, 25);
rect(-diametro*.015,0,diametro*.03,diametro*.20,diametro*.010);
pop();
pop();

//PUNTO LANCETTE
fill(59, 75, 89);
ellipse (width/2,height/2,diametro/20,diametro/20);
  }

function mouseClicked() {
  background(random()*255,random()*255,random()*255);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(227,229,215);
}
