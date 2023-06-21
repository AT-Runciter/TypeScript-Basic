//import { Animal, Dog, Cat } from './interfaces.js';
//import { DogClass, CatClass } from './classes.js';
import * as classes from "./classes.js";
var myDog = new classes.DogClass('Buddy', 3, 'Woof', 'Golden Retriever');
myDog.makeSound(); // Output: Woof
myDog.feed(); // Output: Feeding Buddy...
var myCat = new classes.CatClass('Fluffy', 5, 'Meow', 'Gray');
myCat.makeSound(); // Output: Meow
console.log(myCat.furColor); // Output: Gray
