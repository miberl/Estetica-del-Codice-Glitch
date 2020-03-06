let endimage;
let xOG, yOG, xDEST, yDEST, w ,h;
function Glitch(img) {
    let sx = floor(random(0, img.width));
    let sy = floor(random(0, img.height));
    let dx = floor(random(0, img.width));
    let dy = floor(random(0, img.height));
    let w = floor(random(30, img.width));
    let h = floor(random(1, dim/100));
    let tmpImg = img.get(sx,sy,w,h);
    this.show = function () {
        image(tmpImg,dx,dy);
    }


}
