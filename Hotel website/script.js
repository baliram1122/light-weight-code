const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((e1) => observer.observe(e1))


// dark-light mode
let darkBtn = document.getElementById("dark-btn")
let container = document.body
let heroSection = document.getElementById("info")
let heroImg = document.getElementById("hero-img")
let sun = document.getElementById("sun")
let moon = document.getElementById("moon")
let navIcon = document.querySelector(".fa-bars")

darkBtn.addEventListener("click", () => {
    container.classList.toggle("dark-theme")
    heroSection.classList.toggle("dark-theme")

    if (heroImg.innerHTML == '<img src="hotel-dark-img.png" class="image-fluid" alt="">') {
        heroImg.innerHTML = `<img src="hotel-img2.jpg" class="image-fluid" alt="">`
    } else {
        heroImg.innerHTML = `<img src="hotel-dark-img.png" class="image-fluid" alt="">`
    }

    sun.classList.toggle("hide")
    moon.classList.toggle("hide")

})


// faq

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function (e) {
        this.classList.toggle("active");

        var body = this.nextElementSibling

        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}


// gallery 

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  }


