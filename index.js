const container = document.querySelector('main');


const teams = ["bahia", "botafogo", "bragantino", "corinthians", "flamengo", "fluminense", "gremio", "palmeiras", "santos", "sao-paulo"]

const teamsMultiplied = [...teams, ...teams]

const teamsSorted = teamsMultiplied.sort(() => Math.random() - 0.5);

const createCard = () => {
  let cardHTML = ""

  for (let i = 0; i < teamsSorted.length; i++) {
    cardHTML += `
    <div class="card" data-name=${teamsSorted[i]}>
      <div class="front"></div>
      <div class="back">
      <img src="assets/${teamsSorted[i]}.svg" alt="logo do time">
      </div>
      </div>
    `
  }

  return cardHTML
}

container.innerHTML += createCard()

const allCards = document.querySelectorAll('.card');

const revelCard = (card) => {
  card.classList.add("flipped")
}

const hideCard = (card) => {
  card.classList.remove("flipped")
}

let firstCard = ""
let secondCard = ""

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".flipped")

  if (disabledCards.length === 20) {
    alert("Parabéns você acertou todos!")
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-name")
  const secondCharacter = secondCard.getAttribute("data-name")

  if (firstCharacter === secondCharacter) {

    firstCard = ""
    secondCard = ""

    checkEndGame()

  } else {
    setTimeout(() => {

      firstCard.classList.remove("flipped")
      secondCard.classList.remove("flipped")

      firstCard = ""
      secondCard = ""

    }, 500)
  }
}

allCards.forEach(card => {
  card.addEventListener("click", () => {

    if (card.classList.contains("flipped")) {
      return
    }

    if (firstCard === "") {
      revelCard(card)
      firstCard = card

    } else if (secondCard === "") {
      revelCard(card)
      secondCard = card

      checkCards()
    }
  });
});
