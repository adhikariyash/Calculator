let string = "";
let buttons = document.querySelectorAll("#btn");
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		if (e.target.innerHTML == "=") {
			if (string === "") {
				document.getElementById("input").innerText = "Please Enter a Number";
			} else {
				string = eval(string);
				document.getElementById("input").innerText = string;
			}
		} else if (e.target.innerHTML == "AC") {
			string = "";
			document.getElementById("input").innerText = string;
		} else if (e.target.innerHTML == "⌫") {
			string = string.toString().slice(0, -1);
			document.getElementById("input").innerText = string;
		} else {
			console.log(e.target);
			string = string + e.target.innerHTML;
			document.getElementById("input").innerText = string;
		}
	});
});
