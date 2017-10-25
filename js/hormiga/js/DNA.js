class DNA {
    constructor(){
        this.genes = [];
        this.len = 100;

        for(var i =0; i < lifespan; i++){
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.2);
        }
    }


}
