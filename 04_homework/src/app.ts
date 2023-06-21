//import { Animal, Dog, Cat } from './interfaces.js';
//import { DogClass, CatClass } from './classes.js';

import * as animals from "./interfaces.js";
import * as classes from "./classes.js";

const myDog: animals.Dog = new classes.DogClass('Buddy', 3, 'Woof', 'Golden Retriever');
myDog.makeSound(); // Output: Woof
myDog.feed(); // Output: Feeding Buddy...

const myCat: animals.Cat = new classes.CatClass('Fluffy', 5, 'Meow', 'Gray');
myCat.makeSound(); // Output: Meow
console.log(myCat.furColor); // Output: Gray