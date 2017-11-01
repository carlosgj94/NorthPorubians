class Ant{
    constructor(dna) {
        this.pos = createVector(width/2, height-60);
        this.vel = createVector();
        this.acc = createVector();
        this.c = color("#dd619f");
        this.generation = 0;
        this.gotTheFood = false; //Arrived to the end
        this.dead = false; //Got crashed


        if(dna === undefined)
            this.dna = new DNA();
        else {
            this.dna = new DNA(dna.genes);

        }
        this.count = 0;
    }

    applyForce(force){
        this.acc.add(force);
    }

    update(){
        this.applyForce(this.dna.genes[this.count]);
        this.count++;

        if(!this.gotTheFood && !this.dead){
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc = createVector(0,0);
        }
        if( dist(this.pos.x, this.pos.y, finalX, finalY) < 10){
            this.gotTheFood = true;
        }
        else if(this.pos.x > wallX && this.pos.x < wallX+wallWidth && 
                this.pos.y > wallY && this.pos.y < wallY+wallHeight){
            this.dead = true;
        }
        else if(this.pos.x < 10 || this.pos.x > width-15 || this.pos.y > height-15 || this.pos.y < 15){
            this.dead = true;
        }
    }

    show(){
        push();
        translate(this.pos.x, this.pos.y); //Move the ant to its new pos
        rotate(this.vel.heading()+PI/2); //Orientate the ant to its moving vector
        //Set the point of rotation to its center
        stroke(this.c);
        fill(221, 97, 159, 150);
        triangle(-15/2, 0, 15/2, 0, 0, -20);
        pop();
    }

    mutate(){
        this.dna.mutate();
    }

    procreate(ant){
        this.dna.mix(ant.dna);
    }
}
