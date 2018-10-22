var vaisseau = document.getElementById("vaisseau")

document.addEventListener("keydown", toucheFlechedroite);
document.addEventListener("keydown", toucheFlechegauche);



console.log(1)
vaisseau.style.position = "absolute";
vaisseau.style.bottom = "0px";
vaisseau.style.left = "0px";
vaisseau.style.height = "150px";

function toucheFlechedroite(event){
  console.log(1)
  if(event.keyCode == "39") {
   vaisseau.style.left = parseInt(vaisseau.style.left) + 10 + "px";
   rectangle.style.left = vaisseau.style.left;
  }
    };


function toucheFlechegauche(event){
  console.log(1)
  if(event.keyCode == "37") {
   vaisseau.style.left = parseInt(vaisseau.style.left) - 10 + "px";
   rectangle.style.left = vaisseau.style.left;
  }
    };

document.addEventListener("keydown", toucheEspace);

rectangle.style.height = "10px";
rectangle.style.width = "10px";
rectangle.style.position = "absolute";
rectangle.style.bottom = "150px";
rectangle.style.left = "140px";





//


function toucheEspace(){
 setInterval(bougeRectangle, 40);
}

function bougeRectangle() {
   rectangle.style.height = parseInt(rectangle.style.height) + 50 + "px";
}




console.log(1)
