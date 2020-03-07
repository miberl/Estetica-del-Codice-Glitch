function Glitch(img, iterate) {

    this.pixels = function () {
        image(makePixels(iterate), 0, 0, dim, dim);
    }

}

function makePixels(iterate) {

    let tmp = createImage(img.width, img.height);
    img.loadPixels();
    tmp.loadPixels();
    let definition = iterate;
    let xpos = 0;

    for (let xend = definition; xend < img.width; xend += definition) {

        let ypos = 0;
        let yend = definition;

        for (let yend = definition; yend < img.height; yend += definition) {

            let averageRed = 0;
            let averageGreen = 0;
            let averageBlue = 0;
            let averageAlpha = 0;

            for (ypos; ypos < yend; ypos++) {

                for (xpos -= definition; xpos < xend; xpos++) {

                    let index = ((ypos * img.width) + xpos) * 4;
                    averageRed += img.pixels[index];
                    averageGreen += img.pixels[index + 1];
                    averageBlue += img.pixels[index + 2];
                    averageAlpha += img.pixels[index + 3];

                }
            }

            averageRed = floor(averageRed / (definition * definition));
            averageGreen = floor(averageGreen / (definition * definition));
            averageBlue = floor(averageBlue / (definition * definition));
            averageAlpha = floor(averageAlpha / (definition * definition));

            for (ypos -= definition; ypos < yend; ypos++) {

                for (xpos -= definition; xpos < xend; xpos++) {

                    let index = ((ypos * img.width) + xpos) * 4;
                    tmp.pixels[index] = averageRed;
                    tmp.pixels[index + 1] = averageGreen;
                    tmp.pixels[index + 2] = averageBlue;
                    tmp.pixels[index + 3] = averageAlpha;
                }
            }
        }
    }

    tmp.updatePixels();

    return tmp;
}

