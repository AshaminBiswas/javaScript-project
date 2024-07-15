const endDate = "17 june 2024 00:00:01 AM";
document.getElementById("endDate").innerText = endDate;
const input = document.querySelectorAll("input");

function countdown() {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;

    if (diff < 0) return;
    //convert in to day 
    input[0].value = Math.floor(diff / 3600 / 24);
    // remining hours
    input[1].value = Math.floor(diff / 3600) % 24;
    // remining minute
    input[2].value = Math.floor(diff / 60) % 60;
    // remining sec
    input[3].value = Math.floor(diff) % 60;

}
countdown();

setInterval(
    () => {
        countdown();
    }, 1000
);



