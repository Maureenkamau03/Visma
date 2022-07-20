// Test Run
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// Data Page Below
// Hide New Results Input Panel 1.
function openForm() {
    document.getElementById("form").style.display = "block";
}

function closeForm() {
    document.getElementById("form").style.display = "none";
}

// function progressUpdate() {
//     var progress = document.getElementById("form");
//     if (progress.style.display === "none") {
//         progress.style.display = "block";
//     } else {
//         progress.style.display = "none";
//     }
// }
//end of input Panel
//Store data from User
function resultsData() {
    var term = document.getElementById("term").value;
    var classr = document.getElementById("className").value;
    var studentName = document.getElementById("stdName").value;
    var math = document.getElementById("math").value;
    var science = document.getElementById("sscie").value;
    var religion = document.getElementById("sRe").value;
    var kiswahili = document.getElementById("sKisw").value;
    var english = document.getElementById("eng").value;
    var computer = document.getElementById("comp").value;

    const school = {
        term: term,
        classr: classr,
        studentName: studentName,
        math: math,
        science: science,
        religion: religion,
        kiswahili: kiswahili,
        english: english,
        computer: computer
    }
    window.localStorage.setItem(key, JSON.stringify(school));

}
//
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
            data: yMarks,
        }, ],
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "KCPE Performance 2015 -2021",
        },
    },
});

//End of Results Graph
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(resultChart);

function resultChart() {
    var results = google.visualization.arrayToDataTable([
        ["Subject", "Marks"],
        ["Maths", 80],
        ["English", 70],
        ["Kiswahili", 60],
        ["Music", 12],
        ["Science", 90],
        ["Agriculture", 50],
        ["Religious Education", 45],
    ]);
    var progressdata = { title: "Results Term 1 2022", width: 500, height: 300 };

    var chart = new google.visualization.PieChart(
        document.getElementById("pieChart")
    );
    chart.draw(results, progressdata);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(attendanceChart);

function attendanceChart() {
    var results = google.visualization.arrayToDataTable([
        ["Class", "Number"],
        ["Grade 1", 50],
        ["Grade 2", 40],
        ["Grade 3", 50],
        ["Grade 4", 42],
        ["Grade 5", 40],
        ["Grade 6", 50],
        ["Grade 7", 45],
        ["Grade 8", 45],
    ]);
    var progressdata = { title: "Results Term 1 2022", width: 500, height: 300 };

    var chart = new google.visualization.PieChart(
        document.getElementById("attendance")
    );
    chart.draw(results, progressdata);
}

//Data Page above