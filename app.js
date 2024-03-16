document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form input values
    var name = document.getElementById('Name').value.trim();
    var email = document.getElementById('Email').value.trim();
    var message = document.getElementById('Message').value.trim();

    // Validation
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === '') {
        alert('Please enter your message.');
        return;
    }

    // If all validation passes, you can submit the form here
    // For example, you can submit the form using AJAX
    alert('Form submitted successfully!');
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// code cho imgs

document.addEventListener("DOMContentLoaded", function() {
    var animalsLink = document.querySelector('.animals-link');
    var allImages = document.querySelectorAll('.imgall');

    animalsLink.addEventListener('click', function(e) {
        e.preventDefault();
        allImages.forEach(function(image) {
            image.style.display = 'block';
        });
    });
});