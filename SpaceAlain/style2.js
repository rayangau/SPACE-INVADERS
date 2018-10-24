var fond = document.getElementById("fond");
    fond.style.backgroundColor="black";
    fond.style.height="700px";
    fond.style.marginLeft="auto";
    fond.style.marginRight="auto";
    fond.style.width="1500px";
    fond.style.marginTop="25px";
    fond.style.position="relative";

var terrain = document.getElementById("terrain");
    terrain.style.backgroundColor="none";
    terrain.style.height="660px";
    terrain.style.width="1500px";

var carre = document.getElementById("carre");
    carre.style.backgroundColor="red";
    carre.style.height="5px";
    carre.style.width="5px";
    carre.style.left="45px";
    carre.style.position="absolute";
    carre.style.display="block";

var rectangle = document.getElementById("rectangle");
    rectangle.style.backgroundColor="blue";
    rectangle.style.height="40px";
    rectangle.style.width="100px";
    rectangle.style.position="absolute";
    rectangle.style.left="0";

var alien = document.getElementById("alien")
    alien.style.backgroundColor="none";
    alien.style.height="400px";
    alien.style.width="600px";
    alien.style.marginLeft="auto"
    alien.style.marginRight="auto"

var bricks= document.getElementById("bricks");
    bricks.style.backgroundColor = "red"
    bricks.style.height = "20px"
    bricks.style.width = "75px"
    bricks.style.left="50px";
    bricks.style.bottom="500px";
    bricks.style.position="absolute"; 
    bricks.style.display="block";



//var carre = {x: 0, y: 0, width: 5, height: 5}


// var carre = document.getElementById("carre");
//     carre.style.backgroundColor="blue";
//     carre.style.height="15px";
//     carre.style.width="15px";
//     carre.style.marginLeft="auto";
//     carre.style.marginRight="auto";

// var fond2 = document.getElementById("fond2");
//     fond2.style.backgroundColor="black";
//     fond2.style.height="40px";
//     fond2.style.width="1000px";
//     fond2.style.marginLeft="auto";
//     fond2.style.marginRight="auto";
//     fond2.style.width="1500px";
//     fond2.style.position="relative";

// var x = 50
// var y = 50



document.addEventListener("keydown", droite);
document.addEventListener("keydown", gauche);
function droite(e) {
    if(e.keyCode == 39){
        rectangle.style.left = parseInt (rectangle.style.left) +7 + "px";
        carre.style.left = parseInt (carre.style.left) +0 + "px";
    }
  }

function gauche(e) {
    if(e.keyCode == 37){
        rectangle.style.left = parseInt (rectangle.style.left) -7 + "px";
        carre.style.left = parseInt (carre.style.left) -0 + "px";
    }
}










carre.onclick = function () {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      carre.style.bottom = timePassed / +3 + "px";

      
        carre.x = parseInt(carre.style.left);
        carre.y = parseInt(carre.style.bottom);
        carre.width = 5;
        carre.height = 5;

        bricks.x = parseInt(bricks.style.left);
        bricks.y = parseInt(bricks.style.bottom);
        bricks.width = 75;
        bricks.height = 20;

        console.log(carre.x,carre.y,"carre");
        console.log(bricks.x,bricks.y,"bricks");
        if(isCollide(carre,bricks)) {
            carre.style.display = "none";
            bricks.style.display = "none";
            alert("collision");
        }
      if (timePassed > 2080) clearInterval(timer);
    }, 20);
  }


  function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}


//var carre = {x: 0, y: 0, width: 5, height: 5}




/*function isCollide(bricks, carre) {
    return !(
        ((bricks.y + bricks.height) < (carre.y)) ||
        (bricks.y > (carre.y + carre.height)) ||
        ((bricks.x + bricks.width) < carre.x) ||
        (bricks.x > (carre.x + carre.width))
    );*/

// function collisionDetection() {
//     for(var c=0; c<brickColumnCount; c++) {
//         for(var r=0; r<brickRowCount; r++) {
//             var b = bricks[c][r];
//             if(b.status == 1) {
//                 if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
//                     dy = -dy;
//                     b.status = 0;
//                     score++;
//                     if(score == brickRowCount*brickColumnCount) {
//                         alert("YOU WIN, CONGRATS!");
//                         document.location.reload();
//                     }
//                 }
//             }
//         }
//     }
// }

/*var bricks = {x: 0, y: 0, width: 75, height: 20}
var carre = {x: 0, y: 0, width: 5, height: 5}*/

