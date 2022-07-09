// const productName = confirm();

// console.log(productName);
// 'Droid'

// const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000




// const COLOR_TEAL = "#009688";
// console.log(COLOR_TEAL);
// const LOGIN_SUCCESS_MESSAGE = "Добро пожаловать!";
// console.log(LOGIN_SUCCESS_MESSAGE);







// const message = "JavaScript is awesome!";
// alert(message);
// const username = 'Roma';
// console.log('Имя пользователя:', username);


// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);



// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const one =  2;
// const two = 5;
// const three = 6;

// const result = (one + two * three);


// console.log(result)

// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false


// // ✅ Хорошо, приведение типов не выполняется
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true



// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"




// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"




// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
//     isOnline - буль true.






//     Объявлена переменная topSpeed
// Значение переменной topSpeed это число 160
// Объявлена переменная distance
// Значение переменной distance это число 617.54
// Объявлена переменная login
// Значение переменной login это строка "mango935"
// Объявлена переменная isOnline
// Значение переменной isOnline это буль true
// Объявлена переменная isAdmin
// Значение переменной isAdmin это буль false


// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;


// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
// Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

// Объявлена переменная pricePerItem
// Значение переменной pricePerItem это число 3500
// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 4
// Объявлена переменная totalPrice
// Значение переменной totalPrice это число 14000
// Использован оператор *

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = (pricePerItem*orderedQuantity)
// console.log(totalPrice)





// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN





// // Math.floor(num) - возвращает наибольшее целое число,
// // меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(5, 6)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10


// console.log(Math.random() * (100 - 90) + 90)

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((1.17 + 3.24).toFixed(2)); // 0.41
// const guestName = 'Рома';
// const two = 'столом';

// const tree = `Привіт мeне звати  ${guestName} , я сижу за ${two} .///.//&&^$T#$Q#`;

// console.log(tree);



// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"


// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits".
//     Где < имя товара > и < цена товара > это значения переменных productName и pricePerItem.Используй синтаксис шаблонных строк.


// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice}, credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);


// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
// console.log(totalPrice);
// const message = "You" +" ordered" +" droids"+ "worth " + totalPrice  +", credits."+ " Delivery("+ deliveryFee + " credits)" +" is" + " included" + " in" + " total" + " price.";
// console.log(message);


// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47



// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".css")); // false




// let one = prompt('Давай число')
// one = Number(one)

// console.log(one)

// let two = prompt('Давай степень')
// two = Number(two)
// console.log(two)

// const result = (one ** two)

// console.log(result)





// const max = 15;
// const min = 1;
// const result = Math.round(Math.random() * (max - min) + min)
// console.log(result)


// Объявлена функция makeMessage(name, price)
// Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
// Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
// Вызов makeMessage('Reactor', 8000) возвращает "You picked Reactor, price per item is 8000 credits"
// Вызов makeMessage('Engine', 4070) возвращает "You picked Engine, price per item is 4070 credits"





// function makeMessage (name, price) {
 
//    const message = "You picked Radar, price per item is 6150 credits";
  
//   return message;
// };
// console.log()

// const one = ~~(Math.random() * 10) + 1;
// console.log(one);
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100))
// console.log(calculateTotalPrice(5, 100))
// console.log( calculateTotalPrice(3, 400))
// console.log(calculateTotalPrice(1, 3500))
// console.log(calculateTotalPrice(12, 70))


// function makeMessage (name, price) {
//   // Change code below this line
//    const message =`You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };
// makeMessage('Radar', 6150)
// console.log(`You picked Radar, price per item is 6150 credits`)
// makeMessage('Scanner', 3500)
// console.log(`You picked Scanner, price per item is 3500 credits`)
// makeMessage('Reactor', 8000)
// console.log(`You picked Reactor, price per item is 8000 credits`)
// makeMessage('Engine', 4070)
//  console.log(`You picked Engine, price per item is 4070 credits`)


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   const message = orderedQuantity*pricePerDroid+deliveryFee;

//   // Change code above this line
//   return message;
// }
// makeOrderMessage(2, 100, 50)
// console.log(`You ordered droids worth 250 credits. Delivery (50 credits) is included in total price.`)
// makeOrderMessage(4, 300, 100)
// console.log(`You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price.`)
// makeOrderMessage(10, 70, 200)
// console.log(`You ordered droids worth 900 credits. Delivery (200 credits) is included in total price.`)


// Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."




// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//   const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
  
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery
//   (${deliveryFee} credits) is included in total price.`;
 

//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50))
// console.log(makeOrderMessage(4, 300, 100))
// console.log(makeOrderMessage(10, 70, 200))

// function isAdult(age) {
//   // Change code below this line
//   const passed = 10>=age;

//   // Change code above this line
//   return passed;
// }
// console.log(isAdult(20))



// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=
// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are a minor"
// Вызов checkAge(38) возвращает "You are an adult"



// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(20))
// console.log(checkAge(8))
// console.log(checkAge(14))
// console.log(checkAge(38))


// ЗАДАЧА: СКЛАД ТОВАРОВ
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"


// function checkStorage(available, ordered) {
//     let message;
    
//     if (available > ordered) {
//         message = `Order is processed, our manager will contact you.`
//     } else {
//         message = `Not enough goods in stock!`
//     }
 
//   return message;
// }
// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(200, 20))
// console.log(checkStorage(200, 150))
// console.log(checkStorage(150, 180))







// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity - customerCredits;
//     return message;
// }
// if (totalPrice < customerCredits) {
//     message = `"Insufficient funds!"`;
// } else (totalPrice > customerCredits)
// {
//      let message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;
// }

// console.log(makeTransaction(3000, 5, 23000))
// console.log(makeTransaction(1000, 3, 15000))
// console.log(makeTransaction(5000, 10, 8000))
// console.log(makeTransaction(2000, 8, 10000))
// console.log( makeTransaction(500, 10, 5000))


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
// const totalPrice = pricePerDroid * orderedQuantity - customerCredits;
//   return message;
// } if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`
    
// } else (totalPrice < customerCredits)
// {
//     message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left.`
    
// }
// console.log(makeTransaction(3000, 5, 23000))
// console.log(makeTransaction(1000, 3, 15000))
// console.log(makeTransaction(5000, 10, 8000))
// console.log(makeTransaction(2000, 8, 10000))
// console.log( makeTransaction(500, 10, 5000))



// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//     const totalPrice = pricePerDroid * orderedQuantity ;
//     if ( totalPrice > customerCredits) {
//         message = `Insufficient funds!`
//     }
//     else {
//          message =`You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     }
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000))
// console.log(makeTransaction(1000, 3, 15000))
// console.log(makeTransaction(5000, 10, 8000))
// console.log(makeTransaction(2000, 8, 10000))
// console.log( makeTransaction(500, 10, 5000))



// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение:
// "You ordered <число> droids, you have <число> credits left".

// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
// Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
// Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
// Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
// Вызов makeTransaction(500, 10, 5000) возвр



// Функция checkPassword(password) получает пароль пользователя в параметр password,
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения,
//  хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null ) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }



// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка
// "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка
// "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".
// Объявлена функция checkStorage(available, ordered)


// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(150, 0) возвращает "There are no products in the order!"

// function checkStorage(available, ordered) {
//     let message;
//     if (ordered === 0) {
//         message = `There are no products in the order!`
//         console.log(message)
//     }
//     else if (ordered > available) {
//          message = `Your order is too large, there are not enough items in stock!`
//     }
//     else {
//         message = `The order is accepted, our manager will contact you`
//     }
//   return message;
// }


// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// start - начало числового промежутка
// end - конец числового промежутка
// number - число, вхождение которого проверяется

// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end.
// То есть число должно быть больше либо равно start и меньше либо равно end.Результатом выражения проверки будет буль true или false.

// Объявлена функция isNumberInRange(start, end, number)
// В выражении проверки использован оператор &&
// Вызов isNumberInRange(10, 30, 17) возвращает true
// Вызов isNumberInRange(10, 30, 5) возвращает false
// Вызов isNumberInRange(20, 50, 24) возвращает true
// Вызов isNumberInRange(20, 50, 76) возвращает false


// function isNumberInRange(start, end, number) {
//   const isInRange = number > start && end > number; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log( isNumberInRange(20, 50, 76));


// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту.
// Проверка происходит по типу подписки.Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки.Если значение параметра subType равно строкам "pro" или "vip",
//     пользователь получит доступ.Результатом выражения проверки будет буль true или false.

// Объявлена функция checkIfCanAccessContent(subType)
// В выражении проверки использован оператор ||
// Вызов checkIfCanAccessContent("pro") возвращает true
// Вызов checkIfCanAccessContent("starter") возвращает false
// Вызов checkIfCanAccessContent("vip") возвращает true
// Вызов checkIfCanAccessContent("free") возвращает false



// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === 'pro'|| subType === 'vip' ;

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));









// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток.
// То есть число должно быть меньше либо равно start и больше либо равно end.Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// Объявлена функция isNumberNotInRange(start, end, number)
// В выражении использован оператор !
// Вызов isNumberNotInRange(10, 30, 17) возвращает false
// Вызов isNumberNotInRange(10, 30, 5) возвращает true
// Вызов isNumberNotInRange(20, 50, 24) возвращает false
// Вызов isNumberNotInRange(20, 50, 76) возвращает true




// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));








// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных
// денег(параметр totalSpent) в магазине за всё время(партнёрская программа).
// Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// Объявлена функция getDiscount(totalSpent)
// Вызов getDiscount(137000) возвращает 0.1
// Вызов getDiscount(46900) возвращает 0.05
// Вызов getDiscount(8250) возвращает 0.02
// Вызов getDiscount(1300) возвращает 0
// Вызов getDiscount(5000) возвращает 0.02
// Вызов getDiscount(20000) возвращает 0.05
// Вызов getDiscount(50000) возвращает 0.1


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = (0.1);
//   let discount;
//     if (totalSpent >= 50000) {
//         discount = `Скидка ${GOLD_DISCOUNT} золотой партнер`;
//     }
//     else if (totalSpent >= 20000) {
//         discount = `Скидка ${SILVER_DISCOUNT} серебрянный партнёр`;
//     }
//         else if (totalSpent >= 5000) {
//         discount = `Скидка  ${BRONZE_DISCOUNT} бронзовый партнёр` ;
//     }
//         else{
//         discount = `Скидка ${BASE_DISCOUNT} базовый партнёр`
//     }
//   return discount;
// }
// console.log(getDiscount(137000))
// console.log(getDiscount(46900))
// console.log(getDiscount(8250))
// console.log(getDiscount(1300))
// console.log(getDiscount(5000))
// console.log(getDiscount(20000))
// console.log( getDiscount(50000))


// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

// function checkStorage(available, ordered) {
//   let message;
//   message = ordered > available ?  'Not enough goods in stock!' :  'The order is accepted, our manager will contact you';

//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// Функция checkPassword(password) сравнивает переданный ей пароль(параметр password) с сохранённым паролем
// администратора(константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
// В противном случае, присвой message строку "Access denied, wrong password!".
// Объявлена функция checkPassword(password)
// Использован тернарный оператор
// Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
// Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
// Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }




// Его синтаксис состоит из блока switch (значение) - что нужно сравнить и множества отдельных случаев case значение: - с чем нужно сравнить.
//  Для сравнения используется оператор строгого равенства ===.То есть нельзя сравнить на больше или меньше, только на равенство.
// Значение в блоке switch (значение) - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках case значение:
//  по порядку, сверху вниз.
// Оператор break в завершении каждого блока case необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду за switch в том случае,
//     когда проверка на равенство вернула true.
// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя(параметр type), проверяет её на совпадение с тремя возможными
//  типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.
// Если значение параметра type это строка:
// "starter" - цена подписки 0 кредитов.
// "professional" - цена подписки 20 кредитов.
// "organization" - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.
// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

// Объявлена функция getSubscriptionPrice(type)
// Вызов getSubscriptionPrice("professional") возвращает число 20
// Вызов getSubscriptionPrice("organization") возвращает число 50
// Вызов getSubscriptionPrice("starter") возвращает число 0


// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;

//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log( getSubscriptionPrice("organization"));
// console.log( getSubscriptionPrice("starter"));






// Функция checkPassword(password) получает пароль в параметр password,
//     проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения,
//         хранящееся в переменной message.
// Если значение параметра password:
// равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword('"jqueryismyjam") возвращает "Welcome!"
    
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//     switch (password) {
//         case "mangohackzor":
//             message = "Access denied, wrong password!";
//             break;
//         case null:
//             message = "Canceled by user!"
//             break;
//         case "polyhax":
//             message = "Access denied, wrong password!";
//             break;
//         case "jqueryismyjam":
//             message = "Welcome!";
//             break;
//     }
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// Функция getShippingCost(country) должна проверять возможность доставки товара в страну
// пользователя(параметр country) и возвращать сообщение о результате хранящееся в переменной message.
// Обязательно используй инструкцию switch.

// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

// Объявлена функция getShippingCost(country)
// В теле функции использована инструкция switch
// Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
// Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
// Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
// Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
// Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
// Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//     let message;
//     let price;
//     switch (country) {
//         case "Australia":
//             price = 170
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case "China":
//             price = 100
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case "Chile":
//             price = 250
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         case "Jamaica":
//             price = 120
//             message = `Shipping to ${country} will cost ${price} credits`
//             break;
//         default:
//            message = "Sorry, there is no delivery to your country"
//     }
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));


// Для того чтобы узнать длину строки, то есть количество её символов, у строк есть встроенное свойство length,
//     значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.

// const productName = "Repair droid";

// // Если в переменной хранится строка
// console.log(productName.length); // 12

// // Если строковый литерал
// console.log("Repair droid".length); // 12
// Функция getNameLength(name) принимает имя(параметр name) и возвращает строку, в которой указана его длина.
// ополни шаблонную строку в переменной message длиной строки из параметра name.

// Объявлена функция getNameLength(name)
// Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
// Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
// Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
// Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));



// Строка — это индексированный набор из нуля или более символов, заключенных в одинарные, двойные или косые кавычки.

// Индексация элементов строки начинается с нуля.Например, в строке 'JavaScript' буква 'J' стоит на позиции с индексом 0,
//     а 't' идёт под индексом 9. При этом длина строки 'JavaScript' равна 10, то есть индекс последнего элемента всегда на единицу меньше чем её длина.

// Для доступа к значению элемента строки используется синтаксис квадратных скобок строка[индекс].

// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 1]); // "d"
// Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана — она такая навсегда. Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
// Объявлена переменная courseTopic
// Значение переменной courseTopic это строка "JavaScript essentials"
// Объявлена переменная courseTopicLength
// Значение переменной courseTopicLength это число 21
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "J"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "s"

// ====================

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length -1] ;
// // Change code above this line




// console.log(courseTopicLength)
// console.log(firstElement)
// console.log(lastElement)




// function getSubstring(string, length) {
//   const substring = string.slice(0,length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3))





// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
// Объявлена функция formatMessage(message, maxLength)
// Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
// Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"





// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if ( message.length > maxLength){
//   result = message.slice(0, maxLength) + "...";
//    return result;
// }
// else result = message;
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16))
// console.log(formatMessage("Curabitur ligula sapien", 23))
// console.log(formatMessage("Vestibulum facilisis purus nec", 20))
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41))






// function normalizeInput(input) {
//   const normalizedInput = (input).toLowerCase; // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"))
// console.log(normalizeInput("This ISN'T SpaM"))
// console.log(normalizeInput("Big SALE"))







// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));




// Функция checkForSpam(message) принимает строку(параметр message), проверяет её на содержание запрещенных слов spam и sale,
//     и возвращает результат проверки.Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam("Latest technology news") возвращает false
// Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
// Вызов функции checkForSpam("Get best sale offers now!") возвращает true
// Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
// Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
// Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
// Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true



// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//     result = message.includes("spam") || message.toLowerCase().includes("sale");
//   // Change code above this line
//   return result;
// }


// function checkForSpam(message) {
//   let result = message.toLowerCase();
//   // Change code below this line
    
    
//   return result.includes("spam") || result.includes("sale");;
// }
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"))
// console.log(checkForSpam("[SPAM] How to earn fast money?"));
// console.log( checkForSpam("Trust me, this is not a spam message"))


// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");
// let message;
 
// if ( question === 'ECMAScript') {
//   alert(message =  "Верно!")
// } else {
//     alert(message = "Не знаете? ECMAScript!")
    
// }





//  let user_otvet = prompt("Два конца, два кольца. Посредине гвоздик.");
//     if(user_otvet == "ножницы"){
//       alert("Ответ верный!"); // инструкция 1
//       } else {
//         alert("Ответ неверный!"); // инструкция 2
//         }

// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
//  Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число')
// let message;
// if (userInput > 0) {
//     alert(message = 'Это положительное число')
    
// } else if (userInput === 0) {
//     alert(message = 'Это ноль!')
// } else {
//     alert(message = 'Это отрицательное число')
// }


// Напиши скрипт, который сравнивает числа в переменных a и b.Если оба значения больше 100, то выведи в консоль максимальное из них.
//  В противном случае в консоли должна быть сумма значения b и числа 512.
// for (let i = 1; i <= 10; i +=1 ){
//   console.log(i)
//   if (i % 3 === 1) {
//     console.log("neЧетное:" , i)
//   }
// }







// const message = ["Hello", "My name is Siri", "I am the manager this company"]


// for (let i = 0; i < message.length; i +=1) {
//   console.log(message[i])
// }



// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// Выносим варианты в массив



// const numbers = [21, 53, 131, 60, 94, 34,
//   66, 78, 14, 15, 16, 22, 12]
// let total = 0;

// // for (let i = 0; i < numbers.length ; i += 1){
// //   total += numbers[i];
// // console.log(numbers[i])
// // }
// // console.log("Total", total)


// for (const result of numbers) {
//   total +=  result;

// }
// console.log("Total" , total)


// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
// let total = 0;


// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log('Четное число:', number)
    
//   }
//   total += number;
// }

// console.log('Тотал:', total)







// console.log(1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18)



// const clients = ["Olga", "Roma", "Irina", "Inna", "Julia"]
// const userName = 'Irina'
// let message = '';
// for (const client of clients) {

//   if (client === userName) {
//     message = `Добро пожаловать - ${userName}`
//     break;
//   }
//     if (client === 'Julia') {
//     message = `Добро пожаловать - ${userName}`
//     break;
//   }
//     if (client === 'Olga') {
//     message = `Добро пожаловать - ${userName}`
//     break;
//   }
//     if (client === 'Inna') {
//     message = `Добро пожаловать - ${userName}`
//       break;
      
//   }
//   if (client === 'Irina') {
//     message = `Добро пожаловать - ${userName}`
//     break;
//   }
//   message = 'мы вас не знаем....досвидание'

// }
//   console.log(message)



  
// const clients = ["Olga", "Roma", "Irina", "Inna", "Julia"]
// const userName = 'Irinaі'
// let message = 'Мы вас не знаем ... досвидание';
// for (const client of clients) {
//   if (client === userName) {
//     message = 'Добро Пожаловать'
//     break
//   }
  

// }
//   console.log(message)





// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// const a = [100];
// const b = a;
//  console.log(a)
//   console.log(b)



// a.push(290)
// console.log(a)
// a = 150
// console.log(a)
// b = a
//  console.log(b)




//  const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]



//  let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5


// a = 10;
// console.log(a); // 10
// const greetins = "HellomynameisRoma"
// const result = (greetins.split(""))
// console.log(result);





// const words = ["JavaScript", "это", "интересно"]
// console.log(words.includes("это"));

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"
// const fruit = "Mangow";
// let message = "";

// if (fruit === "Mango" ||fruit === "apple") {
//   message = "Отлично"


// }

// else if(fruit === "Mango"){
//   message = "okey"


// } else {
//   message = "нет ничего"
// }


// console.log(message)

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }





// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// console.log(redFruits.includes('apple'))




// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers.splice(2, [33])

// console.log(numbers)

// const clients = ["Olga", "Roma", "Irina", "Inna", "Julia"]
// const newClients = ["Sasha", "Petya"]
// const result = newClients.concat(clients)
// console.log(result)
// const clients = ["Mango", "Poly", "Petya", "Olga", "Inna", "Inna", "Inna", "Inna", "Inna", "Inna", "Inna"];

// for (const clientewdewd of clients)

// console.log(clientewdewd)
// function checkStorage(available, ordered) {
//   // Change code below this line


//   if (ordered === 0) {
//     console.log("Your order is empty!");
//     return
//     }
//     if (ordered > available) {
//    console.log("Your order is too large, not enough goods in stock!");
//    return
//   }
//     console.log("The order is accepted, our manager will contact you");
    
//   // Change code above this line
// }
// console.log(checkStorage(100, 50))



// function withdraw(amount, balance) {
//   // Если  условие выполняется, вызывается console.log
//   // и выход из функции. Код идущий после тела if не выполнится.
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//     return;
//   }

//   // Если условие первого if не выполнилось, его тело пропускается
//   // и интерпретатор доходит до второго if.
//   // Если условие выполняется, вызывается console.log и выход из функции.
//   // Код идущий после тела if  не выполнится.
//   if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//     return;
//   }

//   // Если ни один из предыдущих if не выполнился,
//   // интерпретатор доходит до этого кода и выполняет его.
//   console.log("Операция снятия средств проведена");
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"


// function checkStorage(available, ordered)  {
//   // Если  условие выполняется, вызывается console.log
//   // и выход из функции. Код идущий после тела if не выполнится.
//   if (ordered === 0) {
//     console.log("Your order is empty!");
//     return;
//     }
    
//   if (ordered > available) {
//     console.log("Your order is too large, not enough goods in stock!");
//     return;
//   }

//   // Если ни один из предыдущих if не выполнился,
//   // интерпретатор доходит до этого кода и выполняет его.
//   console.log("The order is accepted, our manager will contact you");
// }

//  checkForSpam("Latest technology news")
//  checkForSpam("JavaScript weekly newsletter")
//  checkForSpam("Get best sale offers now!")
//  checkForSpam("Amazing SalE, only tonight!")
//  checkForSpam("Trust me, this is not a spam message")
//  checkForSpam("Get rid of sPaM emails. Our book in on sale!")
//  checkForSpam("[SPAM] How to earn fast money?")





// const clients = ["Ogla", "Julia", "Roma", "Vasya"]
// const client = "Roma"
// let message = "";

// switch (client) {
//   case "Olga":
//     message = "Hello Olga"
//     break;
  
//   case "Julia":
//     message = "Hey Julia"
//     break;
//      case "Roma":
//     message = "Роман баран прівєт"
//     break;
//      case "Vasya":
//     message = "Здарова Вася"
//     break;
  
//   default:
//     console.log("Я тебе не знаю")
  
// }
//   console.log(message);



// const strings = "hELLO wORLD"
// const letters = strings.split("")


// let result = "";

// for (const letter of letters) {
//   console.log(letter)



//   result += letter === letter.toLowerCase()
//     ? letter.toUpperCase()
//     : letter.toLowerCase();

// }
// console.log("PDCASD;.ASCSC",result)



// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice();


// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)

// const one = 'EDGE FDD LTE LTE TDD UMTS'


// const two = one.toLowerCase().join('-');
// console.log(two)

// Объявление параметров x, y, z
// function calculateTotalPrice(order) {
//   let total = 0;
//   for(let i = 0 ; i <=order; i +=1)


//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))


// function calculateTotalPrice(order) {
  
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i]
//   }
//   // Change code above this line
//   return total;
// }


// const one = 1
// const two = 55
// // const three = Math.random()*(two - one) + one

// for (let i = one; i <= two; i +=1)
// console.log(two , i)
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1
// const lastElement = fruits[lastElementIndex]

// Change code below this line


// function getExtremeElements(array) {
//  for(let element of arguments){
//   array = [element[0], element[array.length - 1]]
//   return array;
// }
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]))
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]))
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]))

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter)
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "))
// console.log(splitMessage("Mango", ""))
// console.log(splitMessage("best_for_week", "_"))




// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает строку, состоящую из слов разделённых только пробелами
//     (параметр message) и цену гравировки одного слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// Объявлена функция calculateEngravingPrice(message, pricePerWord)
// Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// Вызов calculateEngravingPrice("Web-development is c


// function slugify(title) {
//   // Change code below this line

// let one = title.toLowerCase() .split(" ") .join("-")
// return one
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"))
// console.log(slugify("English for developer"))
// console.log(slugify("Ten secrets of JavaScript"))

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(2, 5);


// // console.log(nonExtremeEls)
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const newArry = firstArray.concat(secondArray).slice(0 , maxLength)

//   return newArry;
//     // Change code above this line
// }
//   console.log
  
//   const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
  
//   function calculateTotal(number) {
//  // Change code below this line
//       let sum = 0;
//   for(let i = 0; i <= number; i +=1)
//   sum += i;

// return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(1))
// console.log(calculateTotal(3))
// console.log(calculateTotal(7))
// console.log(calculateTotal(18))
// console.log(calculateTotal(24))
// console.log(calculateTotal())
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for(i=0; i < order.length; i += 1){
//      total += order[i]
//   }
//   // Change code above this line
//   return total;
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//     for (let i = 0; i < order.length; i += 1)
//         total += order[i]
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i+=1){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i].length;
//      }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))



// function findLongestWord(string) {
//     let one = string.split(" ")
//     let two = 0
//     let three;

//     for (let i = 0; i < one.length; i += 1){
//         two = one[1].length
//         if (one[i].length > two)  {
//             three = one[i]
//         }
//     }
//     return three
// };

// // Вызовы функции для проверки
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'

// console.log(findLongestWord("Google do a roll")); // вернет 'Google'

// console.log(findLongestWord("May the force be with you")); // вернет 'force'

// function findLongestWord(string) {
//   let arrStr = string.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }

//   }
// };


// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   // Change code below this line
//   for(let i = min; i <= max ; i +=1)
//   numbers.push(i)
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3))
// console.log(createArrayOfNumbers(14, 17))
// console.log(createArrayOfNumbers(29, 34))
// console.log(createArrayOfNumbers())
// const numbers = [1, 2, 3, 4, 5,  6, 7, 8, 9];
// let total = 0;
// for (const number of numbers) {
//     console.log(number)
//     if (number % 2 === 0) {
//         console.log("Четное:", number)
//         total +=number
//     }
// }
// console.log( 'total:', total)




// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let array3 = [];
//   for(const number of array1){
//       if (array2.includes(number)) {
//         array3.push(number)
//     }
//   }

// return array3
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]) )

//  function filterArray(numbers, value) {
//    // Change code below this line
//   const three = []
//   for (const number of numbers){
//     if(number > value){
//        three.push(number)
//     }
    
//   }

// return three
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log( filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))
// console.log(filterArray([12, 24, 8, 41, 76], 38))

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"))

// function filterArray(numbers, value) {
//     const one = []
//     for (const number of numbers) {
//         if (number > value) {
//            one.push(number)
//         }
            
//     }
//     return one
// }
// console.log(filterArray([1, 2, 3, 4, 5], 1))
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))


// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const one = []
    
//     for (let i = start; i <= end; i += 1){
      
//     if(i % 2 === 0){
//       one.push(i)
//     }
//   }

// return one
//     // Change code above this line
// }
//   console.log(getEvenNumbers(2, 5))



// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//       break
     
//     }
   
  
// // }

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//     for (let i = start; i < end; i += 1) {
      
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5))
// console.log(findNumber(8, 17, 3))
// console.log(findNumber(6, 9, 4))
// console.log(findNumber(16, 35, 7))


// const passwords = ["Рома", "Вася", "Петя", "Вова"]


// const userPassword = "Рома"
// let message = "";

// const result = passwords.includes(userPassword) ?  "Welcom" : "no"


// // for (const password of passwords) {
// //     console.log('User:', userPassword)

// //     if (password === userPassword) {
// //         message = `User: ${userPassword} Welcom`
// //         break
// //     }

// // }
// console.log(result)



// const numbers = [11, 12, 32, 43, 15, 6, 17, 82, 98]
// let one = numbers[8]


// for (const number of numbers) {
//     if (number > one) {
//         one = number
//     }
// }
// console.log(one)


// const passwords = ["Рома", "Вася", "Петя", "Вова", "Рома", "Вася", "Петя", "Вова"];
// let string = passwords.join(" ");

// console.log(string )

// const names = 'JavaScript'
// const two = names.split(" ");
// let result = '';


// for (const name of names) {
 

//     result += name === name.toLowerCase() ? name.toUpperCase() : name.toLowerCase()

// }

//     console.log(result)

// const title = 'JavaScript Это Лучше Что Может Быть'

// const normalizedTitle = title.toLowerCase().split(" ").join("-");
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// // }
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];



// for (const color of colors) {
//   console.table(color.hex)


// }
// const hexColors = [];

// const friends = [
//   { name: 'Mango', online: false},
//   { name: 'Kiwi', online: true},
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];





// const fnFriends = function (allFriends, allName) {
//   for (const friend of allFriends) {
//     console.log(friend)
//     if (friend.name === allName) {
//       return 'Yeeees !!!'
//     }
//   }
//    return 'No !!!'
// }
// console.log(fnFriends(friends, "Roma"))
// console.log(fnFriends(friends , "Kiwi"))
// console.log(fnFriends(friends , "Petrosyn"))
// console.log(fnFriends(friends , "Ajax"))
// console.log(fnFriends(friends , "Mango"))


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex)
// }
// console.log(hexColors)
// const rgbColors = [];
// for (const color of colors) {

//   rgbColors.push(color.rgb)
// }
// console.log(rgbColors)


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   for (const product of products) {
//     if (propName === product.name) {
//         return product.name
//       }
//     }


//   // Change code above this line
// }
// console.log(getAllPropValues("name"))
//  ====================================================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let array = [];
//   for (let product of products) {
//      if (propName in product) {
//        array.push(product[propName]);
//     }
//    }
//    return array;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"))
// console.log(getAllPropValues("price"))
// console.log(getAllPropValues("quantity"))




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
//   let total = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//      total = product.price * product.quantity
//    }
//   }
//   return total;
// }
// console.log(calculateTotalPrice("Radar"))
// console.log(calculateTotalPrice("Scanner"))
// console.log(calculateTotalPrice("Droid"))
// console.log(calculateTotalPrice("Grip"))
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
  
// };
//  apartment.area = 60;
//  apartment.rooms = 3
//  apartment.location =
//  {country: "Jamaica",city: "Kingston"}

//  console.log(apartment)


// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// const bigFriend = "Yura"
// const friends = ["Yura","Petya","Olga"]




// const people = {
//   name : 'Roma',
//   bigFriend:"Yura",
//     friends: ["Yura","Petya","Olga"],

//   peopleName() {
//     console.log(this)
//   }
// }


// people.peopleName()


// people.peopleName("emcedc")
// console.log(people)


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex)
// }
//     console.log(hexColors);
// const rgbColors = [];
// for (const color of colors) {
//       rgbColors.push(color.rgb)
//     }

//     console.log(rgbColors);
// // Change code below this line

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let array = [];
//   for (let product of products) {
//      if (propName in product) {
//        array.push(product[propName]);
//     }
//    }
//    return array;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));
//     console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));
//             console.log(getAllPropValues("quantityd"));



// const numbers = {
//   a:10,
//   b:20,
//   c:30,
//   d:50,
//   e:100,
//    t:100,
//     b:100,
//      l:100,
//   o: 100,

// }


// const values = Object.values(numbers)
// let total = 0;
// for (const value of values) {
//   total += value;
// }
//   console.log(total)




// const friends = [
//   { name: "Roma", online: false},
//   { name: "Alla", online: true},
//   { name: "Misha", online: false},
//   { name: "Julia", online: false },
//   { name: "Inna", online: true},
//   { name: "Andrey", online: false},
//   { name: "Irina", online: false},
// ];


// const calculateTotalPrice = function (statusFriends) {

//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   }
//   for (const friend of statusFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend)
//     }
//       friendsByStatus.offline.push(friend)
//   }
//   return friendsByStatus;
// }
// console.log(calculateTotalPrice(friends))


// function calculateTotalPricee(onlineFriend) {
 
//    let offlineFriend = [];
//   for (const friend of onlineFriend) {
//     if (!friend.online) {
//       offlineFriend.push(friend)
    

//     }
//   }
//     return offlineFriend
// }
// console.log(calculateTotalPricee(friends))

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);

// Change code below this line
// function calculateMeanTemperature(forecast) {

//   const {  todayLow, todayHigh , tomorrowLow, tomorrowHigh  } = forecast


//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }))

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//     console.log(otherArgs); // Массив остальных аргументов
   
// }

// multiply(50, 15, 27);
// multiply(10, 12, 4, 11, 48, 10, 8);
// multiply(15, 32, 6, 13, 19, 8);


// const fruits = {
//     kivi: 3,
//     mango: 14,
//     orange: 8,
//     apple : 10,

// }


// const values = Object.values(fruits);

// for (const value of values) {
//     console.log(Math.max(...value))
// }

// Change code below this line
// function addOverNum(number,...args) {
//   let total = 0;

//   for (const arg of args) {
   
//     if( arg > number){
//        total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))








// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//   return this.potions.indexOf(potionName)


//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"))
// console.log(atTheOldToad.removePotion("Speed potion"))


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
// for (const potion of this.potions) {
//   if (potion.name === newPotion.name) {
//     return `Error! Potion ${newPotion.name} is already in your inventory!`;
//   }
// }
// this.potions.push(newPotion);
//  },
//  removePotion(potionName) {
//  for (let i = 0; i < this.potions.length; i+=1) {
//   if (this.potions[i].name === potionName){
// this.potions.splice(i, 1);
//   }
//   }
//  },
//   updatePotionName(oldName, newName) {
//  for (let i = 0; i < this.potions.length; i+=1) {
//   if (this.potions[i].name === oldName){
//     this.potions[i].name = newName;
//   }
// }
//   }
//   // Change code above this line
// };



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//       for (const potion of this.potions) {
//           if (potion.name === newPotion.name) {
//             return `У вас есть  в кoрзиnе этот товар ${newPotion.name} `
//           }
          
//     }
//     this.potions.push(newPotion)
  
//   },
//  removePotion(potionName) {
//  for (let i = 0; i < this.potions.length; i+=1) {
//   if (this.potions[i].name === potionName){
// this.potions.splice(i, 1);
//   }
//   }
//  },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions() )
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
// console.log(atTheOldToad.removePotion("Dragon breath"))
// // console.log()

// Колбэк-функция
// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }
// function checkForSpam(message) {
//   let result = message.toLowerCase();
//   // Change code below this line
    
    
//   return result.includes("spam") || result.includes("sale");;
// }
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"))
// console.log(checkForSpam("[SPAM] How to earn fast money?"));
// console.log( checkForSpam("Trust me, this is not a spam message"))
// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).



// console.log( checkForSpam("Trust me, this is not a spam message"))
// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).




// function getExtremeElements(array) {
//   // Change code below this line
//   for(const one of arguments){
//     array = [one[0] ,one[array.length - 1]]
//   }
//   return array
//   // Change code above this line
// }


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//      return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }
// console.log( findNumber(2, 6, 5))
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   for(const product of products){
//     if(product.name === propName){
//       return product.name
//     } if(product.price  === propName){
//     return product.price
//     } if(product.quantity === propName){
//     return product.quantity
//     }

//     }
//  return []
//   }


//   // Change code above this line
// console.log(getAllPropValues("name"))
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const { today:
//     { low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
//     },
//     tomorrow:
//     {  low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
// const{
//   today :{
//     low: lowToday,
//     high : highToday ,
//     icon : todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
//     },
//     tomorrow:
//     {
//       low : lowTomorrow ,
//       high : lowTomorrow ,
//       icon : tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

//     }
//   }  = forecast

// Change code below this line


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line


    
//   getPotions() {
//     return this.potions;
//     },
  
// const test = (a, b, c) => (a * b * c)
// console.log(test(2,2,2))

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
    
// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }



// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем





// const car = {
//   brand: "Audi",
//   modal: "A6",
//   year: 1999,
//   isaVailable : false
// }

// const { brand, modal, year, isaVailable } = car;

// const one = isaVailable ? "есть в продаже" : "нет в продаже такого автомобиля"


// const message = `Автомобиль ${brand} модели ${modal} ${year} года ${one}`

// console.log(message)


// const testFun = function(arry, callBake) {
//   let result = [];

//   for (let what of arry) {
//     const one = callBake(what)
//     if (one) {
//       result.push(what)
//     }
//   }
//   return result
// }


// const fnA = function(number) {
//   return number >= 5;
// }

// const fnB = function(value) {
//   return value <= 4
// }


// const resultOne = testFun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fnA);
// const resultTwo = testFun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fnB);


// console.log(testFun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (number) {
//   return number >= 5;
// }))
// console.log(testFun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (value) {
//   return value <= 3;
// }))



// const fruitsFun = function (fruits, callbake) {
//       let result = []
//     for (const fruit of fruits) {
//         const one = callbake(fruit)
//         if (one) {
//             result.push(fruit)
//         }
//     }
//     return result
// }
 
// const fruitsShop = [
//   { name: "mango", price: 160, eat: 30 },
//   { name: "kiwi",price: 48, eat: 46},
//   { name: "apple", price: 15, eat: 100 },
//   { name: "cherry", price: 20, eat: 1000 },
//   { name: "banana",price: 25, eat: 230},
// ]


// console.log(fruitsFun(fruitsShop, function (expensive) {
//   return expensive.price >= 40
// }));



// console.log(fruitsFun(fruitsShop, function (cheaper) {
//   return cheaper.price <= 25
// }));



// console.log(fruitsFun(fruitsShop, function (eat) {
//   return eat.eat <= 50
// }));




 
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line


// function makeMessage(pizzaName,callback) {
//   return callback(pizzaName);
// }

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback) колбэк - функцию и возвращала ее вызов.
// Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.


// function makePizza(pizzaName, callback) {
//     let result = `Pizza ${pizzaName} is being prepared, please wait...`;
//     callback(pizzaName);
//     return result
// }


// console.log(makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// }))
// // Change code below this line


// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese");




// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//           return onSuccess(pizzaName)
//         }
//        return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError))
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError))
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError))



// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName,onError,onSuccess) {
//     if(this.pizzas.includes(pizzaName)){
//       return onSuccess(pizzaName)
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

  // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))



// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//     orderedItems.forEach(function (orderedItems) {
//         totalPrice += orderedItems
//     });

//   // Change code above this line
//   return totalPrice;
// }

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);


// const filter = function (number,test) {
//   let result = []
//   for (const value of number) {
    
//     if (test(value)) {
//       result.push(value)
//     }
//   }
//   return result;
// }


// console.log(filter([1, 2, 3, 4, 5, 6, 7], function (a) {
//   return a >= 4
// }));

// console.log(filter([78, 97, 94, 76, 48, 50, 94], function (b) {
//   return b <= 70
// }))


// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.


// function one(numbers) {
//   let total = []
//   for (let i = 0; i <= numbers.length;i +=1) {
//      total.push(map(i => i * 2))
//   }
//   return total
// }

// console.log(one([2, 3, 4, 5, 6, 7]))

// function a(text) {
//   const one = text[0].toUpperCase() + text.slice(1)
//   return one.split("").reverse().join("")
// }

// console.log(a('привет меня зовут рома'))



// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName,onError, onSuccess) {
//     if (this.pizzas.includes(pizzaName)) {
//        return onSuccess(pizzaName)
//     }
//     return onError()
//   },
// };



// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }


// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError))
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError))
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError))



// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   filterArray.forEach(function (numbers, value) {
//       filteredNumbers.push(numbers > value)
//     })

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))



// const fnA = function (number) {
//   return number.map(i => i * 2)

// }
// console.log(fnA([1,2,3,4,5,6,7,8,9]))

  
  
//  const fnB =  function(text) {
//   return text.split("").reverse().join("")
// }

// console.log(fnB('Hey Gays'))
// Chande code below this line
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line


// makePizza("Ultracheese", function (pizzaName) {
//  console.log(`Delivering pizza ${pizzaName}.`)
// })

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName,onSuccess,onError) {
//     if(this.pizzas.includes(pizzaName)){
//       return onSuccess(pizzaName)
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError))
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError))
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError))




// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(function(element) {
//     if (element > value) {
//        filteredNumbers.push(element);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (element) {
//     console.log(element)
//     if (secondArray.includes(element)) (
//       commonElements.push(element)
//     )
//   });
//   return commonElements;

// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))


// const one = function (name, dish) {
//   const result = `${name} готовит ${dish}`
//   return result
// }





// const sheff = function (name) {
//   const result = function(dish) {
//    return `${name} готовит вкусную ${dish}`
//   };
//   return result;
// }

// const one = sheff('Anna')
// console.dir(one)

// const two = sheff('Vasya')
// console.log(two('индейку'))


// const one = function (number) {
//   const result =  function (value) {
//      return Number(value.toFixed(number))
//   }
//   return result
// }

// const result1 = one(4)
// const result2 =  one(3)
// const result3 =  one(2)

// console.log(result1(1.7853876))

// console.log(result2(2.32498732985))

// console.log(result3(3.9583257325))



// const one =  (numbers,callback) =>{
//   let result = []
//   for (const number of numbers) {
//     if (callback(number)) {
//       result.push(number)
//       }
//   }
//   return result
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];


// const b = books.map(book => book.author.toLocaleLowerCase())

// console.log(b)

// const cars = [
//   { car: 'Mersedes', brand: 'G63', price: 120000, isStock: true },
//   { car: 'Audi', brand: 'A6', price: 440000, isStock: false },
//   { car: 'BMW', brand: 'X5', price: 63000, isStock: true },
//   { car: 'Toyota', brand: 'Kamry', price: 24000, isStock: false },
// ];


// console.log(cars);

// // const searchObj = 'G63';

// const test = cars.map(car => {

//   return 'X5' === car.brand ? { ...car, brand: car.brand = "X5 M" } : car
 


// });

// console.log(test);



// const fnA = cars.map(car => {
//   return {
//     ...car,
//     price: car.price + 15000,
//     class: 'Business-Class'
//   }
// })
// console.log(fnA)



// const numbers = [1,2,3,4,5,6,7,8,9]

// // console.log(fnA)

// const fnC = numbers.map(number => number + 10)
// console.log(fnC)




// const carShop = { car: 'Mersedes', brand: 'G63', price: 120000, isStock: false };

// const { car, brand, price, isStock } = carShop;

// const normalize = carShop.isStock ? `есть в наличии его цена ${price}` : "к сожалению нет такой машины в наличии"

// const message = `Автомобиль ${car} ${brand} ${normalize}`

// console.log(message)

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,110];
// const result = numbers.filter(number => number >= 80 || number <= 30  || number > 100 )
// console.log(result)

// const cars = [
//   { car: 'Mersedes', brand: 'G63', price: 120000, isStock: true },
//   { car: 'Audi', brand: 'A6', price: 440000, isStock: false },
//   { car: 'BMW', brand: 'X5', price: 63000, isStock: true },
//   { car: 'Toyota', brand: 'Kamry', price: 35000, isStock: false },
//   { car: 'Hummer', brand: 'H3', price: 40000, isStock: true },
//     { car: 'Ford', brand: 'Fusion', price: 23000, isStock: false },
// ];


// const carsFilter = cars.filter(({isStock}) => isStock)

// console.log(carsFilter)

// const carFind = 'Hummer';

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

// const result = cars.find(({car})=> car === carFind)

// console.log(result)

// const cars = [
//   { car: 'Mersedes', brand: 'G63', price: 120000, isStock: true },
//   { car: 'Audi', brand: 'A6', price: 440000, isStock: false },
//   { car: 'BMW', brand: 'X5', price: 63000, isStock: true },
//   { car: 'Toyota', brand: 'Kamry', price: 35000, isStock: true },
//   { car: 'Hummer', brand: 'H3', price: 40000, isStock: true },
//     { car: 'Ford', brand: 'Fusion', price: 23000, isStock: true },
// ];


// const a = cars.map(car => {
//   return {
//     ...car,
//     car: car.car = 'Нет машин',
//     brand: car.brand = "-",
//     price: car.price = 0,
//       isStock: car.isStock = false,
//   }
// })

// console.log(cars)



// const fnA = cars.map(car => {
//   return {
//     ...car,
//     price: car.price * 2
//   }
// })

// console.log(fnA)



// const a = cars.every(car => car.price > 10000)

// console.log("isStock:",a)

// const b = cars.some(car => car.price > 1000000)

// console.log('isStock:',b)





// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


// const b = a.filter(c => c > 15 || c < 5)


// console.log(b)


// const cars = [
//   { car: 'Mersedes', brand: 'G63', price: 120000, isStock: false },
//   { car: 'Audi', brand: 'A6', price: 145000, isStock: false },
//   { car: 'BMW', brand: 'X5', price: 63000, isStock: false },
//   { car: 'Toyota', brand: 'Kamry', price: 35000, isStock: false },
//   { car: 'Hummer', brand: 'H3', price: 40000, isStock: false },
//     { car: 'Ford', brand: 'Fusion', price: 23000, isStock: false },
// ];

// const totalCars = cars.reduce((number, car) => number + car.price,0)
// console.log(totalCars)

// const nameCar = 'Mersedes';

// const fnA = cars.map(car =>  car.car === nameCar? {...car , price: car.price * 2}: car);

// const fnB = cars.some(car => car.isStock === true)
// console.log(fnB);


// const numbers = [5,10,15,20,25]

// const fnA = numbers.reduce((number, value) => {
//   console.log('number',number)
//    console.log('value',value)
//   return  number + value
// },0)




// const likes = {
//   Roma: 8,
//   Irina: 12,
//   Anna: 5,
// }


// const allLikes = Object.values(likes).reduce((total , like)=> total + like,0)

// console.log(allLikes)

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// const getActiveUsers = (users, name) => users.filter(user => user.name === name)

// console.log(getActiveUsers(users,"Sheree Anthony"))


// const getFriend = users.flatMap(user => user.friends)
// console.log(getFriend)
// const getFriends = users => users.flatMap(user => user.friends).filter((element, index, arry) => arry.indexOf(element) === index);
// console.log(getFriends(users))



   
// Change code below this line
// const getFriends = users => users.map(user => user.friends).filter((friend , index , arry)=> arry.indexOf(friend) === index);
// Change code above this line


// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

// const getFriends = (users) => users.map(user => user.friends)



// users.filter(user => user.friends === friendName)

// Объявлена переменная getUsersWithFriend
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName)
// Для перебора параметра users используется метод filter()
// Если значение параметра friendName это строка "Briana Decker", функция возвращает массив объектов пользователей
// с именами Sharlene Bush и Sheree Anthony
// Если значение параметра friendName это строка "Goldie Gentry", функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony
// Если значение параметра friendName это строка "Adrian Cross", функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение








// const usersDom = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]



// const getUsersWithEyeColor = (users, color) =>  users.filter(user => user.eyeColor === color)


// console.log(getUsersWithEyeColor(usersDom,"brown"))

// const users =   [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// // Change code below this line
// const getTotalFriendCount = users => users.flatMap(user => user.friends.length).reduce((user,number) => user + number,0)


// console.log(getTotalFriendCount(users))



// console.log(namesR)
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender).reduce((acc, user) => {
//   if (user.gender === gender) {
//      acc += user.balance
     
//    }
//  },0)


// const getTotalBalanceByGender = (users, gender) => {
//  return users.filter(user => user.gender )
//  .reduce((acc, user) => {
//     if (user.gender === gender) {
//     acc += user.balance;
//             }
//     return acc ;
//     }, 0)
// };

// console.log(getSortedFriends(users))

// const objA = {
//   a: 1
// }

// const objB = Object.create(objA)

// objB.b = 2


// const objC = Object.create(objB)


// objC.c = 3

// console.log(objB)
// const Car  = function({ brand, modal, price } = {}) {

//   this.brand = brand;
//   this.modal =  modal;
//   this.price =  price;
// }

// // Car.prototype.assistantCar = function () {


// //   console.log('Привет , я сделаю всё что ты скажешь !')
// // }

// Car.prototype.totalPrice = function (newPrice) {

//   this.brand = newPrice;
  
// }


// const car1 = new Car({ brand:'Audi', modal:'A6',price: 50000})
// console.log(car1)
// // car1.assistantCar()
// car1.totalPrice()


// const car2 = new Car({ brand:'BMW', modal:'X5',price: 60000})
// console.log(car2)
// // car2.assistantCar()
// car2.totalPrice()


// const car3 = new Car({ brand:'Mersedes', modal:'G63',price: 100000})
// console.log(car3)
// // car3.assistantCar()
// car3.totalPrice()



// const User = function({ name, emaill, password, rating } = {}) {
//   this.name = name;
//   this.emaill = emaill;
//   this.password = password;
//    this.rating = rating;
// }


// User.prototype.userEmaill = function (newEmaill) {
//   this.rating = newEmaill
// }

// const userRoma = new User({
//   name: 'Roma',
//   emaill: 'romatomashevskiy@ukr.net',
//   password: 'It is my password',
//   rating : 4
// })

// userRoma.userEmaill(1)

// console.log(userRoma)



// class Car {
//   // Деструктуризируем объект
//   constructor({brand, model , price,} = {}) {
//    this.brand = brand;
//     this.model = model;
//   this.price = price;
//   }
// }
// const firstCar = new Car({
// brand:"Audi",
//  model:"Q3",
// price: 36000,
// })

// const secondCar = new Car({
//   brand:"BMW",
//  model:"X5",
// price: 58900,
// })

// const myCar = new Car({
//   brand:"Nissan",
//  model:"Murano",
//  price: 31700,
// })

// console.log(Car)
// console.log(firstCar)
// console.log(secondCar)
// console.log(myCar)


// class StringBuilder {
//   // Change code below this line
//   #value
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line


//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   blacklistedEmails = [];

//   constructor({ email, accessLevel } = {}) {
//     super(email);
//     this.accessLevel = accessLevel;
   
//   }

//   blacklist(email){
//     return this.blacklistedEmails.push(email)
//   }
//   isBlacklisted(email) {
//    return this.blacklistedEmails.includes(email)
//   }

// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, только когда каждый сорвет по цветку.
// Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков, это означает, что они влюблены.

// Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.


// const productsCars = [
//   { name: 'Audi-A6', price: 100000, description: 'Сегодня Audi A6 предлагается в четырехдверной версии с кузовом седан и в пятидверной версии Avant (универсал), ранее выпускались также двухдверные модели, купе и хэтчбек. Спортивная модификация А6 производится под наименованием Audi S6, а наиболее мощная версия A6 производится под наименованием RS6, что расшифровывается как "RennSport"[3].' },
//   { name: 'Mersedes-Benz', price: 120000, description: 'История марки Mercedes-Benz слагается из историй двух известных немецких автомобильных компаний — Benz & Cie. (основана Карлом Бенцем в 1883 году) и Daimler-Motoren-Gesellschaft (основана Готлибом Даймлером в 1890 году). Обе компании развивались самостоятельно до 1926 года, когда они объединились в единый концерн Daimler-Benz, впоследствии переименованный в Daimler AG.' },
//   { name: 'Porshe-Cayenne', price: 150000, description: 'Porsche Cayenne — пятиместный среднеразмерный спортивный кроссовер производства немецкой автомобилестроительной компании Porsche. Автомобиль создан при активном участии концерна Volkswagen. Впервые был представлен публике в декабре 2002 года.' },
//   { name: 'BMW-X6', price: 105000, description: 'В апреле 2009 года общественности была представлена спортивная версия X6 M, которая представляет собой модель xDrive50i с форсированным до 555 л. с. двигателем с двойным турбонаддувом. Доработке также подверглись подвеска, рулевое управление, система полного привода, выхлопная система и, в незначительной степени, элементы интерьера и экстерьера. BMW Х6 М и Х5 М стали первыми в истории BMW Motorsport автомобилями с полным приводом, турбированным двигателем и в сегменте SUV.' },
//   { name: 'Rolls-Royce Cullinan', price: 10000, description: 'Rolls-Royce Cullinan (рус. Кýллинан[1], рус. Каллинан[2]) — Кроссовер от компании Rolls-Royce, который официально представлен в 2018 году. Первый кроссовер в истории компании Rolls-Royce[3].' }
// ];


// const containerEl = document.querySelector('.car-container')


// const templates = ({ name, price, description }) => {

//   const artEl = document.createElement('article');
//   artEl.classList.add('car-fiernlfkm')

//     const titleEl = document.createElement('h2');
//     titleEl.classList.add('car-title');
//     titleEl.textContent = name;

//     const spanEl = document.createElement('span');
//     spanEl.classList.add('price-car');
//     spanEl.textContent = price;

//     const paragEl = document.createElement('p');
//     paragEl.classList.add('text-car');
//     paragEl.textContent = description;

//     artEl.append(titleEl, spanEl, paragEl);
    
//     return artEl

// }


// const result = productsCars.map(templates)


// containerEl.append(...result)

// console.log(result)




// const form = document.querySelector('.modal_form');


// form.addEventListener('submit',onFormSubmit)


// function onFormSubmit  (event)  {
//   event.preventDefault();



//   const dataForm = new FormData(event.currentTarget);


//   console.log(dataForm);

//   dataForm.forEach((value, name) => {


//     console.log(name, ':', value);

//   })


// };



// const peoples = [
//   {
//     name: 'Roma',
//     year: 23,
//   },
//     {
//     name: 'Petya',
//     year: 43,
// },
//   {
//     name: 'Kolya',
//     year: 18,
// },
//   {
//     name: 'Sergey',
//     year: 44,
// },
//   {
//     name: 'Kostya',
//     year: 35,
// },
//   {
//     name: 'Yura',
//     year: 31,
//   },
// ];

const colorPickerOptions = [
  { label: "red", color: 12 },
  { label: "green", color:  13},
  { label: "blue", color: 23},
  { label: "pink", color:  54},
  { label: "indigo", color: 64},
];






const getFriends = users => users.flatMap(user => user.friends).filter((element, index, arry) => arry.indexOf(element) === index);



// const a = function () {
  
//  return this.subscribers.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', ')
// }

// const b = function () {
  
//  return this.autor.toUpperCase()
// }


// const c = function () {
  
//  return this.subscribers.flatMap( h => h).reduce((un,itm) => un.includes(itm)? un : [...un,itm],[])
// }





// const user = {
//   autor: 'roma',
//   subscribers: ['roma', 'vova', 'julia', 'julia', 'julia', 'julia'],
  
// }

// user.fnA = a

// user.fnB = b;
// user.fnC = c;



// console.log(user.fnA())
// console.log(user.fnB())
// console.log(user.fnC())



// class Car {
//   constructor({ brant, modal , price } = {}) {
//     this.brant = brant;
//     this.modal = modal;
//     this.price = price;
//   };

//   newPrice(newPr) {
//     this.price = newPr;
//   }

// };



// const carOne = new Car({ brant: 'Audi', modal: 'A8', price: '100 000' });

// carOne.newPrice('110 000')


// class Truck extends Car {
//   constructor({fuel = 0 , ...rest }) {
//     super(rest)

//     this.fuel = fuel;
//   };
  
//   newPrice(newPr) {
//     this.price = newPr
//     if (newPr >= 180000) {
//     return  this.fuel = 40
//     }
//   }



  
// };

// const truckOne = new Truck({ brant: 'Daf', modal: 'EVRO 6', price: 150000 ,fuel: 25 });

// truckOne.newPrice(190000)



// console.log(truckOne)


const productsCars = [
  { name: 'Audi-A6', price: 100000, description: 'Сегодня Audi A6 предлагается в четырехдверной версии с кузовом седан и в пятидверной версии Avant (универсал), ранее выпускались также двухдверные модели, купе и хэтчбек. Спортивная модификация А6 производится под наименованием Audi S6, а наиболее мощная версия A6 производится под наименованием RS6, что расшифровывается как "RennSport"[3].' },
  { name: 'Mersedes-Benz', price: 120000, description: 'История марки Mercedes-Benz слагается из историй двух известных немецких автомобильных компаний — Benz & Cie. (основана Карлом Бенцем в 1883 году) и Daimler-Motoren-Gesellschaft (основана Готлибом Даймлером в 1890 году). Обе компании развивались самостоятельно до 1926 года, когда они объединились в единый концерн Daimler-Benz, впоследствии переименованный в Daimler AG.' },
  { name: 'Porshe-Cayenne', price: 150000, description: 'Porsche Cayenne — пятиместный среднеразмерный спортивный кроссовер производства немецкой автомобилестроительной компании Porsche. Автомобиль создан при активном участии концерна Volkswagen. Впервые был представлен публике в декабре 2002 года.' },
  { name: 'BMW-X6', price: 105000, description: 'В апреле 2009 года общественности была представлена спортивная версия X6 M, которая представляет собой модель xDrive50i с форсированным до 555 л. с. двигателем с двойным турбонаддувом. Доработке также подверглись подвеска, рулевое управление, система полного привода, выхлопная система и, в незначительной степени, элементы интерьера и экстерьера. BMW Х6 М и Х5 М стали первыми в истории BMW Motorsport автомобилями с полным приводом, турбированным двигателем и в сегменте SUV.' },
  { name: 'Rolls-Royce Cullinan', price: 500000, description: 'Rolls-Royce Cullinan (рус. Кýллинан[1], рус. Каллинан[2]) — Кроссовер от компании Rolls-Royce, который официально представлен в 2018 году. Первый кроссовер в истории компании Rolls-Royce[3].' }
];



// const containetCar = document.querySelector('.product-car')



// const makeMarkupForCar = ({ name, price, description }) => {
//   return `<div class="car-container">
//          <title class="car-title">${name}</title>
//        <span class="car-price">${price}</span>
//        <p class="car-description">${description}</p>
//      </div>`
// }

// const result = productsCars.map(makeMarkupForCar).join()


// console.log(result)

// containetCar.insertAdjacentHTML('beforebegin',result)












// const makeMarkupForCar = ({ name, price, description }) => {
   
//      return `   
//   <div class="car-container">
//         <title class="car-title">${name}</title>
//         <span class="car-price">${price}</span>
//         <p class="car-description">${description}</p>
//     </div>
// `
// };


// const cottainerCarEl = document.querySelector('.container')



// const resultMarcurCars = productsCars.map(makeMarkupForCar).join('');
// cottainerCarEl.insertAdjacentHTML('beforebegin',resultMarcurCars)

const btn1 = document.querySelector('.btn')
const btn2 = document.querySelector('.btn-add')
const btn3 = document.querySelector('.btn-remove')


btn2.addEventListener('click', () => {
  console.log('Добавляю тебе')

  btn1.addEventListener('click', iAM)
});


btn3.addEventListener('click', () => {

  console.log(`Удаляю тебе`)

  btn1.removeEventListener('click', iAM)


});


function iAM() {
  console.log('Я тут є ')
}














const cars = [
  { brand: 'Mersedes-Benz G63' },
  { brand: 'Mersedes-Benz G55' },
  { brand: 'Mersedes-Benz G50' },
  { brand: 'Mersedes-Benz S63' },
  { brand: 'Mersedes-Benz S50' },
  { brand: 'Mersedes-Benz S320' },
  { brand: 'Mersedes-Benz E55' },
  { brand: 'Mersedes-Benz E220' },
  { brand: 'Mersedes-Benz E300' },
  { brand: 'Audi A6' },
  { brand: 'Audi A6 quattro' },
  { brand: 'Audi A8 quattro' },
  { brand: 'Audi A4 quattro' },
  { brand: 'Audi A4' },
  { brand: 'BMW M4' },
  { brand: 'BMW M5' },
  { brand: 'BMW 6' },
  { brand: 'BMW M8' },
  { brand: 'BMW 4' },
];


const listCars = document.querySelector('.list-cars');

const markurCars = makeMarkutCars(cars);

listCars.innerHTML = markurCars;


const form = document.querySelector('.input-cars');

form.addEventListener('input',_.debounce(getNameCar,2000));



function makeMarkutCars(autos) {

  return autos.map(auto => `<li class="item-cars">${auto.brand}</li>`).join('')
  
};


function getNameCar(e) {
  const normalizeStr = e.target.value.toLocaleLowerCase();

  const filter = cars.filter(car => car.brand.toLocaleLowerCase().includes(normalizeStr))

  
  listCars.innerHTML = makeMarkutCars(filter);

  console.log(listCars)
};




const btnPek = document.querySelector('.click-pacture')
const textPek = document.querySelector('.pacture');



btnPek.addEventListener('click', onMagic)



btnPek.addEventListener('click', _.debounce(onMagicOne,2000))






function onMagic(e) {
  textPek.textContent = 'аххахахахаха не ожидав ??????'
}





function onMagicOne() {
   const create = document.createElement('button');
  create.type = "button"
  create.textContent = 'Ну ше на мене нажми і всьо'

  textPek.append(create)


  create.addEventListener('click', _.debounce(() => {
    alert('зня нажав ну , тепер жми окей і пока');

    textPek.textContent = ''
  }),3000)
    
  
}









// function getNameCar(e) {
//   const normalizeString = e.target.value.toLocaleLowerCase();
  
//   const filterCars = cars.filter(car => car.brand.toLocaleLowerCase().includes(normalizeString));

//   listCars.innerHTML = makeMarkutCars(filterCars);



//   // if (normalizeString !== filterCars) {
//   //   alert('Такого автомобіля немає')
//   // }

//   console.log(listCars)

// };

const textNum = document.querySelector('.textNum');
const inputNum = document.querySelector('#inputNum');

const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');


pause.setAttribute('disabled', true);
stopBtn.setAttribute('disabled', true);

inputNum.value = 0;
textNum.textContent = inputNum.value;


let interval = null;


start.addEventListener('click', onStartClickTimer);
pause.addEventListener('click', onPauseClickTimer);
stopBtn.addEventListener('click', onStopClickTimer);
inputNum.addEventListener('input', _.throttle(onLocalInput, 1000));

fillerFormFields();


function onLocalInput() {
  let dataFormValue = {};

  dataFormValue.numbertime = inputNum.value;

  localStorage.setItem('number-time', JSON.stringify(dataFormValue));
};


function fillerFormFields() {
  const valueLocalGet = localStorage.getItem('number-time');
  const normalizeParse = JSON.parse(valueLocalGet);

  if (normalizeParse) {
    inputNum.value = normalizeParse.numbertime
  };


  // console.log(valueLocalGet);
}

function onStartClickTimer() {

  interval = setInterval(() => { onTimerStart() }, 1000);

  start.setAttribute('disabled', true);
  pause.removeAttribute('disabled');
  stopBtn.removeAttribute('disabled');
  
  localStorage.removeItem('number-time');

};



function onPauseClickTimer() {
  clearInterval(interval);
  start.removeAttribute('disabled');
};


function onStopClickTimer() {
  if (confirm('Ви хочете зупинити таймер')) {
      inputNum.value = 0;
  textNum.textContent = inputNum.value;
  start.removeAttribute('disabled');
  
  pause.setAttribute('disabled', true);
  stopBtn.setAttribute('disabled', true);
  };
};

function onTimerStart() {
  if (inputNum.value > 0) {
    inputNum.value -= 1;
    textNum.textContent = inputNum.value;
  };
};


////////////====================== //////////////////



const date = new Date('Jan 1 2023 00:00:00');


let intervalntTime = null;

function counterTime() {
  let now = new Date();
  let nowTime = date - now;


  let days = addLeadingZero(Math.floor(nowTime / 1000 / 60 / 60 / 24));
  let hours = addLeadingZero(Math.floor(nowTime / 1000 / 60 / 60) % 24);
  let minutes = addLeadingZero(Math.floor(nowTime / 1000 / 60 ) % 60);
  let seconds = addLeadingZero(Math.floor(nowTime / 1000) % 60);


  


  document.querySelector('#d').textContent = days + ' days ';
  document.querySelector('#h').textContent = hours + ' hours ';
  document.querySelector('#m').textContent = minutes + ' minutes ';
  document.querySelector('#s').textContent = seconds + ' seconds ';

  intervalntTime = setInterval(() => {
  }, 1000);

    if (nowTime < 0 ){
    document.querySelector('#d').textContent =  '00' + ' days ';
    document.querySelector('#h').textContent =   '00' + ' hours ';
    document.querySelector('#m').textContent =   '00' + ' minutes ';
    document.querySelector('#s').textContent =   '00' + ' seconds ';
};
};

setInterval(() => {
  counterTime()
},1000)
function addLeadingZero(value){
    return String(value).padStart(2, '0');
};



const clockElBox = document.querySelector('#clock');

onClock() 
function onClock() {
  
 setInterval(() => {
    const date = new Date();

     let hours = zerozero(date.getHours());
     let minutes = zerozero(date.getMinutes());
     let seconds = zerozero(date.getSeconds());
     
     let clockEl = (`${hours} : ${minutes} : ${seconds}`);


    // console.log(minutes);
    
   clockElBox.textContent = clockEl;
  },1000);
}; 

function zerozero(value) {
  return value < 10 ? '0' + value : value;
};

const competitionCars = [
  'Audi',
    'Mersedes',
    'BMW',
    'Opel',
    'Range-Rover'
  ];

const promisesCars = competitionCars.map(drive);

// '✅This is victory✅'
// '❌It is loss❌'
function drive(nameCar) {
  return new Promise((resolte, reject) => {
    const speedCar = onRandomTime(1000,3000);

    setInterval(() => {
      resolte({ nameCar , speedCar});
   },speedCar)
  })
};


// Promise.race(promisesCars).then(({ nameCar, speedCar }) => console.log(`✅Виграв ${nameCar} приїхав за ${speedCar} мілісекунд✅`));

// Promise.all(promisesCars).then( x => console.log(x));


function onRandomTime(max  , min) {
  return Math.floor(Math.random() * (max - min) + min);
};




const alertBtn = document.querySelector('.alert-btn');


alertBtn.addEventListener('click', alertBtnPromice);

import notiflix from 'notiflix';

console.log(notiflix)

function alertBtnPromice(){
Notiflix.Confirm.ask(
  'Where is Padmé?',
  'Is she safe? Is she all right?',
  'It seems, in your anger, you killed her.',
  'Answer',
  'Cancel',
  function okCb() {
    alert('😡 NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!');
  },
  function cancelCb() {
    alert('😪 ...');
  },
  {
    // Custom options
  },
)

}
