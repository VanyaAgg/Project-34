//Create variables here
var dog, happyDog, database, foodS, foodStock; 
function preload()
{
  dog= loadImage(" images/dogImg.png");
	happyDog= loadImage( "images/dogImg1.png" );
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(800,200,150,150);
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

 

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
    }
    else{
x = x-3;
    }
  
  database.ref('/').update({
    Food : x
  })
}



