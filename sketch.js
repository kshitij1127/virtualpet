//Create variables here
var dog,happydog,database,foodS,foodStock,dogimg,happydogimg,milkbottle,feed,addFood,food,lastFed

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg1.png")
  happydogimg = loadImage("images/dogImg.png")
  milkbottle = loadImage("images/Milk (1).png")
}

function setup() {
  createCanvas(1000, 1000)

  food = new Food()

  dog = createSprite(200,200)
  dog.addImage(dogimg)
  dog.scale = 0.3
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)

food.display()

feed = createButton("Feed The Dog")
feed.position(700,95)
feed.mousePressed(feedDog)


addFood = createButton("Add Food")
addFood.position(800,95)
addFood.mousePressed(addFoods)



//if(keyWentDown(UP_ARROW)){
 //writeStock(foodS)
 //dog.addImage(happydogimg)
//}


stroke(0,100,255)
strokeWeight(5)
text("food stock : " + foodS,50,50)
textSize(20)
stroke(255,0,0)
strokeWeight(7)
text("press the up arrow to feed the hungry dog !",10,300)
  drawSprites();
  //add styles here

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
  x = 0
  
  }else{
    x = x-1
  }
database.ref('/').update({
  Food : x
})

stroke(255,255,254)
strokeWeight(5)
textSize(15)
if(lastFed >= 12){
  text("last feed : " + lastFed%12 + "PM",350,30)
}else if(lastFed === 0){
  text("last feed : 12AM",350,30)
}else{
  text("last feed : " + lastFed + "AM",350,30)
}


fedTime = database.ref('FeedTime')
fedTime.on("value",function(data){
  lastFed = data.val();
})

}


function feedDog(){
dog.addImage(happydog)
foodobj.updateFoodStocks(foodobj.getFoodStock()-1)
}


function addFood(){
  foodS++
  database.ref('/').update({
    Food : foodS
  })

  
}



