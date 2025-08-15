const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburger = document.getElementById('hamburger');
const shadow = document.getElementById('shadow');
const closeIcon = document.getElementById('closeIcon');
const sun = document.getElementById("sun");
let dark = false;
hamburgerIcon.onclick = function() {
    hamburger.style.left = "0px";
    shadow.style.display = "block";
}
closeIcon.onclick = function() {
    hamburger.style.left = "-100%";
    shadow.style.display = "none";
}
sun.onclick = function(){
    // set dark mode
    if (!dark)
    {
        setDark();
        localStorage.setItem("theme", "dark");
    }
    else
    {
        setLight();
        localStorage.setItem("theme", "light");
    }
    dark = !dark;
}

function setDark(){
    document.documentElement.style.setProperty("--background-color", "rgb(17, 24, 39)");
    document.documentElement.style.setProperty("--near-bg", "#1D2735");
    document.documentElement.style.setProperty("--expert-bg", "#1D2735");
    document.documentElement.style.setProperty("--get-bg", "#251E2B");
    document.documentElement.style.setProperty("--primary-color", "white");
    document.documentElement.style.setProperty("--hover", "#242a38");
    sun.setAttribute("class", "fa-regular fa-moon navRightIcon");
}
function setLight(){
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--near-bg", "#EEF1F6");
    document.documentElement.style.setProperty("--expert-bg", "#F5F7FA"); 
    document.documentElement.style.setProperty("--get-bg", "#FBEEEE"); 
    document.documentElement.style.setProperty("--primary-color", "rgb(17, 24, 39)");
    document.documentElement.style.setProperty("--hover", "#F2F3F5");
    sun.setAttribute("class", "fa-regular fa-moon navRightIcon");
}


const customizeBtn = document.getElementById('customizeBtn');
const colors = document.getElementById('colors');
customizeBtn.onclick = function() {
    colors.style.right = "0px";
}
const asideClose = document.getElementById('asideClose');
asideClose.onclick = function() {
    colors.style.right = "-100%";
}

const btnPicker = document.getElementById('btnPicker');
btnPicker.addEventListener("input", function(e) {
    document.documentElement.style.setProperty("--btn", e.target.value);
    localStorage.setItem("btn", e.target.value);
})
const starPicker = document.getElementById('starPicker');
starPicker.addEventListener("input", function(e) {
    document.documentElement.style.setProperty("--star", e.target.value);
    localStorage.setItem("star", e.target.value);
})
const btnHoverPicker = document.getElementById('btnHoverPicker');
btnHoverPicker.addEventListener("input", function(e) {
    document.documentElement.style.setProperty("--btn-hover", e.target.value);
    localStorage.setItem("btn-hover", e.target.value);
})
const headerPicker = document.getElementById('headerPicker');
headerPicker.addEventListener("input", function(e) {
    document.documentElement.style.setProperty("--header-bg", e.target.value);
    localStorage.setItem("header-bg", e.target.value);
})
const resetBtn = document.getElementById('resetBtn');
resetBtn.onclick = function() {
    localStorage.clear();
    resetColors();
}
function resetColors() {
    document.documentElement.style.setProperty("--btn", "#D85151");
    document.documentElement.style.setProperty("--btn-hover", "#C92D2D");
    document.documentElement.style.setProperty("--header-bg", "#3D7A81");
    document.documentElement.style.setProperty("--star", "#fc9231");
    btnPicker.value = "#D85151";
    starPicker.value = "#fc9231";
    btnHoverPicker.value = "#C92D2D";   
    headerPicker.value = "#3D7A81";
}
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        setDark();
        dark = true;
    }
    if (localStorage.getItem("btn")) {
        document.documentElement.style.setProperty("--btn", localStorage.getItem("btn"));
        btnPicker.value = localStorage.getItem("btn");
    }
    if (localStorage.getItem("star")) {
        document.documentElement.style.setProperty("--star", localStorage.getItem("star"));
        starPicker.value = localStorage.getItem("star");
    }
    if (localStorage.getItem("btn-hover")) {
        document.documentElement.style.setProperty("--btn-hover", localStorage.getItem("btn-hover"));
        btnHoverPicker.value = localStorage.getItem("btn-hover");
    }
    if (localStorage.getItem("header-bg")) {
        document.documentElement.style.setProperty("--header-bg", localStorage.getItem("header-bg"));
        headerPicker.value = localStorage.getItem("header-bg");
    }
}