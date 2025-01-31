$(document).ready(function() {
    setTimeout(function() { $('.cookie-popup').fadeIn(); }, 5000);
});



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}


let index = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const slidesPerView = 3;
const totalSlides = slides.length;


document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("#phone");
    const iti = window.intlTelInput(input, {
        initialCountry: "auto",
        separateDialCode: true,
        preferredCountries: ["us", "gb", "ca", "au", "uk"],
        geoIpLookup: function(callback) {
            fetch('https://ipapi.co/json')
                .then(response => response.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("us"));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i) {
        if (i < 0) {
            index = slides.length - 1;
        } else if (i >= slides.length) {
            index = 0;
        } else {
            index = i;
        }
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById("prev").addEventListener("click", function() {
        showSlide(index - 1);
    });

    document.getElementById("next").addEventListener("click", function() {
        showSlide(index + 1);
    });
});


var map = L.map('map').setView([51.5074, -0.1278], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([51.5074, -0.1278]).addTo(map)
    .bindPopup('London, UK')
    .openPopup();



document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".card").forEach(card => {
        setTimeout(() => observer.observe(card), 500); /* Додає затримку перед перевіркою */
    });
});

