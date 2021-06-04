class player{
    constructor(){}

getCount(){
    //get the game state value from database
    var playerCountRef  = database.ref('playerCount');
    playerCountRef.on("value",function(data){
        playerCount = data.val();
    });
}
    


updateCount(count){
    //save the game state back in database
    database.ref('/').update({
        playerCount: count
    });
}

update(name){
    var playerIndex = "player"+playerCount;
    database.ref(playerIndex).set({
        name:name
    })
}


}

