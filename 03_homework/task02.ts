// Создайте экземпляр класса, в конструктор которого пользователь будет передавать строковые значения. 
// Установите в классе метод для определения функции генератора, 
// которая на каждом значении в свойствах класса устанавливает yield. 
// При вызове данной функции из класса проверьте все значения, 
// введенные пользователем и остановите перебор – в случае если пользователь ввел числовое значение. Ошибку выведите в консоль.


//Класс MyGenerator имеет метод generateWithYield, который определяет функцию-генератор, 
//на каждом значении в свойствах класса устанавливает yield, и в случае определения числового значения генератор выбрасывает ошибку

class MyGenerator {
    private values: string[];
  

    //Конструктор класса MyGenerator принимает произвольное количество строковых значений и сохраняет их в свойстве values.
    constructor(...values: string[]) {
      this.values = values;
    }
  
    //Метод generate() создает новый массив строк result, проходится по всем значениям в свойстве values, проверяет, является ли текущее значение числом, и если не является, добавляет его в массив result. 
    //Если же текущее значение является числом, генерируется ошибка типа Error. В конце метод возвращает массив result.
    generate(): string[] {
      console.log("Starting generator");
      const result: string[] = [];
      for (const value of this.values) {
        console.log(`Processing value: ${value}`);
        const numValue = Number(value);
        if (!isNaN(numValue)) {
          throw new Error(`${value} is not a string`);
        } else {
          result.push(value);
        }
      }
      return result;
    }
  
    //Метод generateWithYield() определен как функция-генератор с типом возвращаемого значения Generator<string>. 
    //Он проходится по всем значениям в свойстве values, проверяет, является ли текущее значение числом, и если не является, возвращает его через ключевое слово yield. 
    //Если же текущее значение является числом, генерируется ошибка типа Error.
    *generateWithYield(): Generator<string> {
      console.log("Starting generator with yield");
      for (const value of this.values) {
        console.log(`Processing value: ${value}`);
        const numValue = Number(value);
        if (!isNaN(numValue)) {
          throw new Error(`${value} is not a string`);
        } else {
          yield value;
        }
      }
    }
  }
  
  //Функция test() создает экземпляр класса MyGenerator с передачей в конструктор строковых значений. 
  //Затем функция вызывает метод generate() и выводит в консоль результат, а затем вызывает метод generateWithYield() и выводит в консоль результат. 
  //Если при выполнении методов происходит ошибка типа Error, функция перехватывает ее и выводит ее сообщение в консоль.
  function test() {
    try {
      const generator = new MyGenerator("one", "two", "three", "4", "five");
      const values = generator.generate();
      for (let value of values) {
        console.log(value);
      }
  
      const generatorWithYield = generator.generateWithYield();
      for (let value of generatorWithYield) {
        console.log(value);
      }
    } catch (e: any) {
      if (typeof e === "string") {
        console.log(e);
      } else {
        console.error(e);
      }
    }
  }
  
  test();
  