var div_vaisseau;
var div_mechant;
var div_laser;
var mechantContainer;
var button = document.getElementById("boutonJouer");
var intervalLaser;
var intervalMob;
document.getElementById("boutonJouer").addEventListener("click", fonctionLancerLaGame);
document.onkeydown = function (event) {
    if (event.keyCode == 39) fonctionVaisseauGauche();
    if (event.keyCode == 37) fonctionVaisseauDroite();
    if (event.keyCode == 32) fonctionVaisseauTire();
    if (event.keyCode == 13) fonctionBougerMechant();
}

function fonctionVaisseauDroite() {
    if (parseInt(window.getComputedStyle(div_vaisseau).left) > 0) {
        div_vaisseau.style.left = parseInt(window.getComputedStyle(div_vaisseau).left) - 10 + "px";
    }
}//Fonction pour déplacer gauche

function fonctionVaisseauGauche() {
    if ((parseInt(window.getComputedStyle(div_vaisseau).left) < 1500)) {
        div_vaisseau.style.left = parseInt(window.getComputedStyle(div_vaisseau).left) + 10 + "px";
    }
}//Fonction pour déplacer droite

function fonctionVaisseauTire() {
    div_laser = document.createElement("div");
    div_laser.setAttribute("id", "laser");
    div_laser.setAttribute("class", "laser");
    div_laser.style.left = div_vaisseau.style.left;
    div_laser.style.bottom = 0;
    document.body.append(div_laser);
    intervalLaser = setInterval(fonctionBougeLaser, 50);
}

function fonctionBougeLaser() {
    div_laser.style.bottom = parseInt(window.getComputedStyle(div_laser).bottom) + 100 + "px";
    console.log(1)
    if (parseInt(window.getComputedStyle(div_laser).bottom) >= 2000 + "px") {
        clearInterval(intervalLaser);
    }
}

function fonctionLancerLaGame() {
    button.setAttribute("id", "destructionBouton");
    mechantContainer = document.createElement("section");
    mechantContainer.setAttribute("id", "mechantContainer")
    div_vaisseau = document.createElement("div");
    div_vaisseau.setAttribute("id", "vaisseau");
    div_vaisseau.setAttribute("class", "vaisseau");
    document.body.append(div_vaisseau);
    document.body.append(mechantContainer);
    for (j = 1; j < 9; j++) {
        div_mechant = document.createElement("div");
        div_mechant.setAttribute("id", "mechant + j");
        div_mechant.setAttribute("class", "mechant");
        div_mechant.style.left = 150 * j + 100 + "px";
        mechantContainer.append(div_mechant);
    }
    intervalMob = setInterval(fonctionBougerMechant, 200);
}

function fonctionBougerMechant() {
    while (parseInt(window.getComputedStyle(mechantContainer).top) <= 800 + "px") {
        if (parseInt(window.getComputedStyle(mechantContainer).left) >= 1300) {
            mechantContainer.style.left = parseInt(window.getComputedStyle(mechantContainer).left) - 10 + "px"
        };
        if (parseInt(window.getComputedStyle(mechantContainer).top) >= parseInt(window.getComputedStyle(mechantContainer).top) + 100 + "px") {
            mechantContainer.style.top = parseInt(window.getComputedStyle(mechantContainer).top) + 10 + "px"
        };
        if (parseInt(window.getComputedStyle(mechantContainer).left) <= 0) {
            mechantContainer.style.left = parseInt(window.getComputedStyle(mechantContainer).left) + 10 + "px"
        };
        if (parseInt(window.getComputedStyle(mechantContainer).top) >= parseInt(window.getComputedStyle(mechantContainer).top) + 100 + "px") {
            mechantContainer.style.top = parseInt(window.getComputedStyle(mechantContainer).top) + 10 + "px"
        };
    }
    if (mechantContainer.style.bottom == 0 + "px") {
        clearInterval(intervalMob);
    }
}








