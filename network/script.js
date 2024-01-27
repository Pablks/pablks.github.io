function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "flex") {
      x.className += " responsive";
    } else {
      x.className = "flex";
    }
  }