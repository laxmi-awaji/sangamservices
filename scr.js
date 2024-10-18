// Toggle navigation bar visibility on mobile
const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');

    // Wait until the transition starts
    if (navbar.classList.contains('active')) {
        navbar.classList.add('transition');
        // Calculate the height of the navbar after it is set to display: flex
        const height = navbar.scrollHeight + 'px';
        navbar.style.height = height; // Set the height to its scroll height
    } else {
        navbar.style.height = '0'; // Collapse the navbar
    }
});

// Smooth scrolling to sections
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
        
        // Close the navbar if it's in mobile view
        navbar.classList.remove('active');
        navbar.style.height = '0'; // Collapse the navbar
    });
});

// Close the navbar when clicking outside of it
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !toggleBtn.contains(e.target)) {
        navbar.classList.remove('active');
        navbar.style.height = '0'; // Collapse the navbar
    }
});






var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    autoplay: {
      delay: 2000, // Time between slides (in milliseconds)
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});




document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.querySelector("#home");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          homeSection.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.1, // triggers when 10% of the section is visible
    }
  );

  observer.observe(homeSection);
});


window.addEventListener('scroll', function () {
  const homeSection = document.querySelector('#home');
  const aboutSection = document.querySelector('#about');
  const serviceSection = document.querySelector('#service');
  const gallerySection = document.querySelector('#gallery');
  const contactSection = document.querySelector('#contact');
  

  const screenPosition = window.innerHeight / 1.3;

    const checkAndAnimate = (section) => {
        const sectionPosition = section.getBoundingClientRect().top;
        if (sectionPosition < screenPosition) {
            section.classList.add('animate');
        }
    };


  checkAndAnimate(homeSection);
  checkAndAnimate(aboutSection);
  checkAndAnimate(serviceSection);
  checkAndAnimate(gallerySection);
  checkAndAnimate(contactSection);
});



window.addEventListener('scroll', function () {
  const serviceSection = document.querySelector('#service');
  const serviceItems = serviceSection.querySelectorAll('.feature-item');
  const screenPosition = window.innerHeight / 1.3;

  serviceItems.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;

      // Add the animate class when the item is visible in the viewport
      if (itemPosition < screenPosition) {
          item.classList.add('animate');
      }
  });
});

// Trigger animations when the page scrolls
window.addEventListener('scroll', function() {
  const gallerySection = document.getElementById('gallery');
  const galleryItems = gallerySection.querySelectorAll('.gallery-item');

  const sectionPosition = gallerySection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3; // Adjust based on when you want it to trigger

  if (sectionPosition < screenPosition) {
      galleryItems.forEach((item, index) => {
          item.classList.add('animate');
      });
  }
});


// Function to handle intersection
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class to the gallery item
            entry.target.classList.add('animate');
        }
    });
}

// Create an intersection observer
const observer = new IntersectionObserver(handleIntersection);

// Observe each gallery item
document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});


function showText(element) {
  // Remove 'clicked' class from all gallery items
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
      const image = item.querySelector('img');
      if (item !== element) {
          item.classList.remove('clicked');
          image.classList.remove('faded'); // Remove dull effect from other items
      } else {
          image.classList.toggle('faded'); // Toggle dull effect on the clicked item
      }
  });

  // Toggle 'clicked' class on the clicked item
  element.classList.toggle('clicked');
}
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const params = {
      from_name: document.getElementById("fullname").value,
      email_id: document.getElementById("eml").value,
      phone: document.getElementById("phn").value,
      address: document.getElementById("addr").value,
      message: document.getElementById("msg").value,
  };

  emailjs.send("service_bjzgy3s", "template_6sc93po", params) // Replace with your service and template IDs
  .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById('contact-form').reset();
  }, function(error) {
      alert("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
  });
});
