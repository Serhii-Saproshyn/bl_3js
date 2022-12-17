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
