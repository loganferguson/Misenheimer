const swup = new Swup();

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navHome = document.getElementById('nav-home');
const navMenuMobile = document.getElementById('nav-menu-mobile');
const navItemMobile = document.getElementById('nav-item-mobile');
const navItemMobile2 = document.getElementById('nav-item-mobile2');
const navMusic = document.getElementById('nav-music');
const navAbout = document.getElementById('nav-about');

hamburger.addEventListener('click', () => {

    if(navMenuMobile.style.height !=="0%"){
        closeNav();
    } else {
        openNav();
    }
        
});

function openNav() {
    navMenuMobile.style.height = "100%";
    navMenuMobile.style.borderLeft = "4px solid #fdffff";
    navMenuMobile.style.borderBottom = "4px solid #000000";
    navMenuMobile.style.borderRight = "4px solid #000000";

    navItemMobile.style.borderBottom = "4px solid #000000";
    navItemMobile.style.borderTop = "4px solid #fdffff";
    navItemMobile.style.borderRight = "4px solid #000000";

    navItemMobile2.style.borderBottom = "4px solid #000000";
    navItemMobile2.style.borderTop = "4px solid #fdffff";
    navItemMobile2.style.borderRight = "4px solid #000000";
  };
  
function closeNav() {
    navMenuMobile.style.height = "0%";
    navMenuMobile.style.borderLeft = "none";
    navMenuMobile.style.borderBottom = "none";
    navMenuMobile.style.borderRight = "none";

    navItemMobile.style.borderBottom = "none";
    navItemMobile.style.borderTop = "none";
    navItemMobile.style.borderRight = "none";

    navItemMobile2.style.borderBottom = "none";
    navItemMobile2.style.borderTop = "none";
    navItemMobile2.style.borderRight = "none";

  };

// This toggles mobile menu when a menu item is clicked.

navHome.addEventListener('click', () => {
    if(navMenuMobile.style.height == "100%"){
        closeNav();
    } 
});

navMusic.addEventListener('click', () => {
    closeNav();
});

navAbout.addEventListener('click', () => {
    closeNav();
});



