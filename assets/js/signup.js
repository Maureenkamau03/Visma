// signup
let signUpButton = document.getElementById("signup-button");
let signUpDetails = [];
const signup = (event) => {
	event.preventDefault();

	let signupInfor = {
		firstName: document.getElementById("signup-firstname").value,
		lastName: document.getElementById("signup-lastname").value,
		email: document.getElementById("signup-email").value,
		password: document.getElementById("new-account-password").value,
	};
	signUpDetails.push(signupInfor);

	console.log(signUpDetails);
	// console.log("hello");
	// clear form
	document.forms[0].reset();
};
// event listener for signup
signUpButton.addEventListener("click", signup);
