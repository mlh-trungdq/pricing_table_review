  window.onscroll = function() {stickyHeader(), scrollFunction()};
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
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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
  $(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 2000); 
      return false; 
  }); 
});
