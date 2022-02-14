let a = document.createElement('a');
 let linkText = document.createTextNode("GOOGLE");
 a.appendChild(linkText);
 a.href = "https://google.com";
 document.body.appendChild(a);

 document.querySelector('a').addEventListener('dbclick', function(event){
  console.log("YAHOO");
});