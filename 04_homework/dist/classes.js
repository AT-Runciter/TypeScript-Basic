// file: classes.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Батьківський клас для тварин
var AnimalClass = /** @class */ (function () {
    function AnimalClass(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    AnimalClass.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return AnimalClass;
}());
export { AnimalClass };
// Клас для собак, який наслідується від AnimalClass і реалізує інтерфейс Dog
var DogClass = /** @class */ (function (_super) {
    __extends(DogClass, _super);
    function DogClass(name, age, sound, breed) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.name = name;
        _this.age = age;
        _this.sound = sound;
        _this.breed = breed;
        return _this;
    }
    DogClass.prototype.feed = function () {
        console.log('Feeding ' + this.name + '...');
    };
    return DogClass;
}(AnimalClass));
export { DogClass };
// Клас для котів, який наслідується від AnimalClass і реалізує інтерфейс Cat
var CatClass = /** @class */ (function (_super) {
    __extends(CatClass, _super);
    function CatClass(name, age, sound, furColor) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.name = name;
        _this.age = age;
        _this.sound = sound;
        _this.furColor = furColor;
        return _this;
    }
    return CatClass;
}(AnimalClass));
export { CatClass };
//Тут імпортуються інтерфейси з першого файлу, а потім визначаємо два класи-нащадки - DogClass та CatClass.
//Клас AnimalClass є абстрактним класом, який реалізує інтерфейс Animal та містить загальний функціонал для всіх тварин. Метод makeSound() реалізується в класах-нащадках.
//Клас DogClass реалізує інтерфейс Dog та містить метод feed(), який реалізується в цьому класі.
//Клас CatClass реалізує інтерфейс Cat та містить додаткове поле furColor, яке описує колір шерсті кота.
