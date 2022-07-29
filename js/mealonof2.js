{
    let d = new Date();
    let day = d.getDate() - 1;
    let dayShow = document.querySelectorAll(".p-dd");
    for (let i = 0; i < 31; i++) {
        day++
        dayShow[i].innerHTML = day;
    };
}