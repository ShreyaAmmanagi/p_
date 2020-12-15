class strong{
  constructor(x,y,width,height){
     var some = { isStatic: true}
    this.body = Bodies.rectangle(x,y,width,height,some);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

  }
   display(){
       rectMode(CENTER);
       fill("red");
       rect(this.body.position.x,this.body.position.y,this.width,this.height);

   }


}