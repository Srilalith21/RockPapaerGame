const userDiv = document.getElementById("user");
const computerDiv = document.getElementById("computer");

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

const userImage = document.createElement("img");
const computerImage = document.createElement("img");

const game_val = ["paper", "rock", "scissor"];
let bool_value = false;

function computerPlay() {
  let num = 0;
  while (true) {
    num = parseInt(Math.random() * 10);
    if (num > 0 && num < 4) {
      break;
    }
  }
  computerImage.alt = game_val[num - 1];
  return game_val[num - 1];
}

function validateScore(image_ind) {
  if (
    userImage.getAttribute("alt") == "rock" &&
    computerImage.getAttribute("alt") == "scissor"
  ) {
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
  } else if (
    userImage.getAttribute("alt") == "paper" &&
    computerImage.getAttribute("alt") == "rock"
  ) {
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
  } else if (
    userImage.getAttribute("alt") == "scissor" &&
    computerImage.getAttribute("alt") == "paper"
  ) {
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
  } else {
    if(userImage.getAttribute("alt") != computerImage.getAttribute("alt"))
      computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  }
}

function displayImage(image_value) {
  userImage.src = `./Images/${game_val[image_value]}.png`;
  userImage.alt = game_val[image_value];
  computerImage.src = `./Images/${computerPlay()}.png`;
  console.log(userImage, computerImage);

  bool_value = true;
  userDiv.appendChild(userImage);
  computerDiv.appendChild(computerImage);
  validateScore(image_value);
}

document.querySelectorAll("#image").forEach((element) => {
  element.addEventListener("click", () => {
    new Audio("./Audio/sound.mp3").play();
    displayImage(game_val.indexOf(element.getAttribute("alt")));
  });
});

document.getElementById("reset").addEventListener("click", () => {
  if (bool_value) {
    userDiv.removeChild(userImage);
    computerDiv.removeChild(computerImage);
  }
  userScore.innerHTML = "0";
  computerScore.innerHTML = "0";
  bool_value = false;
});
