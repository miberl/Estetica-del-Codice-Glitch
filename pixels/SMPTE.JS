function ColouredBars(img, bar_number) {

    this.show = function () {
        for (let i = 0; i < bar_number; i++) {
            colourBar(i);
        }
    }

    this.showSingleBar = function(){
        colourBar(bar_number);
    }

}

function colourBar(number) {
    let startPixel = floor(img.width / 8) * number;
    //let endPixel = floor(img.width / 8) * (number + 1) - 1;
    push();
    let tmp = img.get(startPixel, 0, floor(img.width / 8), img.height);
    switch (number) {
        case 0:
            tint(0, 0, 0);
            break;
        case 1:
            tint (237,238,82);
            break;
        case 2:
            tint(98,210,197);
            break;
        case 3:
            tint(99,210,66);
            break;
        case 4:
            tint(156,48,174);
            break;
        case 5:
            tint(106,28,25);
            break;
        case 6:
            tint(22,33,160);
            break;
        case 7:
            tint(0,0,0);
            break;
        default:
            console.log("End of colours");
    }
    image(tmp,floor(dim/8)*number,0,dim/8,dim);
    pop();
}


