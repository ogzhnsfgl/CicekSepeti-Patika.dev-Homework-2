import { duckList } from './duck.js';
import { dogList } from './dog.js';
import '../scss/app.scss';

/* Required HTML Elements */
const cardsList = document.querySelector('.cards-list');
/* Merge duckList and DogList */
const animalList = [...dogList, ...duckList];

animalList.map((item, index) => {
  const animal = item[`animal${index + 1}`];
  /* Create Card Element */
  const cards = document.createElement('div');
  cards.className = 'card';
  /* Check animal type to set paw image */
  if (animal.numberOfLegs === 4) {
    cards.innerHTML += `
              <div class="card-image">
                <img src=${animal.image} alt="animal1" />
              </div>
              <div class="card-body">
                <div class="card-body-title">
                <p>${animal.name}</p>
                </div>
                <div class="card-body-text">${animal.age}</div>
                </div>
                <div class="card-body-paw"><img src="../images/content/dog-paw.png" alt="" /></div>
            `;
  } else {
    cards.innerHTML += `
              <div class="card-image">
                <img src=${animal.image} alt="animal1" />
              </div>
              <div class="card-body">
                <div class="card-body-title">
                <p>${animal.name}</p>
                </div>
                <div class="card-body-text">${animal.age}</div>
                </div>
                <div class="card-body-paw"><img src="../images/content/duck-paw.png" alt="" /></div>
            `;
  }
  /* Append card item into cardList */
  cardsList.appendChild(cards);
});
