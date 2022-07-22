// contactus page js starts here
let signUpButton = document.getElementById("signup-button");
let emailSubmitButton = document.getElementById("email-send");

let emails = [];
const emailSubmit = (event) => {
	event.preventDefault();

	let userEmail = {
		firstName: document.getElementById("firstname-email").value,
		lastName: document.getElementById("lastname-email").value,
		email: document.getElementById("contactus-email").value,
	};
	// receiving email form input and pusshing to an array as objects
	emails.push(userEmail);
	console.log(emails);
	// clearing the form
	document.forms[0].reset();

	localStorage.setItem("emailslist", JSON.stringify(emails));
};
// event listener for email submit
emailSubmitButton.addEventListener("click", emailSubmit);
// contact us page js ends here
// signup
let signUpDetails = [];
const signup = (e) => {
	e.preventDefault();

	let signupInfor = {
		firstName: document.getElementById("signup-firstname").value,
		lastName: document.getElementById("signup-lastname").value,
		email: document.getElementById("signup-email").value,
		password: document.getElementById("new-account-password").value,
		confirmPassword: document.getElementById("Confirm password").value,
	};
	signUpDetails.push(signupInfor);

	console.log(signupInfor);
};
// event listener for signup
signUpButton.addEventListener("click", signup);

// signup js ends here

// // Data Page Below
// // Hide New Results Input Panel 1.
// function openForm() {
// 	document.getElementById("form").style.display = "block";
// }

// function closeForm() {
// 	document.getElementById("form").style.display = "none";
// }

// // function progressUpdate() {
// //     var progress = document.getElementById("form");
// //     if (progress.style.display === "none") {
// //         progress.style.display = "block";
// //     } else {
// //         progress.style.display = "none";
// //     }
// // }
// //end of input Panel
// //Results Graph
// var xYear = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
// var yMarks = [329, 234, 359, 401, 378, 356, 333, 0];
// var barcolors = ["red", "lime", "brown", "black", "blue", "yellow", "green"];

// new Chart("resultsYear", {
// 	type: "bar",
// 	data: {
// 		labels: xYear,
// 		datasets: [
// 			{
// 				backgroundColor: barcolors,
// 				data: yMarks,
// 			},
// 		],
// 	},
// 	options: {
// 		legend: { display: false },
// 		title: {
// 			display: true,
// 			text: "KCPE Performance 2015 -2021",
// 		},
// 	},
// });

// //End of Results Graph
// google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(resultsChart);

// function resultsChart() {
// 	var results = google.visualization.arrayToDataTable([
// 		["Subject", "Marks"],
// 		["Maths", 80],
// 		["English", 70],
// 		["Kiswahili", 60],
// 		["Music", 12],
// 		["Science", 90],
// 		["Agriculture", 50],
// 		["Religious Education", 45],
// 	]);
// 	var progressdata = { title: "Results Term 1 2022", width: 500, height: 300 };

// 	var chart = new google.visualization.PieChart(
// 		document.getElementById("pieChart")
// 	);
// 	chart.draw(results, progressdata);
// }

// google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(attendanceChart);

// function attendanceChart() {
// 	var population = google.visualization.arrayToDataTable([
// 		["Grade", "Population"],
// 		["PP1", 20],
// 		["PP2", 34],
// 		["GR1", 33],
// 		["GR2", 22],
// 		["GR3", 43],
// 		["GR4", 30],
// 		["GR5", 25][("GR6", 45)][("GR7", 35)][("GR8", 15)],
// 	]);
// 	var classData = {
// 		title: "Wednesday School Attendance",
// 		width: 100,
// 		height: 200,
// 	};

// 	var chart = new google.visualization.PieChart(
// 		document.getElementById("attendance")
// 	);
// 	chart.draw(population, classData);
// }

// //Data Page above
