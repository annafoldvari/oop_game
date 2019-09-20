/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }

/**
* Display phrase on game board
*/
    addPhraseToDisplay() {

        const phraseDiv = document.getElementById('phrase');

        let phraseArray = this.phrase.split('');

        let ulElement = phraseDiv.getElementsByTagName('ul')[0];

        for (let i = 0; i < phraseArray.length; i++) {
            let character = phraseArray[i];
            if ( character === ' '){
            let spaceLiElement = document.createElement('li');
            spaceLiElement.className ='space';
            ulElement.appendChild(spaceLiElement);
            } else {
                let letterLiElement = document.createElement('li');
                letterLiElement.className = `hide letter ${character}`;
                ulElement.appendChild(letterLiElement);
            }
        }

    }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/    

    showMatchedLetter(letter) {
        document.querySelectorAll(`.${letter}`).forEach(element => {
            element.className = `show letter ${letter}` 
            element.textContent = letter;
        });
    }

}