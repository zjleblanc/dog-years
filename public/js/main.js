document.addEventListener('DOMContentLoaded', function () {
    let today = new Date();
    let birthday = new Date(config.birth_year, config.birth_month - 1, config.birth_day)
    let age = today.getTime() - birthday.getTime();
    
    ageRemainder = age / (1000 * 3600 * 24);
    let years = Math.floor(ageRemainder / 365);
    ageRemainder = ageRemainder % 365;
    let months = Math.floor(ageRemainder / 30);
    ageRemainder = ageRemainder % 30;
    let weeks = Math.floor(ageRemainder / 7);
    let days = Math.floor(ageRemainder % 7);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = days;

    if(months < 6) {
        let totalMonths = age / (1000 * 3600 * 24 * 30);
        let totalWeeks = age / (1000 * 3600 * 24 * 7);
        let totalDays = Math.floor(age / (1000 * 3600 * 24));

        document.getElementById("total-months").textContent = totalMonths.toFixed(1);
        document.getElementById("total-weeks").textContent = totalWeeks.toFixed(1);
        document.getElementById("total-days").textContent = totalDays;

        document.getElementById("puppy").style.display = "block";
    }

});