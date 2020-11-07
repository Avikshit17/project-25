class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
           
            friction:0.5,
            density:1.2
            
           


        }
        this.body=Bodies.circle(x,y,r/2,options)
        World.add(world,this.body)
        this.r=r
        this.image=loadImage("paper.png")
        }
     display(){
         push()
         translate(this.body.position.x,this.body.position.y)
         rotate(this.body.angle)
         imageMode(CENTER)
         image(this.image,0,0,50,50,this.r)
         pop ()
     }
    
}
