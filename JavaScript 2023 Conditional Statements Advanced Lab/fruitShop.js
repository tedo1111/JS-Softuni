function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);

    let price = 0;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":

            switch (fruit) {
                case "banana":
                    price = amount * 2.5;
                    break;
                case "apple":
                    price = amount * 1.2;
                    break;
                case "orange":
                    price = amount * 0.85;
                    break;
                case "grapefruit":
                    price = amount * 1.45;
                    break;
                case "kiwi":
                    price = amount * 2.7;
                    break;
                case "pineapple":
                    price = amount * 5.5;
                    break;
                case "grapes":
                    price = amount * 3.85;
                    break;
                default:
                    console.log("error");
                    return;
            }

            break;

        case "Saturday":
        case "Sunday":

            switch (fruit) {
                case "banana":
                    price = amount * 2.7;
                    break;
                case "apple":
                    price = amount * 1.25;
                    break;
                case "orange":
                    price = amount * 0.9;
                    break;
                case "grapefruit":
                    price = amount * 1.6;
                    break;
                case "kiwi":
                    price = amount * 3;
                    break;
                case "pineapple":
                    price = amount * 5.6;
                    break;
                case "grapes":
                    price = amount * 4.2;
                    break;
                default:
                    console.log("error");
                    return;
            }

            break;

        default:
            console.log("error");
            return;
    }

    console.log(price.toFixed(2));
}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);


