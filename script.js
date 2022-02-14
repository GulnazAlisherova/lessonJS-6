document.querySelector('a').addEventListener('click', function(event){
  event.preventDefault();
  this.textContent = "Yandex";
});
