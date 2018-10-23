var div_vaisseau = document.getElementById("vaisseau");
var div_mechant = document.getElementsByClassName("mechant");
var div_laser = document.getElementById("laser");
var button = document.getElementById("boutonJouer");
var fenetre = document.body;
document.getElementById("boutonJouer").addEventListener("click", fonctionLancerLaGame);
document.onkeydown = function (event) {
    if (event.keyCode == 37) fonctionVaisseauGauche();
    if (event.keyCode == 39) fonctionVaisseauDroite();
    if (event.keyCode == 32) fonctionVaisseauTire();//Espace
    if (event.keyCode == 13) fonctionBougerMechant();//Enter
}

function fonctionLancerLaGame() {
    button.setAttribute("id", "destructionBouton");
    div_vaisseau.setAttribute("class", "vaisseau");
    div_mechant.setAttribute("class", "mechant");
}//Dessine le jeux avec le bouton jouer

function fonctionVaisseauDroite() {
    if ((parseInt(window.getComputedStyle(div_vaisseau).left) < 1500)) {
        div_vaisseau.style.left = parseInt(window.getComputedStyle(div_vaisseau).left) + 10 + "px";
    }
}//Fonction pour déplacer droite

function fonctionVaisseauGauche() {
    if (parseInt(window.getComputedStyle(div_vaisseau).left) > 0 ) {
        div_vaisseau.style.left = parseInt(window.getComputedStyle(div_vaisseau).left) - 10 + "px";
    }
}//Fonction pour déplacer gauche

function fonctionVaisseauTire() {
    div_laser = document.createElement("div");
    div_laser.setAttribute("id", "laser");
    div_laser.setAttribute("class", "laser");
    div_laser.style.left = div_vaisseau.style.left;
    div_laser.style.top = 800 + "px";
    document.body.append(div_laser); 
}//Créer un missile

function fonctionBougeLaser() {
    div_laser.style.top = parseInt(window.getComputedStyle(div_laser).top) - 90 + "px";
    if ((div_laser.style.top) < 0 ){
        document.body.removeChild(div_laser);
        clearInterval(interval);
    }//Intervalle pour le tire
}//Faire bouger le missile

var interval = setInterval(fonctionBougeLaser, 50);

 function fonctionBougerMechant(){
    div_mechant.style.left = parseInt(window.getComputedStyle(div_mechant).left) - 10 + "px";
 }