// contactus page js starts here

document.getElementById("email-send").addEventListener("click", emailSubmit);

function emailSubmit() {
	let email = document.getElementById("contactus-email").value;
	let firstName = document.getElementById("firstname-email").value;
	let lastName = document.getElementById("lastname-email").value;
	// console.log(firstName);
	// console.log(lastName);
	// console.log(email);
	const user = {
		firstName: firstName,
		lastName: lastName,
		email: email,
	};
}
// contact us page js ends here
// signup js starts here

// signup js ends here
