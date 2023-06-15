window.addEventListener('scroll', function () {
    let header = document.querySelector('.navbar');
    let icon = document.querySelector('.fa-house');
    header.classList.toggle('sticky', window.scrollY > 0);
    icon.classList.toggle('sticky', window.scrollY > 0);
});

/*function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menuToggle = document.querySelector('.navbar-nav');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active')
}
*/