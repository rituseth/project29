class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
           if(this.body.speed < 3){
        push();
       
        rect( this.body.position.x, this.body.position.y, 50, 50);
        pop();
     
           }
       
     }
     
}
