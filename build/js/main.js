const initAPP = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    console.log(hamburgerBtn, mobileMenu);


    const toggleMenu = () => {
        console.log('toggle menu');
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    };


    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initAPP);