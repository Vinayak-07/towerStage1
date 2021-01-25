class Brown{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.0001,
            friction :1.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#848285");
        rect(0,0,this.width, this.height);
        pop();
        
      }
}