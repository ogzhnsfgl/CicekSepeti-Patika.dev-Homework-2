import { duckList } from './duck.js';
import { dogList } from './dog.js';
import '../scss/app.scss';

/* Required HTML Elements */
const animalList = [...dogList, ...duckList];
const cardsList = document.querySelector('.cards-list');

animalList.map((item, index) => {
  const card = document.createElement('div');
  // TODO: numberOfLegs e göre iki farklı inner HTML kur.
  const animal = item[`animal${index + 1}`];

  card.className = 'card';
  if (animal.numberOfLegs === 4) {
    card.innerHTML = `
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
    card.innerHTML = `
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

  cardsList.appendChild(card);
  return null;
});
