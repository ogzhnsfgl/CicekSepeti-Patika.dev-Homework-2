/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import Animal from './animals';

class Duck extends Animal {
  constructor(name, age, image, numberOfLegs) {
    super(name, image, (numberOfLegs = 2));
    this.age = age;
  }
}
/* Create a list of ducks */
export const duckList = [
  { animal10: new Duck('CASH', 3, '../images/content/duck1.jfif') },
  { animal11: new Duck('JASPER', 6, '../images/content/duck2.jfif') },
  { animal12: new Duck('BO', 5, '../images/content/duck3.jfif') },
  { animal13: new Duck('BOOMER', 4, '../images/content/duck4.jfif') },
  { animal14: new Duck('RUGER', 3, '../images/content/duck5.jfif') },
  { animal15: new Duck('BAXTER', 2, '../images/content/duck6.jfif') },
  { animal16: new Duck('BAXTER', 1, '../images/content/duck7.jfif') },
];
