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

const login = prompt("Hello, please enter your login!");
const loginTrue = "admin";
const passTrue = "adminPassword";
if (login === null) {
  console.log("Authorization has been canceled");
} else if (login.toLowerCase() === loginTrue) {
  const pass = prompt("Please enter your password");
  if (pass === passTrue) {
    console.log("Hello!");
  } else if (pass === null) {
    console.log("Authorization has been canceled");
  } else {
    console.log("Goodbye");
  }
} else {
  console.log("Goodbye");
}
