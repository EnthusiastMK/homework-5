// Завдання 3:
// Створіть об'єкт змінну-об’єкт калькулятор із трьома методами:
// let calculator = {
//   // ... ваш код ...
// };
// calculator.read();
// alert(calculator.sum() );
// alert(calculator.mul() );
// alert(calculator.div() );
// read() запитує два значення та зберігає їх як властивості об'єкта.
// sum() повертає суму збережених значень.
// mul() перемножує збережені значення та повертає результат.
// div() ділить збережені значення та повертає результат.

let calculator = {
    read() {
        this.a = +prompt('Значення №1?', '');
        this.b = +prompt('Значення №2?', '');
    },
    sum: () => calculator.a + calculator.b,
    mul: () => calculator.a * calculator.b,
    div: () => calculator.a / calculator.b
};

calculator.read();
alert(calculator.sum() );
alert(calculator.mul() );
alert(calculator.div() );