'use strict'

//검색창 제어
const searchEL = document.querySelector('.search')
const searchInputEl = searchEL.querySelector('input')

//검색창 요소 클릭하면 실행
searchEL.addEventListener('click', function(){
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function(){
  searchEL.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function(){
  searchEL.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


//페이지 스크롤
const badgeEL = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY> 500){

    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    })

    gsap.to(toTopEl, .2,{
      x: 0
    })

  } else{
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    })

    gsap.to(toTopEl, .2,{
      x: 100
    })
  } 
}, 300))


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo:0
  })
})


//순서대로 나타내기
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7,
    opacity: 1
  })
})

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation:{
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop:true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

//슬라이드 
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion =!isHidePromotion
  if (isHidePromotion){
      // 숨김처리
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, 
    random(1.5,2.5), 
    {
      y: size,
      repeat:-1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0,delay)
  })
}
floatingObject('.floating1',1,15)
floatingObject('.floating2',.5,15)
floatingObject('.floating3',1.5,20)

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8 //감시하는 요소가 어느 부분에서 감시되어 있는지!
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()