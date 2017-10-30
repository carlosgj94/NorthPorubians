class Population {
    constructor(){
        this.ants = [];
        this.popsize = 100;
        this.count;
        this.winners = [];
        this.popProb = 0.3; //Probability to survive
        this.popSurvive = 0.5; //Per cent of ants that survive 

        for(var i=0; i < this.popsize; i++){
            this.ants[i]  = new Ant();
        }
    }

    run(){
        this.count = this.ants[0].count;
        for(var i=0; i < this.popsize; i++){
            this.ants[i].update();
            this.ants[i].show();
        }
    }

    reboot(){
        var sortArr = this._orderAnts();
        //The 50 best get a new life YAY for you Champions
        var antsNew = []
        var antsPicked = 0;
        var i = 0;

        while(antsPicked < (this.popSurvive * this.popsize)){
            //While we havent pick enough ants

            if(i>this.popsize) i=0; //Start the ant index to 0 again

            if(random() < this.popProb){
                //we select the next virgin ant
                while(this.ants[sortArr[i][0]] == undefined && i<this.popsize) i++; 
                //Ant, you have been selected to survive. Congratulations.
                antsNew[antsPicked] = new Ant(this.ants[sortArr[i][0]].dna);
                antsNew[antsPicked].reboot();
                this.ants[sortArr[i][0]] = undefined;//this ant has already fucked
                i=0; //Start the search again from 0
                antsPicked++;//One more ant picked
            }
            i++;
        }
        i = this.popsize * this.popSurvive;
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
