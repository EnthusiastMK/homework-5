// Завдання 2:
// У нас є об'єкт, у якому зберігаються зарплати нашої команди:
// const salaries = {
//  Vlad: 100,
//  Alina: 130,
//  Roman: 110,
//  Alex: 120,
// };
// Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. 
// Якщо об'єкт salaries порожній, то результат має бути 0.

const salaries = {
    Vlad: 100,
    Alina: 130,
    Roman: 110,
    Alex: 120,
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);