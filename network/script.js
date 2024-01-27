function toggleNav() {
  var x = document.getElementById("nav");
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
      var nav = document.getElementById("nav");
      if (nav.className.includes("responsive")) {
          nav.className = "flex";
      }
    });
  }
});
