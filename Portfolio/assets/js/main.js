/* hero slide in effect script */
window.onload = function() {
    const hero = document.querySelector('.hero');
    hero.classList.add('active');
  };
 



//skills scripts
// Function to reveal elements on scroll
function revealOnScroll() {
    const skillBoxes = document.querySelectorAll('.skill-box, .exp, .abt-container, .proj-container, .contact-container');
    skillBoxes.forEach(skillBox => {
        const boxTop = skillBox.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100; // Adjust trigger point as needed

        // Check if the box is within the viewport
        if (boxTop < triggerPoint) {
            skillBox.classList.add('visible');
        } else {
            skillBox.classList.remove('visible');
        }
    });
}

//Skill row mobile scroll script
// Attach scroll event listener
window.addEventListener('scroll', revealOnScroll);
//end skills scripts



//loader
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("page-loader");

    // Show the loader on page load
    loader.style.display = "flex";

    // Hide the loader once the page has fully loaded
    window.addEventListener("load", () => {
        loader.style.display = "none";
    });

    // Optional: Show loader when navigating links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Optional: Prevent instant navigation
            loader.style.display = "flex";
            setTimeout(() => {
                window.location.href = link.href;
            }, 300); // Small delay for loader effect
        });
    });
});




//EmailJs  Script
emailjs.init("kOZWWUIolLW5wcEXI"); // Your User ID

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Send email using EmailJS
    emailjs.send("service_n2xkjsk", "template_gug6ugy", {
        from_name: event.target.name.value,
        from_email: event.target.email.value,
        message: event.target.message.value,
        to_email: "nzenwatachristopher186@gmail.com" // Your email
    })
    .then(function () {
        alert("Message sent successfully!");
    }, function (error) {
        alert("Failed to send message. Please try again.");
        console.error(error);
    });
});



