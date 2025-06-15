"use strict";

// Функція привітання
export function greet(name) {
  console.log(`Привіт, ${name}!`);
}

// Додавання
export const add = (a, b) => a + b;

// Множення
export const multiply = (a, b) => a * b;

// Сума всіх аргументів (rest оператор)
export const sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);
