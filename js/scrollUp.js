var sttElem = document.querySelector('.pageup');
var screanHeight = window.innerHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        // Начинается плавное скольжение! 🛷
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

var sttScroll = function sttScroll() {
    document.addEventListener('scroll', function (e) {
        if (screanHeight <= window.scrollY) {
            sttElem.classList.add('pageup_active');
        } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
            sttElem.classList.remove('pageup_active');
            sttElem.style.pointerEvents = 'auto';
        }
    });
};

var sttClick = function sttClick() {
    sttElem.addEventListener('click', function () {
        var docHeight = window.scrollY;
        var progress = 0;
        var position = docHeight;
        var speed = 3; // When increasing this value. The scrolling speed will increase

        sttElem.style.pointerEvents = 'none';

        var sttAnim = function sttAnim() {
            progress += 1;
            position -= progress * speed;
            window.scrollTo(0, position);

            if (position > 0) {
                requestAnimationFrame(sttAnim);
            }
        };

        requestAnimationFrame(sttAnim);
    });
};

var sttFunc = function sttFunc() {
    sttScroll();
    sttClick();
};

document.addEventListener('DOMContentLoaded', sttFunc);
