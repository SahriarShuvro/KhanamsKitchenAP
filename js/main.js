// Hamburger Menu Start
{
    // Home Page Start 
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".main-menu");
    const slideOff = document.getElementById("slider-id");
    const disableMenu = document.getElementById("main-sub-menu");



    hamburger.addEventListener("click", () => {
        slideOff.classList.toggle("active-slideOff");
        hamburger.classList.toggle("activeHamburger");
    });

    document.querySelectorAll(".menu-list").forEach(n => n.addEventListener("click", () => {
        slideOff.classList.remove("active-slideOff");
        hamburger.classList.remove("activeHamburger");
    }));
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("activeHamburger");
    });
    document.querySelectorAll(".menu-list").forEach(n => n.addEventListener("click", () => {
        menu.classList.remove("activeHamburger");
    }));
    hamburger.addEventListener("click", () => {
        disableMenu.classList.toggle("disableMenu");
    });
    // **********************
    // **********************
    // Home Page End
    // Menu Page Start 
    const swtichOff = document.getElementById("switch-box");


    hamburger.addEventListener("click", () => {
        swtichOff.classList.toggle("active-slideOff");
    });
    document.querySelectorAll(".menu-list").forEach(n => n.addEventListener("click", () => {
        swtichOff.classList.remove("active-slideOff");
    }));
}

// Hamburger Menu End



var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Jacascrpt for image slider manual navigation 
var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});


// Javascript for image slider autoplay navigation 

var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });


            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();


// Menu Bar Stiky Start


window.onscroll = function() { myFunction() };

let navHeader = document.getElementById("menuBar");
let container = document.getElementById("cntn-js");
let stickyNav = navHeader.offsetTop;

function myFunction() {
    if (window.pageYOffset > stickyNav) {
        navHeader.classList.add("sticky");
        container.classList.add("cntn-css");
    } else {
        navHeader.classList.remove("sticky");
        container.classList.remove("cntn-css");
    }
};
// Menu Bar Stiky End
// Switch Section Start 
{
    let toggle = document.getElementById('switch');
    let background = document.getElementById('switch-box');
    let lunch = document.getElementById('menu-cards-sections-l');
    let dinner = document.getElementById('menu-cards-sections-d');
    let lunchDinner = document.getElementById('main-card-l-d');


    let switchOn = toggle.onclick = function() {
        toggle.classList.toggle('switchOn');
        background.classList.toggle('backgroundSwitchOn');
        lunch.classList.toggle('active-lunch');
        dinner.classList.toggle('active-dinner');
        lunchDinner.classList.toggle('lunchDinner');
    };
};




// Switch Section End