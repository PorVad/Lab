const newWindow = window.open('', '', 'width=300,height=300');

setTimeout(() => {
  newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
  newWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
  newWindow.close();
}, 6000);

function changeCSS() {
    let paragraph = document.getElementById('text');
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Comic Sans MS';
}
  
let button = document.querySelector('button');
button.addEventListener('click', changeCSS);

let button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});

let button2 = document.getElementById('button2');
button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'pink';
});

let button3 = document.getElementById('button3');
button3.addEventListener('mousedown', function() {
  document.body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function() {
  document.body.style.backgroundColor = 'white';
});

let link = document.getElementById('link');
link.addEventListener('mouseover', function() {
  document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function() {
  document.body.style.backgroundColor = 'white';
});

let select = document.getElementById('mySelect');
let deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', function() {
  let selectedOption = select.options[select.selectedIndex];

  select.remove(select.selectedIndex);
  console.log('Deleted option: ' + selectedOption.value);
});

let but = document.getElementById('myButton');

but.addEventListener('click', () => {
  console.log('I was pressed!');
});

but.addEventListener('mouseover', () => {
  console.log('Mouse on me!');
});

but.addEventListener('mouseout', () => {
  console.log('Mouse is not on me!');
});

let widthElement = document.getElementById('width');
let heightElement = document.getElementById('height');

function updateWindowSize() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    widthElement.textContent = windowWidth;
    heightElement.textContent = windowHeight;
}

updateWindowSize();

window.addEventListener('resize', updateWindowSize);

let width = document.getElementById('width');
let height = document.getElementById('height');

function updateWindowSize() {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  widthElement.textContent = windowWidth;
  heightElement.textContent = windowHeight;
}

updateWindowSize();

window.addEventListener('resize', updateWindowSize);
