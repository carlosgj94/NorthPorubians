class DNA {
    constructor(){
        this.genes = [];
        this.len = 100;
        this.mutProb = 1;

        for(var i =0; i < lifespan; i++){
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.2);
        }
    }

    mutate(){
        for(var i=0;i<this.len;i++){
            if(random() < this.mutProb){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.2);
            }
        }
    }
}
