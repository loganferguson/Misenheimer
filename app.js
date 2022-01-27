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


var http = require('http');
var fs = require('fs'); // to get data from html file

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });

	// req.url stores the path in the url
	var url = req.url;
	if (url === "/") {
// fs.readFile looks for the HTML file
// the first parameter is the path to the HTML page
// the second is the call back function
// if no file is found the function gives an error
// if the file is successfully found, the content of the file are contained in pgres
		fs.readFile("head.html", function (err, pgres) {
			if (err)
				res.write("HEAD.HTML NOT FOUND");
			else {
				// The following 3 lines
				// are responsible for sending the html file
				// and ends the response process
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(pgres);
				res.end();
			}
		});
	}
	else if (url === "/tail") {
		fs.readFile("tail.html", function (err, pgres) {
			if (err)
				res.write("TAIL.HTML NOT FOUND");
			else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(pgres);
				res.end();
			}
		});
	}

}).listen(3000, function () {
	console.log("SERVER STARTED PORT: 3000");
});

