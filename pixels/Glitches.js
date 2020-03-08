function Glitch(img) {


    this.showLines = function () {
        image(horizLines(img), 0, 0, dim, dim);
    }

    this.showCopies = function () {
        let dx = floor(random(0, img.width));
        let dy = floor(random(0, img.height));
        image(copyGlitches(), dx, dy);
    }
    this.shift = function(){
        let sx = floor(random(1500, img.width-1500));
        let sy = floor(random(1500, img.height-1500));
        let w = floor(random(0, img.width));
        let h = floor(random(1, dim / 30));
        let dx = floor(random(0, img.width));
        let dy = floor(random(0, img.height));
        blend(sx,sy,w,h,dx,dy,w,h,BURN);
    }
    this.test=function(){
        let shiftX = floor (random(-400,400));
        let heightY = floor (random(0, 400));
        let startY = floor (random(1500,img.height-1500));
        let tmpimg= 4*(heightY)*(img.width-shiftX);
        copy(0,startY,img.width,heightY,shiftX,startY,img.width,heightY);
    }

    this.HSB=function(){
        let shiftX = floor (random(0,350));
        let heightY = floor (random(100, 300));
        let startY = floor (random(1500,img.height-1500));
        let gg=changeHSB(img,shiftX,heightY,startY);
        image(gg,0,0,dim,dim);
        //image(changeHSB(shiftX,heightY,startY),shiftX,startY);
    }

}

function changeHSB(img,shiftX,heightY,startY){
    //colorMode(HSB);
   // let tmpimg = 4*(heightY)*(img.width-shiftX);
  //  tmpimg.loadPixels();
    img.loadPixels();
    let randH = floor(random(200,255));
    let randB =100;
    let randA = floor(random(0,150));
    for (let y = startY; y < startY+heightY;y++){
        for (let x = 0; x<img.width;x++){
            
            let index = (((y)*img.width)+x)*4;
            let h = index;
            let s = index+1;
            let b = index+2;
            let a = index+3;
            //img.pixels[h]=img.pixels[h]+floor(random(-30,30));
            //img.pixels[s]=255;//img.pixels[s]+floor(random(-100,0));
            //img.pixels[b]=img.pixels[b]+floor(random(-30,30));
            img.pixels[h+1]=randH;
            img.pixels[h]=0;
            //img.pixels[s]=50;
            //img.pixels[s]=255;
           // img.pixels[b]=0;

            //img.pixels[a]=img.pixels[a]-randA;
            // console.log("h"+img.pixels[h]);//=img.pixels[r];
            // console.log("s"+img.pixels[s]);//=img.pixels[g];
            // console.log("b"+img.pixels[b]);//=img.pixels[b];
            // console.log("a"+img.pixels[a]);//=img.pixels[a];
        }
    }

    
    img.updatePixels();
    return img;
}
function shiftImage(){

    let shiftX = floor (random(0,350));
    let heightY = floor (random(100, 400));
    let startY = floor (random(1500,img.height-1500));
    let tmpimg= 4*(heightY)*(img.width-shiftX);
    tmpimg.loadPixels();
    img.loadPixels();


    // for (let y = startY; y < startY+heightY;y++){
    //     for (let x = 0; x<img.width-shiftImage;x++){
    //         tmpimg.pixels
    //     }
    // }


    for (let y = 0; y < heightY;y++){
        for (let x = 0; x<img.width-shiftImage;x++){
            let tmpindex=(((img.width-shiftImage)*y)+x)*4;
            let index = (((startY+y)*x)+x)*4;
            let r = index;
            let g = index+1;
            let b = index+2;
            let a = index+3;
            let rtmp = tmpindex;
            let gtmp = tmpindex+1;
            let btmp = tmpindex+2;
            let atmp = tmpindex+3;
            tmpimg.pixels[rtmp]=img.pixels[r];
            tmpimg.pixels[gtmp]=img.pixels[g];
            tmpimg.pixels[btmp]=img.pixels[b];
            tmpimg.pixels[atmp]=img.pixels[a];
        }
    }

    
    tmpimg.updatePixels();
    image(tmpimg,shiftImage,startY);
}

function horizMove(){
    let tmp = img.get();
    tmp.loadPixels();

    console.log("Hello");
    
    let r = floor(random(1,7));
    let r1 = floor(random(0,floor(img.height/r)));
    let y=0;
    for (let i = 1; i < r+1;i++){
        console.log("dere");
        let shift = floor(random(0,400));
        while(y<floor(img.height/r)*i&&y<img.height){
            for (let x = shift; x < img.width; x++) {
                if(x<img.width)
                tmp.set(x, y, img.get(x-(shift-1),y));
                console.log("weee");
            }
            y++;
            console.log(y);
        }
    }

        
    tmp.updatePixels();
    return tmp;
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