//P5.js Playground
//https://p5js.org/reference/
//https://editor.p5js.org/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let v = true;
  background(220);
  circle(200,200,5);
  circle(mouseX,mouseY,5);
  circle((mouseX + 200)/2,mouseY,5);
  circle((mouseX + 200)/2,200,5);
  circle(mouseX,(mouseY + 200)/2,5);
  circle(200,(mouseY + 200)/2,5);
  if(v){
    bezier(200,200,200,(mouseY + 200)/2,mouseX,(mouseY + 200)/2,mouseX,mouseY)
  }else{
    bezier(200,200,(mouseX + 200)/2,200,(mouseX + 200)/2,mouseY,mouseX,mouseY)
  }
}
