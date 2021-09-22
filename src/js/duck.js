/* eslint-disable import/prefer-default-export */
import Animal from './animals';

class Duck extends Animal {
  constructor(name, age, image, numberOfLegs) {
    super(name, image, (numberOfLegs = 2));
    this.age = age;
  }
}

export const duckList = [
  { animal9: new Duck('CASH', 3, '../images/content/duck1.jfif') },
  { animal10: new Duck('JASPER', 6, '../images/content/duck2.jfif') },
  { animal11: new Duck('BO', 5, '../images/content/duck3.jfif') },
  { animal12: new Duck('BOOMER', 4, '../images/content/duck4.jfif') },
  { animal13: new Duck('RUGER', 3, '../images/content/duck5.jfif') },
  { animal14: new Duck('BAXTER', 2, '../images/content/duck6.jfif') },
  { animal15: new Duck('BAXTER', 1, '../images/content/duck7.jfif') },
];
