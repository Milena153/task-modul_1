//задание 1

//let num = prompt('Введите любое число,чтобы проверить, является ли оно четным или нечетным:');
//  if (num % 2 == 0 ){
//     console.log('Число четное')
//  }else{
//     console.log('Предоставленное число нечетное') 
//  };

//задание 2

// let num1 = prompt('Введите первое число:');
// let num2 = prompt('Введите второе число:');
//  if (num1 == num2 ){
//     console.log('Числа равны');
//  }else if(num1 > num2){
//     console.log('первое число больше');
//  }else if(num1 < num2){
//     console.log('второе число больше');
//  }

// задание 3

// let nameLogin = prompt('Введите логин: ');
// let password = prompt('Введите пароль:');
//  if (nameLogin == 'user123' && password == '321' ){
//     console.log('Доступ разрешен');
//  }else{
//     console.log('Доступ запрещен');
//  }

//задание 4

// let n = prompt('введите число n: ');
// let numb = 1;
// let sum = 0;
// while (numb < n) {
//     sum += numb;
//     numb++;
//   }
// console.log(sum);

//задание 5

// for (let i = 1; i <= 3;  i += 1) {
//     for (let j = 1; j <= 9; j += 1) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//   };

//задание 6

// let num1 = prompt('введите первое число: ');
// let num2 = prompt('введите второе число: ');
// let num3 = prompt('введите третье число: ');
// let maxNum = Math.max(num1,num2,num3);
// alert(maxNum)

//задание 7

// for (let i = 1; i <=20 ; i++) { // выведет 0, затем 1, затем 2
//     if (i % 3 == 0){
//         console.log(i);
//     }
//   }

//задание 8
//Напишите программу, которая запрашивает у пользователя число и проверяет, является ли оно положительным. НЕ ПОНЯЛА КАК ЭТО ДЕЛАТЬ 

//задание 9

// let a = prompt('введите номер 1-7: ') ;
// switch (a) {
//     case '1':
//     alert('Понедельник');
//     case '2':
//     alert('Вторник');
//     break;
//     case '3':
//     alert('Среда');
//     break;
//     case '4':
//     alert('Четверг');
//     break;
//     case '5':
//     alert('Пятница');
//     break;
//     case '6':
//     alert('Суббота');
//     break;
//     case '7':
//     alert('Воскресенье');
//     break;
//     default:
//     alert('Нет таких значений');
// }

//задание 9

// function greet(name) {
//   console.log(`hello,${name}!`);
// }
// greet('milena')

//задание 10

// function sum(a,b){
//     return  a + b;
    
// }

//задание 11

// function circleArea(r){
//     return Math.PI * r * r;
// }

//задание 12

// function isEven(n){
//     return n % 2 === 0;
// }

//Задание 13
//Функция преобразования температуры, Напишите функцию convertTemperature(c). НЕ ПОНЯЛА КАК ЭТО ДЕЛАТЬ

//ЗАДАЧИ ПОВЫШЕННОЙ СЛОЖНОСТИ

//задание 1
// while (true){
//     let age = prompt('введите ваш возраст: ');
//     break
// };
// function checkName() {
//     const name = prompt('введите ваше имя');

// };
// function checkAge(age){
//     if (age < 18){
//         return 'вы не совершеноетний';
//     } else{
//         return 'вы совершеноетний';
//     }
// };
// alert(name,age)

//задание 2
function checkAge(age) {
    if (age < 18) {
        return "Вы еще не совершеннолетний";
    } else {
        return "Вы совершеннолетний";
    }
}

function checkSex(sex) {
    if (sex === "мужской") {
        return "Вы мужчина";
    } else if (sex === "женский") {
        return "Вы женщина";
    } else {
        return "Пол не указан";
    }
}

function checkMaritalStatus(status) {
    if (status === "женат" || status === "замужем") {
        return "Вы женаты/замужем";
    } else if (status === "не женат" || status === "не замужем") {
        return "Вы не женаты/не замужем";
    } else {
        return "Семейное положение не указано";
    }
}

let name = prompt("Введите ваше имя:");
let age;
while (true) {
    age = parseInt(prompt("Введите ваш возраст:"));
    if (!isNaN(age) && age >= 0) {
        break;
    }
    alert("Введите корректный возраст");
}

let sex = prompt("Введите ваш пол (мужской/женский):");
let maritalStatus = prompt("Введите ваше семейное положение (женат/замужем/не женат/не замужем):");

let ageMessage = checkAge(age);
let sexMessage = checkSex(sex);
let maritalMessage = checkMaritalStatus(maritalStatus);

alert(`Привет, ${name}!\n${ageMessage}\n${sexMessage}\n${maritalMessage}`);