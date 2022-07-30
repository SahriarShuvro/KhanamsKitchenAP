{
    {
        let dayOfMonth = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30]
        let d = new Date();
        let month = dayOfMonth[d.getMonth()];
        let day = d.getDate() - 1;

        let dayShow = document.querySelectorAll(".p-dd");
        for (let i = 0; i <= month; i++) {
            day++
            dayShow[i].innerHTML = day;
            if (day > month) {
                day = 0
            }
        }
    }
}