// * Этот файл для маленького кода
// * для которого не стоит делать отдельный файл.

// : Меню бургег

// * Меню бургег {
const headerBurgerClass = document.querySelector(".header-burger");

headerBurgerClass.addEventListener("click", function () {
    const headerBurgerClass = document.querySelector(".header-burger");
    const headerMenuClass = document.querySelector(".header__menu");

    headerBurgerClass.classList.toggle("active");
    headerMenuClass.classList.toggle("active");

    const bodyTag = document.querySelector("body");
    bodyTag.classList.toggle("lock");
});
// * Меню бургег }