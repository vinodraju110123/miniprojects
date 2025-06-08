const gameContainer = document.getElementById("game");
const triesText = document.getElementById("tries");

let tries = 0;
let firstCard = null;
let secondCard = null;
let lock = false;

let items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function startGame() {
  gameContainer.innerHTML = "";
  tries = 0;
  triesText.textContent = tries;
  firstCard = null;
  secondCard = null;
  lock = false;

  // Duplicate items to make pairs and shuffle
  let gameItems = [...items, ...items].sort(() => Math.random() - 0.5);

  gameItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.letter = item;
    card.textContent = ""; // hide letter
    card.addEventListener("click", () => flip(card));
    gameContainer.appendChild(card);
  });
}

function flip(card) {
  if (lock || card === firstCard || card.textContent) return;

  card.textContent = card.dataset.letter;

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    tries++;
    triesText.textContent = tries;

    if (firstCard.dataset.letter === secondCard.dataset.letter) {
      // Match found, leave them open
      firstCard = null;
      secondCard = null;
    } else {
      // Not a match, hide again after delay
      lock = true;
      setTimeout(() => {
        firstCard.textContent = "";
        secondCard.textContent = "";
        firstCard = null;
        secondCard = null;
        lock = false;
      }, 800);
    }
  }
}

// Start the game when page loads
startGame();
