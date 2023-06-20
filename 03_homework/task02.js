// Создайте экземпляр класса, в конструктор которого пользователь будет передавать строковые значения. 
// Установите в классе метод для определения функции генератора, 
// которая на каждом значении в свойствах класса устанавливает yield. 
// При вызове данной функции из класса проверьте все значения, 
// введенные пользователем и остановите перебор – в случае если пользователь ввел числовое значение. Ошибку выведите в консоль.
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Класс MyGenerator имеет метод generateWithYield, который определяет функцию-генератор, 
//на каждом значении в свойствах класса устанавливает yield, и в случае определения числового значения генератор выбрасывает ошибку
var MyGenerator = /** @class */ (function () {
    //Конструктор класса MyGenerator принимает произвольное количество строковых значений и сохраняет их в свойстве values.
    function MyGenerator() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.values = values;
    }
    //Метод generate() создает новый массив строк result, проходится по всем значениям в свойстве values, проверяет, является ли текущее значение числом, и если не является, добавляет его в массив result. 
    //Если же текущее значение является числом, генерируется ошибка типа Error. В конце метод возвращает массив result.
    MyGenerator.prototype.generate = function () {
        console.log("Starting generator");
        var result = [];
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var value = _a[_i];
            console.log("Processing value: ".concat(value));
            var numValue = Number(value);
            if (!isNaN(numValue)) {
                throw new Error("".concat(value, " is not a string"));
            }
            else {
                result.push(value);
            }
        }
        return result;
    };
    //Метод generateWithYield() определен как функция-генератор с типом возвращаемого значения Generator<string>. 
    //Он проходится по всем значениям в свойстве values, проверяет, является ли текущее значение числом, и если не является, возвращает его через ключевое слово yield. 
    //Если же текущее значение является числом, генерируется ошибка типа Error.
    MyGenerator.prototype.generateWithYield = function () {
        var _i, _a, value, numValue;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Starting generator with yield");
                    _i = 0, _a = this.values;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    value = _a[_i];
                    console.log("Processing value: ".concat(value));
                    numValue = Number(value);
                    if (!!isNaN(numValue)) return [3 /*break*/, 2];
                    throw new Error("".concat(value, " is not a string"));
                case 2: return [4 /*yield*/, value];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    };
    return MyGenerator;
}());
//Функция test() создает экземпляр класса MyGenerator с передачей в конструктор строковых значений. 
//Затем функция вызывает метод generate() и выводит в консоль результат, а затем вызывает метод generateWithYield() и выводит в консоль результат. 
//Если при выполнении методов происходит ошибка типа Error, функция перехватывает ее и выводит ее сообщение в консоль.
function test() {
    try {
        var generator = new MyGenerator("one", "two", "three", "4", "five");
        var values = generator.generate();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            console.log(value);
        }
        var generatorWithYield = generator.generateWithYield();
        for (var _a = 0, generatorWithYield_1 = generatorWithYield; _a < generatorWithYield_1.length; _a++) {
            var value = generatorWithYield_1[_a];
            console.log(value);
        }
    }
    catch (e) {
        if (typeof e === "string") {
            console.log(e);
        }
        else {
            console.error(e);
        }
    }
}
test();
