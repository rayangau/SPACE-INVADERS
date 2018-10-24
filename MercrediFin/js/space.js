var fenetre = document.getElementById("fenetre");
var div_vaisseau;
var div_mechant;
document.getElementById("boutonJouer").addEventListener("click", fonctionLancerLaGame);
document.onkeydown = function (event) {
    if (event.keyCode == 39) fonctionVaisseauGauche();
    if (event.keyCode == 37) fonctionVaisseauDroite();
    if (event.keyCode == 32) fonctionVaisseauTire();
    if (event.keyCode == 13) fonctionBougeRectangle();
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
    var div_laser = document.createElement("div");
    div_laser.setAttribute("class", "laser");
    div_laser.style.left = div_vaisseau.style.left;
    div_laser.style.top = 800;
    fenetre.append(div_laser);
    var intervalLaser = setInterval(function () {
        fonctionBougeLaser(intervalLaser, div_laser);
    }, 80);
}//Balance Une div Laser

function isCollide(a, b) {
    return !(
        ((a.y + a.hauteur) < (b.y)) ||
        (a.y > (b.y + b.hauteur)) ||
        ((a.x + a.largeur) < b.x) ||
        (a.x > (b.x + b.largeur))
    );
}//Fonction Collision

function fonctionBougeLaser(intervalLaser, div_laser) {
    div_laser.style.top = parseInt(window.getComputedStyle(div_laser).top) - 100 + "px";
    div_laser.x = parseInt(div_laser.style.left);
    div_laser.y = parseInt(div_laser.style.top);
    div_laser.largeur = 10;
    div_laser.hauteur = 10;

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 7; j++) {
            div_mechant = document.getElementById("mechant" + i + j);
            if (div_mechant != null) {
                div_mechant.x = parseInt(div_mechant.style.left) + parseInt(mechantContainer.style.left);
                div_mechant.y = parseInt(div_mechant.style.top) + parseInt(mechantContainer.style.top);
                div_mechant.largeur = 80;
                div_mechant.hauteur = 80;
                if (isCollide(div_laser, div_mechant)) {
                    //div_laser.style.display = "none";
                    //div_mechant.style.display = "none";
                    fenetre.removeChild(div_laser);
                    clearInterval(intervalLaser);
                    mechantContainer.removeChild(div_mechant);
                }
            }
        }
    }
    if (parseInt(window.getComputedStyle(div_laser).top) < 0) {
        clearInterval(intervalLaser);
        fenetre.removeChild(div_laser);
    }
}//Fait avancer et gére la collition du laser

function fonctionLancerLaGame() {
    var button = document.getElementById("boutonJouer");
    button.setAttribute("id", "destructionBouton");
    var mechantContainer = document.createElement("section");
    mechantContainer.setAttribute("id", "mechantContainer");
    div_vaisseau = document.createElement("div");
    div_vaisseau.setAttribute("id", "vaisseau");
    div_vaisseau.setAttribute("class", "vaisseau");
    fenetre.append(div_vaisseau);
    fenetre.append(mechantContainer);
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 7; j++) {
            div_mechant = document.createElement("div");
            div_mechant.setAttribute("id", "mechant" + i + j);
            div_mechant.setAttribute("class", "mechant");
            div_mechant.style.left = j * 100 + 110 + "px";
            div_mechant.style.top = i * 100 + 110 + "px";
            mechantContainer.append(div_mechant);
        }
        div_mechant.style.left = 0 + "px";
    }
    var sens = "gauche";
    var intervalMob = setInterval(function () {
        sens = fonctionBougerMechant(intervalMob, mechantContainer, sens);
    }, 80);
}//Lance la game

function fonctionBougerMechant(intervalMob, mechantContainer, sens) {
    var mechantContainerTop = parseInt(mechantContainer.offsetTop);
    var mechantContainerLeft = parseInt(mechantContainer.offsetLeft);
    var longueurDeplacementHorizontal = 3;
    var longueurDeplacementVertical = 1;
    var nombreDeDeplacement = 100;

    mechantContainer.style.top = mechantContainerTop + longueurDeplacementVertical + "px";

    if (mechantContainerTop == fenetre.offsetHeight - 100) {
        clearInterval(intervalMob);
    }//Clean Interval

    if (sens == "gauche") {
        mechantContainer.style.left = mechantContainerLeft - longueurDeplacementHorizontal + "px";
        if (mechantContainerLeft <= 0) {
            sens = "droite"
        }
    }
    else if (sens == "droite") {
        mechantContainer.style.left = mechantContainerLeft + longueurDeplacementHorizontal + "px";
        if (mechantContainerLeft >= longueurDeplacementHorizontal * nombreDeDeplacement) {
            sens = "gauche";
        }
    }
    return sens;
}//Fait bouger les méchants

// function fonctionBougerMechant2() {
//     for (i = 0; i < 7; i++) {
//         for (var j = 0; j < 7; j++) {
//             var div_mechant = document.createElement('div');
//             div_mechant.style.top = 75 * j + "px";
//             div_mechant.style.left = 100 * i + "px";
//             document.getElementById("fenetre").append(div_mechant);
//         }
//     }
// }







function rectangle() {
    var intervalMissile;
    rectangle.style.left = div_vaisseau.style.left;
    rectangle.style.top = 800;
    rectangle.style.height = parseInt(rectangle.style.height) + 10 + "px";
    if (parseInt(rectangle.style.height) >= 800) {
        rectangle.style.display = 'none';
        clearInterval(intervalMissile);
    }
}





// function rectangle() {
//     rectangle.style.height = parseInt(rectangle.style.height) + 10 + "px";
//     if (parseInt(rectangle.style.height) >= 760) {
//         rectangle.style.display = 'none';
//         clearInterval(intervalMissile);
//     }
// }

function fonctionBougeRectangle(event) {
    rectangle.style.display = 'block';
    intervalMissile = setInterval(rectangle, 30);
}
    





















// function fonctionBougerMechant(intervalMob, mechantContainer) {
//     if (parseInt(window.getComputedStyle(mechantContainer).top) <= 800 ) {
//         if (parseInt(window.getComputedStyle(mechantContainer).left) >= 1200) {
//             mechantContainer.style.left = parseInt(window.getComputedStyle(mechantContainer).left) - 100 + "px"
//         }
//         if (parseInt(window.getComputedStyle(mechantContainer).top) >= parseInt(window.getComputedStyle(mechantContainer).top) + 100) {
//             mechantContainer.style.top = parseInt(window.getComputedStyle(mechantContainer).top) + 100 + "px"
//         }
//         if (parseInt(window.getComputedStyle(mechantContainer).left) <= 0) {
//             mechantContainer.style.left = parseInt(window.getComputedStyle(mechantContainer).left) + 100 + "px"
//         }
//         if (parseInt(window.getComputedStyle(mechantContainer).top) >= parseInt(window.getComputedStyle(mechantContainer).top) + 100) {
//             mechantContainer.style.top = parseInt(window.getComputedStyle(mechantContainer).top) + 100 + "px"
//         }
//     }
//     console.log(parseInt(mechantContainer.op));
//     if (mechantContainer.style.bottom == 0 + "px") {
//         clearInterval(intervalMob);
//     }
// }








