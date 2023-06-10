let text = document.getElementById("first");
text.innerHTML = "Last";

let element = document.querySelector("#first");
element.innerHTML = "Last";

let imageElement = document.querySelector(".image");
imageElement.src = "cat.jpg";

let imageContent = imageElement.outerHTML;
window.alert(imageContent);

const paragraphs = document.querySelectorAll('#text p');

paragraphs.forEach((paragraph, index) => {
  console.log(`Selector text ${index}: ${paragraph.textContent}`);
});

const list = document.querySelector('#list');
const items = list.querySelectorAll('li');

console.log(items[0].textContent);
console.log(items[items.length - 1].textContent);
console.log(items[1].textContent);
console.log(items[3].textContent);
console.log(items[2].textContent);

const myDiv = document.getElementById('myDiv');
const myList = document.getElementById('myList');
const h1 = document.querySelector('h1');
const firstParagraph = myDiv.querySelector('p:first-child');
const secondParagraph = myDiv.querySelector('p:nth-child(2)');
const thirdParagraph = myDiv.querySelector('p:nth-child(3)');
const fourthParagraph = myDiv.querySelector('p:nth-child(4)');
const span = document.querySelector('span');

h1.style.backgroundColor = 'green';
h1.style.fontWeight = 'bold';
firstParagraph.style.fontWeight = 'bold';
secondParagraph.style.color = 'red';
thirdParagraph.style.textDecoration = 'underline';
fourthParagraph.style.fontStyle = 'italic';
myList.classList.add('green-bg', 'bold-text');
span.classList.add('invisible');

const userInput1 = prompt('Введіть перше повідомлення:');
const userInput2 = prompt('Введіть друге повідомлення:');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

input1.value = userInput1;
input2.value = userInput2;

const temp = input1.value;
input1.value = input2.value;
input2.value = temp;

const main = document.createElement('main');
main.className = 'mainClass check item';
const div = document.createElement('div');
div.id = 'myDiv';
const p = document.createElement('p');
p.textContent = 'First paragraph';

div.appendChild(p);
main.appendChild(div);
document.body.appendChild(main);