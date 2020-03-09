/*
Questo oggetto si occupa di creare vari effetti glitch, tra cui:
    -linee orizzontali effetto interferenza (con colori casuali) 
    -bande orizzontali 
    -traslazione orizzontale del canvas
    -copia di elementi di dimensione casuale in posizione casuale
*/

function Glitch(img) {

    this.show = function () {

        let im_final = horizColour();                                   //Colora con bande orizzontali l'immagine 
        im_final = horizLines(im_final);                                //Imposta le linee orizzontali 
        image(im_final, 0, 0, dim, dim);                                //Disegna l'immagine

        for (let i = 0; i < floor(random(6, 12)); i++) {                //Sceglie casualmente il numero di copyGlitch() 
            let dx = floor(random(0, img.width));                       //Sceglie casualmente dove posizionare la porzione
            let dy = floor(random(0, img.height));                      //dell'immagine restituita
            image(copyGlitches(), dx, dy);                              //Questo metodo e' piu' efficiente di usare copy()
        }

        let shiftX = floor(random(-400, 400));                          //Sceglie casualmente di quanto spostare l'asse x
        let heightY = floor(random(1, 400));                            //Quanti pixel (asse y) sposto
        let startY = floor(random(1500, img.height - 1500));            //A che altezza inizia lo spostamento

        //Sposta temporaneamente sull'asse x una porzione casuale dell'immagine, donando l'effetto "Shiftato"
        //La funzione copy() in questo caso copia una regione del canvas più a dx o sx sulla stessa y

        copy(0, startY, img.width, heightY, shiftX, startY, img.width, heightY);

    }

}

/*
    Crea bande orizzontali sovrapposte all'immagine di altezza casuale.
*/

function horizColour() {
    let heightY;
    let startY;
    let col;

    img.loadPixels();
    let tmpimage = createImage(img.width, img.height);              //Crea un'immagine temporanea di pixel vuoti
    tmpimage.loadPixels();                                          //Li carica

    for (let y = 0; y < img.height; y++) {                          //Iterando per tutti i pixel, assegna il valore RGBA dell'immagine
        for (let x = 0; x < img.width; x++) {                       //base al corrispondente pixel dell'immagine temporanea.

            let index = (((y) * img.width) + x) * 4;
            let r = index;
            let g = index + 1;
            let b = index + 2;
            let a = index + 3;

            tmpimage.pixels[r] = img.pixels[r];
            tmpimage.pixels[g] = img.pixels[g];
            tmpimage.pixels[b] = img.pixels[b];
            tmpimage.pixels[a] = img.pixels[a];

        }
    }


    for (let i = 0; i < floor(random(1, 3)); i++) {                     //Crea una o due bande

        startY = floor(random(1500, img.height - 1500));                //Sceglie casualmente il valore dell'altezza dove posizionare la banda
        heightY = floor(random(100, 300));                              //Sceglie casualmente il valore dell'altezza della banda stessa
        col = floor(random(0, 2));                                      //Sceglie casualmente il colore
        for (let y = startY; y < startY + heightY; y++) {               //Cominciando dall'altezza della banda per (heightY) volte 
            for (let x = 0; x < img.width; x++) {                       //colora di col ogni pixel

                let index = (((y) * img.width) + x) * 4;
                let r = index;
                let g = index + 1;
                let b = index + 2;
                let a = index + 3;

                switch (col) {                                          //Scelta colore
                    case 0:
                        tmpimage.pixels[r] = floor(random(200, 255));   //Banda rosso/magenta orizziontale
                        tmpimage.pixels[g] = 0;
                        break;
                    case 1:
                        tmpimage.pixels[r] = 0;
                        tmpimage.pixels[g] = floor(random(200, 255));   //Banda verde acceso orizzontale
                        break;
                }

            }
        }
    }

    tmpimage.updatePixels();                                            //Aggiorna tmpimage con i pixel con banda.
    return tmpimage;                                                    //Restituisce tmpimage al chiamante.
}

/*
    Restituisce una regione casuale del canvas, dando l'effetto errore di trasmissione 
*/

function copyGlitches() {
    let sx = floor(random(0, img.width));                               //Sceglie x e y sorgente
    let sy = floor(random(0, img.height));
    let w = floor(random(1, img.width));                                //Altezza e Larghezza
    let h = floor(random(1, dim / 100));

    return img.get(sx, sy, w, h);                                       //Restituisce la porzione dell'immagine corrispondente
}

/*
    Crea linee orizzontali dai colori casuali, dall'effetto "rumore"
*/

function horizLines(im) {               

    let tmp = im.get();                                                 //Crea tmp con i pixel dell'immagine passata
    tmp.loadPixels();

    for (let i = 0; i < floor(random(0, 6)); i++) {                     //Crea da 0 a 5 linee orizzontali
        let y = floor(random(0, dim))                                   //Sceglie l'altezza a cui posizionarla
        for (let x = 0; x < img.width; x++) {                           //Imposta, pixel per pixel un valore casuale
            tmp.set(x, y, color(floor(random(0, 250)), floor(random(0, 250)), floor(random(0, 250))));
        }
    }
    tmp.updatePixels();                                                 //Aggiorna i pixel
    return tmp;                                                         //Restituisce tmp al chiamante
}