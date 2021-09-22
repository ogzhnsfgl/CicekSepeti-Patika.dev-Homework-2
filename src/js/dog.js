import Animal from './animals';

class Dog extends Animal {
  constructor(name, age, image, numberOfLegs) {
    super(name, image, (numberOfLegs = 4));
    this.age = age;
  }
}

// eslint-disable-next-line import/prefer-default-export
export const dogList = [
  { animal1: new Dog('MAX', 13, '../images/content/dog1.jfif') },
  { animal2: new Dog('COOPER', 9, '../images/content/dog2.jfif') },
  { animal3: new Dog('BEAR', 6, '../images/content/dog3.jfif') },
  { animal4: new Dog('MILO', 3, '../images/content/dog4.jfif') },
  { animal5: new Dog('BENTLEY', 2, '../images/content/dog5.jfif') },
  { animal6: new Dog('OLLIE', 1, '../images/content/dog6.jfif') },
  { animal7: new Dog('BUDDY', 4, '../images/content/dog7.jfif') },
  { animal8: new Dog('ROCKY', 5, '../images/content/dog8.jfif') },
];
