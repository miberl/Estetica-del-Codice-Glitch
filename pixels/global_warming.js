const dim = 3937;

let img;
let tick;
let iterate = 1;
let phase = 1;

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

    switch (phase) {
        case 0:

            break;

        case 1:
            console.log(iterate);
            tick.play();
            new Pixelate(img, iterate).pixels();
            iterate = iterate * 2;
            if (iterate == 1024) {
                phase = 2;
                iterate = 0;
            }
            break;
        case 2:
            tick.play();
            new Dark(img).allDark();
            if (iterate == 5)
                phase = 3;
            iterate++;
            break;

        default:
            console.log("Execution finished");
            noLoop();
    }
}





    // if (iterate < dim / 2)
    //     new Pixelate(img, iterate).pixels();
    // else
    //     new Dark(img).allDark();
    // iterate = iterate * 2;



