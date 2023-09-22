const container = document.querySelector('main');

const teams = ["icon-corinthians", "icon-airbrush", "icon-dailymotion", "icon-photoscape", "icon-vite"]

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



let firstCard = ""
let secondCard = ""

const allCards = document.querySelectorAll('.card');

const revelCard = (card) => {
  card.classList.add("flipped")
}

const hideCard = (card) => {
  card.classList.remove("flipped")
}

allCards.forEach(card => {
  card.addEventListener("click", () => {
    revelCard(card)

    if (card.classList.contains("flipped")) {
      return
    } else {
      hideCard(card)
    }


  });
});
