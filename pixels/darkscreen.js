function Dark(img) {

    this.allDark = function () {
        image(d(), 0, 0, dim, dim);
    }

}

function d() {

    let tmp = createImage(img.width, img.height);
    //img.loadPixels();
    tmp.loadPixels();

    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let index = ((y * img.width) + x) * 4;
            tmp.pixels[index] = 0;
            tmp.pixels[index + 1] = 0;
            tmp.pixels[index + 2] = 0;
            tmp.pixels[index + 3] = 255;
        }
    }

    tmp.updatePixels();
    return tmp;
}
