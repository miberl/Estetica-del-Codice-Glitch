/*
Questo oggetto si occupa di creare il cosidetto effetto SMPTE, cioè l'effetto delle "barre verticali", utilizzato come test di diagnostica 
nei vecchi apparecchi televisivi.
*/


function ColouredBars(img, bar_number) {

    this.show = function () {                       //Questa funzione produce l'effetto delle "barre che si muovono", da destra verso sinistra,
        for (let i = 0; i < bar_number; i++) {      //una dopo l'altra.
            colourBar(i);                           //Viene chiamata la funzione unica colourBar che passando, uno dopo l'altro (fino all'indice indicato), 
                                                    //"tinteggia" la barra con il colore corrispondente.
        }
    }

    this.antiShow = function () {                   //Questa funzione produce l'effetto inverso di show(), cioè quello delle "barre che scompaiono",
        image(img, 0, 0, dim, dim);                 //da destra verso sinistra.
        for (let i = bar_number; i < 8; i++) {      //Per ottenere l'effetto viene disegnata l'immagine originale e ad ogni iterazione
            colourBar(i);                           //viene tinteggiata una barra in meno.
        }
    }

    this.showSingleBar = function () {              //Questa funzione restituisce una barra singola, di indice indicato.
        colourBar(bar_number);                      //Utilizzata per dare l'effetto "glitching"
    }

}

function colourBar(number) {
    let startPixel = floor(img.width / 8) * number;
    push();                                         //Vengono salvate 
    let tmp = img.get(startPixel, 0, floor(img.width / 8), img.height);
    switch (number) {
        case 0:
            tint(0, 0, 0);
            break;
        case 1:
            tint(237, 238, 82);
            break;
        case 2:
            tint(98, 210, 197);
            break;
        case 3:
            tint(99, 210, 66);
            break;
        case 4:
            tint(156, 48, 174);
            break;
        case 5:
            tint(106, 28, 25);
            break;
        case 6:
            tint(22, 33, 160);
            break;
        case 7:
            tint(0, 0, 0);
            break;
        default:
            console.log("End of colours");
    }
    image(tmp, floor(dim / 8) * number, 0, dim / 8, dim);
    pop();
}


