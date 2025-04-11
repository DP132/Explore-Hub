// JavaScript to toggle the menu

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.navigation');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtn2 = document.querySelector('.menu-btn-2');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.classList.add('hidden'); // Hide menu button
        menuBtn2.classList.remove('hidden'); // Show close button
    });

    menuBtn2.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn2.classList.add('hidden'); // Hide close button
        menuBtn.classList.remove('hidden'); // Show menu button
    });
});

// js logic for package boxes

document.querySelectorAll('.details-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        let contentWrap = this.closest('.package-content-wrap');
        let packageBox = contentWrap.querySelector('.package-box');
        let packageDetails = contentWrap.querySelector('.package-details');

        packageBox.classList.toggle('hidden');
        packageDetails.classList.toggle('hidden');
    });
});

// contact
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Retrieve form data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Basic validation
      if (!name || !email || !message) {
        formResponse.style.color = 'red';
        formResponse.textContent = 'Please fill in all fields.';
        return;
      }
  
      // Here, you can implement the logic to send the form data to your server or email service.
      // For demonstration purposes, we'll just display a success message.
  
      formResponse.style.color = 'green';
      formResponse.textContent = 'Thank you for contacting us! We will get back to you shortly.';
  
      // Reset the form
      contactForm.reset();
    });
  });
  
//   register // Register Now Modal Logic
document.querySelector('.Register').addEventListener('click', () => {
    document.getElementById('registerModal').classList.remove('hidden');
  });
  
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('registerModal').classList.add('hidden');
  });
  
  document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const message = document.getElementById('regMessage');
  
    // Basic format validations
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;
  
    if (name === '' || email === '' || phone === '' || password === '') {
      message.style.color = 'red';
      message.textContent = 'All fields are required.';
      return;
    }
  
    if (!emailPattern.test(email)) {
      message.style.color = 'red';
      message.textContent = 'Invalid email format.';
      return;
    }
  
    if (!phonePattern.test(phone)) {
      message.style.color = 'red';
      message.textContent = 'Phone number must be 10 digits.';
      return;
    }
  
    if (password.length < 6) {
      message.style.color = 'red';
      message.textContent = 'Password must be at least 6 characters.';
      return;
    }
  
    // Success message
    message.style.color = 'green';
    message.textContent = 'Successfully Registered!';
  
    // Optionally reset form after a delay
    setTimeout(() => {
      document.getElementById('registerModal').classList.add('hidden');
      document.getElementById('registerForm').reset();
      message.textContent = '';
    }, 2000);
  });
  