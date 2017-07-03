var angle=0;
var angle1=-2;
var angle2=-1;
var img;
var song;

function preload() {
  song =  loadSound("a.mp3");
}

function setup() {
createCanvas(1200,800,WEBGL);
song.loop();

}

function drawC(){
  translate(0,0,35);
  rotateX(angle);
  rotateY(angle*0.7);
  rotateZ(angle);
  //texture(img);
  sphere(100);

  angle+=0.1;

}
function drawC1(){
  translate(0,0,35);
  rotateX(angle1);
  rotateY(angle1*0.3);
  rotateZ(angle1);
  torus(200);
  angle1+=0.01;


}

function drawC2(){
  translate(0,0,35);
  rotateX(angle2);
  rotateY(angle2*0.9);
  rotateZ(angle2);
  torus(300);
  angle2+=0.05;


}

function draw() {
background(51);

drawC();
drawC1();
drawC2();





}
