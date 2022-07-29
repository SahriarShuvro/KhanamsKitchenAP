{
    {
        let disableCheck = document.querySelectorAll('.check-dis');

        const d = new Date();
        let day = d.getDate();
        for (let i = 0; i < 3; i++) {
            day++
            disableCheck[i].setAttribute("disabled", "disabled")
        };
    } {
        let disableCheck = document.querySelectorAll('.check-d');

        const d = new Date();
        let day = d.getDate();
        for (let i = 0; i < 3; i++) {
            day++
            disableCheck[i].setAttribute("disabled", "disabled")
        };
    }
}




{
    {
        let d = new Date();
        let day = d.getDate() - 1;
        let dayShow = document.querySelectorAll(".p-d");
        for (let i = 0; i < 31; i++) {
            day++
            dayShow[i].innerHTML = day;
        };
    }

}