var population;
var walls= [];
var lifespan =  150;
var finalX;
var finalY;
var Isdraw = true;

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

    for(var i=0;i<10;i++)
        walls[i] = new Wall();
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
        ellipse(finalX, finalY, 90, 90);

        //Wall drawing
        for(var i=0;i<walls.length;i++)
            walls[i].draw();
    }
}
