class Paper
{
	constructor(x,y,radius){
	var options={
        isStatic:false,
		friction:0,
		density:1.2,restitution:0.3
	}
	
    this.radius = radius
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
	this.image = loadImage("paper.png");
	}
	display()
	{
            var pos = this.body.position
            var angle = this.body.angle
            push();
            translate(pos.x,pos.y)
            rotate(angle)
            fill("white");
            imageMode(CENTER);
           image(this.image,0,0,50,50)
	}

}