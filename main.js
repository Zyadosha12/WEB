
const ico = document.getElementById('ico');
const menu = document.getElementById('menu');
const navLinks = document.getElementById('nav-bar1');
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

ico.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


window.addEventListener('scroll', function () {
    const nav = document.getElementById('navbar');
    if (scrollY > 500) {
        nav.style.background = "#222222"
    }
    else {
        nav.style.background = "transparent"

    }
})



