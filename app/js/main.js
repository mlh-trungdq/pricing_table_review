window.onscroll = function () {
  stickyHeader(), scrollFunction()
}
//sticky header menu
function stickyHeader() {
  let headerElm = document.getElementById('header')
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    headerElm.classList.add('sticky', 'add-sticky-padding')
    headerElm.classList.remove('remove-sticky-padding')
  } else {
    headerElm.classList.remove('sticky', 'add-sticky-padding')
    headerElm.classList.add('remove-sticky-padding')
  }
}

//responsive header menu
function myFunction() {
  let headerMenuElm = document.getElementById('menu-responsive')
  if (headerMenuElm.className === 'menu-responsive') {
    headerMenuElm.className += ' responsive'
  } else {
    headerMenuElm.className = 'menu-responsive'
  }
}

//scroll to top button
function scrollFunction() {
  scrollBtnElm = document.getElementById('scrollBtn')
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollBtnElm.style.display = 'block'
  } else {
    scrollBtnElm.style.display = 'none'
  }
}
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

//smooth scroll to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn()
    } else {
      $('#scroll').fadeOut()
    }
  })
  $('#scroll').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500)
    return false
  })
})

//slideshow using javascript
let slideIndex = 1
let myTimer
let slideshowContainer

window.addEventListener('load', function () {
  showSlides(slideIndex)
  myTimer = setInterval(function () {
    plusSlides(1)
  }, 2000)
  slideshowContainer = document.getElementsByClassName('slideshow-inner')[0]
  slideshowContainer = document.getElementsByClassName('slideshow-container')[0]
  slideshowContainer.addEventListener(
    'mouseenter',
    (pause = () => {
      clearInterval(myTimer)
    })
  )
  slideshowContainer.addEventListener(
    'mouseleave',
    (resume = () => {
      clearInterval(myTimer)
      myTimer = setInterval(function () {
        plusSlides(slideIndex)
      }, 2000)
    })
  )
})

function plusSlides(indexSlideElm) {
  clearInterval(myTimer)
  if (indexSlideElm < 0) {
    showSlides((slideIndex -= 1))
  } else {
    showSlides((slideIndex += 1))
  }
  myTimer =
    indexSlideElm === -1
      ? setInterval(function () {
          plusSlides(indexSlideElm + 2)
        }, 2000)
      : setInterval(function () {
          plusSlides(indexSlideElm + 1)
        }, 2000)
}
function currentSlide(indexSlideElm) {
  clearInterval(myTimer)
  myTimer = setInterval(function () {
    plusSlides(indexSlideElm + 1)
  }, 2000)
  showSlides((slideIndex = indexSlideElm))
}

function showSlides(indexSlideElm) {
  let slidesElm = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')
  if (indexSlideElm > slidesElm.length) {
    slideIndex = 1
  }
  if (indexSlideElm < 1) {
    slideIndex = slidesElm.length
  }
  for (let i = 0; i < slidesElm.length; i++) {
    slidesElm[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slidesElm[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}

//slideshow footer
let sIndex = 0
showSlidesFooter()

function showSlidesFooter() {
  let slideItem = document.getElementsByClassName('row-item')
  let dotItem = document.getElementsByClassName('dots')
  for (let i = 0; i < slideItem.length; i++) {
    slideItem[i].style.display = 'none'
  }
  sIndex++
  if (sIndex > slideItem.length) {
    sIndex = 1
  }
  for (i = 0; i < dotItem.length; i++) {
    dotItem[i].className = dotItem[i].className.replace(' active', '')
  }
  slideItem[sIndex - 1].style.display = 'block'
  dotItem[sIndex - 1].className += ' active'
  setTimeout(showSlidesFooter, 4000) // Change image every 2 seconds
}
