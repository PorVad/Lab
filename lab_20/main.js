let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

function mul(...args) {
  let result = args.filter(arg => typeof arg === 'number').reduce((a, b) => a * b, 1);
  return result || 0;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

function mapBuilder(keysArray, valuesArray) {
  let map = new Map();
  keysArray.forEach((key, index) => {
    map.set(key, valuesArray[index]);
  });
  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
