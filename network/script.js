function toggleNav() {
  var x = document.getElementById("nav");
  var y = document.getElementById("bars");
  if (x.className === "flex") {
      x.className += " responsive";
  } else {
      x.className = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll("header nav a"); 
  for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function() {
          toggleNav();
      });
  }
});
