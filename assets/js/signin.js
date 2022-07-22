// signin
let userSigninData = [
	{ email: "maureen@gmail.com", password: "maureen_" },
	{ email: "vincent@gmail.com", password: "vincent_" },
	{ email: "ian@gmail.com", password: "ian_" },
	{ email: "solomon@gmail.com", password: "solomon_" },
];
const signIn = (ev) => {
	let signInEmail = document.getElementById("signin-email").value;
	let signInPassword = document.getElementById("account-password").value;
	for (i = 0; i < userSigninData.length; i++) {
		if (
			signInEmail === userSigninData[i].email &&
			signInPassword === userSigninData[i].password
		) {
			window.open("data.html");
		} else {
			document.getElementById("error").innerHTML = "incorrect cridentials";
		}
	}
};
document.getElementById("signup-button").addEventListener("click", signIn);
