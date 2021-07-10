class Pajaro extends Base {
  constructor(x,y){
    super(x,y,50,50);
    this.image=loadImage("sprites/bird.png")
    this.smoke=loadImage("sprites/smoke.png")
    this.trayectoria=[];
    
  }
  display(){
    
   // this.body.position.x = mouseX;
  //  this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var pose=[this.body.position.x,this.body.position.y];
      this.trayectoria.push(pose);

      
    }
          for(var i=0;i<this.trayectoria.length;i++){
        image(this.smoke,this.trayectoria[i][0],this.trayectoria[i][1])
      }
    if(this.body.position.x<200){
      this.trayectoria=[];
    }
    
  }
}