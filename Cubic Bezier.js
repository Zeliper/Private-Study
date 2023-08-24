//P5.js Playground
//https://p5js.org/reference/
//https://editor.p5js.org/

let v = false;

function mouseClicked() {
  v = !v;
}

let central = 300;
function setup() {
  createCanvas(central *2, central *2);
}

function draw() {
  clear();
  circle(central,central,5);
  circle(mouseX,mouseY,5);
  circle((mouseX + central)/2,mouseY,5);
  circle((mouseX + central)/2,central,5);
  circle(mouseX,(mouseY + central)/2,5);
  circle(central,(mouseY + central)/2,5);
  if(v){
    bezier(central,central,central,(mouseY + central)/2,mouseX,(mouseY + central)/2,mouseX,mouseY)
  }else{
    bezier(central,central,(mouseX + central)/2,central,(mouseX + central)/2,mouseY,mouseX,mouseY)
  }
}
