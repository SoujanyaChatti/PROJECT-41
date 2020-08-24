class Umbrella {
    constructor(){
         var options = {
              isStatic : true,
              restitution : 0.5
         };
         
         this.body = Matter.Bodies.circle(100,450, radius, options);
         var radius = 25;
         this.width = radius;
         this.image=loadImage("umbrella.png");
         this.height = radius;
         World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
         image(this.image, pos.x, pos.y);
    }
}