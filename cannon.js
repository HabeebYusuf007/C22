class Cannon{
    constructor(x,y,w,h, angle){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.cannonTop = loadImage("./assets/canon.png")
        this.cannonBase = loadImage("./assets/cannonBase.png")
    }
    display(){
        // cannon top
        push()
        translate(this.x, this.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.cannonTop, this.x, this.y, this.w, this.h)
        pop()

        // cannon bottom
        image(this.cannonBase, 70,20,200,200)
        noFill()
        


    }
}