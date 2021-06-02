class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
      push ();
        noStroke();
        fill("Brown")
        rectMode(CENTER);
        rect( this.body.position.x, this.body.position.y, this.width, this.height);
        pop ();
        
      }
}