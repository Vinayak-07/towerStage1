class RedBox{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.01,
            friction :0.9,
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
        fill("#F2A5B6");
        rect(0,0,this.width, this.height);
        pop();
        
      }
}