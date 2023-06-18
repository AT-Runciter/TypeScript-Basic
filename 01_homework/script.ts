function calculateIceCreamCost(): void {
    const smallCupPrice: number = 10;
    const bigCupPrice: number = 25;
    const chocolatePrice: number = 5;
    const caramelPrice: number = 6;
    const berriesPrice: number = 10;
    const marshmallowPrice: number = 5;

    //Ці константи задають ціну для різних видів морозива та додаткових начинок
    let iceCreamPrice: number = 0;

    let iceCreamSize = prompt("What size of ice cream would you like? (Small or Big)", "")?.toLowerCase();

    let iceCreamToppings: Array<string> = [];
    let iceCreamToppingsCost: number = 0;
    //Ці змінні використовуються для зберігання вхідних даних, таких як розмір морозива, види начинок та їх вартість

    if (iceCreamSize) {
        if (iceCreamSize.toLowerCase() === "small") {
            iceCreamPrice = smallCupPrice;
        } else if (iceCreamSize.toLowerCase() === "big") {
            iceCreamPrice = bigCupPrice;
        } else {
            console.log("Invalid input");
            return;
        }
    }
    //Ця умовна конструкція перевіряє, який розмір морозива вибрав користувач, та присвоює вартість цього розміру до змінної iceCreamPrice. Якщо користувач ввів неправильні дані, то функція повертається за допомогою return.
    //Метод toLowerCase() використовується для того, щоб перетворити введений користувачем текст в нижній регістр, щоб уникнути проблем з регістром під час порівняння.


    //Цей код відповідає за додавання топінгів до кінцевої вартості морозива
    let topping;
    //= prompt(
    // "What topping would you like? (Chocolate, Caramel, Berries) (Type 'done' to finish)", ""
    //)?.toLowerCase();

    //Цикл "do-while" дозволяє користувачеві вибрати топінги за допомогою вікна "prompt", доки не введе "done" або не закриє вікно
    do {
        topping = prompt(
            "What topping would you like? (Chocolate, Caramel, Berries) \n (Type 'done' to finish)", ""
        )?.toLowerCase();
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

    let addMarshmallow = prompt(
        //Запитання користувача, чи бажає він додати маршмеллоу до морозива. Якщо відповідь користувача є "yes", то маршмеллоу додається до морозива, а його вартість додається до змінної iceCreamToppingsCost. 
        //Якщо відповідь користувача не є "yes" або "no", то виводиться повідомлення про недійсну відповідь та функція завершується.
        "Would you like to add marshmallow? (yes or no)", ""
    )?.toLowerCase();
    if (addMarshmallow === "yes") {
        iceCreamToppings.push("marshmallow");
        iceCreamToppingsCost += marshmallowPrice;
    } else if (addMarshmallow !== "no") {
        console.log("Invalid input.");
        return;
    }

    //Обчислюється загальна вартість морозива, додаючи ціну на морозиво та вартість додаткових інгредієнтів. Загальна вартість виводиться у консоль разом зі строкою "Your total cost is". Функція завершується без повернення якого-небудь значення.
    const totalCost: number = iceCreamPrice + iceCreamToppingsCost;
    console.log('This is your ' + iceCreamSize + ' with ' + iceCreamToppings);
    console.log(`Your total cost is ${totalCost} UAH.`);
}

calculateIceCreamCost();
