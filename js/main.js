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