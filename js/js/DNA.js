class DNA {
    constructor(oldGenes){
        this.genes = [];
        this.mutProb = 0.15;
        this.magnitude = 0.5;//This will be the speed
        if(oldGenes === undefined)
            for(var i =0; i < lifespan; i++){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(this.magnitude);
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
                this.genes[i].setMag(this.magnitude);
            }
        }
    }
    mix(dna){
        var father = [];
        var mother = [];

        var mid = floor(random(lifespan));

        for(var i=0; i<lifespan; i++){
            if(i<lifespan){
                mother[i] = this.genes[i];
                father[i] = dna.genes[i];
            }else{
                mother[i] = dna.genes[i];
                father[i] = this.genes[i];
            }
        }
        this.genes = mother;
        dna.genes = father;
    }
}
