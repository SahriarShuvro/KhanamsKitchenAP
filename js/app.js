{
    let menuBarT = document.getElementById('d-menu');
    let menuBarActive = document.getElementById('menuBarActive');

    menuBarT.addEventListener('click', function() {
        menuBarActive.classList.toggle('menuToglActive2');
    })
}