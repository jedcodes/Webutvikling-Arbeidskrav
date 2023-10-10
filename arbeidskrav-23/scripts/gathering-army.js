// IMPORTING MODULES
import ArmyModule from "./modules/ArmyModule.js";
import { resources } from "./utils/localStorage.js";

// HTML ELEMENTS
const resourceSection = document.querySelector(".resources");
const warriorSection = document.querySelector(".warriors");
const searchTerm = document.querySelector(".search__term");
const searchButton = document.querySelector(".search__btn");

// REUSEBLE FUNCTION THAT CREATES HTML ELEMENTS WITH BOOTSTRAP
const createCardElements = (data) => {
  return `
    <div class="card" style="width: 18rem;">
  <img src=${data.image} class="card-img-top" alt=${data.categoryName}>
  <div class="card-body">
    <h2 class="card-title">${data.categoryName}</h5>
    <h5>${data.priceGold}</h5>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>s
</div>
`;
};

const displayWarriorCards = () => {
  const cards = ArmyModule.getWarriors;

  let cardOutput = "";

  for (let card of cards) {
    cardOutput += createCardElements(card);
    warriorSection.innerHTML = cardOutput;
  }
};

displayWarriorCards();

const searchFilter = (term) => {
  const cards = ArmyModule.getWarriors;

  const filteredCard = cards.filter((card) => {
    return card.categoryName.toLowerCase() === term.toLowerCase();
  });

  let cardOutput = "";

  for (let card of filteredCard) {
    cardOutput += createCardElements(card);
    warriorSection.innerHTML = cardOutput;
  }
};

// EVENTS LISTNERS
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchFilter(searchTerm.value);
  searchTerm.value = "";
});
