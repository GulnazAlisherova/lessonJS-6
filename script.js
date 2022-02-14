document.querySelector('a').addEventListener('click', function(event){
  event.preventDefault();
  this.textContent = "Yandex";
});
document.querySelector('a').addEventListener('contextmenu', function(event){
  event.preventDefault();
  this.style.background = "red";
});
document.querySelector('a').addEventListener('dblclick', function(event){
  event.preventDefault();
  this.remove();
})
