let game;


 document.getElementById('btn__reset').addEventListener('click', function(){
     game = new Game();
     game.resetBoard();
     game.startGame();

}); 

document.getElementById('qwerty').addEventListener('click', function(e){
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
     
}); 