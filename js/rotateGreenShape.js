window.onscroll = function () {
    scrollRotate();
};

window.onload = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + (-window.scrollY / 20) + "deg)";

    let marginValueTop = 0;
    let marginValueLeft = 0;
    if (window.scrollY < 2000) {
        marginValueTop = -500 + window.scrollY / 5;
        marginValueLeft = -100 - window.scrollY / 5;
    }
    if (window.scrollY >= 2000) {
        marginValueTop = 300 + marginValueTop - window.scrollY / 5;
        marginValueLeft = -100 + marginValueLeft - window.scrollY / 5;
    }
    if (window.scrollY >= 3500) {
        marginValueTop = 700 + marginValueTop - window.scrollY / 5;
        marginValueLeft = -700 + marginValueLeft + window.scrollY / 5;
    }
    if (window.scrollY >= 3800) {
        marginValueTop = -1260 + marginValueTop + window.scrollY / 3;
        marginValueLeft = -760 + marginValueLeft + window.scrollY / 5;
    }
    image.style.marginTop = marginValueTop + "px";
    image.style.marginLeft = marginValueLeft + "px";
}