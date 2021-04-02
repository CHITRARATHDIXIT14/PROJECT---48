class Board {

constructor(){


                                  



}


display(){





}



level(){

form.button1.hide();

//level1
level1=createSprite(150,300)
level2=createSprite(350,300)
level3=createSprite(550,300)
level4=createSprite(750,300)
level5=createSprite(950,300)
boss=createSprite(1150,300)

//level2
level6=createSprite(150,550)
level7=createSprite(350,550)
level8=createSprite(550,550)
level9=createSprite(750,550)
level10=createSprite(950,550)
boss1=createSprite(1150,550)

if(mousePressedOver(level1)){
    gameState=2;

}


drawSprites();
}

}