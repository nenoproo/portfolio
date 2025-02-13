const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);

window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        const header = document.querySelector('.header');
        const main = document.querySelector('.main');
        const footer = document.querySelector('.footer');
        
        preloader.style.display = "none";
        header.style.display = "flex";
        main.style.display = "block";
        footer.style.display= "block";
    }, 2000);
});