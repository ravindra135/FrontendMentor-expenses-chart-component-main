let d = new Date(); //New Date Variable;
let localData; // Getting JSON Data;
$.ajax({
    type: "GET",
    url: "./data.json",
    success:function(response) {
       localData = response;
       jsonExport();
    }
});

// Dynamic Data from data.json; Try Changing amount in JSON file.
function jsonExport() {
    // Day (Uodating p tag);
    document.getElementById('day1').innerHTML = localData[0].day;
    document.getElementById('day2').innerHTML = localData[1].day;
    document.getElementById('day3').innerHTML = localData[2].day;
    document.getElementById('day4').innerHTML = localData[3].day;
    document.getElementById('day5').innerHTML = localData[4].day;
    document.getElementById('day6').innerHTML = localData[5].day;
    document.getElementById('day7').innerHTML = localData[6].day;

    // Amount (Updating pop over p tag);
    document.getElementById('mon-pop-text').innerHTML = '$ ' + localData[0].amount;
    document.getElementById('tue-pop-text').innerHTML = '$ ' + localData[1].amount;
    document.getElementById('wed-pop-text').innerHTML = '$ ' + localData[2].amount;
    document.getElementById('thu-pop-text').innerHTML = '$ ' + localData[3].amount;
    document.getElementById('fri-pop-text').innerHTML = '$ ' + localData[4].amount;
    document.getElementById('sat-pop-text').innerHTML = '$ ' + localData[5].amount;
    document.getElementById('sun-pop-text').innerHTML = '$ ' + localData[6].amount;

    // Setting Height of the Bar Chart according to the amount in json;
    document.getElementById('chart_mon').style.height = localData[0].amount + "%";
    document.getElementById('chart_tue').style.height = localData[1].amount + "%";
    document.getElementById('chart_wed').style.height = localData[2].amount + "%";
    document.getElementById('chart_thu').style.height = localData[3].amount + "%";
    document.getElementById('chart_fri').style.height = localData[4].amount + "%";
    document.getElementById('chart_sat').style.height = localData[5].amount + "%";
    document.getElementById('chart_sun').style.height = localData[6].amount + "%";
}

// Getting Day For Changing the Background of Current Day Chart Block;
let today = d.getDay(); //getDay() is used to get day of the week as number (0-6)
if (today == 0) {
    document.getElementById('chart_sun').style.backgroundColor = "var(--cyan)";
} else if (today == 1) {
    document.getElementById('chart_mon').style.backgroundColor = "var(--cyan)";
} else if (today == 2) {
    document.getElementById('chart_tue').style.backgroundColor = "var(--cyan)";
} else if (today == 3) {
    document.getElementById('chart_wed').style.backgroundColor = "var(--cyan)";
} else if (today == 4) {
    document.getElementById('chart_thu').style.backgroundColor = "var(--cyan)";
} else if (today == 5) {
    document.getElementById('chart_fri').style.backgroundColor = "var(--cyan)";
} else if (today == 6) {
    document.getElementById('chart_sat').style.backgroundColor = "var(--cyan)";
}