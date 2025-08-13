const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburger = document.getElementById('hamburger');
const shadow = document.getElementById('shadow');
const closeIcon = document.getElementById('closeIcon');
hamburgerIcon.onclick = function() {
    hamburger.style.left = "0px";
    shadow.style.display = "block";
}
closeIcon.onclick = function() {
    hamburger.style.left = "-100%";
    shadow.style.display = "none";
}
