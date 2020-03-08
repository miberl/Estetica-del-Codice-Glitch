const dim = 3937;
let iterate = 1;
let img;
let tick;


function preload() {
    img = loadImage('./assets/earth.jpg');
    tick = loadSound("./assets/clock_tick.mp3");
}

function setup() {
    createCanvas(dim, dim);
    image(img, 0, 0, dim, dim);
    frameRate(1);
    
}

function draw() {
    console.log(iterate);
    tick.play();
    if (iterate<dim/2)
        new Pixelate(img, iterate).pixels();
    else 
        new Dark(img).allDark();
    iterate = iterate * 2;
}



