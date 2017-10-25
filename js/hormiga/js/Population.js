class Population {
    constructor(){
        this.ants = [];
        this.popsize = 100;
        this.survivor = this.popsize*0.08;
        this.count;
        this.winners = [];

        for(var i=0; i < this.popsize; i++){
            this.ants[i]  = new Ant();
        }
    }

    run(){
        this.count = this.ants[0].count;
        if(this.count == 400) console.log(this.count);
        for(var i=0; i < this.popsize; i++){
            this.ants[i].update();
            this.ants[i].show();
        }
    }

    reboot(){
        var sortArr = this._orderAnts();
        //The 50 best get a new life YAY for you Champions
        var antsNew = []
        var i = 0;

        for(i; i < this.survivor && i<this.popsize; i++){
            antsNew[i] = new Ant(this.ants[sortArr[i][0]].dna);
            antsNew[i].reboot();
        }
        //The loosers DIEEEEEEEEEEE
        for(i; i<this.popsize; i++){
            antsNew[i] = new Ant();
        }

        this.ants = antsNew;

    }

    _orderAnts(){
        var sorteable = [];
        for(var ant in this.ants){
            var distP = dist(this.ants[ant].pos.x, this.ants[ant].pos.y, finalX, finalY);
            sorteable.push([ant, distP]);
        }
        return sorteable.sort(function (a, b){
            return a[1] - b[1];
        });
    }

}
