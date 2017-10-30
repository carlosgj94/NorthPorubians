class Population {
    constructor(){
        this.ants = [];
        this.popsize = 100;
        this.count;
        this.winners = [];
        this.popProb = 0.7; //Probability to survive
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
        var sortArr = this._orderAnts(); // Returns an array with: id, quality
        sortArr = this._addTotalQuality(sortArr); //Adds the total quality of each ant
        var antsNew = []; //The future ants

        //antsNew[antsPicked] = new Ant(this.ants[sortArr[i][0]].dna);
        //antsNew[antsPicked].reboot();

        for(i in this.popsize){
            var rand = random();
            for(j in this.popsize){
                if(rand < sortArr[j][2]){
                    //Ant selected
                    antsNew[antsPicked] = new Ant(this.ants[sortArr[i][0]].dna);
                    antsNew[antsPicked].reboot();
                }
            } 
        }

        this.ants = antsNew;
        //Mix every two
        //Mutate randomly
    }

    _getQuality(sortArr) {
        var sum = 0;
        for(index in sortArr){
            sum += sortArr[index][1]; 
        }
        return sum;
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

    _addTotalQuality(sortArr){
        var _Quality = _getQuality(sortArr);
        sortArr[this.popsize-1][2] = sortArr[this.popsize][1]/_Quality;
        for(var i = this.popsize-2; i>=0; i--){
            var quality = (sortArr[i][1]/_Quality) + sortArr[i+1][2];
            sortArr[i][2] = quality;
        }
        return sortArr;
    }

}