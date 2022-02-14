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
html.addEventListener('click', function(event) {
  let div = document.createElement('div');
  div.style.display = 'inline';
  div.style.padding = `${Math.random()*50}px`;
  div.style.borderRadius = '100%';
  div.style.backgroundColor = `rgb(${Math.random()*250},${Math.random()*250},${Math.random()*250})`;
  div.style.position = 'absolute';
  div.style.top =  event.clientY  + 'px' ;
  div.style.left =  event.clientX  + 'px' ; //
  body.append(div);
});
