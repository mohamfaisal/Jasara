/*==================== COLLECTION PAGE LOGIC ====================*/
document.addEventListener('DOMContentLoaded', () => {

   const filterBtns = document.querySelectorAll('.collection__filter');
   const cards = document.querySelectorAll('.collection__card');

   // 1. Native Filtering Logic (Works instantly on click)
   filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
         filterBtns.forEach(f => f.classList.remove('active-filter'));
         btn.classList.add('active-filter');

         const filterValue = btn.getAttribute('data-filter');

         cards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
               card.classList.remove('hide-card');
               if (typeof gsap !== 'undefined') {
                  gsap.fromTo(card, 
                     { scale: 0.8, opacity: 0 }, 
                     { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out', clearProps: 'all' }
                  );
               }
            } else {
               card.classList.add('hide-card');
            }
         });
      });
   });

   // 2. Guaranteed Entrance Animations (Bypasses ScrollTrigger)
   window.addEventListener('load', () => {
      
      // We wait exactly 2 seconds for your gold page loader to finish
      setTimeout(() => {
         if (typeof gsap !== 'undefined') {
            
            // Fade in Title
            gsap.fromTo('.collection__title, .collection__subtitle', 
               { y: 30, opacity: 0 }, 
               { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
            );

            // Fade in Filters
            gsap.fromTo('.collection__filter', 
               { y: 20, opacity: 0 }, 
               { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
            );

            // Fade in Book Cards
            gsap.fromTo('.collection__card', 
               { y: 50, opacity: 0 }, 
               { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.6, clearProps: 'all' }
            );

         } else {
            // Ultimate Failsafe: If GSAP fails to load entirely, force elements to be visible
            document.querySelectorAll('.collection__title, .collection__subtitle, .collection__filter, .collection__card').forEach(el => {
               el.style.opacity = '1';
               el.style.transform = 'none';
            });
         }
      }, 2000); 
   });
});