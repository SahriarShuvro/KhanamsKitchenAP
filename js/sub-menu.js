// Start 1 Section 
let listOff1 = document.getElementById("myDropdown1");


document.getElementById('dropbtn1').addEventListener('click', function() {
        listOff1.classList.toggle("show");
    })
    // Start 2 Section 
let listOff2 = document.getElementById("myDropdown2");


document.getElementById('dropbtn2').addEventListener('click', function() {
        listOff2.classList.toggle("show");
    })
    // Start 3 Section 
let listOff3 = document.getElementById("myDropdown3");


document.getElementById('dropbtn3').addEventListener('click', function() {
        listOff3.classList.toggle("show");
    })
    // Start 4 Section 
let listOff4 = document.getElementById("myDropdown4");


document.getElementById('dropbtn4').addEventListener('click', function() {
        listOff4.classList.toggle("show");
    })
    // Start 5 Section 
let listOff5 = document.getElementById("myDropdown5");


document.getElementById('dropbtn5').addEventListener('click', function() {
        listOff5.classList.toggle("show");
    })
    // Start 6 Section 
let listOff6 = document.getElementById("myDropdown6");


document.getElementById('dropbtn6').addEventListener('click', function() {
        listOff6.classList.toggle("show");
    })
    // Start 7 Section 
let listOff7 = document.getElementById("myDropdown7");


document.getElementById('dropbtn7').addEventListener('click', function() {
    listOff7.classList.toggle("show");
})






document.getElementsByClassName('dropbtn').addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});