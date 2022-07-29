$(document).ready(function() {
    console.log($('#reportrange').find(":selected").val());
});
$(function() {

    var start = moment().startOf('month');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'This Month': [moment().startOf('month'), moment().endOf('month')]
        }
    }, cb);

    cb(start, end);

});




let listOff1 = document.getElementById("myDropdown1");


document.getElementById('dropbtn1').addEventListener('click', function() {
        listOff1.classList.toggle("show-setting");
    })
    // Start 2 Section 
let listOff2 = document.getElementById("myDropdown2");


document.getElementById('dropbtn2').addEventListener('click', function() {
    listOff2.classList.toggle("show-setting");
})

document.getElementsByClassName('dropbtn').addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-setting')) {
                openDropdown.classList.remove('show-setting');
            }
        }
    }
});