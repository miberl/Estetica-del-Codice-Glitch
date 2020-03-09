/*
    Questo oggetto si occupa di creare l'effetto "pixellato", il parametro iterate, passato insieme all'immagine, definisce il numero di pixel 
    che costituiscono ogni "quadrato" (di dimensione iterate*iterate).
*/

function Pixelate(img, iterate) {

    this.pixels = function () {
        image(makePixels(iterate), 0, 0, dim, dim); //Viene chiamata la funzione image() con il risultato della funzione  
    }                                               //makePixels(), cioè l'immagine pixellata.

}

function makePixels(iterate) {

    let tmp = createImage(img.width, img.height);   //Crea un'immagine "vuota", della stessa dimensione dell'immagine passata.
    img.loadPixels();                               //Carico i pixel dell'immagine passata
    tmp.loadPixels();
    let definition = iterate;                       //Iterate corrisponde alla "definizione", dell'immagine
    let xpos = 0;

    /*
        L'idea alla base, per realizzare l'effetto pixellato/bassa risoluzione, e' quella di prendere un'insieme di pixel, 
        definition * definition, calcolarne il valore medio e assegnarlo a tutti i pixel dell'insieme.
    */
                                                                                //Ciclo partendo da x = 0 e y = 0
    for (let xend = definition; xend < img.width; xend += definition) {         //Finita la colonna, incremento il contatore 
                                                                                //corrispondente ad x in base alla risoluzione   
                    
        let ypos = 0;
        let yend = definition;

        for (let yend = definition; yend < img.height; yend += definition) {    //Scendo verticalmente, incrementando il contatore 
                                                                                //corrispondente ad y in base alla risoluzione.
            let averageRed = 0;
            let averageGreen = 0;
            let averageBlue = 0;
            let averageAlpha = 0;

            for (ypos; ypos < yend; ypos++) {

                for (xpos -= definition; xpos < xend; xpos++) {

                    let index = ((ypos * img.width) + xpos) * 4;    //Viene calcolato l'indice e moltiplicato * 4 (Valori RGBA).
                    averageRed += img.pixels[index];                //Sommo alle variabili corrispondenti i valori dei pixel  
                    averageGreen += img.pixels[index + 1];          
                    averageBlue += img.pixels[index + 2];
                    averageAlpha += img.pixels[index + 3];

                }
            }

            /*
                Calcolo la media dei valori RGBA per ogni pixel
            */
            averageRed = floor(averageRed / (definition * definition));
            averageGreen = floor(averageGreen / (definition * definition));
            averageBlue = floor(averageBlue / (definition * definition));
            averageAlpha = floor(averageAlpha / (definition * definition));

            for (ypos -= definition; ypos < yend; ypos++) {

                for (xpos -= definition; xpos < xend; xpos++) {

                    let index = ((ypos * img.width) + xpos) * 4;    //Viene calcolato l'indice e moltiplicato * 4 (Valori RGBA).
                    tmp.pixels[index] = averageRed;
                    tmp.pixels[index + 1] = averageGreen;
                    tmp.pixels[index + 2] = averageBlue;
                    tmp.pixels[index + 3] = averageAlpha;

                }
            }
        }
    }

    tmp.updatePixels();                             //Aggiorno tutti i pixel dell'immagine "temporanea" con i valori modificati.

    return tmp;                                     //Ritorno l'immagine temporanea.

}