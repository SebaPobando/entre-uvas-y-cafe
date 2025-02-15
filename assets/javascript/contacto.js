/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL CONTACTO*/
sr.reveal('.seccion-titulo', {});
sr.reveal('.container__contacto', { delay: 400 });
sr.reveal('.contact__form', { interval: 200 });
sr.reveal('.contact__input', { interval: 200 });
sr.reveal('.contact__button', { delay: 600 });