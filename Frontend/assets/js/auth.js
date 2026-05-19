/*==================== AUTHENTICATION TABS ====================*/
const tabs = document.querySelectorAll('.auth__tab');
const forms = document.querySelectorAll('.auth__form');

tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all forms
      forms.forEach(f => f.classList.remove('active-form'));
      
      // Show the targeted form
      const targetForm = document.getElementById(tab.getAttribute('data-target'));
      targetForm.classList.add('active-form');
   });
});