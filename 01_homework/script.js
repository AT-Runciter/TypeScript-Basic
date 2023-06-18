function calculateIceCreamCost() {
    var _a, _b, _c;
    var smallCupPrice = 10;
    var bigCupPrice = 25;
    var chocolatePrice = 5;
    var caramelPrice = 6;
    var berriesPrice = 10;
    var marshmallowPrice = 5;
    //Ці константи задають ціну для різних видів морозива та додаткових начинок
    var iceCreamPrice = 0;
    var iceCreamSize = (_a = prompt("What size of ice cream would you like? (Small or Big)", "")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var iceCreamToppings = [];
    var iceCreamToppingsCost = 0;
    //Ці змінні використовуються для зберігання вхідних даних, таких як розмір морозива, види начинок та їх вартість
    if (iceCreamSize) {
        if (iceCreamSize.toLowerCase() === "small") {
            iceCreamPrice = smallCupPrice;
        }
        else if (iceCreamSize.toLowerCase() === "big") {
            iceCreamPrice = bigCupPrice;
        }
        else {
            console.log("Invalid input");
            return;
        }
    }
    //Ця умовна конструкція перевіряє, який розмір морозива вибрав користувач, та присвоює вартість цього розміру до змінної iceCreamPrice. Якщо користувач ввів неправильні дані, то функція повертається за допомогою return.
    //Метод toLowerCase() використовується для того, щоб перетворити введений користувачем текст в нижній регістр, щоб уникнути проблем з регістром під час порівняння.
    //Цей код відповідає за додавання топінгів до кінцевої вартості морозива
    var topping;
    //= prompt(
    // "What topping would you like? (Chocolate, Caramel, Berries) (Type 'done' to finish)", ""
    //)?.toLowerCase();
    //Цикл "do-while" дозволяє користувачеві вибрати топінги за допомогою вікна "prompt", доки не введе "done" або не закриє вікно
    do {
        topping = (_b = prompt("What topping would you like? (Chocolate, Caramel, Berries) \n (Type 'done' to finish)", "")) === null || _b === void 0 ? void 0 : _b.toLowerCase();
        //Кожен раз, коли користувач вводить назву топінгу, виконується операція "switch", щоб визначити, який топінг обраний і скільки коштує його додавання. Якщо користувач вводить невідому назву топінгу, на екран виводиться повідомлення про помилку.
        switch (topping) {
            case "chocolate":
                iceCreamToppings.push("chocolate");
                iceCreamToppingsCost += chocolatePrice;
                break;
            case "caramel":
                iceCreamToppings.push("caramel");
                iceCreamToppingsCost += caramelPrice;
                break;
            case "berries":
                iceCreamToppings.push("berries");
                iceCreamToppingsCost += berriesPrice;
                break;
            case "done":
                break;
            default:
                console.log("Invalid input.");
        }
        //Коли користувач вводить "done", цикл закінчується, а додані топінги та вартість додаються до змінних "iceCreamToppings" та "iceCreamToppingsCost" відповідно.
    } while (topping !== "done");
    var addMarshmallow = (_c = prompt(
    //Запитання користувача, чи бажає він додати маршмеллоу до морозива. Якщо відповідь користувача є "yes", то маршмеллоу додається до морозива, а його вартість додається до змінної iceCreamToppingsCost. 
    //Якщо відповідь користувача не є "yes" або "no", то виводиться повідомлення про недійсну відповідь та функція завершується.
    "Would you like to add marshmallow? (yes or no)", "")) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    if (addMarshmallow === "yes") {
        iceCreamToppings.push("marshmallow");
        iceCreamToppingsCost += marshmallowPrice;
    }
    else if (addMarshmallow !== "no") {
        console.log("Invalid input.");
        return;
    }
    //Обчислюється загальна вартість морозива, додаючи ціну на морозиво та вартість додаткових інгредієнтів. Загальна вартість виводиться у консоль разом зі строкою "Your total cost is". Функція завершується без повернення якого-небудь значення.
    var totalCost = iceCreamPrice + iceCreamToppingsCost;
    console.log('This is your ' + iceCreamSize + ' with ' + iceCreamToppings);
    console.log("Your total cost is ".concat(totalCost, " UAH."));
}
calculateIceCreamCost();
