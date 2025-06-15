"use strict";
import { greet, add, multiply, sumAll } from "./utils.js";
import { user, numbers1, numbers2 } from "./data.js";

console.log("Модульний код підключено!");
greet("Студент");

// Додавання та множення
console.log("10 + 5 =", add(10, 5));
console.log("10 * 5 =", multiply(10, 5));

// Шаблонні рядки та деструктуризація
const { name, age, city, profession } = user;
const userInfo = `👤 Користувач: ${name}, Вік: ${age}, Місто: ${city}, Професія: ${profession}`;
console.log(userInfo);

// Spread оператор
const combined = [...numbers1, ...numbers2];
console.log("Об'єднаний масив:", combined);

// Rest оператор
console.log("Сума чисел:", sumAll(1, 2, 3, 4, 5));

// Виведення на сторінку
document.getElementById("app").innerHTML = `
  <p>${userInfo}</p>
  <p>Об'єднаний масив: [${combined.join(", ")}]</p>
  <p>Сума чисел: ${sumAll(1, 2, 3, 4, 5)}</p>
`;
