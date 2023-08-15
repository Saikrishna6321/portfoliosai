let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.nav-elements');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height  ){
             navLinks.forEach(links => {
                 links.classList.remove('active');
                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
     reset: true,
     distance: '80px',
     duration:2000,
     delay:200
 });

ScrollReveal().reveal('.text , .heading', { origin: 'top' });
ScrollReveal().reveal('.profile , .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.text h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.text p, .about-content', { origin: 'right' });

const typed = new Typed('.mutli',{
     strings:['frontend developer','youtuber','blogger'],
     typeSpeed: 100,
     backSpeed: 50,
     backDelay: 1000,
     loop:true
});

