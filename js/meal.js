{
    let sun = document.getElementById('mealLunch')
    let moon = document.getElementById('mealDinner')
    let sunIcon = document.getElementById('sunIcon');
    let moonIcon = document.getElementById('moonIcon');
    let dark = document.getElementById('dark');
    let liH1 = document.getElementById('liH1');
    let tableLunch = document.getElementById('tableLunch');
    let tableDinner = document.getElementById('tableDinner');

    sun.addEventListener('click', function() {
        moon.classList.toggle('activeMoon')
        sun.classList.toggle('activeSun')
        sunIcon.classList.toggle('sunIcon')
        moonIcon.classList.toggle('moonIcon')
        dark.classList.toggle('dark')
        liH1.classList.toggle('liH1')
        tableLunch.classList.toggle('tableLunch')
        tableDinner.classList.toggle('tableDinner')
    })
    moon.addEventListener('click', function() {
        sun.classList.toggle('activeSun')
        moon.classList.toggle('activeMoon')
        sunIcon.classList.toggle('sunIcon')
        moonIcon.classList.toggle('moonIcon')
        dark.classList.toggle('dark')
        liH1.classList.toggle('liH1')
        tableLunch.classList.toggle('tableLunch')
        tableDinner.classList.toggle('tableDinner')
    })
}

// Date Range Picker
{
    $(function() {
        $('input[name="daterange"]').daterangepicker({
            opens: 'left'
        }, function(start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
    });
}