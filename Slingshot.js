class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //added images for slingShot
        this.slingShot1= loadImage("sprites/sling1.png");
        this.slingShot2= loadImage("sprites/sling2.png");
        this.slingShot3= loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //colored the lines
            stroke(48,22,8);
            //made the lines look realistic-ish
            if(pointA.x<160){
                //made the width change
                strokeWeight(3);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                //image(this.slingShot3,pointA.x-25,pointA.y-10,10,30);
            }else{
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                //image(this.slingShot3,pointA.x-25,pointA.y-10,10,30);
            }
            
        }
        //displayed the images
        image(this.slingShot1,190,20);
        image(this.slingShot2,160,20)
    }
    
}