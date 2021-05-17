import imageCarousel from './imageCarousel.js'

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementById("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var p1 = document.getElementById('price1');
var text1 = p1.textContent.replace(',','.').slice(0,6)
var price1 = Number(text1)

var p2 = document.getElementById('price2');
var text2 = p2.textContent.replace(',','.').slice(0,6)
var price2 = Number(text2)

var p3 = document.getElementById('price3');
var text3 = p3.textContent.replace(',','.').slice(0,6)
var price3 = Number(text3)

var p4 = document.getElementById('price4');
var text4 = p4.textContent.replace(',','.').slice(0,6)
var price4 = Number(text4)

console.log(price1,price2,price3,price4)

var c1 = document.getElementById('check1').value


console.log(c1)

function myFunction() {
  var x = document.getElementById("check1").value;
  document.getElementById("demo").innerHTML = x;
}

function handleChange() {
  var x = document.getElementById("check1").value;
  console.log(x)
}

var totalprice = 39.999 + 

imageCarousel();

handleChange();


