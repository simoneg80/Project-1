// Array to hold key selections 
const keyPadArr = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z",
]
//Array to hold answers for Name category  
const nameArr = [
    "luffy",
    "ace",
    "garp",
    "dragon",
    "sabo",
    "zoro",
    "usopp",
    "robin",
    "nami",
    "brook",
    "franky",
    "sanji",
    "chopper"   
]
//Declare elements from css
const playGame = document.querySelector(".play-button");
const startText = document.querySelector(".start-game");
const textDisplay = document.querySelector(".text-line");
const keyPad = document.querySelector(".keypad");
const keyPadButtons = document.querySelectorAll(".buttonEL")
const angryLuffyContainer = document.querySelector(".Angry-Luffy-Container")
const gameBoard = document.querySelector(".Game")
const messageBoard = document.querySelector(".messageBoard")

// declare varible to store random word 
let selectedWrd;

//Start game by clicking pplay button and removing it from display 
//Then display keyPad
playGame.addEventListener("click", function (evt) {
    playGame.style.display = "none";
    startText.style.display = "none";
    textDisplay.style.display = "flex";
    keyPad.style.display = "inline-block";
  });
  
  //Select a random name from nameArr 
  let secretWrd = function(name) {
      return nameArr[(Math.floor(Math.random() * nameArr.length))].split("");
  }
selectedWrd = secretWrd();

//Iterate over secret word to isolate each letter and add styling  
selectedWrd.forEach((letter, idx) => {
    let letterEL = document.createElement("div");
    letterEL.classList.add("selected")
    letterEL.setAttribute("id", idx)
    textDisplay.appendChild(letterEL) 
    letterEL.style.borderBottom = "2px black solid"
    letterEL.style.margin = "5px";
    letterEL.style.width = "10px";

     //Add event listener to for when a key on the key pad is clicked 
    keyPadButtons.forEach((button)=> {
    button.addEventListener("click", function (evt ){
        if(keyPadButtons.button === evt.innerText && gameOver === false) {
            button.style.opacity = "20%"    
        }    
    }) 
  });
})

//Declare game's current status 
//Declare how many letters are remaining 
let gameOver = false;
let lettersRemaining = selectedWrd.length
let turnsRemaining = 5;

//Create function to compare selcted letters to selected word 
const compareLetters = function(evt) { 
    if(gameOver === true) return;
    //Get Dom elements from keyPad
    const selectedLetter = evt.target.innerText;

    //If the word includes a letter selected(the selectedLetter var), from keyPad
    //iterate over the selectedWrd 
    if(selectedWrd.includes(selectedLetter)) {
        selectedWrd.forEach((letter, idx) => {
            let correctLetter = document.getElementById(idx);
            if(letter.toLowerCase() == selectedLetter.toLowerCase()) {
                correctLetter.innerHTML = selectedLetter;
            }  
        }) 
        //Reduce letter remaining
        //If letters remaing qual zero the word is complete and player wins
        
        lettersRemaining--
        if (lettersRemaining === 0) {
            messageBoard.innerHTML = "Player Wins!"
            gameOver = true;
        }
    } else  { //Else if turn remaining equal zero player loses
        //Set "Angry Luffy" photo to appear for wrong guesses 
        const angryLuffy = document.createElement("img")
        angryLuffy.src = "./Angry-Luffy.png";
        angryLuffyContainer.appendChild(angryLuffy) 
        turnsRemaining--
        if (turnsRemaining === 0) {
            messageBoard.innerHTML = "Player Loses!"
            gameOver = true;   
        }  
    }
    //if game ends create a play again button and reload the page
    if(gameOver) {
        console.log("game over")
        const playAgainBtn = document.createElement("button")
        playAgainBtn.textContent = "Play Again"
        gameBoard.appendChild(playAgainBtn)
        playAgainBtn.addEventListener("click", function () {
            window.location.reload()
        })
    } 
}
//when key is clicked compare/match letter in array with key inner text 
keyPadButtons.forEach((button)=> {
    button.addEventListener("click", compareLetters) 
  });

