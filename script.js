// document.querySelector('a').addEventListener('click', function(event){
//   event.preventDefault();
//   this.textContent = "Yandex";
// });
// document.querySelector('a').addEventListener('contextmenu', function(event){
//   event.preventDefault();
//   this.style.background = "red";
// });
// document.querySelector('a').addEventListener('dblclick', function(event){
//   event.preventDefault();  
//   this.remove();
// })


// document.addEventListener('click', function(event) {
//   let div = document.createElement('div');
//   div.style.display = 'inline';
//   div.style.padding = `${Math.random()*50}px`;
//   div.style.borderRadius = '100%';
//   div.style.backgroundColor = `rgb(${Math.random()*250},${Math.random()*250},${Math.random()*250})`;
//   div.style.position = 'absolute';
//   div.style.top =  event.clientY  + 'px' ; 
//   div.style.left =  event.clientX  + 'px' ; 
//   document.body.append(div);
// });


// let list = [
//   'Apple', 'Banana', 'Cherry'
// ];
// let listElement =  document.createElement('ul');
// document.body.prepend(listElement);
// for (let i = 0; i < list.length; i++) {
//   let listItemElement = document.createElement('li');
//   listElement.append(listItemElement);
//   listItemElement.textContent = list[i];
//   listItemElement.addEventListener('click', function(event) {
//     this.style.textDecoration = "line-through";
//   });
//   listItemElement.addEventListener('dblclick', function(event) {
//     this.remove();
//   });
// };
let list = [
  'Apple', 'Banana', 'Cherry'
];
let input = document.createElement('input');
document.body.append(input);
let button = document.createElement('button');
button.textContent = "Add";
document.body.append(button);

button.addEventListener('click', function() {
  addItem(input.value);
  input.value = '';
});

let ul = document.createElement('ul');
document.body.append(ul);

list.forEach(addItem)

function addItem(text) {
  let li = document.createElement('li');
  li.textContent = text;
  ul.append(li);
  
  li.addEventListener('click', function() {
    li.style.textDecoration = 'line-through';
  })
  li.addEventListener('dblclick', function() {
    li.remove();
  })
} 
//