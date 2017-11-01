var population;
var lifespan =  150;
var finalX;
var finalY;
var Isdraw = true;

var wallX = 450;
var wallY;
var wallWidth; 
var wallHeight = 15;

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

    wallWidth = (width/2) - 300;
    wallY = (height/2) + 150;

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
        ellipse(finalX, finalY, 30, 30);
        rect(wallX, wallY, wallWidth, wallHeight);
    }
}
