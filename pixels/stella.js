/*
Questo oggetto si occupa di creare una "Stella", più semplicemente un punto bianco.
Una stella deve rispondere ad alcune condizioni, quando viene posta per la prima volta nel canvas, essa si 
troverà in una posizione casuale (Ricordo che questa e' un'opera procedurale).
Questa posizione però si dovrà trovare al di fuori dal perimetro della Terra, per dare l'effetto desiderato.
Così essa viene approssimata con una circonferenza in cui punti dovranno essere all'esternop5.BandPass()

Formula della circonferenza (terra semplificata): x^2 + y^2 -4536x - 4160y + 8346624 = 0.
Risulta quindi che il centro della circonferenza si trova nella pos: (2268,2080).
Mentre il raggio e': 1.060.
*/

let xCentro = 2268;                         //Coordinate corrispondenti al centro della circonferenza
let yCentro = 2080;
let raggio = 1060;                          //Raggio circonferenza

function Star(x) {

    this.x = x;
    fill(255);                              //Stelle "bianche"
    stroke(255);
    let weight = floor(random(2, 5));       //Usato per calcolare lo strokeWeight(), casuale per dare l'impressione che ci siano stelle
    strokeWeight(weight);                   //più grandi/piccole e vicine/lontane.
    this.y = placeStar(x);                  //Calcola la y   

    this.show = function () {
        point(this.x, this.y);              //Disegna il punto sul canvas
    }

    this.setY = function (y1) {               //Setta la y, viene utilizzata per rappresentare i dati estrapolati dal CSV.
        this.y = y1;
    }

}

function placeStar(x) {                 // Sceglie casualmente la posizione (y) dove si trovera' la 'stella'
    let y = random(0, 3927);

    while (distanza(x, y) == false) {     //Controlla che essa non si trovi all'interno della circonferenza e nel caso ricalcola.
        y = random(0, 3927);
    }

    return y;
}

/*
Calcola la distanza dalla circonferenza (terra), se > 0 (tolto il raggio) è esterna, altrimenti è interna.
Le stelle devono essere esterne, cosi' da dare l'impressione di essere 'dietro' la terra.
*/

function distanza(x, y) {
    let xDist = pow(x - xCentro, 2);        //Calcola le distanze x e y del punto, elevandole al quadrato
    let yDist = pow(y - yCentro, 2);

    if (sqrt(xDist + yDist) - raggio > 0)   //Alla formula pitagorica, viene tolta la lunghezza del raggio, se > 0 e' esterno 
        return true;
    else
        return false;                       //Altrimenti interno
}