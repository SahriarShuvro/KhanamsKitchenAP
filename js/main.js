// admin toggle 
{
    let singTogl = document.getElementById('sing-in');
    let adDrop = document.getElementById('adDrop');

    singTogl.addEventListener('click', () => {
        adDrop.classList.toggle('adminMenu');
    })
    document.addEventListener('click', event => {
        if (event.target.closest('#sing-in')) return
        adDrop.classList.remove('adminMenu');
    })
}


// menu bar toggle
{
    let menuBarT = document.getElementById('d-menu');
    let menuBarActive = document.getElementById('menuBarActive');
    let menuB = document.getElementById('menuB');

    menuBarT.addEventListener('click', function() {
        menuBarActive.classList.toggle('menuToglActive');
        menuB.classList.toggle('FmenuToglActive');
    })
}

// {
//     window.onload = () => {
//         const tab_switchers = document.querySelectorAll('[data-switcher]');

//         for (let i = 0; i < tab_switchers.length; i++) {
//             const tab_switcher = tab_switchers[i];
//             const page_id = tab_switcher.dataset.tab;

//             tab_switcher.addEventListener('click', () => {
//                 document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
//                 tab_switcher.parentNode.classList.add('is-active');

//                 SwitchPage(page_id);
//             });
//         }
//     }

//     function SwitchPage(page_id) {
//         console.log(page_id);

//         const current_page = document.querySelector('.pages .page.is-active');
//         current_page.classList.remove('is-active');

//         const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
//         next_page.classList.add('is-active');
//     }
// }

// Hamburger Toggle 
{
    let hamburger = document.getElementById('hamburger');
    let menuBarHide = document.getElementById('menubar');

    hamburger.addEventListener('click', function() {
        menuBarHide.classList.toggle('activeHam');
    })
}

// Image S
{
    function showPreview(event) {
        if (event.target.files.length > 0) {
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("file-ip-1-preview");
            preview.src = src;
            preview.style.display = "block";
        }
    }
} {
    function showPreview2(event) {
        if (event.target.files.length > 0) {
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("file-ip-2-preview");
            preview.src = src;
            preview.style.display = "block";
        }
    }
}

// Expand
{
    let epandDO = document.getElementById('epandDO');
    let epandDC = document.getElementById('epandDC');
    let expandID = document.getElementById('expandID');

    epandDC.addEventListener('click', () => {
        expandID.classList.toggle('expandID');
        epandDO.classList.toggle('epandDO');
        epandDC.classList.toggle('epandDC');
    })
    epandDO.addEventListener('click', () => {
        expandID.classList.toggle('expandID');
        epandDC.classList.toggle('epandDC');
        epandDO.classList.toggle('epandDO');
    })
}