import ArmyModule from "./modules/ArmyModule.js";
import ResourcesModule from "./modules/ResourcesModule.js";

console.log(ArmyModule.getTools);
// HTML ELEMENTS
const resourceSection = document.querySelector(".resources");
const warriorSection = document.querySelector(".warriors");

// REUSEBLE FUNCTION THAT CREATES HTML ELEMENTS WITH BOOTSTRAP
const createCardElements = (data) => {
  return `
    <div class="card" style="width: 18rem;">
  <img src=${data.image} class="card-img-top" alt=${data.categoryName}>
  <div class="card-body">
    <h2 class="card-title">${data.categoryName}</h5>
    <h5>${data.priceGold}</h5>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
</div>
`;
};

const dispayWarriorCards = () => {
  const cards = ArmyModule.getWarriors;

  let cardOutput = "";

  for (let card of cards) {
    cardOutput += createCardElements(card);
    warriorSection.innerHTML = cardOutput;
  }
};

dispayWarriorCards();
