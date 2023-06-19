abstract class Car {
    constructor(public brand: string, protected model: string, private year: number) {}
  
    abstract start(): void;
  
    getInfo(): void {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
  }
  
  class Audi extends Car {
    constructor(model: string, year: number) {
      super('Audi', model, year);
    }
  
    start(): void {
      console.log('Audi is starting...');
    }
  }
  
  class BMW extends Car {
    constructor(model: string, year: number, protected color: string) {
      super('BMW', model, year);
    }
  
    start(): void {
      console.log(`Starting ${this.brand} ${this.model}...`);
    }
  
    protected stop(): void {
      console.log(`Stopping ${this.brand} ${this.model}...`);
    }
  
    private drive(): void {
      console.log(`Driving ${this.brand} ${this.model}...`);
    }
  }
  
  class Mercedes extends Car {
    constructor(model: string, year: number, protected color: string) {
      super('Mercedes', model, year);
    }
  
    start(): void {
      console.log(`Starting ${this.brand} ${this.model}...`);
    }
  
    protected stop(): void {
      console.log(`Stopping ${this.brand} ${this.model}...`);
    }
  
    private drive(): void {
      console.log(`Driving ${this.brand} ${this.model}...`);
    }
  }
  
  const audiA4 = new Audi('A4', 2022);
  const audiQ5 = new Audi('Q5', 2021);
  
  const bmwX5 = new BMW('X5', 2020, 'black');
  const bmwM5 = new BMW('M5', 2022, 'white');
  
  const mercedesC300 = new Mercedes('C300', 2023, 'blue');
  const mercedesS500 = new Mercedes('S500', 2021, 'silver');
  
  audiA4.getInfo(); // Brand: Audi, Model: A4, Year: 2022
  audiA4.start(); // Audi is starting...
  
  bmwX5.getInfo(); // Brand: BMW, Model: X5, Year: 2020
  bmwX5.start(); // Starting BMW X5...
  
  mercedesS500.getInfo(); // Brand: Mercedes, Model: S500, Year: 2021
  mercedesS500.start(); // Starting Mercedes S500...