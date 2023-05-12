/////////Перше завдання/////////
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = String(y);
console.log(true + res2);
console.log(typeof res2);

let res3 = Boolean(x < y);
console.log(res3);
console.log(typeof res3);

let res4 = parseInt("nm");
console.log(res4);
console.log(typeof res4);

/////////Друге завдання/////////
let usernumber = prompt("Введіть своє число");

if(usernumber > 0 && usernumber % 2 == 0 && usernumber % 7 == 0){
    console.log("Ваше число є додатнім і парним та кратне 7");
}
else{
    console.log("Ваше число не підходить");
}

/////////Третє завдання/////////
let isAdult = prompt("Скільки вам років?");

if(isAdult < 18){
    alert("Ви ще надто молоді");
}
else{
    alert("Ви досягли повнолітнього віку");
}

/////////Четверте завдання/////////
let a = prompt("Введіть сторону трикутника");
let b = prompt("Введіть сторону трикутника");
let c = prompt("Введіть сторону трикутника");

if(a < 0 || b < 0 || c < 0){
    console.log("Incorrect data");
}
else{
    let p, S;

    p = (a + b + c) / 2;
    S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    console.log("Площа трикутника: " + S.toFixed(3));
}

/////////П'яте завдання/////////
const date = new Date();
const hour = date.getHours();

if (hour >= 23 || hour < 5){
  console.log("Доброї ночі");
}
else if (hour >= 5 && hour < 11){
  console.log("Доброго ранку");
}
else if (hour >= 11 && hour < 17){
  console.log("Доброго дня");
}
else{
  console.log("Доброго вечора");
}

switch (true){
  case hour >= 23 || hour < 5:
    console.log("Доброї ночі");
    break;

  case hour >= 5 && hour < 11:
    console.log("Доброго ранку");
    break;

  case hour >= 11 && hour < 17:
    console.log("Доброго дня");
    break;
    
  default:
    console.log("Доброго вечора");
    break;
}
