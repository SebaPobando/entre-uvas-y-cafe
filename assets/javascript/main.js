/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOGAR*/
sr.reveal('.hogar__titulo', {});
sr.reveal('.hogar__img', { delay: 400 });

/*SCROLL QUEES*/
sr.reveal('.quees__img', {});
sr.reveal('.quees__subtitulo', { delay: 400 });
sr.reveal('.quees__texto', { delay: 400 });

/*SCROLL TESTIMONIO*/
sr.reveal('.testimonio__subtitulo', {});
sr.reveal('.testimonio__texto', {});
sr.reveal('.testimonio__data', { interval: 200 });
sr.reveal('.testimonio__img', { delay: 600 });

/*SCROLL CARACTERISTICAS*/
sr.reveal('.caracteristicas__subtitulo', {});
sr.reveal('.caracteristicas__texto', {});
sr.reveal('.caracteristicas__data', { interval: 200 });
sr.reveal('.caracteristicas__img', { delay: 400 });

/*SCROLL PROCESO*/
sr.reveal('.precio__texto', {});
sr.reveal('.paso__subtitulo', {});
sr.reveal('.paso__texto', {});
sr.reveal('.paso__data', { interval: 200 });
sr.reveal('.paso__img', { delay: 600 });

/*SCROLL DISEÑO*/
sr.reveal('.diseño__img', { interval: 200 });

/*SCROLL CONTACTO*/
sr.reveal('.contact__input', { interval: 200 });
sr.reveal('.card', { delay: 600 });

function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 8000);
