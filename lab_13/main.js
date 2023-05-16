/////Перше завдання/////
const arr = [106, "centimeteres", true, null];

alert(arr.length);

let userData = prompt("Введіть будь яке значення");
arr[4] = userData;

alert(arr[4]);

arr.shift();

alert(arr);

/////Друге завдання/////
let cities = ["Ternopil", "Lviv", "Warsaw"];
let result = cities.join("*");

console.log(result);

/////Третє завдання/////
let num = [2, 3, 4, 5];
let ans = 1;
let i = 0;

for(i = 0; i < num.length; i++){
  ans *= num[i];
}

console.log(ans);

while(i < num.length){
    ans *= num[i];
}

console.log(ans);


/////Четверте завдання/////
for(let i = 0; i <= 15; i++){
    if(i % 2 == 0){
        console.log(i + "is even");
    }
    else{
        console.log(i + " is odd");
    }
}

/////П'яте завдання/////
function randArray(k){
    let rand = [];

    for(let i = 0; i < k; i++){
      rand[i] = Math.floor(Math.random() * 501);
    }

    return rand;
}

console.log(randArray(5));
  
/////Шосте завдання/////
function raiseToDegree(a, b) {
    let degree = Math.pow(a, b);

    return degree;
}

let a = prompt("Введіть число");
let b = prompt("Введіть степінь");

console.log(raiseToDegree(a, b));

/////Сьоме завдання/////
function findMin(){
    if(arguments.length == 0){
        return undefined;
    }

    let min = arguments[0];

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] < min){
            min = arguments[i];
        }
    }

    return min;
}

console.log(findMin(5,3, -5, 0, -9));

/////Восьме завдання/////
function findUnique(difer) {
    for(let i = 0; i < difer.length; i++){
        for(let j = i + 1; j < difer.length; j++){
            if(difer[i] == difer[j]){
                console.log("false");
            }
        }
    }

    return true;
}

findUnique([3, 5, 5, 1]);

/////Дев'яте завдання/////
function lastElem(last, x) {
    if(x >= last.length){
        return last;
    }
    else{
        return last.slice(last.length - x);
    }
}

console.log(lastElem([3, 4, 1, 7, 8], 2));

/////Десяте завдання/////
function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    let capitalizedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    return capitalizedWords.join(' ');
}
  
  console.log(capitalizeFirstLetter('hello world'));
  