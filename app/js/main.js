window.onscroll = function () {
  stickyHeader(), scrollFunction();
};
//sticky header menu
function stickyHeader() {
  var header = document.getElementById("header");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("sticky");
    document.getElementById("header").style.padding = "5px 5px";
  } else {
    header.classList.remove("sticky");
    document.getElementById("header").style.padding = "2px 5px";
  }
}

//responsive header menu
function myFunction() {
  var x = document.getElementById("menu-responsive");
  if (x.className === "menu-responsive") {
    x.className += " responsive";
  } else {
    x.className = "menu-responsive";
  }
}

//scroll to top button
function scrollFunction() {
  mybutton = document.getElementById("scrollBtn");
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//smooth scroll to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });
});


$(document).ready(function () {
  $(".slider-container").not(".slick-initialized").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<span class="prev-arrow">&#8592;</span>',
    nextArrow: '<span class="next-arrow">&#8594;</span>',
    dotsClass: "original-dots",
    dots: true,
    accessibility: false,
  });
});
//slideshow footer
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("row-item");
  var dots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}