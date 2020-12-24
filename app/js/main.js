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

// //slick slideshow
// $(document).ready(function () {
//   $(".slider-container").not(".slick-initialized").slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     adaptiveHeight: true,
//     arrows: true,
//     prevArrow: '<span class="prev-arrow">&#8592;</span>',
//     nextArrow: '<span class="next-arrow">&#8594;</span>',
//     dotsClass: "original-dots",
//     dots: true,
//     accessibility: false,
//   });
// });

//slideshow using javascript
var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 2000);
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// next and previous control
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //hover vào mũi tên next và previous thì pause/resume slide
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 2000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  }
}

//kiểm soát slide hiện tại và đặt lại khoảng thời gian nếu cần
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 2000);
}

//slideshow footer
var sIndex = 0;
showSlidesFooter();

function showSlidesFooter() {
  var i;
  var slideItem = document.getElementsByClassName("row-item");
  var dotItem = document.getElementsByClassName("dots");
  for (i = 0; i < slideItem.length; i++) {
    slideItem[i].style.display = "none";  
  }
  sIndex++;
  if (sIndex > slideItem.length) {sIndex = 1}    
  for (i = 0; i < dotItem.length; i++) {
    dotItem[i].className = dotItem[i].className.replace(" active", "");
  }
  slideItem[sIndex-1].style.display = "block";  
  dotItem[sIndex-1].className += " active";
  setTimeout(showSlidesFooter, 4000); // Change image every 2 seconds
}