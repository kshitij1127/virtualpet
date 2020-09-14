class Food{
    constructor(){
    var foodStock
    var lastFed
    }

   
    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFoodStock(){

    }

    display(){
        this.milk = createSprite(10,100)
        this.milk.addImage(milkbottle)
        var x = 80,y = 100

        imageMode(CENTER)
        image(this.milk,720,220,70,70)

        if(this.foodStock != 0){
         for(var i = 0 ; i <this.foodStock ; i++){
             if(i%10 === 0){
              x = 80
              y = y+50
             }

             image(this.milk,x,y,50,50)
         }
        }
        
    } 
}