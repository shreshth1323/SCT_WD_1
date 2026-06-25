const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        // User scrolled down — add the 'scrolled' class
        navbar.classList.add('scrolled');
      } else {
        // Back at the top — remove it
        navbar.classList.remove('scrolled');
      }
    });


  
    const sections  = document.querySelectorAll('section');
    const navLinks  = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function () {
      let currentSection = '';

      sections.forEach(function (section) {
        // Check which section is currently in view
        if (window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove('active');                      // remove from all
        if (link.getAttribute('href') === '#' + currentSection) {
          link.classList.add('active');                       // add to current
        }
      });
    });


    function sendMessage(event) {
      event.preventDefault(); // stop the page from reloading
      alert('Message sent! We will get back to you soon. 😊');
      event.target.reset();   // clear the form
    }
  