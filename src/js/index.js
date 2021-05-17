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







function myFunction() {
  var isChecked1 = document.getElementById('check1').checked;
  var isChecked2 = document.getElementById('check2').checked;
  var isChecked3 = document.getElementById('check3').checked;
  var isChecked4 = document.getElementById('check4').checked;
  console.log(isChecked1,isChecked2,isChecked3,isChecked4);

  if(isChecked1){
    var price1 = 278.6;
  }
  else{
      price1 = 0;
  }
  if(isChecked2){
    var price2 = 558.78;
  }
  else{
      price2 = 0;
  }
  if(isChecked2){
    var price3 = 357.29;
  }
  else{
      price3 = 0;
  }
  if(isChecked3){
    var price4 = 637.48;
  }
  else{
      price4 = 0;
  }
  
  var price = 39999;
  var totalValue = price + price1 + price2 + price3 + price4;
  
} 

imageCarousel();

myFunction();


