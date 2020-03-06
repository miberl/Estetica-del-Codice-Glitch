let data;
let img;
let tmpImg;
let dim = 3927;
let stelle = [];
let stelleTracciate = [];
let emissions;
let it=1;

function preload() {
    data = loadTable('./assets/DATA/c02_emissions.csv', 'csv', 'header');
    img = loadImage('./assets/earth.jpg');
}

function setup() {
    createCanvas(dim, dim);
    image(img, 0, 0, dim, dim);
    frameRate(3);
}

function draw() {
    image(img,0,0,dim,dim);
    //image(img, 0, 0, dim, dim);
    //console.log("h");
    //for (let i = 0; i < floor(random(1, floor(it/10))); i++) {
        new Glitch(img).showLines();
        for (let i = 0; i < floor(random(1, floor(it/10))); i++) {
        new Glitch(img).showGlitch();
     }
    console.log(it);
    it++;

}



// function draw(){
//     let x,y,a,b,c;
//     let esiste=false;
//     x=iterate;
//     c=8346624+pow(x,2)-4536*x;
//     a=1;
//     b=-4160;
//     delta=pow(b,2)-4*a*c;
//     if (delta==0)
//         esiste=true;
//     y=-b;
//     if (esiste)
//         point (x,y);
// }






// function draw() {

//     let p1 = floor(random(0, emissions.length));
//     while (stelleTracciate[p1] == true) {
//         p1 = floor(random(0, emissions.length));
//     }
//     stelleTracciate[p1] = true;
//     console.log(stelle[p1].getY());
//     let p2 = floor(random(0, emissions.length));
//     while (stelleTracciate[p2] == true) {
//         p2 = floor(random(0, emissions.length));
//     }
//     console.log(stelle[p2].getY());
//     stelleTracciate[p2] = true;
//     strokeWeight(1);

//     if (intersecaCirconferenza(stelle[p1].getX(), stelle[p1].getY(), stelle[p2].getX(), stelle[p2].getY())==true)
//         line(stelle[p1].getX(), stelle[p1].getY(), stelle[p2].getX(), stelle[p2].getY());
// }
// //Formula della circonferenza (terra semplificata): x^2 + y^2 -4536x - 4160y + 8346624 = 0.
// //Risulta quindi che il centro della circonferenza si trova nella pos: (2269,1106).
// //Mentre il raggio e': 1.042.
// //Trova se la retta corrispondente al segmento interseca la circonferenza
// function intersecaCirconferenza(x0, y0, x1, y1) {
//     let m, q, a, b, c, delta;
//     //Retta: y = mx + q
//     m = coeffAng(x0, y0, x1, y1);    //Trova coeff. angolare della retta
//     q = y0 + m * x0;                  //Trova la q (intercetta) della retta 
//     //Sostituisco la y della retta nella formula della circonferenza.
//     //In questo modo ricavo una formula del tipo ax^2 + bx + c = 0
//     a = 1 + pow(m, 2);               //ax^2
//     b = -4536 + 2 * m * q - 4160 * m;       //bx
//     c = pow(q, 2) - 4160 * q + 8346624;  //c
//     //Calcolo delta (discriminante) dell'equazione ricavatap5.BandPass()
//     //Se il delta e' >= 0, allora la retta interseca la circonferenza
//     //Altrimenti vuol dire che non si intersecano.
//     delta = pow(b, 2) - 4 * a * c;
//     if (delta < 0)
//         return true;
//     else
//         return false;
// }

    // tmpImg=createImage(img.width,img.height);
    // img.loadPixels();
    // tmpImg.loadPixels();
    // for (let y = img.height/3; y < 2*(img.height/3); y++) {
    //     for (let x = 0; x < (img.width/5)*4; x++) {
    //         var index=(x+y*img.width)*4;
    //         let rosso=img.pixels[index+0];
    //         let verde=img.pixels[index+1];
    //         let blu=img.pixels[index+2];
    //         let trasp=img.pixels[index+3];
    //         tmpImg.set(x+img.width/5, y, [rosso, verde, blu,trasp]);
    //     }
    // }
    // tmpImg.updatePixels(); 
    // img.updatePixels();

    //image(img, 0, 0,dim,dim);
    //copy(img,0,floor(img.width/5),floor(img.width/5)*4,floor(img.width/5),floor(img.width/5),floor(img.width/5),floor(img.width/5)*4,floor(img.width/5));
    // for(let i = 0; i < 40; i++){

    // let yStart = random(0,dim);
    // let xStart = random(0,dim);
    // for (let y = yStart; y < random(yStart,dim); y++) {
    // for (let x = xStart; x < random(xStart,dim); x++) {
    //     var index=(x+y*dim)*4
    //     let rosso=img.pixels[index+0];
    //     let verde=img.pixels[index+1];
    //     let blu=img.pixels[index+2];
    //     let trasp=img.pixels[index+3];
    //     img.set(, [rosso, verde, blu,trasp]);
    //   }
    // }
    // img.updatePixels(); 

    // }
    // image(img,0,0,dim,dim);
    // let year = data.getColumn("year");
    // console.log(data.getRowCount());
    // strokeWeight(10);
    // stroke(255);
    // console.log(emissions.length);
    // //Formula del cerchio (terra semplificata) da immagine: x^2 + y^2 - 4538.5x - 2211.9y + 5285482

    // for (let i = 0; i < emissions.length; i++) {
    //     
    // }

// function draw (){




// }