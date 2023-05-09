/////////Друге завдання/////////
console.log("Porada");

/////////Третє завдання/////////
let data1 = 30;
let data2 = "Table";
let data3 = data1;

document.write(data1);
document.write(data2);
document.write(data3);

/////////Четверте завдання/////////
let string;
let number;
let bool;
let x;
let y;

const obj = {
string: "Note",
number: 106,
bool: false,
y: 2000,
y: null
};

/////////П'яте завдання/////////
let isAdult = confirm("Вам виповнилось 18 років");
alert( isAdult );

/////////Шосте завдання/////////
let name = "Vadym";
let surname = "Porada";
let group = "КН-321";
let year = 2005;
let family = false;
let wall = null;
let q;

console.log("Year: " + year + " Family status: " + family + " Name: " + name + " Surname: " + surname + " Group: " + group);
console.log(typeof wall, typeof q);

/////////Сьоме завдання/////////
let username = prompt("What is your name?");
let email = prompt("What is your email?");
let password = prompt("What is your password?");

alert("“Dear " + username + " , your email is " + email + ", your password is " + password);

/////////Восьме завдання/////////
let hour, day, month;

hour = 60 * 60;
day = hour * 24;
month = day * 30;

document.write("Second in hour: " + hour + " Second in day: " + day + " Second in month: " + month);