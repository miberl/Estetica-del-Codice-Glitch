const dim = 3937;

let img;
let tick;
let iterate = 0;
let phase = 0;
let stelle = [];
let data;
let emissions;

function preload() {
    img = loadImage("./assets/earth.jpg");
    tick = loadSound("./assets/clock_tick.mp3");
    data = loadTable("./assets/c02_emissions.csv");
}

function setup() {
    createCanvas(dim, dim);
    image(img, 0, 0, dim, dim);
    frameRate(1);
    emissions = data.getColumn("average");
}

function draw() {

    switch (phase) {
        case 0:
            //frameRate(60);
            //for (let i = 0; i < floor(random(0, 20)); i++) {
            //new Glitch(img).showLines();
            //new Glitch(img).showCopies();
            //}
            //new Glitch(img).showLines();
            

            new Glitch(img).show();

            // for (let i = 0; i < floor(random(3, 10)); i++) {
            //     new Glitch(img).showCopies();
            // }
            if (iterate == 20) {
                phase = 1;
                iterate = 0;
            }
            console.log("Hi");
            iterate++;
            break;

        case 1:
            console.log(iterate);
            new Pixelate(img, iterate).pixels();
            iterate = iterate * 2;
            if (iterate == 1024) {
                phase = 2;
                iterate = 0;
            }
            tick.play();
            break;

        case 2:

            new Dark(img).allDark();
            if (iterate == 0) {
                for (let i = 0; i < emissions.length; i++) {
                    stelle[i] = new Star(i * (dim / emissions.length));
                }
                console.log("Star initialized");
            }
            if (iterate == 2)
                phase = 3;
            iterate++;
            tick.play();
            break;

        case 3:

            for (let i = 0; i < emissions.length; i++) {
                stelle[i].show();
            }
            console.log("Star viewed");

            if (iterate == 5) {
                phase = 4;
            }
            tick.play();
            iterate++;
            break;


        case 4:

            tint(iterate, 0, 0);
            image(img, 0, 0, dim, dim);
            for (let i = 0; i < emissions.length; i++) {
                stelle[i].show();
            }
            iterate += 15;
            if (iterate > 255)
                phase = 5;
            tick.play();
            break;

        default:
            console.log("Execution finished");
            noLoop();

    }
}


    // emissions = data.getColumn("average");
    // for (let i = 0; i < emissions.length; i++) {
    //     stelle[i] = new Star(i * (dim / emissions.length));
    //     stelle[i].show();
    // }


    // if (iterate < dim / 2)
    //     new Pixelate(img, iterate).pixels();
    // else
    //     new Dark(img).allDark();
    // iterate = iterate * 2;



