window.onscroll = function() {
    scrolling();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

var logo = document.getElementById("logo");
var col1 = document.getElementById("col1");
var col2 = document.getElementById("col2");


function scrolling() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        logo.classList.add("sticky");
        col1.classList.add("sticky");
        col2.classList.add("sticky");

    } else {
        navbar.classList.remove("sticky");
        logo.classList.remove("sticky");
        col1.classList.remove("sticky");
        col2.classList.remove("sticky");

    }

}