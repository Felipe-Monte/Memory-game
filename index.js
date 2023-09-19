const container = document.querySelector('main');

function createCard() {
  return `
    <div class="card">
      <div class="front"></div>
      <div class="back"></div>
    </div>
  `;
}

let numberOfCards = 23;

for (let i = 0; i < numberOfCards; i++) {
  container.innerHTML += createCard();
}

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
