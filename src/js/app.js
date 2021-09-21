import { animalList } from "./animals.js";
import "../scss/app.scss";

/* Required HTML Elements */
const cardsList = document.querySelector(".cards-list");
console.log(cardsList);

animalList.map((item, index) => {
  console.log(item);

  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
              <div class="card-image">
                <img src=${item[`animal${index + 1}`].image} alt="animal1" />
              </div>
              <div class="card-body">
                <div class="card-body-title">
                <p>${item[`animal${index + 1}`].name}</p>
                </div>
                <div class="card-body-text">${
                  item[`animal${index + 1}`].age
                }</div>
              </div>
            `;

  cardsList.appendChild(card);
});
