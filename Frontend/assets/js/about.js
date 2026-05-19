/*==================== ABOUT PAGE ANIMATIONS ====================*/
document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP ScrollTrigger
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        /* -- Hero Animations -- */
        gsap.from('.about__title-line', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out',
            delay: 0.5
        });

        gsap.from('.about__subtitle', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 1
        });

        /* -- Story Section Parallax & Reveal -- */
        gsap.from('.about__story-data', {
            scrollTrigger: {
                trigger: '.about__story',
                start: 'top 80%'
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.about__story-img-wrap', {
            scrollTrigger: {
                trigger: '.about__story',
                start: 'top 80%'
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        /* -- Philosophy Cards Cascade -- */
        gsap.from('.philosophy__card', {
            scrollTrigger: {
                trigger: '.about__philosophy',
                start: 'top 85%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }
});