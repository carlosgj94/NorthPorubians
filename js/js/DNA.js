class DNA {
    constructor(oldGenes){
        this.genes = [];
        this.mutProb = 0.15;
        //this.mutProb = 0;
        if(oldGenes === undefined)
            for(var i =0; i < lifespan; i++){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.6);
            }
        else
            for(var i =0; i < lifespan; i++){
                this.genes[i] = oldGenes[i];
            }
    }

    mutate(){
        for(var i=0;i<lifespan;i++){
            if(random() < this.mutProb){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.2);
            }
        }
    }
}
