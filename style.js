
//Small screan dropdown navbar
function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active"); // Hide navbar
    } else {
        navbar.classList.add("active"); // Show navbar
    }
}

function hideNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("active"); // Hide navbar when mouse leaves
}






//initiative section hover effect
document.addEventListener('DOMContentLoaded', () => {
    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    const hoverBox = document.querySelector('.hover-box');
    const hoverHeading = document.getElementById('hover-heading');
    const hoverContent = document.getElementById('hover-content');

    let hoverTimeout; // To store the timeout ID

    hoverTriggers.forEach(trigger => {
        trigger.addEventListener('mouseover', () => {
            // Clear any existing timeout to avoid conflicts
            clearTimeout(hoverTimeout);

            // Set a timeout for the delay
            hoverTimeout = setTimeout(() => {
                // Update content based on data attributes
                const heading = trigger.getAttribute('data-heading');
                const content = trigger.getAttribute('data-content');

                hoverHeading.textContent = heading;
                hoverContent.textContent = content;

                // Show the hover box with fading effect
                hoverBox.classList.add('visible');
                hoverHeading.style.display = 'block';
                hoverContent.style.display = 'block';
            }, 500); // 0.5-second delay
        });

        trigger.addEventListener('mouseout', () => {
            // Clear the timeout to prevent delayed appearance after mouse out
            clearTimeout(hoverTimeout);

            // Hide the hover box with fading effect
            hoverBox.classList.remove('visible');
            hoverHeading.style.display = 'none';
            hoverContent.style.display = 'none';
        });
    });
});






// about section timeline animation
const slides = document.querySelectorAll(".slide");
const timelineBalls = document.querySelectorAll(".timeline-ball");

// Initialize current index
let currentIndex = 0;

// Function to update the active slide and timeline ball
function updateActiveSlide() {
    // Remove active class from all slides and timeline balls
    slides.forEach(slide => slide.classList.remove("active"));
    timelineBalls.forEach(ball => ball.classList.remove("active"));

    // Add active class to the current slide and timeline ball
    slides[currentIndex].classList.add("active");
    timelineBalls[currentIndex].classList.add("active");

    // Move to the next slide (loop back to the start)
    currentIndex = (currentIndex + 1) % slides.length;
}

// Start the animation loop
setInterval(updateActiveSlide, 3000); // Change slide every 3 seconds






//emailjs account message sending code
function sendMail(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send("", "", params) //service_id , Template_id
        .then(function(response) {
            console.log('Success:', response);
            alert("Email sent successfully!");
        }, function(error) {
            console.log('Error:', error);
            alert("Something went wrong. Please try again.");
        });
}



