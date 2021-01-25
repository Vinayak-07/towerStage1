class Ball{
    constructor(x,y,radious){
        var options={
            isStatic:false
        }
        this.b = ellipse(x,y,radious,options);
        this.radious = radious;
    }
    display(){
        var pos = this.b.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radious);
    }
}