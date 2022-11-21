function countdown() {
    var seconds = 60;
    function tick() {
      var counter = document.getElementById("timer");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        console.log("Game Lost");
        document.getElementById("game-score").innerText = gameScore;
        var modalLost = document.getElementById("myModalLost");
        modalLost.style.display = "block";
        pauseAllAudio();
      }
    }
    tick();
  }

// Global Variables (To be moved to the top of the page)
let randomCharacter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numOfCharacters = 9;
let gameScore = -1;
const bongo = document.getElementById("bongo-click-box");
const cello = document.getElementById("cello-click-box");
const childSing = document.getElementById("child-sing-click-box");
const drum = document.getElementById("drum-click-box");
const flute = document.getElementById("flute-click-box");
const guitar = document.getElementById("guitar-click-box");
const piano = document.getElementById("piano-click-box");
const trombone = document.getElementById("trombone-click-box");
const violin = document.getElementById("violin-click-box");

const bongoImg = document.getElementById("bongo-img");
const celloImg = document.getElementById("cello-img");
const childSingImg = document.getElementById("child-sing-img");
const drumImg = document.getElementById("drum-img");
const fluteImg = document.getElementById("flute-img");
const guitarImg = document.getElementById("guitar-img");
const pianoImg = document.getElementById("piano-img");
const tromboneImg = document.getElementById("trombone-img");
const violinImg = document.getElementById("violin-img");


/**
 * Removes all of the event listeners and makes Character Image invisible from the previous selection
 */
function resetCharacters() {

  bongo.removeEventListener('click', gamePlay);
  cello.removeEventListener('click', gamePlay);
  childSing.removeEventListener('click', gamePlay);
  drum.removeEventListener('click', gamePlay);
  flute.removeEventListener('click', gamePlay);
  guitar.removeEventListener('click', gamePlay);
  piano.removeEventListener('click', gamePlay);
  trombone.removeEventListener('click', gamePlay);
  violin.removeEventListener('click', gamePlay);

  bongoImg.classList.add("invisible");
  celloImg.classList.add("invisible");
  childSingImg.classList.add("invisible");
  drumImg.classList.add("invisible");
  fluteImg.classList.add("invisible");
  guitarImg.classList.add("invisible");
  pianoImg.classList.add("invisible");
  tromboneImg.classList.add("invisible");
  violinImg.classList.add("invisible");
}

// Audio files:
let bongoAudio = new Audio("../assets/audio/bongo.wav");
let celloAudio = new Audio("../assets/audio/cello.wav");
let childSingAudio = new Audio("../assets/audio/child-sing.wav");
let drumAudio = new Audio("../assets/audio/drum.wav");
let fluteAudio = new Audio("../assets/audio/flute.wav");
let guitarAudio = new Audio("../assets/audio/guitar.wav");
let pianoAudio = new Audio("../assets/audio/piano.wav");
let tromboneAudio = new Audio("../assets/audio/trombone.mp3");
let violinScaleAudio = new Audio("../assets/audio/violin-scale.wav");

/**
 * Pauses all of the audio.
 * Pauses the previous instrument before the next one is played
 * Pauses the audio when the game is won/lost
 */
function pauseAllAudio() {
  bongoAudio.pause();
  celloAudio.pause();
  childSingAudio.pause();
  drumAudio.pause();
  fluteAudio.pause();
  guitarAudio.pause();
  pianoAudio.pause();
  tromboneAudio.pause();
  violinScaleAudio.pause();
}

/**
 * Main Game Play Function
 * A random number is selected. 
 * This corresponds to an instrument in the switch.
 * This number is then removed from the randomCharacter array (so it can not be reselected)
 * The gamePlay function is re-run for another character to be guessed.
 */
function gamePlay() {

  resetCharacters();
  pauseAllAudio();
  gameScore++;

  let counter = document.getElementById("timer").innerHTML;
  
  if (randomCharacter.length !== 0) {
    if (counter !== "0:00") {

      let randomNum = Math.floor(Math.random() * numOfCharacters);
      let chosenCharacter = randomCharacter[randomNum];

      switch (chosenCharacter) {
          case 1:
              console.log("CASE 1: Bongo");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              bongoImg.classList.remove("invisible"); // Add an if statement for the toggling of these images
              bongoAudio.currentTime = 0;
              bongoAudio.play();
              bongoAudio.loop = true;
              bongo.addEventListener('click', gamePlay);
              break;
          case 2:
              console.log("CASE 2: Cello");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              celloImg.classList.remove("invisible");
              celloAudio.currentTime = 0;
              celloAudio.play();
              celloAudio.loop = true;
              cello.addEventListener('click', gamePlay);
              break;
          case 3:
              console.log("CASE 3: Sing");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              childSingImg.classList.remove("invisible");
              childSingAudio.currentTime = 0;
              childSingAudio.play();
              childSingAudio.loop = true;
              childSing.addEventListener('click', gamePlay);
              break;
          case 4:
              console.log("CASE 4: Drum");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              drumImg.classList.remove("invisible");
              drumAudio.currentTime = 0;
              drumAudio.play();
              drumAudio.loop = true;
              drum.addEventListener('click', gamePlay);
              break;
          case 5:
              console.log("CASE 5: Flute");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              fluteImg.classList.remove("invisible");
              fluteAudio.currentTime = 0;
              fluteAudio.play();
              fluteAudio.loop = true;
              flute.addEventListener('click', gamePlay);
              break;
          case 6:
              console.log("CASE 6: Guitar");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              guitarImg.classList.remove("invisible");
              guitarAudio.currentTime = 0;
              guitarAudio.play();
              guitarAudio.loop = true;
              guitar.addEventListener('click', gamePlay);
              break;
          case 7:
              console.log("CASE 7: Piano");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              pianoImg.classList.remove("invisible");
              pianoAudio.currentTime = 0;
              pianoAudio.play();
              pianoAudio.loop = true;
              piano.addEventListener('click', gamePlay);
              break;
          case 8:
              console.log("CASE 8: Trombone");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              tromboneImg.classList.remove("invisible");
              tromboneAudio.currentTime = 0;
              tromboneAudio.play();
              tromboneAudio.loop = true;
              trombone.addEventListener('click', gamePlay);
              break;
          case 9:
              console.log("CASE 9: Violin");
              randomCharacter.splice(randomNum, 1);
              numOfCharacters--;
              violinImg.classList.remove("invisible");
              violinScaleAudio.currentTime = 0;
              violinScaleAudio.play();
              violinScaleAudio.loop = true;
              violin.addEventListener('click', gamePlay);
              break;
      }
    } 
  } else {
    console.log("Game Won");
    document.getElementById("game-time").innerText = counter;
    var modalWon = document.getElementById("myModalWon");
    modalWon.style.display = "block";
    pauseAllAudio();
  }
}

let startBtn = document.getElementById('start-btn');
let audioToggler = document.getElementById('audio-toggler');
let muteAudio = localStorage.getItem('muteAudio');

window.addEventListener('DOMContentLoaded', (event) => { 
  toggleAudio();

  startBtn.addEventListener('click', function() {
    countdown();
    gamePlay();
    startBtn.classList.add("invisible");
  })
});

function toggleAudio() {
  if(muteAudio) {
    bongoAudio.volume = 0.1;
    celloAudio.volume = 0.1;
    childSingAudio.volume = 0.1;
    drumAudio.volume = 0.1;
    fluteAudio.volume = 0.04;
    guitarAudio.volume = 0.1;
    pianoAudio.volume = 0.1;
    tromboneAudio.volume = 0.1;
    violinScaleAudio.volume = 0.04;
    audioToggler.classList.remove('fa-volume-mute');
    audioToggler.classList.add('fa-volume-up');
    muteAudio = false;
    localStorage.setItem('muteAudio', false);
  } else {
    console.log('Muted');
    audioToggler.classList.remove('fa-volume-up');
    audioToggler.classList.add('fa-volume-mute');
    muteAudio = true;
    bongoAudio.volume = 0;
    celloAudio.volume = 0;
    childSingAudio.volume = 0;
    drumAudio.volume = 0;
    fluteAudio.volume = 0;
    guitarAudio.volume = 0;
    pianoAudio.volume = 0;
    tromboneAudio.volume = 0;
    violinScaleAudio.volume = 0;
    localStorage.setItem('muteAudio', true);
  }
}

audioToggler.addEventListener('click', toggleAudio);