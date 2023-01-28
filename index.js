//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "Вірно!"
//у противному випадку показати:"Не знаєте? ECMAScript!"

//1 варіант
// const result = prompt("Яка офіційна назва JavaScript?");
// if (result === "ECMAScript" ) {
//   alert("Вірно");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

//2 варіант
// const result = prompt("Яка офіційна назва JavaScript?");
// const message = result === "ECMAScript" ? "Вірно" : "Не знаєте? ECMAScript!";
// alert(message);

//2. Напишіть програму, яка отримує від користувача через prompt()
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const question = prompt("Введіть число");
// const hours = String(Math.floor(Number(question) / 60)).padStart(2, "0");
// const minutes = String(Number(question) % 60).padStart(2, "0");
// const answer = `${hours}:${minutes}`;

// console.log(answer)

//3. Напишіть цикл, який виводе в консоль
//числа від max до min по зменшенню
// Виведіть в консоль усі парні числа від max до min
// const max = 12;
// const min = 2;
// for (let i = max; i >= min; i -= 1) {
//    if (i%2 === 0) {console.log(i);
//    }
// }
//4. За допомогою циклу for знайдіть добуток усіх парних чисел у проміжку від min до max включно

// const max = 12;
// const min = 2;
// let total = 1;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {

//         total *= i;
//    }
// }
// console.log(total);

// 5. Напишіть код, який буде запитувати "Hello, please enter your login!"
//логін за допомогою prompt і логувати результат у консоль браузера

//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been canceled"
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password).

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been canceled"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"

// const login = prompt("Hello, please enter your login!");
// const loginTrue = "admin";
// const passTrue = "adminPassword";
//
//
// var 1
// if (login === null) {
//   console.log("Authorization has been canceled");
// } else if (login.toLowerCase() === loginTrue) {
//   const pass = prompt("Please enter your password");
//   if (pass === passTrue) {
//     console.log("Hello!");
//   } else if (pass === null) {
//     console.log("Authorization has been canceled");
//   } else {
//     console.log("Goodbye");
//   }
// } else {
//   console.log("Goodbye");
// }
//
//
// var 2
// switch (login) {
//   case null:
//     console.log("Authorization has been canceled");
//     break;

//   case "admin":
//     const pass = prompt("Please enter your password");
//     switch (pass) {
//       case null:
//         console.log("Authorization has been canceled");
//         break;

//       case passTrue:
//         console.log("Hello!");
//         break;
//       default:
//         console.log("Goodbye");
//         break;
//     }
//     break;

//   case !"admin":
//     console.log("Goodbye");
//     break;
//   default:
//     console.log("Goodbye");

//     break;
// }

//7. Напишіть цикл, який пропонує ввести
//число більше 100 через prompt 'Hello, enter please the number greater then 100.' та виводить його у alert, якщо умова виконана
//Якщо користувач ввів інше число, то попросити ввести ще раз і так далі.
//Цикл повинен запитувати число, поки користувач не введе число більше 100.
// Якщо користувач натисне кнопку відміни у prompt, то у alert треба вивести 'Goodbye'.

// let number;

// do {
//   number = prompt('Hello, enter please the number greater then 100.', "");
// } while (number < 100 && number !== null);
// if (number === null) {alert('Goodbye')
// } else {console.log("Ввели пароль: ", number);}

//6. При завантаженні сторінки користувачу у prompt пропонується ввести число 'Hello, enter please the number.'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel у prompt.
//Після того, як користувач припинив введення і натиснув кнопку Cancel, показати alert з рядком "The total sum of the entered numbers is [number]."
//Робити перевірку, що користувач ввів саме число, а не інший тип даних не потрібно.

// let num = prompt("Hello, enter please the number.", "");
// let total = 0;

// while (num !== null) {
//   total += Number(num);
//   num = prompt("Hello, enter please the number.", "");
// }
// alert(`The total sum of the entered numbers is ${total}.`)

//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе зміст об'єкта users у форматі:
//name: John
//age: 20
//hobby: skydiving
//premium: false
//mood: happy

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
//     console.log(key,':' , user[key]);
// }

//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 100,
//   poly: 160,
//   ajax: 1470,
// };
// const getTotalSalary= (salaries) => {
//   const salaryUsers = Object.values(salaries);
//   let totalSalary = 0;
//   for (const value of salaryUsers) {
//     totalSalary += value
//   }
//   return totalSalary;
// }
// console.log(getTotalSalary(salaries))
// 3. Напишіть фукцію calcTotalPrice(stones, stonesName),
// яка приймає масив об'єктів і рядок з назвою каменю.
// Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1000, quantity: 4 },
//   { name: "emerald", price: 1000, quantity: 3 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },
// ];
// const calcTotalPrice = (stones, stonesName) => {
//   const totalPrice = stones
//     .filter((stone) => stone.name === stonesName)
//     .reduce((total, stone) => total + stone.price * stone.quantity, 0);
//   return totalPrice;
// };
// console.log(calcTotalPrice(stones, "emerald"));

//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//   read(a, b) {
//     if (Number(a) && Number(b)) {this.prop1 = a; this.prop2 = b
//     return
//     }
//     console.log('Is not a number')
//   },
//   sum() {
//     if (this.prop1 && this.prop2) {
//       return Number(this.prop1) + Number(this.prop2);
//     } return null;
//   },
//   mult() {if (this.prop1 && this.prop2) {
//       return this.prop1 * this.prop2;
//     } return null;},
// };
// calculator.read(2, '100')
// console.log("calculator", calculator)
// console.log("calculator.sum", calculator.sum())
// console.log("calculator.mult", calculator.mult())
//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}
// const updateObject = (object, ...keys) => {
//   const newObject = { ...object };
//   for (const key of keys) {
//     delete newObject[key];
//   }
//   return newObject;
// };
// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a", "c"));

// 8. Напиши скрипт керування особистим кабінетом інтернет банку.
//Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією трансакцій
//Типів трансакцій усього два. Можна поповнити рахунок або списати з нього гроші.
//
// const TYPES_TRANSACTION = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
//Кожна трансакція має мати властивості: id, type, amount.

// const account = {
//поточний баланс рахунку
// balance: 0,

//Історія трансакцій
// transactions: [],

//Метод приймає суму та тип трансакції і створює та додає у transactions об'єкт трансакції за зразком {id, type, amount}
//  /
//Метод відповідає за додавання суми до балансу.
//Приймає суму трансакції.
//Викликає createTransaction для створення об'єкта трансакції після чого додає його в історію трансакцій
// deposit(amount) {
// this.balance += amount;
// },

//Метод відповідає за списання коштів з балансу.
//Приймає суму трансакції, викликає createTransaction для створення об'єкту трансакції
//післе чого додає його в історію трансакцій
//Якщо amount більше ніж поточний баланс, виводимо повідомлення про те, що недостатньо коштів на рахунку
// withdraw(amount) {},

//Метод повертає поточний баланс
// getBalance() {},

//Метод шукає та повертає об'єкт трансакції по id
// getTransactionDetails(id) {},

//Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
//   getTotalSumByType(type) {},
// };

// account.createTransaction("deposit", 1000);
// console.log(account.transactions);

// console.log(account.balance);

//1. Напишіть дві функції
// letMeSeeYourName(callback) - має запитувати ім'я користувача через prompt і викликати callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не пустий

// function letMeSeeYourName(callback) {
//   const name = prompt("What is your name?");
//   if (!name) {
//     alert("Please enter your name");
//     return;
//   }
//   callback(name);
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);
// / 2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентіфікатор у властивість id та викликає callback
//передаючи йому створений об'єкт.
//showProduct(product) - коллбек, що приймає об'єкт
//продукта і логірує його в консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Date.now()
//   };
// callback(product)

// }
// function showProduct(product) {
//   console.log(product);
// }
// makeProduct("wine", 150, showProduct)

// 3. Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), яка памятає ім'я шефа під час її виклику
//Функція makeDish має логіровать "<shef> is cooking <dish>"

// function makeShef(shefName) {
//   function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   }
//   return makeDish;
// }
// const serhiy = makeShef("Serhiy");
// serhiy("Stake");
// const maryna = makeShef("Maryna");
// maryna("Cake");
