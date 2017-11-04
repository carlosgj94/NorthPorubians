class Wall {
    constructor(){
        this.x = random(width);
        this.y = random(200, height-150);
        this.width = 200; 
        this.height= 25;
        this.c = color("#11bf8c");
    }

    draw(){
        fill(this.c);  // Use color variable 'c' as fill color
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }
}
