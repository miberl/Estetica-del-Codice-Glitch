let endimage;
let xOG, yOG, xDEST, yDEST, w, h;
function Glitch(img) {
    let sx = floor(random(0, img.width));
    let sy = floor(random(0, img.height));
    let dx = floor(random(0, img.width));
    let dy = floor(random(0, img.height));
    let w = floor(random(0, img.width));
    let h = floor(random(1, dim / 100));
    let tmpImg = img.get(sx, sy, w, h);


    this.showLines = function () {
        let im = horizLines(img);
        image(im, 0, 0);
    }

    this.showGlitch = function () {
        image(tmpImg, dx, dy);
    }


}

// function glitches(img){
    
// }

function horizLines(srcImg) {

    let destPixels = createImage(srcImg.width, srcImg.height)//new Uint8ClampedArray(srcImg.pixels);
    destPixels.loadPixels();

    for (let y = 0; y < srcImg.height; y++) {
        if (floor(random(0,1500)) == y % 1500) {
            for (let x = 0; x < srcImg.width; x++) {
                destPixels.set(x, y, color(floor(random(0,250)),floor(random(0,250)),floor(random(0,250))));
            }
        }
    }
    destPixels.updatePixels();
    return destPixels;
}