const searchEl = document.querySelector('.search'); //class가 search인 요소를 찾아서 저장
const searchInputEl = searchEl.querySelector('input'); // 이미 찾은 것을 활용해서 찾기 위해 위에 변수 사용

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션)ㅣ
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none' //사라지게 해서 클릭 불가ㄴ
        });
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block' //다시 로드해서 클릭 가능
        });
    }
}, 300));
// _.throttle(함수, 시간) 사용할 함수의 시간을 제한하는 기능


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    //gsap.to(요소, 지속시간, 옵션)ㅣ
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 ...
        opacity: 1
    });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 5000
    // }
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        //숨김처리!
        promotionEl.classList.add('hide');
    } else {
        //보임처리!
        promotionEl.classList.remove('hide');
    }
});
