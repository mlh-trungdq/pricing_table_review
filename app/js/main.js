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

//slide show
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slide-item");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slide-item");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}
//   x[myIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

$(document).ready(function () {
  $(".slider-container").not(".slick-initialized").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    arrows: false,
    dotsClass: "original-dots",
    dots: true,
    accessibility: false,
    // dots: true,
    // appendDots: $('.dots'),
  });
  // $('.container-project').not('.slick-initialized').slick({
  //   autoplay: true,
  //   arrows: false,
  //   autoplaySpeed: 2000,
  //   swipeToSlide: false,
  //   slidesToScroll: 6,
  //   slidesToShow: 6,
  // });
});
