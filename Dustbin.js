class Dustbin{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.w=w
        this.h=h
        this.image=loadImage("dustbingreen.png")
    }
    display ()
    {
        push ()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop ()
    }
}