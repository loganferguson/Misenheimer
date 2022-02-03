const hamburger = document.getElementById('hamburger');
const navHome = document.getElementById('nav-home');
const navMenuMobile = document.getElementById('nav-menu-mobile');
const navItemMobile = document.getElementById('nav-item-mobile');
const navItemMobile2 = document.getElementById('nav-item-mobile2');
const navMusic = document.getElementById('nav-music');
const navTour = document.getElementById('nav-tour');

hamburger.addEventListener('click', () => {

    if(navMenuMobile.style.height !=="0%"){
        closeNav();
    } else {
        openNav();
    }
        
});

function openNav() {
    navMenuMobile.style.height = "100%";
    // navMenuMobile.style.borderLeft = "4px solid #5045e5";
    // navMenuMobile.style.borderBottom = "4px solid #000000";
    // navMenuMobile.style.borderRight = "4px solid #000000";

    // navMenuMobile.style.border = "10px solid";
    // navMenuMobile.style.borderWidth = "5px";
    // navMenuMobile.style.borderImage = "1";
    // navMenuMobile.style.borderImageSource = "linear-gradient(to bottom, #67cbdb, #3160ed)";

    navItemMobile.style.borderBottom = "2px solid #000000";
    // navItemMobile.style.borderTop = "4px solid #5045e5";
    // navItemMobile.style.borderRight = "2px solid #000000";

    navItemMobile2.style.borderBottom = "2px solid #000000";
    // navItemMobile2.style.borderTop = "2px solid #5045e5";
    // navItemMobile2.style.borderRight = "2px solid #000000";
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

navTour.addEventListener('click', () => {
    closeNav();
});