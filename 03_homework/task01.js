var Dictionary = /** @class */ (function () {
    function Dictionary() {
        // поле _terms хранит пары ключ-значение словаря в виде объекта типа Map
        this._terms = new Map();
    }
    // метод для добавления новой записи в словарь
    Dictionary.prototype.add = function (key, value, description) {
        this._terms.set(key, { value: value, description: description });
    };
    // метод для получения записи по ключу
    Dictionary.prototype.get = function (key) {
        var term = this._terms.get(key);
        return term ? term.value : undefined;
    };
    // метод для получения описания записи по ключу
    Dictionary.prototype.getDescription = function (key) {
        var term = this._terms.get(key);
        return term ? term.description : undefined;
    };
    // метод для удаления записи по ключу
    Dictionary.prototype.remove = function (key) {
        this._terms.delete(key);
    };
    // метод для проверки наличия записи в словаре по ключу
    Dictionary.prototype.containsKey = function (key) {
        return this._terms.has(key);
    };
    // метод для получения всех ключей словаря
    Dictionary.prototype.keys = function () {
        return Array.from(this._terms.keys());
    };
    // метод для получения всех значений словаря
    Dictionary.prototype.values = function () {
        return Array.from(this._terms.values()).map(function (term) { return term.value; });
    };
    // метод для получения всех записей словаря
    Dictionary.prototype.entries = function () {
        return Array.from(this._terms.entries()).map(function (_a) {
            var key = _a[0], term = _a[1];
            return [key, term.value, term.description];
        });
    };
    // метод для получения количества записей в словаре
    Dictionary.prototype.size = function () {
        return this._terms.size;
    };
    return Dictionary;
}());
//вывод информации
// создаем новый объект словаря
var myDict = new Dictionary();
// добавляем записи
myDict.add(1, "apple", true);
myDict.add(2, "banana", false);
myDict.add(3, "orange", true);
// выводим все записи в консоль
console.log(myDict.entries());
// получаем значение по ключу и выводим его в консоль
console.log(myDict.get(1));
// проверяем наличие записи в словаре и выводим результат в консоль
console.log(myDict.containsKey(2));
// удаляем запись из словаря
myDict.remove(3);
// выводим количество записей в словаре в консоль
console.log(myDict.size());
