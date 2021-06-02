//Create variables here
var dog, happyDog, database, foodS, foodStock; 
function preload()
{
  dog= loadImage("dogImg.png"/ images);
	happyDog= loadImage( "dogImg1.png" / images);
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock );
}


function draw() {  
background(46,139,87);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();

  foodStock.update(food);
    //add styles here

}

function readStock(data){
foodS.data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}



