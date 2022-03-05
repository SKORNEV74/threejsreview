function getDayInfo(date) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    let arr = date.match(/\d+/g);
    let dat = new Date(arr[2],arr[1]-1,arr[0]);

    let day = dat.getDay();
    for (let i = 0; i < days.length; i++) {
        if (i === day) {
            day = days[i];
            break;
        }
    }

    let week = Math.ceil((dat.getDate() - (dat.getDay() ? dat.getDay() : 7)) / 7) + 1;

    let month = dat.getMonth();
    for (let i = 0; i < months.length; i++) {
        if (i === month) {
            month = months[i];
            break;
        }
    }

    return (day + ", " + week + " неделя " + month + " " + arr[2] + " года");
}

console.log(getDayInfo("01.01.2022")); //Суббота, 1 неделя Января 2022 года
console.log(getDayInfo("15.12.2021")); //Среда, 3 неделя Декабря 2021 года