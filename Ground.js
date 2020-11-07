class Ground{
    constructor(){
        var option={
            isStatic:true
        }
     this.body=Bodies.rectangle(400,650,1200,2,option);
      World.add(world,this.body);
    }
    display()
    {
        push ()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        rect (0,0,1200,2);  
        pop () 
    }
}