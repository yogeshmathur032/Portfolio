  // remove toggle icon and navbar when click navbar link (scroll)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
// scroll sections active link 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            };
        }
    });
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
  
    // remove toggle icon and navbar when scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading, .contact-info', { origin : 'top' });
ScrollReveal().reveal('.home-img,.about-img,.services-container,.project-container,.input-box', { origin : 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin : 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin : 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings :[ 'frontend developer', 'web designer', 'web developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,     
    loop: true
});