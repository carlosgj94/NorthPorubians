class Population {
    constructor(){
        this.ants = [];
        this.popsize = 1000;
        this.count;
        this.winners = [];
        this.matchingProb = 0.15;

        this.penalty = 0.05;
        this.prize = 5;

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

        for(var i=0; i < this.popsize; i++){
            var rand = random();
            for(var j=this.popsize-1; j>=0; j--){ //From upside down since we want to start
                if(rand < sortArr[j][2]){
                    //Ant selected
                    antsNew[i] = new Ant(this.ants[sortArr[j][0]].dna);
                    //Finish the for loop
                    j = 0;
                }
            } 
        }

        this.ants = antsNew;
        this.matching();
        this.mutate();
    }
    
    mutate(){
        for(var i=0; i < this.popsize; i++){
            this.ants[i].mutate();
        }
    }

    matching(){
        for(var i=0;i<this.popsize/2;i++){
            var rand = random();
            if(rand < this.matchingProb){
            //Pick an ant
                var father = random(this.ants);
                var mother = random(this.ants);
                mother.procreate(father);
            }
        }
    }

    _getQuality(sortArr) {
        var sum = 0;
        for(var index in sortArr){
            if(this.ants[sortArr[index][0]].dead)
                sum += (sortArr[index][1]*this.penalty); 
            else if(this.ants[sortArr[index][0]].gotTheFood)
                sum += (sortArr[index][1]*this.prize); 
            else
                sum += sortArr[index][1]
        }
        console.log(sum);
        return sum;
    }

    _orderAnts(){
        var sorteable = [];
        for(var ant in this.ants){
            var distP = dist(this.ants[ant].pos.x, this.ants[ant].pos.y, finalX, finalY);
            if(this.ants[ant].dead) distP *=this.penalty;
            //Do I want to make//Do I want to make them worst if they crash? them worst if they crash?
            else if(this.ants[ant].gotTheFood) distP *= this.prize;
            sorteable.push([ant, 1/distP]);
        }
        return sorteable.sort(function (a, b){
            return a[1] - b[1];
        });
    }

    _addTotalQuality(sortArr){
        var _Quality = this._getQuality(sortArr);
        sortArr[this.popsize-1][2] = (sortArr[this.popsize-1][1]/_Quality);
        for(var i = this.popsize-2; i>=0; i--){
            var quality = (sortArr[i][1]/_Quality) + sortArr[i+1][2];
            sortArr[i][2] = quality;
        }
        return sortArr;
    }
}
