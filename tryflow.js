let endimage;
let xOG, yOG, xDEST, yDEST, w ,h;
function Glitch(img) {
    // let sx = floor(random(0, img.width));
    // let sy = floor(random(0, img.height));
    // let dx = floor(random(0, img.width));
    // let dy = floor(random(0, img.height));
    // let w = floor(random(30, img.width));
    // let h = floor(random(1, dim/100));
    // let tmpImg = img.get(sx,sy,w,h);
    
    
    this.show = function () {
        let im= flowLine(img);
        image(im,0,0); 
    }


}

function flowLine(srcImg) {
    let t1= floor(random(0, 100));
    let speed = floor(random(12, 32));
    let randX = floor(random(24, 80));
    let destPixels, tempY;
    destPixels = createImage(srcImg.width,srcImg.height)//new Uint8ClampedArray(srcImg.pixels);
    destPixels.loadPixels();
    t1 %= srcImg.height;
    t1 += speed;
    //tempY = floor(noise(obj.t1) * srcImg.height);
    tempY = floor(t1);
    for (let y = 0; y < srcImg.height; y++) {
            if (tempY == y%100) {
                    for (let x = 0; x < srcImg.width; x++) {
                            let r, g, b, a;
                            let index;
                            index = (y * srcImg.width + x) * 4;
                            r = index;
                            g = index + 1;
                            b = index + 2;
                            a = index + 3;
                            destPixels.set(y,x,color(srcImg.pixels[r] + randX,srcImg.pixels[g] + randX,srcImg.pixels[b] + randX));
                            
                            // destPixels.pixels[r] = 0//srcImg.pixels[r] + randX;
                            // destPixels.pixels[g] = 0//srcImg.pixels[g] + randX;
                            // destPixels.pixels[b] = 0//srcImg.pixels[b] + randX;
                            // destPixels.pixels[a] =0// srcImg.pixels[a];
                    }
           }
    }
    destPixels.updatePixels();
    return destPixels;
}