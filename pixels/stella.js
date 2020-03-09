//Formula della circonferenza (terra semplificata): x^2 + y^2 -4536x - 4160y + 8346624 = 0.
//Risulta quindi che il centro della circonferenza si trova nella pos: (2269,1106).
//Mentre il raggio e': 1.042.
let xCentro = 2268;
let yCentro = 2080;
let raggio = 1060;

function Star(x) {
    let y;
    this.x = x;
    fill(255);
    stroke(255);
    let weight = floor(random(2, 5)); 
    strokeWeight(weight);
    this.y = placeStar(x);
    y=this.y;

    this.show = function () {
        point(this.x, this.y);
    }

    this.getX = function(){
        return x;
    }

    this.getY = function(){
        return y;
    }

    this.setX = function(x){
        this.x = x;
    }

    this.setY = function(y1){
        this.y = y1;
    }

}

function placeStar(x) { // Sceglie casualmente la posizione (y) dove si trovera' la 'stella'
    let y = random(0, 3927);
    while (distanza(x, y)==false) {
        y = random(0, 3927);
    }
    return y;
}
//Calcola la distanzaanza dalla circonferenza (terra), se > 0 è esterna, altrimenti è interna.
//Le stelle devono essere esterne, cosi' da dare l'impressione di essere 'dietro' la terra.
function distanza(x, y) {
    let xDist = pow(x - xCentro, 2);
    let yDist = pow(y - yCentro, 2);
    if (sqrt(xDist + yDist) - raggio > 0)
        return true;
    else
        return false;
}