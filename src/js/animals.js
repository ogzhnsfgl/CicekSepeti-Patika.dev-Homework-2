class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }
}

class Dog extends Animal {
  constructor(name, age, image, numberOfLegs) {
    super(name, image, (numberOfLegs = 4));
    this.age = age;
  }
}

class Duck extends Animal {
  constructor(name, age, image, numberOfLegs) {
    super(name, image, (numberOfLegs = 2));
    this.age = age;
  }
}

export const animalList = [
  { animal1: new Dog("MAX", 13, "../images/content/dog1.jfif") },
  { animal2: new Dog("COOPER", 9, "../images/content/dog2.jfif") },
  { animal3: new Dog("BEAR", 6, "../images/content/dog3.jfif") },
  { animal4: new Dog("MILO", 3, "../images/content/dog4.jfif") },
  { animal5: new Dog("BENTLEY", 2, "../images/content/dog5.jfif") },
  { animal6: new Dog("OLLIE", 1, "../images/content/dog6.jfif") },
  { animal7: new Dog("BUDDY", 4, "../images/content/dog7.jfif") },
  { animal8: new Dog("ROCKY", 5, "../images/content/dog8.jfif") },
  { animal9: new Duck("CASH", 3, "../images/content/duck1.jfif") },
  { animal10: new Duck("JASPER", 6, "../images/content/duck2.jfif") },
  { animal11: new Duck("BO", 5, "../images/content/duck3.jfif") },
  { animal12: new Duck("BOOMER", 4, "../images/content/duck4.jfif") },
  { animal13: new Duck("RUGER", 3, "../images/content/duck5.jfif") },
  { animal14: new Duck("BAXTER", 2, "../images/content/duck6.jfif") },
  { animal15: new Duck("BAXTER", 1, "../images/content/duck7.jfif") },
];
