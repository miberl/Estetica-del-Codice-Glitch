const dim = 3937;

let img;
let tick;
let iterate = 0;
let phase = 0;
let stelle = [];
let data;
let emissions;
let song;
let attimo = 0;
let bars = 0;
function preload() {
    img = loadImage("./assets/earth.jpg");
    tick = loadSound("./assets/clock_tick.mp3");
    data = loadTable('./assets/c02_emissions.csv', 'csv', 'header');
    song = loadSound("./assets/Nirvana_-_The_Man_Who_Sold_The_World_MTV_Unplugged.mp3");
}

function setup() {
    song.play();
    createCanvas(dim, dim);
    image(img, 0, 0, dim, dim);
    frameRate(1);
    emissions = data.getColumn("average");
    for (let i = 0; i < emissions.length; i++)
        console.log(emissions[i]);
}

function draw() {
    attimo = attimo + 1;

    switch (phase) {
        case 0:
            image(img, 0, 0, dim, dim);
            iterate++;
            if (iterate == 15) {
                phase = 1;
                iterate = 0;
            }
            break;

        case 1:
            new Glitch(img).show();
            if (floor(random(0, 3)) == 0) {
                for (let i = 0; i < floor(random(1, 4)); i++)
                    new ColouredBars(img, floor(random(0, 8))).showSingleBar();
            }

            iterate++;
            if (iterate == 40) {
                phase = 2;
                iterate = 0;
            }
            break;

        case 2:
            console.log("Hello");
            new ColouredBars(img, iterate).show();

            iterate++;
            if (iterate == 10) {
                iterate = 0;
                phase = 3;
            }

            break;

        case 3:
            new ColouredBars(img, iterate).antiShow();
            iterate++;
            if (iterate == 9) {
                if (bars == 1) {
                    iterate = 1;
                    phase = 4;
                }
                else {
                    iterate = 0;
                    phase = 2;
                    bars = 1;
                }
            }
            break;

        case 4:
            console.log(iterate);
            new Pixelate(img, iterate).pixels();
            iterate = iterate * 2;
            if (iterate == 1024) {
                phase = 5;
                iterate = 0;
            }
            break;

        case 5:

            new Dark(img).allDark();
            if (iterate == 0) {
                for (let i = 0; i < emissions.length; i++) {
                    stelle[i] = new Star(i * (dim / emissions.length));
                }
                console.log("Star initialized");
            }
            if (iterate == 4)
                phase = 6;
            iterate++;
            //tick.play();
            break;

        case 6:

            for (let i = 0; i < emissions.length; i++) {
                stelle[i].show();
            }
            console.log("Star viewed");

            if (iterate == 5) {
                phase = 7;
            }
            //tick.play();
            iterate++;
            break;


        case 7:

            tint(iterate, 0, 0);
            image(img, 0, 0, dim, dim);
            for (let i = 0; i < emissions.length; i++) {
                stelle[i].show();
            }
            iterate += 15;
            if (iterate > 255) {
                phase = 8;
                iterate = 0;
            }

            //tick.play();
            break;

        case 8:
            image(img, 0, 0, dim, dim);
            console.log("attimo = " + attimo);
            // stelle[i].setY((map(emissions[i],310,415,3700,200)));
            phase = 9;
            break;

        case 9:

            let dataPoint = floor(emissions.length/27);
            image (img,0,0,dim,dim);
            for (let i = (iterate*dataPoint);i<(iterate+1)*dataPoint&&i<emissions.length;i++){
               
                stelle[i].setY(floor(map(emissions[i],310,415,3700,200)));
            }
            for (let i = 0; i < emissions.length; i++) {
                stelle[i].show();
            }
            iterate++;
            console.log(iterate);
            if (iterate==28)
                phase = 10;
            break;
           
        default:
            console.log("Execution finished");
            noLoop();

    }
}



