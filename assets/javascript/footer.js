/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL FOOTER*/
sr.reveal('.footer__title', {});
sr.reveal('.footer__social', { delay: 400 });
sr.reveal('.footer__icon', { interval: 200 });