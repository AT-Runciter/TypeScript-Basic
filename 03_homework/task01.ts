//Создать словарь собственных определений, используя Generic function. Внутри должно быть
//определение для 3 свойств – ключ, значение, описание (различных типов данных). Для получения или
//записи использовать get/set реализацию доступа. Также для полей нужно использовать модификаторы
//доступа (на Ваш выбор). В итоге должен получится словарь терминов, принимающий на входящий
//параметр различные типы данных для реализации.

class Dictionary<TKey, TValue, TDescription> {
    // поле _terms хранит пары ключ-значение словаря в виде объекта типа Map
    private _terms: Map<TKey, { value: TValue; description: TDescription }> = new Map();

    // метод для добавления новой записи в словарь
    public add(key: TKey, value: TValue, description: TDescription): void {
        this._terms.set(key, { value, description });
    }

    // метод для получения записи по ключу
    public get(key: TKey): TValue | undefined {
        const term = this._terms.get(key);
        return term ? term.value : undefined;
    }

    // метод для получения описания записи по ключу
    public getDescription(key: TKey): TDescription | undefined {
        const term = this._terms.get(key);
        return term ? term.description : undefined;
    }

    // метод для удаления записи по ключу
    public remove(key: TKey): void {
        this._terms.delete(key);
    }

    // метод для проверки наличия записи в словаре по ключу
    public containsKey(key: TKey): boolean {
        return this._terms.has(key);
    }

    // метод для получения всех ключей словаря
    public keys(): TKey[] {
        return Array.from(this._terms.keys());
    }

    // метод для получения всех значений словаря
    public values(): TValue[] {
        return Array.from(this._terms.values()).map((term) => term.value);
    }

    // метод для получения всех записей словаря
    public entries(): [TKey, TValue, TDescription][] {
        return Array.from(this._terms.entries()).map(([key, term]) => [key, term.value, term.description]);
    }

    // метод для получения количества записей в словаре
    public size(): number {
        return this._terms.size;
    }
}


//вывод информации

// создаем новый объект словаря
const myDict = new Dictionary<number, string, boolean>();

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

