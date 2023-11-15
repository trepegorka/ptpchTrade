const time = 400;
const step = 1;
const offset = -100; // Добавленный отступ

function outNum(num, elemId) {
    let e = document.querySelector(elemId);
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval;

    function updateNum() {
        n = n + step;
        if (n >= num) {
            n = num; // Убедимся, что число точно равно num в конце
            clearInterval(interval);
        }
        e.innerHTML = n + "+";
    }

    function checkVisibility() {
        const rect = e.getBoundingClientRect();
        const isVisible = rect.top - offset <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
            interval = setInterval(updateNum, t);
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
}

outNum(4, "#_num_box");
outNum(200, "#_num_box2");
outNum(10, "#_num_box3");
