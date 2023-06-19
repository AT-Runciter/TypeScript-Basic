"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
class Audi extends Car {
    constructor(model, year) {
        super('Audi', model, year);
    }
    start() {
        console.log('Audi is starting...');
    }
}
class BMW extends Car {
    constructor(model, year, color) {
        super('BMW', model, year);
        this.color = color;
    }
    start() {
        console.log(`Starting ${this.brand} ${this.model}...`);
    }
    stop() {
        console.log(`Stopping ${this.brand} ${this.model}...`);
    }
    drive() {
        console.log(`Driving ${this.brand} ${this.model}...`);
    }
}
class Mercedes extends Car {
    constructor(model, year, color) {
        super('Mercedes', model, year);
        this.color = color;
    }
    start() {
        console.log(`Starting ${this.brand} ${this.model}...`);
    }
    stop() {
        console.log(`Stopping ${this.brand} ${this.model}...`);
    }
    drive() {
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
