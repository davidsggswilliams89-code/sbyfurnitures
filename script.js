/* =========================================================
SECTION 01
SBY FURNITURES HEADER JAVASCRIPT
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

/* MOBILE MENU */

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

/* CLOSE MENU WHEN LINK IS CLICKED */

document.querySelectorAll(".navbar a").forEach(link=>{
    link.addEventListener("click",()=>{
        navbar.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

/* DARK / LIGHT MODE */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark");
    themeIcon.className = "fa-solid fa-sun";
}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeIcon.className = "fa-solid fa-sun";
        localStorage.setItem("theme","dark");
    }else{
        themeIcon.className = "fa-solid fa-moon";
        localStorage.setItem("theme","light");
    }

});

/* STICKY HEADER SHADOW */

window.addEventListener("scroll",()=>{

    const header = document.querySelector(".header");

    if(window.scrollY > 20){
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
    }else{
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.08)";
    }

});
