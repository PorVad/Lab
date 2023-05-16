/////Перше завдання/////
function calcRectangleArea(width, height){
    if(typeof width !== 'number' || typeof height !== 'number'){
        throw new Error("Значення мають бути числові");
    }

    let s = width * height;

    return s;
}

try {
    console.log(calcRectangleArea(4, 5));
} catch (exception) {
    console.log(exception.message);
}

/////Друге завдання/////
function checkAge() {
    try {
        let userage = prompt('Enter your age');

        if (userage == "") {
            throw new Error("The field is empty! Please enter your age");
        }

        let age = parseInt(userage);

        if (typeof age !== 'number') {
            throw new Error("The field is not number! Please enter your age");
        }
        if (age < 14) {
            throw new Error("You are to young! Please enter your age");
        }

        alert("Ви можете подивитись фільм");
    } catch (error) {
        console.log(error.message);
    }
}

checkAge();

/////Третє завдання/////
function showUser(id) {
    try {
        if(id < 0){
            throw new Error("Ваш id: " + id + " менший за 0");
        }
    } catch (error) {
        console.log(error.message);
    }

    return id;
}

function showUsers(ids) {
    for (let i = 0; i < ids.length; i++) {
        showUser(ids[i]);
    }
    
    return ids;
}

console.log(showUsers([2, 4, -7, 0, -1]));

/////Четверте завдання/////
class MonthException {
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }
  
  function showMonthName(month) {
    const months = [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень'
    ];
  
    if (month < 1 || month > 12) {
      throw new MonthException('Incorrect month number');
    }
  
    return months[month - 1];
  }
  
  try {
    console.log(showMonthName(4));
    console.log(showMonthName(15));
  } catch (error) {
    if (error instanceof MonthException) {
      console.log('Сталася помилка: ' + error.message);
    }
    else {
      throw error;
    }
  }
  