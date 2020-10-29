class Boy {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution :0,
            friction :1,
        }
        this.x=x;
        this.y=y;
        this.width=300;
        this.height=300;
        this.image = loadImage("boy.png");
        this.body=Bodies.rectangle(this.x ,this.y, this.width, this.height, options);
        World.add(world,this.body);
    }
    display() {
        var pos =this.body.position;
        push();
        translate(this.body.x , this.body.y);
        imageMode(CENTER);
        
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop();

    }
}