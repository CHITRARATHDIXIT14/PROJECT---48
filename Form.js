class Form {

constructor(){

this.title=createElement('h1')
this.button1=createButton("");

}

hide(){
this.button1.hide();
this.title.hide();
}


display(){
if(gameState===0){
background(0)

this.title.html("GAME OF TABLE")
this.title.position(500,50)
this.title.style('color',"#FB7A27")


this.button1 = createImg("sprites/play.png");
this.button1.position(700,350)


this.button1.mousePressed(()=>{
    gameState=1

})
}
}
}