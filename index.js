const container = document.querySelector('main')

function createCard() {
  return `
    <div class="card">
      <div class="front"></div>
      <div class="back"></div>
    </div>
  `
}

container.innerHTML += createCard() + createCard() + createCard() + createCard() + createCard() + createCard() + createCard() + createCard() 
+ createCard() 

const allCards = document.querySelectorAll('.card')

allCards.forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = 'rotateY(180deg)'
  })
})
