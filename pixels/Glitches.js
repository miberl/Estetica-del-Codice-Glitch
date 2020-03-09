/*
Questo oggetto si occupa di creare vari effetti glitch, tra cui:
    -linee orizzontali effetto interferenza (con colori casuali) 
    -bande orizzontali 
    -traslazione orizzontale del canvas
    -copia di elementi di dimensione casuale in posizione casuale
*/


function Glitch(img) {
    
    this.show = function () {

        let im_final = horizColour();
        im_final = horizLines(im_final);
        image(im_final, 0, 0, dim, dim);

        for (let i = 0; i < floor(random(6, 12)); i++) {
            let dx = floor(random(0, img.width));
            let dy = floor(random(0, img.height));
            image(copyGlitches(), dx, dy);
        }

        let shiftX = floor(random(-400, 400));
        let heightY = floor(random(1, 400));
        let startY = floor(random(1500, img.height - 1500));
        
        copy(0, startY, img.width, heightY, shiftX, startY, img.width, heightY);

    }

}

function horizColour() {
    let shiftX;
    let heightY;
    let startY;
    let col;

    img.loadPixels();
    let tmpimage = createImage(img.width, img.height);
    tmpimage.loadPixels();

    for (let y = 0; y < img.height; y++) {

        for (let x = 0; x < img.width; x++) {

            let index = (((y) * img.width) + x) * 4;
            let r = index;
            let g = index + 1;
            let b = index + 2;
            let a = index + 3;

            tmpimage.pixels[r] = img.pixels[r];
            tmpimage.pixels[g] = img.pixels[g];
            tmpimage.pixels[b] = img.pixels[b];
            tmpimage.pixels[a] = img.pixels[a];

        }
    }


    for (let i = 0; i < floor(random(1, 3)); i++) {
        shiftX = floor(random(1, 350));
        heightY = floor(random(100, 300));
        startY = floor(random(1500, img.height - 1500));
        col = floor(random(0, 2));
        for (let y = startY; y < startY + heightY; y++) {
            for (let x = 0; x < img.width; x++) {

                let index = (((y) * img.width) + x) * 4;
                let r = index;
                let g = index + 1;
                let b = index + 2;
                let a = index + 3;

                switch (col) {
                    case 0:
                        tmpimage.pixels[r] = floor(random(200, 255));
                        //tmpimage.pixels[b] = floor(random(0, 150));
                        tmpimage.pixels[g] = 0;
                        break;
                    case 1:
                        tmpimage.pixels[g] = floor(random(200, 255));
                        tmpimage.pixels[r] = 0;
                        break;
                }

            }
        }
    }

    tmpimage.updatePixels();
    return tmpimage;
}


function shiftImage() {

    let shiftX = floor(random(1, 350));
    let heightY = floor(random(100, 400));
    let startY = floor(random(1500, img.height - 1500));
    let tmpimg = 4 * (heightY) * (img.width - shiftX);
    tmpimg.loadPixels();
    img.loadPixels();

    for (let y = 0; y < heightY; y++) {
        for (let x = 0; x < img.width - shiftImage; x++) {
            let tmpindex = (((img.width - shiftImage) * y) + x) * 4;
            let index = (((startY + y) * x) + x) * 4;
            let r = index;
            let g = index + 1;
            let b = index + 2;
            let a = index + 3;
            let rtmp = tmpindex;
            let gtmp = tmpindex + 1;
            let btmp = tmpindex + 2;
            let atmp = tmpindex + 3;
            tmpimg.pixels[rtmp] = img.pixels[r];
            tmpimg.pixels[gtmp] = img.pixels[g];
            tmpimg.pixels[btmp] = img.pixels[b];
            tmpimg.pixels[atmp] = img.pixels[a];
        }
    }


    tmpimg.updatePixels();
    image(tmpimg, shiftImage, startY);
}


function copyGlitches() {
    let sx = floor(random(0, img.width));
    let sy = floor(random(0, img.height));
    let w = floor(random(1, img.width));
    let h = floor(random(1, dim / 100));

    return img.get(sx, sy, w, h);
}


function horizLines(im) {

    let tmp = im.get();
    tmp.loadPixels();

    for (let i = 0; i < floor(random(0, 6)); i++) {
        let y = floor(random(0, dim))
        for (let x = 0; x < img.width; x++) {
            tmp.set(x, y, color(floor(random(0, 250)), floor(random(0, 250)), floor(random(0, 250))));
        }
    }
    tmp.updatePixels();
    return tmp;
}