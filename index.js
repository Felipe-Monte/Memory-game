const container = document.querySelector('main');

const teams = ["icon-corinthians", "icon-airbrush", "icon-dailymotion", "icon-photoscape", "icon-vite"]


function createCard() {
  let cardHTML = ""

  for (let i = 0; i < teams.length; i++) {
    cardHTML += `
    <div class="card">
      <div class="front"></div>
      <div class="back">
        <img src="assets/${teams[i]}.svg" alt="logo do time">
      </div>
    </div>
    `
  }

  return cardHTML
}

container.innerHTML += createCard() + createCard()




const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains('flipped')) {
      card.classList.remove('flipped');
    } else {
      card.classList.add('flipped');
    }
  });
});
