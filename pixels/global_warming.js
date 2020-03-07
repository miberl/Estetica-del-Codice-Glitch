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
}

function draw() {
    new Glitch(img, iterate).pixels();
    iterate = iterate * 2;
}



