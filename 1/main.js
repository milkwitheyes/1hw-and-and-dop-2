
let date = prompt("Введите свой год рождения:");

let year = new Date().getFullYear();

if ( date > year) {
    alert("Вы человек из будущего");
} else {
    let age = year - date;

    if (age < 30) {
        alert("Вы ещё молокосос!");
    } else if (age >= 30 && age < 60) {
        alert("мдеее..кризис среднего возраста.");
    } else {
        alert("Вам больше 60 лет. Возможно, стоит посетить врача.");
    }
}
