// Data Page Below
// Hide New Results Input Panel 1.

// formbtn = document.getElementById('formbtn')
// element.addEventListener('click', showForm);

// function showForm() {
//     document.getElementById("formHere").innerHTML = document.getElementById("form");

// // }

function openForm() {
    document.getElementById("form").style.display = "block";
}
// // ev.preventDefault();
// // function openForm
// var show = document.getElementById("performanceUpdate");

// window.onclick = function(event) {
//     if (event.target == show) {
//         show.style.display = "block";
//     }
// }

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
let school = [];

addClassResults = (ev) => {
        // ev.preventDefault();
        let classes = {
            classr: document.getElementById("className").value,
            // {
            //                 studentName =document.getElementById("stdName").value{
            //                          math = document.getElementById("math").value,
            //                          science : document.getElementById("sscie").value,
            //                          religion : document.getElementById("sRe").value,
            //                          kiswahili : document.getElementById("sKisw").value,
            //                          english: document.getElementById("eng").value,
            //                          computer: document.getElementById("comp").value
            //     }
            // }
        }
        school.push(classes);
        console.log(school)
        document.forms[0].reset();


        localStorage.setItem(key, JSON.stringify(school));

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

// Data Page above