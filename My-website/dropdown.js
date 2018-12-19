function menu(){
  var x = document.getElementById("nav");
  if (x.className === "desktop"){
    x.className = "responsive";
  } else {
    x.className = "desktop";
  }
}
