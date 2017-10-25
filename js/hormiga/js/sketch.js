var population;
var lifespan =  300;
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
    finalY = 30;

    population = new Population();
}

function draw() {
    if (Isdraw) {
        background('rgba(0,0,0,0.1)');
        //console.log(population.count);
        if (population.count == lifespan) {
            population.reboot();
            /*vueltas++
            if(vueltas==3)
                setOwnDraw()*/
        }

        population.run();
        var c = color("red");  // Define color 'c'
        fill(c);  // Use color variable 'c' as fill color
        noStroke();
        ellipse(finalX, finalY, 30, 30);
    }
}

function setOwnDraw(){
    if(Isdraw)
        Isdraw = false
    else
        Isdraw = true
}
