let dayBtn = document.getElementById('dropbtn').addEventListener('click', dayBtnOn);
    
    
    function dayBtnOn() {
            let menuList = document.getElementById('myDropdown');
            menuList.classList.toggle('menuList');

            document.querySelectorAll('.dropdown-content').forEach(n => n.addEventListener('click', function() {
              menuList.classList.remove('menuList');
            })) 
            // dayBtn.classList.remove('dayBtnC');
            // menuList.classList.remove('menuList');

    };
