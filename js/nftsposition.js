var body = document.body;

// Функция для изменения background-position
function updateBackgroundPosition() {
    // Получите текущую ширину экрана
    var screenWidth = window.innerWidth;

    // Вычислите значение background-position в зависимости от ширины экрана
    var backgroundPositionX = 150 + screenWidth / 2; // 1024 - ширина экрана по умолчанию

    // Установите новое значение background-position
    body.style.backgroundPosition = backgroundPositionX + 'px 0';



}

function updatePosition() {

}

// Вызовите функцию при загрузке страницы и при изменении размера окна
updateBackgroundPosition();
window.addEventListener('resize', updateBackgroundPosition);
window.addEventListener('load', updateBackgroundPosition);

