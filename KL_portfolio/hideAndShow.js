
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  // Add click event listener to each navigation link
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      const targetId = link.getAttribute('href'); // Get target section's ID
      const targetSection = document.querySelector(targetId); // Find the target section

      if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});




// Function to validate email address
function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number
function validatePhone(phone) {
  // Regular expression for phone number validation
  const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
  return phoneRegex.test(phone);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const emailInput = document.getElementById('email').value;
  const phoneInput = document.getElementById('phone').value;

  // Validate email
  if (!validateEmail(emailInput)) {
    alert('Invalid email address!');
    return;
  }

  // Validate phone number
  if (!validatePhone(phoneInput)) {
    alert('Invalid phone number!');
    return;
  }

  // If all validations pass, you can proceed with form submission or further processing
  // For example, you can use AJAX to submit the form data to a server

  // Reset the form
  document.getElementById('contactForm').reset();
}

// Attach the form submission handler to the form
const form = document.getElementById('contactForm');
form.addEventListener('submit', handleSubmit);






const scriptURL = 'https://script.google.com/macros/s/AKfycbyLfGzgI4qN6cT3HyRhXyd868uuRHJiCxjGSG8K4mgzcHBdCDoz75vEeT6p-UluZytivA/exec'
  const forms= document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })






















  



document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  // Add click event listener to each navigation link
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      const targetId = link.getAttribute('href'); // Get target section's ID
      const targetSection = document.querySelector(targetId); // Find the target section

      if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});


// Function to validate  ID
function validateID(id) {
  // Regular expression for id validation
  const idRegex = /^\d{10}$/; // Assuming a 10-digit id
  return idRegex.test(id);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const emailInput = document.getElementById('email').value;
  const phoneInput = document.getElementById('phone').value;


  // Validate id
  if (!validatePhone(id)) {
    alert('Invalid id!');
    return;
  }

  // If all validations pass, you can proceed with form submission or further processing
  // For example, you can use AJAX to submit the form data to a server

  // Reset the form
  document.getElementById('insertdata').reset();
}

// Attach the form submission handler to the form
const data = document.getElementById('contactForm');
form.addEventListener('submit', handleSubmit);






const scripURL = 'https://script.google.com/macros/s/AKfycbyLfGzgI4qN6cT3HyRhXyd868uuRHJiCxjGSG8K4mgzcHBdCDoz75vEeT6p-UluZytivA/exec'
  const data2= document.forms['submit-to-google-sheet']
  const description = document.getElementById("des")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scripURL, { method: 'POST', body: new FormData(data)})
      .then(response => {msg.innerHTML = "Inserted data successfully!"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })







  

  function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
 




    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }


