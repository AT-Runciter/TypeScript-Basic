// file: classes.ts

//import { Animal, Dog, Cat } from './interfaces';
import * as animals from "./interfaces.js";

// Батьківський клас для тварин
export abstract class AnimalClass implements animals.Animal {
  constructor(
    public name: string,
    public age: number,
    public sound: string
  ) {}

  makeSound(): void {
    console.log(this.sound);
  }
}

// Клас для собак, який наслідується від AnimalClass і реалізує інтерфейс Dog
export class DogClass extends AnimalClass implements animals.Dog {
  constructor(
    public name: string,
    public age: number,
    public sound: string,
    public breed: string
  ) {
    super(name, age, sound);
  }

  feed(): void {
    console.log('Feeding ' + this.name + '...');
  }
}

// Клас для котів, який наслідується від AnimalClass і реалізує інтерфейс Cat
export class CatClass extends AnimalClass implements animals.Cat {
  constructor(
    public name: string,
    public age: number,
    public sound: string,
    public furColor: string
  ) {
    super(name, age, sound);
  }
}


//Тут імпортуються інтерфейси з першого файлу, а потім визначаємо два класи-нащадки - DogClass та CatClass.
//Клас AnimalClass є абстрактним класом, який реалізує інтерфейс Animal та містить загальний функціонал для всіх тварин. Метод makeSound() реалізується в класах-нащадках.
//Клас DogClass реалізує інтерфейс Dog та містить метод feed(), який реалізується в цьому класі.
//Клас CatClass реалізує інтерфейс Cat та містить додаткове поле furColor, яке описує колір шерсті кота.