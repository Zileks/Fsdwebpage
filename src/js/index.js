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

imageCarousel();

