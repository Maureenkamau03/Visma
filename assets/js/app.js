// Data Page Below
// Hide New Results Input Panel 1.
function progressUpdate() {
    var progress = document.getElementById("form");
    if (progress.style.display === "none") {
        progress.style.display = "block";
    } else {
        progress.style.display = "none";
    }
}
//end of input Panel
//Results Graph
var xYear = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
var yMarks = [329, 234, 359, 401, 378, 356, 333, 0];
var barcolors = ["red", "lime", "brown", "black", "blue", "yellow", "green"];

new Chart("resultsYear", {
    type: "bar",
    data: {
        labels: xYear,
        datasets: [{
            backgroundColor: barcolors,
            data: yMarks
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "KCPE Performance 2015 -2021"
        }
    }
});

//End of Results Graph
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(resultsChart);

function resultsChart() {
    var data = google.visualization.arrayToDataTable([
        ['Subject', 'Marks'],
        ['Maths', 80],
        ['English', 70],
        ['Kiswahili', 60],
        ['Music', 12],
        ['Science', 90],
        ['Agriculture', 50],
        ['Religious Education', 45]
    ]);
    var progressdata = { 'title': 'Results Term 1 2022', 'width': 550, 'height': 300 };

    var chart = new
    google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, progressdata);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(attendanceChart);

function attendanceChart() {
    var data = google.visualization.arrayToDataTable([
        ['Grade', 'Population'],
        ['PP1', 20],
        ['PP2', 34],
        ['GR1', 33],
        ['GR2', 22],
        ['GR3', 43],
        ['GR4', 30],
        ['GR5', 25]
        ['GR6', 45]
        ['GR7', 35]
        ['GR8', 15]
    ]);
    var progressdata = { 'title': 'Results Term 1 2022', 'width': 550, 'height': 400 };

    var chart = new
    google.visualization.PieChart(document.getElementById('attendance'));
    chart.draw(data, progressdata);
}


//Data Page above