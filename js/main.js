document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    });
});

// закрыть меню при нажатии Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // действие при клике
        document.querySelector(".header").classList.remove("open");
    }
});
// закрыть при клкике вне меню
document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    //действие при клике
    document.querySelector(".header").classList.remove("open");
});