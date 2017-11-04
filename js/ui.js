function uiRegenerate(){
    population = new Population('magenta');
    uiGetValues();
    console.log(population);
}

function uiApplyValues(){
    population.matchingProb = document.getElementById("matching").value; 
    population.penalty = document.getElementById("penalty").value; 
    population.prize = document.getElementById("winning-prize").value; 
    mutProb = document.getElementById("mutation").value; 
}

function uiGetValues(){
    document.getElementById("matching").value = population.matchingProb;
    document.getElementById("penalty").value = population.penalty;
    document.getElementById("winning-prize").value = population.prize;
    document.getElementById("mutation").value = mutProb;
}

function uiGetFitness(fitness){
    document.getElementById("fitness").innerHTML = "Fitness: "+ floor(fitness*1000);
}
