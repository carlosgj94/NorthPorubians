class Ant{
    constructor(dna) {
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.c = color("white");
        this.generation = 0;

        if(dna === undefined)
            this.dna = new DNA();
        else {
            this.dna = dna;

        }
        this.count = 0;
    }

    applyForce(force){
        this.acc.add(force);
    }

    update(){
        this.applyForce(this.dna.genes[this.count]);
        this.count++;

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc = createVector(0,0);
    }

    show(){
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        fill(this.c);  // Use color variable 'c' as fill color
        noStroke();  // Don't draw a stroke around shapes
        rect(0, 0, 30, 10);
        pop();
    }
    reboot(){
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.count = 0;
        //Creating the Aria race
        this.c = color("#ebed48");
    }
}
