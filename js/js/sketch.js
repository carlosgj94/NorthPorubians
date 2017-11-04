var population;
//var population2;
var walls= [];
var lifespan =  200;
var finalX;
var finalY;
var Isdraw = true;

//Probability to mutate (here because i dont know yet where else can it be)
var mutProb = 0.1;

function setup() {

    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    width -= 311;

    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    //var width = $("canvas").width();
    //var height = $("canvas").width();
    createCanvas(width, height);

    finalX = width / 2;
    finalY = 75;

    wallWidth = (width/2) - 300;
    wallY = (height/2) + 150;

    population = new Population('magenta');
    //population2 = new Population('blue');

    for(var i=0;i<20;i++)
        walls[i] = new Wall();

    //UI Functions init
    uiGetValues();
}

function draw() {
    if (Isdraw) {
        background('#fff0f2');
        //console.log(population.count);
        if (population.count == lifespan){ 
            population.reboot();
            //population2.reboot();
        }

        population.run();
        //population2.run();
        var c = color("#D9A652");  // Define color 'c'
        fill(c);  // Use color variable 'c' as fill color
        noStroke();
        ellipse(finalX, finalY, 90, 90);

        var c = color("#11bf8c");  // Define color 'c'
        //Wall drawing
        for(var i=0;i<walls.length;i++)
            walls[i].draw();
    }
}
