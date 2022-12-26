const navbar_button = document.getElementById("navbar-button");
const navbar = document.querySelector(".navbar");

navbar_button.addEventListener("click",function(){
    navbar.classList.toggle("active");
});

// window.onscroll = function(){
//     navbar.classList.remove("active");
// };