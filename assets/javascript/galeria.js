/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL CARACTERISTICAS*/
sr.reveal('.caracteristicas__img', {});
sr.reveal('.caracteristicas__texto', { delay: 400 });
sr.reveal('.carac', { interval: 200 });