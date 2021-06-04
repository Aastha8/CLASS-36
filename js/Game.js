class Game{
    constructor(){}

getState(){
    //get the game state value from database
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
}
    


update(state){
    //save the game state back in database
    database.ref('/').update({
        gameState: state
    });
}

start(){

if(gameState === 0){
    player = new player();
    player.getCount();
    form = new Form();
    form.display();
}

}

}