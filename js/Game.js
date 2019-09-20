class Game {

   constructor() {  
     this.missed = 0;
     this.phrases = [new Phrase('A bunch of fives'), new Phrase('A different kettle of fish'), new Phrase('Get over it'), new Phrase('Labour of love'), new Phrase('Top dog')];
     this.activePhrase = null;
   } 

   /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */ 

    getRandomPhrase() {

        let randomNumber = Math.floor(Math.random() * this.phrases.length);

        return this.phrases[randomNumber];
    }
 
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */    

    checkForWin() {
        let letterLis = document.querySelectorAll('.letter');
        let showedLis = document.querySelectorAll('.show');

        return letterLis.length === showedLis.length;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */    

    removeLife() {

        let lifeImgs = document.querySelectorAll('#scoreboard li img');
        let element = lifeImgs[this.missed];
        element.setAttribute('src', 'images/lostHeart.png' )

        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver(false);
        }

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

    gameOver(gameWon) {
        let overlayDiv = document.getElementById('overlay');

        overlayDiv.style.display = 'block';
        
        if (document.querySelector('#overlay h1')) {
            document.querySelector('#overlay h1').remove();
        }

        let h1Element = document.createElement('h1');
        overlayDiv.appendChild(h1Element);   
        
        if(gameWon) {
           overlayDiv.className = 'win';             
           h1Element.textContent = 'Congratulations! You won!' 
        } else {
            overlayDiv.className = 'lose';             
            h1Element.textContent = 'Sorry. At this time you lost.'  
        }
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */

    handleInteraction(button) {
        button.setAttribute('disabled', 'true');
        let letter = button.textContent;

        if(this.activePhrase.checkLetter(letter)) {
            button.className = 'key chosen';
            this.activePhrase.showMatchedLetter(letter)
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.className = 'key wrong';
            this.removeLife(); 
        }
    } 

    /**
    * Resets the board
    */    
    
    resetBoard() {

        document.querySelector('#phrase ul').innerHTML = '';

        document.querySelectorAll('.key').forEach(element => {
            element.className = 'key';
            element.removeAttribute('disabled');
        });

        document.querySelectorAll('#scoreboard li img').forEach(element => {
            element.setAttribute('src', 'images/liveHeart.png');
        });

    }

}