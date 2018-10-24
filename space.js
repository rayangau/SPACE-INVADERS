var vaisseau = document.getElementById("vaisseau");
var rectangle = document.getElementById("rectangle");

document.addEventListener("keydown", toucheFlechedroite);
document.addEventListener("keydown", toucheFlechegauche);




// vaisseau.style.position = "absolute";
vaisseau.style.bottom = "0px";
vaisseau.style.left = "0px";
vaisseau.style.height = "150px";

function toucheFlechedroite(event){
/*  console.log(1)
*/  if(event.keyCode == "39") {
   vaisseau.style.left = parseInt(vaisseau.style.left) + 10 + "px";
   rectangle.style.left = vaisseau.style.left;
  }
    };


function toucheFlechegauche(event){
/*  console.log(1)
*/  if(event.keyCode == "37") {
   vaisseau.style.left = parseInt(vaisseau.style.left) - 10 + "px";
   rectangle.style.left = vaisseau.style.left;
  }
    };

document.addEventListener("keydown", toucheEspace);

rectangle.style.height = "0px";
rectangle.style.width = "10px";
rectangle.style.position = "absolute";
rectangle.style.bottom = "150px";
rectangle.style.left = "240px";
console.log(1)

var intervalMissile;
function bougeRectangle() {
  console.log(2)
   rectangle.style.height = parseInt(rectangle.style.height) + 10 + "px";
   if(parseInt(rectangle.style.height) >= 760)  {
      rectangle.style.display = 'none';
      clearInterval(intervalMissile);
    }
  }



function toucheEspace(event){
  if(event.keyCode =="32") {
    rectangle.style.display = 'block';

    intervalMissile = setInterval(bougeRectangle, 30);
  }
console.log(3)

}
var block1=document.getElementById('block1')

block1.style.width ='100px';
 block1.style.height = '50px';
block1.style.position = 'absolute';
 block1.style.top = '20px';
 block1.style.left = '100px';
 block1.style.backgroundColor = 'white';

var block2=document.getElementById('block2')

block2.style.width ='100px';
block2.style.height = '50px';
block2.style.position = 'absolute';
block2.style.top = '20px';
block2.style.left = '300px';
block2.style.backgroundColor = 'white';

var block3=document.getElementById('block3')

block3.style.width ='100px';
block3.style.height = '50px';
block3.style.position = 'absolute';
block3.style.top = '20px';
block3.style.left = '500px';
block3.style.backgroundColor = 'white';

var block4=document.getElementById('block4')

block4.style.width ='100px';
block4.style.height = '50px';
block4.style.position = 'absolute';
block4.style.top = '20px';
block4.style.left = '700px';
block4.style.backgroundColor = 'white';





var block = document.getElementById('block');

block.style.position= "relative";
block.style.top = '1px';
block.style.left = '150px';
block.style.border = '1px solid white';
block.style.height = '100px';
block.style.width = '900px'


var transInterval;
 function droite(){
   block.style.left = parseInt(block.style.left) + 10 + "px";
if(parseInt(block.style.left) >= 1000) {
  clearInterval(transInterval);
     block.style.top = parseInt(block.style.top) + 100 + "px";
  setTimeout(function(){
    transInterval=setInterval(gauche, 500);
  },500);

  };

}
function gauche(){
 block.style.left = parseInt(block.style.left) - 10 + "px";
 if(parseInt(block.style.left) <= 0) {
  clearInterval(transInterval);
  block.style.top = parseInt(block.style.top) + 100 + "px";
  setTimeout(function(){
    transInterval=setInterval(droite, 500);
  },500);
}
};
transInterval=setInterval(gauche, 500);

























