// Array to hold key selections 
const keyPadArr = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z"
]
//Array to hold answers for Name category  
const nameArr = [
    "luffy",
    "ace",
    "garp",
    "dragon",
    "sabo"
]

//Select play button from CSS and remove when clicked 
//Display text lines and keypad
const playGame = document.querySelector(".play-button");
const startText = document.querySelector(".start-game");
const textDisplay = document.querySelector(".text-line");
const keyPad = document.querySelector(".keypad");
const keyPadButtons = document.querySelectorAll(".buttonEL")
const angryLuffyContainer = document.querySelector(".Angry-Luffy-Container")

// declare varible to store random word 
let selectedWrd;

//1.
//Start game by clicking pplay button and removing it from display 
//Then display keyPad
playGame.addEventListener("click", function (evt) {
    playGame.style.display = "none";
    startText.style.display = "none";
    textDisplay.style.display = "flex";
    keyPad.style.display = "inline-block";
  });
  
  //2.
  //Select a random name from nameArr 
  let secretWrd = function(name) {
      return nameArr[(Math.floor(Math.random() * nameArr.length))].split("");
  }
  selectedWrd = secretWrd();
  
selectedWrd.forEach((letter, idx) => {
    let letterEL = document.createElement("div");
    letterEL.classList.add("selected")
    letterEL.setAttribute("id", idx)
    // letterEL.innerHTML = letter;
    // console.log(letter + "This is the letter")
    textDisplay.appendChild(letterEL) 
    // letterEL.style.display = "inline"
    letterEL.style.borderBottom = "2px black solid"
    letterEL.style.margin = "5px";
    letterEL.style.width = "10px";
    // letterEL.style.opacity = "0"

     ///

    keyPadButtons.forEach((button)=> {
    button.addEventListener("click", function (evt ){
        if(keyPadButtons.button === evt.innerText) {
            button.style.opacity = "20%"    
    }    
    }) 
  });
})



//3. 
//Create function to compare selcted letters to selected word 
let lettersRemaining = selectedWrd.length
let turnsRemaining = 5;
const compareLetters = function(evt) {  
    //Get Dom elements from keyPad
    const selectedLetter = evt.target.innerText;

// if the word includes a letter selected(the selectedLetter var) from keyPad
//iterate over the selectedWrd 

    if(selectedWrd.includes(selectedLetter)) {
        selectedWrd.forEach((letter, idx) => {
            let correctLetter = document.getElementById(idx);
            if(letter.toLowerCase() == selectedLetter.toLowerCase()) {
                correctLetter.innerHTML = selectedLetter;
            }
            
        }) 
        console.log(lettersRemaining)
        lettersRemaining--
        console.log(lettersRemaining)
        if (lettersRemaining === 0) {
            alert("Player Wins!")
        }
    } else  {
        
        const angryLuffy = document.createElement("img")
        angryLuffy.src = "./Angry-Luffy.png";
        angryLuffyContainer.appendChild(angryLuffy) 
        turnsRemaining--
        if (turnsRemaining === 0) {
            //message.innerText="" //with creating a div 
            alert("Player Loses! :( ")
        }
    }
    
}

keyPadButtons.forEach((button)=> {
    button.addEventListener("click", compareLetters)
      
  });








///
//  keyPadButtons.forEach((button)=> {
//     button.addEventListener("click", function (evt ){
//         if(keyPadButtons.button === evt.innerText) {
//             button.style.opacity = "20%"
//             // selectedWrd.innerText.style.opacity = "100%"



//         }     
//     }) 
//   });

///







//     keyPadLetters.forEach(letter => {
//         if(keyPadArr.includes(letter)) {
//             clickedLetter.push(letter)
//         } else {
//             console.log(`letter ${letter} is not in the array`)
//         }
//     })
//     console.log(clickedLetter);
// }


// keyPadButton.addEventListener("click", compareLetters);
// console.log(keyPadButton);





//Asign secretWrd to keypad selection
//If true display letter and add a border line under letter 

// const letterChoice = keyPadArr.forEach(letter => { 
//     console.log(letter);   
//     });


// keyPad.addEventListener("click", function (evt) {
//     keyPadArr.forEach(letter => { 
//         if (keyPadArr[letter] === secretWrd) {
//             // keyPadArr.style = border
//             console.log(keyPadArr[letter], "This letter is clicked")
//           } 

         
//         });
// });