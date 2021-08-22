class Roof {
     constructor(x, y, width, height) {
       var options = {
            isStatic:true,
           'restitution':0.8,
           'friction':0.9,
           'density':30,
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
       push();
       translate(pos.x, pos.y);
       rectMode(CENTER);
       strokeWeight(4);
       stroke("brown");
       fill("orange");
       rect(0, 0, this.width, this.height);
       pop();
     }
   };