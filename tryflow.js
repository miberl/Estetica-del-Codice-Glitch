function Glitch(img) {


    this.showLines = function () {
        image(horizLines(img), 0, 0, dim, dim);
    }

    this.showCopies = function () {
        let dx = floor(random(0, img.width));
        let dy = floor(random(0, img.height));
        image(copyGlitches(), dx, dy);
    }


}

function copyGlitches() {
    let sx = floor(random(0, img.width));
    let sy = floor(random(0, img.height));
    let w = floor(random(0, img.width));
    let h = floor(random(1, dim / 100));

    return img.get(sx, sy, w, h);
}

function horizLines() {

    let tmp = img.get();
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