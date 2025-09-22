const btnToggle = document.getElementById('btn-toggle');
const menuMobile = document.getElementById('menu-mobile');
const controls = document.querySelectorAll('.control');

btnToggle.addEventListener('click', () => {
    if (menuMobile.classList.contains('show')) {
        menuMobile.classList.remove('show');
        btnToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`
    } else {
        menuMobile.classList.add('show');
        btnToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
})

let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline: 'center',
            behavior: 'smooth'
        });

        items[currentItem].classList.add('current-item');
    })
});

