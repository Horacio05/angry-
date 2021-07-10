const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var puntos

var fondo;
var piso;
var pajaro;
var cerdo1;
var caja;
var caja2;
var tronco1;
var cerdo2;
var caja3;
var caja4;
var tronco2
var cerdo3
var plataforma;
var resortera;


function preload() {
 fondo=loadImage("sprites/bg.png") 
 
}

function setup(){
createCanvas(1200,400);
engine=Engine.create()
world=engine.world
piso=new Piso(600,height,1200,20)
pajaro=new Pajaro(100,100)
  cerdo1=new Cerdos(810,350);
  caja=new Cajas(840,350,70,70);
  caja2=new Cajas(780,350,70,70);
  tronco1=new Troncos(810,260,300,PI/2)
  cerdo2=new Cerdos(810,200,70,70)
  caja3=new Cajas(900,250,70,70)
  caja4=new Cajas(710,250,70,70)
  tronco2=new Troncos(810,180,300,PI/2);
  cerdo3=new Cerdos(810,150,70,70)
  plataforma=new Piso(150,305,300,170)
  resortera=new Resortera(pajaro.body,{x:200,y:60})
  puntos=0
  tiempo();
  
}

function draw(){
background(fondo)
  textSize(30)
  text("puntos"+puntos,900,100)
  
  Engine.update(engine);
  piso.display()
  pajaro.display();
  cerdo1.display();
  cerdo1.score();
  caja.display();
  caja2.display();
  tronco1.display();
   cerdo2.display();
  cerdo2.score();
  caja3.display();
  caja4.display();
  tronco2.display();
  cerdo3.display();
  cerdo3.score();
  plataforma.display();
  resortera.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pajaro.body,{
    x:mouseX,y:mouseY
  })
}

function mouseReleased(){
  resortera.fly();
}
function keyPressed(){
  if(keyCode===32){
    resortera.back(pajaro.body)
  }
}
function tiempo(){
 var fecha=new Date()
 console.log(fecha);
  var hora=fecha.getHours();
  console.log(hora)
}