// file: instances.ts
//import { DogClass, CatClass } from './classes.js';
import * as pets from "./classes.js";

const dog = new pets.DogClass('Buddy', 3, 'Woof woof!', 'Golden Retriever');
const cat = new pets.CatClass('Whiskers', 2, 'Meow!', 'Gray');

dog.makeSound();
dog.feed();

cat.makeSound();

console.log(dog);
console.log(cat);