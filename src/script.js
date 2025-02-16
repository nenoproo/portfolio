const currentYear = new Date().getFullYear();
const projectsList = document.querySelector('ul');
const projects = projectsList.querySelectorAll('li');
const loadMoreBtn = document.getElementById('load-more-button');

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

// Showing more projects logic
projects.forEach((project, index) => { // сите лист ајтеми односно сите проекти, користам forEach пошто не создаваме нови листи туку менуваме стилови на ајтемиве
    if (index >=6) {
        project.style.display = 'none';
    }
})

loadMoreBtn.addEventListener('click', () => {
    projects.forEach((project) => {
        project.style.display = 'flex';
    });

    loadMoreBtn.style.display = 'none';
})