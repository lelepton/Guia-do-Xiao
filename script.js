const btnToggle = document.getElementById('btn-toggle');
const btnTema = document.getElementById('btn-tema');
const menuMobile = document.getElementById('menu-mobile');

btnToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('show');
    btnToggle.innerHTML = menuMobile.classList.contains('show')
        ? `<i class="fa-solid fa-xmark"></i>`
        : `<i class="fa-solid fa-bars"></i>`;
});

btnTema.addEventListener("click", () => {
    if (document.documentElement.hasAttribute("tema")) {
        document.documentElement.removeAttribute("tema");
        btnTema.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        document.documentElement.setAttribute("tema", "dark");
        btnTema.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
})

let currentIndex = 0;
const galeria = document.querySelector('.galeria');
const slides = document.querySelectorAll('.galeria img');
const totalSlides = slides.length;

function showSlide(index) {
    galeria.style.transform = `translateX(-${index * 320}px)`;
    slides.forEach(img => img.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);
showSlide(currentIndex);
