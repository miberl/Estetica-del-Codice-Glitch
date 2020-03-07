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
    let xend = definition;


    while (xend < img.width) {

        let ypos = 0;
        let yend = definition;


        while (yend < img.height) {
            let averageRed = 0;
            let averageGreen = 0;
            let averageBlue = 0;
            let averageAlpha = 0;

            while (ypos < yend) {

                xpos -= definition;
                while (xpos < xend) {
                    let index = ((ypos * img.width) + xpos) * 4;
                    averageRed += img.pixels[index];
                    averageGreen += img.pixels[index + 1];
                    averageBlue += img.pixels[index + 2];
                    averageAlpha += img.pixels[index + 3];
                    xpos++;
                }
                ypos++;
            }

            ypos -= definition;
            averageRed = floor(averageRed / (definition * definition));
            averageGreen = floor(averageGreen / (definition * definition));
            averageBlue = floor(averageBlue / (definition * definition));
            averageAlpha = floor(averageAlpha / (definition * definition));

            while (ypos < yend) {
            
                xpos -= definition;
                while (xpos < xend) {
                    let index = ((ypos * img.width) + xpos) * 4;
                    tmp.pixels[index] = averageRed;
                    tmp.pixels[index + 1] = averageGreen;
                    tmp.pixels[index + 2] = averageBlue;
                    tmp.pixels[index + 3] = averageAlpha;
                    xpos++;
                }
                ypos++;
            }

            yend += definition;

        }
        xpos = xend;
        xend += definition;


    }
    tmp.updatePixels();

    return tmp;

}

