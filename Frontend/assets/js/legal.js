/*==================== LEGAL HUB LOGIC ====================*/
document.addEventListener('DOMContentLoaded', () => {

   const navItems = document.querySelectorAll('.legal__nav-item');
   const contentSections = document.querySelectorAll('.legal__content-section');

   navItems.forEach(item => {
      item.addEventListener('click', () => {
         // 1. Prevent clicking the already active tab
         if(item.classList.contains('active-legal')) return;

         // 2. Remove active class from all nav items
         navItems.forEach(nav => nav.classList.remove('active-legal'));
         
         // 3. Add active class to clicked item
         item.classList.add('active-legal');

         // 4. Get the target section ID
         const targetId = item.getAttribute('data-target');

         // 5. Smooth Transition with GSAP
         const currentSection = document.querySelector('.legal__content-section.active-section');
         const targetSection = document.getElementById(targetId);

         if (typeof gsap !== 'undefined') {
            // Fade out current
            gsap.to(currentSection, {
               opacity: 0,
               y: -10,
               duration: 0.3,
               onComplete: () => {
                  currentSection.classList.remove('active-section');
                  
                  // Prep and fade in new
                  targetSection.classList.add('active-section');
                  gsap.fromTo(targetSection, 
                     { opacity: 0, y: 20 },
                     { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                  );

                  // Scroll smoothly back to top of the content area
                  window.scrollTo({
                     top: document.querySelector('.legal__hub').offsetTop - 100,
                     behavior: 'smooth'
                  });
               }
            });
         } else {
            // Failsafe if GSAP doesn't load
            currentSection.classList.remove('active-section');
            targetSection.classList.add('active-section');
         }
      });
   });

   // Initial Entrance Animation
   window.addEventListener('load', () => {
      setTimeout(() => {
         if (typeof gsap !== 'undefined') {
            gsap.fromTo('.legal__hero-title, .legal__hero-subtitle', 
               { y: 30, opacity: 0 }, 
               { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
            );
            gsap.fromTo('.legal__sidebar-sticky', 
               { x: -30, opacity: 0 }, 
               { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
            );
            gsap.fromTo('.legal__content-section.active-section', 
               { y: 30, opacity: 0 }, 
               { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
            );
         }
      }, 2000); // Waits for page loader
   });
});