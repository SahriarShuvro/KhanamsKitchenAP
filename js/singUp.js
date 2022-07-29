let singVal = document.querySelectorAll(".sing-in-page");
let submitBtn = document.getElementById("submit");
let errMsg = document.querySelectorAll(".para-val");

submitBtn.addEventListener('click', function() {
    if (singVal.value === null) {
        for (let i = 0; i < singVal.length; i++) {
            errMsg[i].setAttribute('style', 'display: block;');
        }
    } else {}
})