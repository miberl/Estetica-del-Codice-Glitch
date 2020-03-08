let data;
let img;
let tmpImg;
let dim = 3937;
let stelle = [];
let stelleTracciate = [];
let emissions;
let iterate = 1;

function preload() {
    img = loadImage('./assets/earth.jpg');
}

function setup() {
    createCanvas(dim, dim);
    image(img, 0, 0, dim, dim);
    frameRate(1);
    //new Glitch(img,128).pixels();
}

function draw() {
    console.log(iterate);
    if (iterate<dim/2)
        new Glitch(img, iterate).pixels();
    else 
        new Dark(img).allDark();
    iterate = iterate * 2;
}



