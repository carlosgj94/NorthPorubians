var population;
var lifespan =  400;
var finalX;
var finalY;
var Isdraw = true;
var vueltas = 0;

function setup() {
    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    //var width = 400;
    //var height = 400;
    createCanvas(width, height);

    finalX = width / 2;
    finalY = 150;

    population = new Population();
}

function draw() {
    if (Isdraw) {
        background('#fff0f2');
        //console.log(population.count);
        if (population.count == lifespan) 
            population.reboot();

        population.run();
        var c = color("#11bf8c");  // Define color 'c'
        fill(c);  // Use color variable 'c' as fill color
        noStroke();
        ellipse(finalX, finalY, 20, 20);
    }
}
