interface Animal {
    name: string;
    move(): void;
    eat(food: string): void;
}
//інтерфейс з двома властивостями: name, яка представляє ім'я тварини, і два методи: 
//move(), який повинен бути реалізований для того, щоб тварина могла пересуватися, і eat(food: string), який реалізований для того, щоб тварина могла їсти.

class Cat implements Animal {//немає додаткових властивостей
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is walking`);
    }

    eat(food: string) {
        console.log(`${this.name} is eating ${food}`);
    }
}

class Bird implements Animal {
    name: string;
    wingspan?: number; //додаткова властивість wingspan, яка є опціональною завдяки знаку питання

    constructor(name: string, wingspan?: number) {
        this.name = name;
        this.wingspan = wingspan;
    }

    move() {
        console.log(`${this.name} is flying`);
    }

    eat(food: string) {
        console.log(`${this.name} is eating ${food}`);
    }
}

class Fish implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is fast swimming`);
    }

    eat(food: string) {
        console.log(`${this.name} is eating ${food}`);
    }

    swim() {
        console.log(`${this.name} is swimming`); //немає додаткових властивостей, але є додатковий метод swim(), який можна викликати, якщо це необхідно
    }
}

const cat = new Cat('Tom');
cat.move(); // "Tom is walking"
cat.eat('fish'); // "Tom is eating fish"

const bird = new Bird('Kesha', 5);
bird.move(); // "Kesha is flying"
bird.eat('grain'); // "Kesha is eating grain"
console.log(bird.wingspan); // 5

const fish = new Fish('Fish');
fish.move(); // "Fish is fast swimming"
fish.eat('algae'); // "Fish is eating algae"
fish.swim(); // "Fish is swimming"

//пояснення про 5
//Значення 5 можна побачити на останній строці коду, де викликається метод console.log(bird.wingspan);. 
//В цьому випадку змінна bird є екземпляром класу Bird, який має додаткову властивість wingspan, 
//яка була передана як опціональний параметр при створенні екземпляра класу, і має значення 5. 
//Тому виклик методу console.log(bird.wingspan) виведе значення 5 у консоль.
