document.addEventListener("DOMContentLoaded", function () {
var fullscreenGif = document.querySelector(".fullscreen-lottie");
window.addEventListener("load", function () {
    fullscreenGif.style.display = "none";
});
});
document.addEventListener("DOMContentLoaded", function () {
var titulos = document.querySelectorAll(".titulohome");
titulos.forEach(function (titulo) {
    titulo.addEventListener("click", function () {
    var conteudo = this.nextElementSibling;
    if (conteudo.style.display === "none" || conteudo.style.display === "") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
    });
});
});