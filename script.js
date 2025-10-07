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
