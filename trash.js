class paper{
constructor(x,y,radius){
    var properties = {restitution: 0.3,
                       density: 1.2,
                       friction: 0.5
                       

                       
    }
  this.body = Bodies.circle(x,y,radius,properties)
  this.radius = radius;
  
  World.add(world,this.body);
}
display(){
    
    ellipseMode(RADIUS);
    fill("white")
    ellipse(this.body.position.x,this.body.position.y,this.radius);



}

}