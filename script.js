// JavaScript for handling dynamic features, if needed


// Get elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const iconPath1 = document.getElementById('icon-path-1');
const iconPath2 = document.getElementById('icon-path-2');
const iconPath3 = document.getElementById('icon-path-3');
const navLinks = document.querySelectorAll('#mobile-menu a');

// Toggle menu visibility
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // Show or hide the mobile menu

  // Animate hamburger icon to 'X' on open and reset on close
  if (mobileMenu.classList.contains('hidden')) {
    // Close the menu - Reset icon
    iconPath1.style.transform = 'rotate(0)';
    iconPath2.style.opacity = '1';
    iconPath3.style.transform = 'rotate(0)';
  } else {
    // Open the menu - Change icon to 'X'
    iconPath1.style.transform = 'rotate(45deg)';
    iconPath2.style.opacity = '0';
    iconPath3.style.transform = 'rotate(-45deg)';
  }
});

// Hide mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden'); // Hide the mobile menu after navigation
    // Reset the hamburger icon to the original state
    iconPath1.style.transform = 'rotate(0)';
    iconPath2.style.opacity = '1';
    iconPath3.style.transform = 'rotate(0)';
  });
});



// Example: Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function sendemail(){

  var email=document.getElementById("email").value;
  var name=document.getElementById("name").value;
  var from_name=document.getElementById("name").value;
  var message=document.getElementById("message").value;
  
  var templateParams = {
    from_name : from_name,
        email: email,
        name: name,
    message: message
      };
  
      emailjs.send('service_1z4b6ld', 'template_8b6fcnl', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
  })
  
     
  }
        

  