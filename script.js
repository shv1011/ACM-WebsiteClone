document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Show an alert when form is submitted
    document.querySelector("#contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
    });
});
   

function displayName() {
    document.getElementById("display-area").innerHTML = "<strong>Nandish Mittal</strong><br>ACM Chair";
    document.getElementById("display-area").style.display = "block";
}

function hideName() {
    document.getElementById("display-area").style.display = "none";
}


    // Arrow
    let currentIndex = 0;
    const slides = document.querySelectorAll(".small");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    showSlide(currentIndex);

    function toggleContent(card) {
        let img = card.querySelector(".event-img");
        let text = card.querySelector(".event-text");
        
        if (img.style.display === "none") {
            img.style.display = "block";
            text.style.display = "none";
        } else {
            img.style.display = "none";
            text.style.display = "block";
        }
    }