// for home page

       
        // Scroll to top button functionality
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
           // Initialize AOS animation library
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        // Scroll to top button functionality
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("scrollTopBtn").style.display = "block";
            } else {
                document.getElementById("scrollTopBtn").style.display = "none";
            }
        }

        document.getElementById('scrollTopBtn').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.padding = '5px 0';
                navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
                document.getElementById('nav-logo').style.height = '70px';
            } else {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = 'none';
                document.getElementById('nav-logo').style.height = '90px';
            }
        });
        // for contact us page
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.padding = "5px 0";
                navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
            } else {
                navbar.style.padding = "10px 0";
                navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    // for announcment page
    // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // In a real implementation, this would filter the announcements
            });
        });
        
        // Animation for cards as they come into view
        const cards = document.querySelectorAll('.announcement-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            observer.observe(card);
        });
        
        // Today's date in calendar
        const today = new Date();
        const todayDate = today.getDate();
        document.querySelector('.today').textContent = todayDate;
    
        // gallery page
        


// Animation for filter buttons
const filterButtons = document.querySelectorAll('.gallery-filter-btn');

filterButtons.forEach(button => {
    // Hover animation
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.2s ease, background 0.2s ease';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    
    // Click animation
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1.1)';
    });
});

// Animation for gallery images
const galleryItems = document.querySelectorAll('.gallery-item');

// Initial animation - fade in on page load
document.addEventListener('DOMContentLoaded', () => {
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Hover animation for gallery items
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.03) translateY(-5px)';
        item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) translateY(0)';
        item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Lightbox functionality with animation
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const galleryImages = document.querySelectorAll('.gallery-img');
const imageInfo = document.querySelector('.image-info');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const imgSrc = image.getAttribute('src');
        const imgTitle = image.parentElement.querySelector('.img-title').textContent;
        const imgDesc = image.parentElement.querySelector('.img-desc').textContent;
        
        lightboxImg.setAttribute('src', imgSrc);
        imageInfo.innerHTML = `
            <h3>${imgTitle}</h3>
            <p>${imgDesc}</p>
        `;
        
        // Lightbox open animation
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.style.opacity = '1';
            lightbox.querySelector('.lightbox-content').style.transform = 'scale(1)';
        }, 10);
    });
});

closeBtn.addEventListener('click', () => {
    // Lightbox close animation
    lightbox.style.opacity = '0';
    lightbox.querySelector('.lightbox-content').style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeBtn.click();
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .gallery-filter-btn {
        transition: transform 0.2s ease, background 0.2s ease !important;
    }
    .gallery-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease, transform 0.5s ease !important;
    }
    .lightbox {
        display: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .lightbox-content {
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

//  FOR CONATCT FORM


function validateForm(){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let message = document.getElementById("message").value.trim();

if(name === "" || email === "" || phone === "" || message === ""){
alert("Please fill all required fields");
return false;
}

return true;
}


// WHATSAPP FUNCTION
function sendWhatsApp(){

if(!validateForm()) return;

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("message").value;

let text =
"Name: " + name + "%0A" +
"Email: " + email + "%0A" +
"Phone: " + phone + "%0A" +
"Subject: " + subject + "%0A" +
"Message: " + message;

let whatsappURL = "https://wa.me/923144056356?text=" + text;

window.open(whatsappURL, "_blank");
}


// EMAIL FUNCTION
function sendEmail(){

if(!validateForm()) return;

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("message").value;

let body =
"Name: " + name + "%0A" +
"Email: " + email + "%0A" +
"Phone: " + phone + "%0A" +
"Subject: " + subject + "%0A" +
"Message: " + message;

let mailURL = "mailto:info@example.com?subject=Contact Form&body=" + body;

window.location.href = mailURL;
}

